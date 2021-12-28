import React, { useCallback, useEffect, useRef} from 'react'
import { Line, Liquid } from '@antv/g2plot';

function Chart(props){

    const { style, options, type="Line" } = props

    const container = useRef()

    const renderOptions = useCallback((options) => ({
        smooth: true,
        xField: 'date',
        yField: 'value',
        ...options
    }), [options])

    useEffect(() => {
        if(container.current){
            let chatItem = null
            switch(type){
                case "Liquid": chatItem = new Liquid(container.current, renderOptions(options)); break;
                default: chatItem = new Line(container.current, renderOptions(options));
            }
            chatItem.render()
        }
    }, [renderOptions, container])

    return <div style={style} ref={container}></div>
}

export default React.memo(Chart)