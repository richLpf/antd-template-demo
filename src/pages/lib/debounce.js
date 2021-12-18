import React, { useState, useRef } from 'react'
import { Input, Button, Card } from "antd"
import { debounce } from "../../utils/common"

function Debounce(){

    const [value, setValue] = useState(undefined)
    const getQueryList = () => {
        console.log("获取查询列表")
    }

    const debounceRef = useRef(debounce(getQueryList))

    const onChange = (e) => {
        setValue(e.target.value)
        debounceRef.current({a: 1})
    }

    const throttle = () => {
        console.log("节流")
    }

    return <Card>
        <div>
            <p>防抖：多次触发同一事件，经过一段时间后最少执行一次</p>
            <p>节流：多次触发同一事件，经过一段时间最多只会执行最后一次</p>
        </div>
        <div style={{marginBottom: 20}}>
            输入内容：<Input value={value} onChange={onChange}/>
        </div>
        <Button onClick={throttle}>提交（节流）</Button>
    </Card>
}

export default Debounce