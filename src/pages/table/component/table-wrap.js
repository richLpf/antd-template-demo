import React, { useState, useEffect } from 'react'
import { Card, Table, Button } from "antd"
import PropTypes from 'prop-types'


function TableWrap(props){

    const { 
        columns,
        dataSource,
        rowKey
    } = props

    const [Data, SetData] = useState(dataSource||[])

    useEffect(() => {
        SetData([])
    }, [])

    const tableProps = () => {
        return {
            
        }
    }

    return <Card title={<Button>新增</Button>} extra={<Button>刷新</Button>}>
        <Table dataSource={Data} columns={columns} rowKey={rowKey} tableProps={{...tableProps()}} />
    </Card>
}

TableWrap.defaultProps = {
    usePagination: false
};

TableWrap.propTypes = {
    usePagination: PropTypes.bool, // 是否使用后端分页
    filter: PropTypes.object, // 过滤参数
    query: PropTypes.func, // 请求API
    columns: PropTypes.array, // 标题数据
    useReloadButton: PropTypes.bool // 刷新表格按钮
}

export default TableWrap