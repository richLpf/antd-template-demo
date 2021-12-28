import React from 'react'
import Chart from './index'
import { LiquidData } from './mock'

function Demo(){
    return <Chart 
            style={{
                height: "300px"
            }} 
            type="Liquid"
            options={LiquidData}
        />
}

export default Demo