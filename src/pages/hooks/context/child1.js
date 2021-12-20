import React, { useContext } from 'react'
import { MyContent } from "./index"

function Child({data}){

    const { username, age } = useContext(MyContent)
    console.log("组件一的数据", data)
  
    return <div>
        <p>this is child1 component</p>
        <div>username: {username}</div>
        <div>username: {age}</div>
    </div>
}

export default Child