import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from "react";
import {
  ReloadOutlined,
  DownloadOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, Table, Button, Space, Input, message } from "antd";
import PropTypes from "prop-types";
import exportCSV from "../../../utils/download";

const DefaultPageSize = 9999999;

const TableWrap = forwardRef((props, ref) => {
  const {
    columns,
    dataSource,
    rowKey,
    query,
    leftAction,
    useBackendPagination,
    download,
    filterParams,
    size,
    useBackendSearch,
  } = props;

  const { limit, exportData, exportQuery } = download;

  const [Data, setData] = useState(dataSource || []);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [exportLoading, setExportLoading] = useState(false);
  const [FuzzySearch, setFuzzySearch] = useState(undefined);
  const [pagination, setPagination] = useState({
    Page: 1,
    PageSize: 10,
  });

  const fetchData = useCallback(
    async (data) => {
      setLoading(true);
      return query(data)
        .then((res) => {
          const { Data, Total } = JSON.parse(JSON.stringify(res));
          console.log("toata", Total);
          setData(Data);
          setTotal(Total);
          setLoading(false);
          return Data;
        })
        .catch((err) => {
          setLoading(false);
          return err;
        });
    },
    [query]
  );

  useEffect(() => {
    setData(dataSource);
  }, [dataSource]);

  // 暴露接口调用和表格数据给父组件
  useImperativeHandle(
    ref,
    () => ({
      fetchData: () => fetchData(),
      data: Data,
    }),
    [Data, fetchData]
  );

  const toQueryParams = useCallback(
    (data) => {
      const { Page, PageSize, FuzzySearch } = pagination;
      return {
        ...(useBackendPagination
          ? {
              Page: data?.Page || Page,
              PageSize: data?.PageSize || PageSize,
              FuzzySearch: data?.FuzzySearch || FuzzySearch,
              ...filterParams,
            }
          : {
              Page: 0,
              PageSize: DefaultPageSize,
              ...filterParams,
            }),
      };
    },
    [filterParams, pagination, useBackendPagination]
  );

  const handleDownload = async () => {
    let dataSource = Data;
    if (useBackendPagination) {
      setExportLoading(true);
      const exportPromise = exportQuery
        ? exportQuery({
            ...toQueryParams(),
          })
        : query({
            ...toQueryParams(),
            Page: 0,
            ...(limit ? { PageSize: limit } : {}),
          });
      dataSource = await exportPromise
        .then((res) => res.Data)
        .catch((err) => {
          setExportLoading(false);
          message.error(String(err));
          return null;
        });
      setExportLoading(false);
    }
    if (Array.isArray(dataSource) && dataSource.length) {
      const { data, fields } = exportData(dataSource);
      exportCSV({ fields, dataSource: data, filename: "list.csv" });
    }
  };

  const tableProps = useCallback(() => {
    return {
      dataSource:
        useBackendPagination && useBackendSearch
          ? Data
          : Data.filter(
              (item) =>
                !FuzzySearch ||
                Object.keys(item).some((k) => {
                  return (
                    typeof item[k] !== Object &&
                    String(item[k]).includes(FuzzySearch)
                  );
                })
            ),
      ...(useBackendPagination
        ? {
            pagination: {
              current: pagination.Page,
              pageSize: pagination.PageSize,
              total: total,
              onChange: onChange,
            },
          }
        : {}),
      scroll: { x: true },
    };
  }, [
    Data,
    FuzzySearch,
    total,
    useBackendPagination,
    useBackendSearch,
    pagination,
  ]);

  const onSearch = () => {
    console.log("查询", FuzzySearch);
    if (!FuzzySearch || (useBackendPagination && useBackendSearch)) {
      return;
    }
    // 后端分页查询
    setPagination({ Page: 0, PageSize: 0 });
    fetchData({ FuzzySearch, Page: 0, PageSize: 10 });
  };
  const onChange = (Page, PageSize) => {
    console.log("val", Page, PageSize);
    setPagination({ ...pagination, Page, PageSize });
  };

  const handleColumnsConfig = () => {};

  const CardExtra = (
    <Space>
      <Input
        size={size}
        suffix={<SearchOutlined onClick={onSearch} />}
        value={FuzzySearch}
        onChange={(e) => setFuzzySearch(e.target.value)}
        placeholder="search..."
        onPressEnter={onSearch}
      />
      <Button
        size={size}
        type="primary"
        loading={exportLoading}
        onClick={handleDownload}
        icon={<DownloadOutlined />}
      ></Button>
      <Button
        size={size}
        type="primary"
        onClick={() => fetchData({ ...toQueryParams() })}
        icon={<ReloadOutlined />}
      ></Button>
      <Button
        size={size}
        type="primary"
        onClick={() => handleColumnsConfig()}
        icon={<SettingOutlined />}
      ></Button>
    </Space>
  );

  console.log("tableProps", tableProps());

  return (
    <Card size={size} title={leftAction} extra={CardExtra}>
      <Table
        size={size}
        columns={columns}
        rowKey={rowKey}
        loading={loading}
        bordered
        {...tableProps()}
      />
    </Card>
  );
});

TableWrap.defaultProps = {
  usePagination: false,
  size: "middle",
  useBackendSearch: false,
};

TableWrap.propTypes = {
  download: PropTypes.shape({
    limit: PropTypes.number,
    exportData: PropTypes.func,
    exportQuery: PropTypes.func, // 下载是否为单独的接口
    ResponseDataKey: PropTypes.string, // 接口返回数据的key
    ResponseTotalKey: PropTypes.string, // 接口返回Total参数名
  }),
  pagination: PropTypes.object,
  useBackendPagination: PropTypes.bool, // 是否使用后端分页
  filter: PropTypes.object, // 过滤参数
  query: PropTypes.func.isRequired, // 请求API
  columns: PropTypes.array.isRequired, // 标题数据
  useReloadButton: PropTypes.bool, // 刷新表格按钮
  leftAction: PropTypes.any, // 表格头部左侧按钮操作
  filterParams: PropTypes.object,
  size: PropTypes.oneOf(["small", "large", "middle"]),
  useBackendSearch: PropTypes.bool, // 是否使用后端搜索
  defaultColumnsConfig: PropTypes.object,
  changeColumnsConfig: PropTypes.func,
};

export default TableWrap;
