import React, { createContext } from 'react'
import Child from './child'

const initState = {
    name: "pengfei",
    age: 12
}

export const MyContent = createContext(initState)

function Context(){
    
    return <>
        <MyContent.Provider value={initState}>
            <Child />
        </MyContent.Provider>
    </>
}

export default Context