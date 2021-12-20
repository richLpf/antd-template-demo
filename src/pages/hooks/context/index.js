import React, { createContext, useState } from 'react'
import Child from './child1'
import Child2 from './child2'
// import MemoComponent from '../memo'
import { Button, Card } from "antd"

const initState = {
    username: "zhangsan",
    age: 12
}

export const MyContent = createContext(initState)

function Context(){
    
    const [childData, setChildData] = useState(1)
    const [child2Data, setChild2Data] = useState(2)

    return <Card>
        <MyContent.Provider value={initState}>
            <div style={{marginBottom: 100}}>
                <Child data={childData}/>
            </div>
            <div>
                <Child2 data={child2Data}/>
            </div>
            <Button onClick={() => setChildData(childData+1)}>更新组件一的数据</Button>
            <Button onClick={() => setChild2Data(child2Data+1)}>更新组件二的数据</Button>
        </MyContent.Provider>
    </Card>
}

export default Context