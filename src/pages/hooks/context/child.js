import React, { useContext } from 'react'
import { MyContent } from "./index"

function Child(){

    const data = useContext(MyContent)

    console.log("data", data)

    return <>
        <div>子组件</div>
    </>
}

export default React.memo(Child)