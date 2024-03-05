import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useRef,
} from "react";
import {
  ReloadOutlined,
  DownloadOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Card,
  Table,
  Button,
  Space,
  Input,
  message,
  Checkbox,
  Tooltip,
  Popover,
} from "antd";
import PropTypes from "prop-types";

import exportCSV from "../../utils/download";
import { throttle } from "../../utils/common";
import { getLocalStorage, setLocalStorage } from "src/utils/localStorage";

const CheckboxGroup = Checkbox.Group;

const DefaultPageSize = 9999999;

const UTable = forwardRef((props, ref) => {
  const {
    columns,
    storeKey,
    dataSource,
    rowKey,
    query,
    leftAction,
    download,
    filterParams,
    size,
    useBackendPagination,
    useBackendSearch,
    useReloadButton,
    useSearchInput,
  } = props;

  const { limit, exportData, exportQuery } = download || {};

  const [Data, setData] = useState(dataSource || []);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [exportLoading, setExportLoading] = useState(false);
  const [tableColumns, setTableColumns] = useState([]);
  const [FuzzySearch, setFuzzySearch] = useState(undefined);
  const [pagination, setPagination] = useState({
    Page: 1,
    PageSize: 10,
  });

  const fetchData = useCallback(
    async (data) => {
      console.log("fetchData", data);

      setLoading(true);
      return (
        query &&
        query(data)
          .then((res) => {
            const { Data, Total } = res || {};
            setData(Data || []);
            setTotal(Total || 0);
            setLoading(false);
            return Data;
          })
          .catch((err) => {
            setLoading(false);
            return err;
          })
      );
    },
    [query]
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
              sortField: data?.sorter?.field,
              sortOrder: data?.sorter?.order,
              ...(data?.filters ? data.filters : {}),
              ...filterParams,
            }
          : {
              Page: 1,
              PageSize: DefaultPageSize,
              ...filterParams,
            }),
      };
    },
    [filterParams, pagination, useBackendPagination]
  );

  useEffect(() => {
    fetchData({ ...toQueryParams() });
  }, [fetchData, toQueryParams]);

  useEffect(() => {
    const defaultColumns = columns;
    const storeColumns = getLocalStorage(storeKey);

    if (storeColumns) {
      setTableColumns(
        columns.filter((item) => (storeColumns || []).includes(item.key))
      );
      return;
    }

    setTableColumns(defaultColumns);
    // eslint-disable-next-line
  }, [columns]);

  // 暴露接口调用和表格数据给父组件
  useImperativeHandle(
    ref,
    () => ({
      fetchData: () => fetchData({ ...toQueryParams() }),
      data: Data,
    }),
    [Data, fetchData, toQueryParams]
  );

  // useEffect(() => {
  //   // 外部搜索
  //   console.log(throttleRef.current);
  //   throttleRef.current(
  //     pagination.Page,
  //     pagination.PageSize || 10,
  //     useBackendPagination
  //   );
  // }, [filterParams, pagination, useBackendPagination]);

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
            Page: 1,
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

  // 分页切换
  const onChange = useCallback(
    (Page, PageSize, pagination) => {
      setPagination({ ...pagination, Page, PageSize });
      if (useBackendPagination) {
        fetchData({ FuzzySearch, Page, PageSize });
      }
    },
    [FuzzySearch, fetchData, useBackendPagination]
  );

  const getList = (Page, PageSize, fetchCondition) => {
    setPagination({ Page, PageSize });
    if (fetchCondition) {
      fetchData({ FuzzySearch, Page, PageSize });
    }
  };

  const throttleRef = useRef(throttle(getList, 1000));

  // 自带搜索
  const onSearch = () => {
    if (!useBackendSearch) {
      return;
    }
    // 后端分页查询
    const page = 1;
    throttleRef.current(page, pagination.PageSize || 10, useBackendPagination);
  };

  const handleTableChange = (pagination, filters, sorter) => {
    console.log(sorter);
    fetchData({ ...toQueryParams({ pagination, filters, sorter }) });
  };

  const tableProps = useCallback(() => {
    return {
      dataSource:
        useBackendPagination && useBackendSearch
          ? Data
          : Data?.filter(
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
              onChange: (Page, PageSize) =>
                onChange(Page, PageSize, pagination),
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
    onChange,
  ]);

  const ColumnsSettingContent = (
    <CheckboxGroup
      style={{ width: 150 }}
      options={columns.map((item) => ({ label: item.title, value: item.key }))}
      value={tableColumns.map((item) => item.key)}
      onChange={(values) => {
        const selectedColumns = columns.filter((item) =>
          values.includes(item.key)
        );
        setTableColumns(selectedColumns);
        if (storeKey) {
          setLocalStorage(
            storeKey,
            selectedColumns.map((column) => column.key)
          );
        }
      }}
    />
  );

  const CardExtra = (
    <Space>
      {useSearchInput ? (
        <Input
          size={size}
          suffix={<SearchOutlined onClick={onSearch} />}
          value={FuzzySearch}
          onChange={(e) => setFuzzySearch(e.target.value)}
          placeholder="search..."
          onPressEnter={onSearch}
        />
      ) : null}

      {download && (
        <Button
          size={size}
          loading={exportLoading}
          onClick={handleDownload}
          icon={<DownloadOutlined />}
        ></Button>
      )}

      {useReloadButton ? (
        <Button
          size={size}
          onClick={() => fetchData({ ...toQueryParams() })}
          icon={<ReloadOutlined />}
        ></Button>
      ) : null}

      {storeKey && (
        <Tooltip key={"ColumnsSetting"} placement="top" title="自定义列表">
          <Popover
            placement="left"
            title="自定义列表"
            content={ColumnsSettingContent}
            trigger="click"
          >
            <Button size={size} icon={<SettingOutlined />} />
          </Popover>
        </Tooltip>
      )}
    </Space>
  );

  return (
    <Card size={size} title={leftAction} extra={CardExtra}>
      <Table
        size={size}
        columns={tableColumns}
        rowKey={rowKey}
        loading={loading}
        bordered
        onChange={handleTableChange}
        {...tableProps()}
      />
    </Card>
  );
});

UTable.defaultProps = {
  usePagination: false,
  size: "middle",
  useBackendSearch: false,
};

UTable.propTypes = {
  download: PropTypes.shape({
    limit: PropTypes.number,
    exportData: PropTypes.func,
    exportQuery: PropTypes.func, // 下载是否为单独的接口
    ResponseDataKey: PropTypes.string, // 接口返回数据的key
    ResponseTotalKey: PropTypes.string, // 接口返回Total参数名
  }),
  pagination: PropTypes.object,
  useBackendPagination: PropTypes.bool, // 是否使用后端分页
  //   filter: PropTypes.object, // 过滤参数
  query: PropTypes.func, // 请求API
  columns: PropTypes.array.isRequired, // 标题数据
  storeKey: PropTypes.string, // 储存动态展示列的localStorage的key
  useReloadButton: PropTypes.bool, // 刷新表格按钮
  leftAction: PropTypes.any, // 表格头部左侧按钮操作
  filterParams: PropTypes.object,
  size: PropTypes.oneOf(["small", "large", "middle"]),
  useBackendSearch: PropTypes.bool, // 是否使用后端搜索
  useSearchInput: PropTypes.bool,
  dataSource: PropTypes.array,
  rowKey: PropTypes.string,
  onChange: PropTypes.func, // Table原生的change
};

UTable.displayName = "UTable";

export default UTable;
