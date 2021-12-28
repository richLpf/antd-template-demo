import React, { useState, useRef } from 'react'
import { Input, Card } from "antd"
import { debounce, throttle1 } from "../../utils/common"

function Debounce(){

    const [value, setValue] = useState(undefined)
    const [val, setVal] = useState(undefined)
    const getQueryList = (data) => {
        console.log("获取查询列表", data)
    }

    const debounceRef = useRef(debounce(getQueryList, 1000))

    const throttleRef = useRef(throttle1(getQueryList, 1000))

              const onChange = (e) => {
        console.log("防抖-连续输入")
        setValue(e.target.value)
        debounceRef.current({a: 1})
    }

    const onThrottleChange = (e) => {
        console.log("节流-连续输入")
        setVal(e.target.value)
        throttleRef.current({ a: 1 })
    }


    return <Card>
        <div>
            <p>防抖：多次触发同一事件，经过一段时间后最少执行一次</p>
            <div style={{marginBottom: 20}}>
                输入内容：<Input value={value} onChange={onChange}/>
            </div>
        </div>
        <div>
            <p>节流：多次触发同一事件，经过一段时间最多只会执行最后一次</p>
            <div style={{marginBottom: 20}}>
                输入内容：<Input value={val} onChange={onThrottleChange}/>
            </div>
        </div>
    </Card>
}

export default Debounce