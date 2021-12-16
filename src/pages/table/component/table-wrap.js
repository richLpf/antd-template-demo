import React, { useState, useEffect } from 'react'
import { ReloadOutlined, DownloadOutlined } from "@ant-design/icons"
import { Card, Table, Button, Space } from "antd"
import PropTypes from 'prop-types'
function TableWrap(props){

    const { 
        columns,
        dataSource,
        rowKey,
        query,
        leftAction
    } = props

    const [Data, setData] = useState(dataSource||[])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setData(dataSource)
    }, [dataSource])

    const tableProps = () => {
        return {
            
        }
    }
    const handleReload = () => {
        fetchData()
    }

    const handleDownload = () => {
        console.log("click to download")
        
    }

    const fetchData = (data) => {
        setLoading(true)
        query(data).then(res => {
            const { Data, Total } = JSON.parse(JSON.stringify(res))
            setData(Data)
            setTotal(Total)
            setLoading(false)
            return Data
        }).catch(err => {
            setLoading(false)
            return err
        })
    }

    const CardExtra = <Space>
        <Button type="primary" onClick={handleDownload} icon={<DownloadOutlined />}></Button>
        <Button type="primary" onClick={handleReload} icon={<ReloadOutlined />}></Button>
    </Space>

    return <Card title={leftAction} extra={CardExtra}>
        <Table 
            dataSource={Data} 
            columns={columns} 
            rowKey={rowKey} 
            loading={loading} 
            bordered 
            tableProps={{...tableProps()}} 
        />
    </Card>
}

TableWrap.defaultProps = {
    usePagination: false
};

TableWrap.propTypes = {
    usePagination: PropTypes.bool, // 是否使用后端分页
    filter: PropTypes.object, // 过滤参数
    query: PropTypes.func.isRequired, // 请求API
    columns: PropTypes.array.isRequired, // 标题数据
    useReloadButton: PropTypes.bool, // 刷新表格按钮
    leftAction: PropTypes.any, // 表格头部左侧按钮操作
}

export default TableWrap