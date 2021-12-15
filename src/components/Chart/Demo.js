import React, { useState, useEffect } from 'react';
import Chart from './index'
import MonacoEditor from 'react-monaco-editor'
import { Row, Col, Button, Card, message, Alert, Collapse, Tabs } from 'antd'

const { Panel } = Collapse;
const { TabPane } = Tabs

function Demo() {

  const chart_option = {
    chart: {
        id: 'basic-bar'
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    },
    series: [{
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
    }]
  }

  const options = {
    selectOnLineNumbers: true,
    colorDecorators: true
  }

  
  const callback = () => {

  }


  const [codeValue, setCodeValue] = useState(()=>JSON.stringify(chart_option, null, 4))
  const [chartOptions, setChartOptions] = useState({})
  const [series, setSeries] = useState([])
  const [activeKey, setActiveKey] = useState("1")

  useEffect(() => {
    const { series: seriesList, rest } = getChartData(codeValue)
    setSeries(seriesList)
    setChartOptions({...rest})
  }, [codeValue])

  const onChange = (val) => {
    setCodeValue(val)
  }
  const editorDidMount = () => {

  }

  const getChartData = (code) => {
    let options = {}
    try{
      options = JSON.parse(code)
    }catch(err){
      message.error(err)
    }
    const { series, ...rest } = options
    return { series, rest }
  }

  const handleExec = () => {
    const { series: seriesList, rest } = getChartData(codeValue)
    setSeries(seriesList)
    setChartOptions({...rest})
  }

  return (
    <div className="App">
      <Alert style={{marginTop: 10, marginBottom: 10, width: '100%'}} message={<a href="https://apexcharts.com/docs/options/chart/animations/">点击跳转说明文档</a>} type="success" />
      <Row gutter={8}>
        <Col span={10}>
            <Tabs activeKey={activeKey} onChange={setActiveKey}>
                <TabPane tab="配置" key="1">
                    <Card size="small" extra={
                        <Button type="primary" onClick={handleExec}>运行</Button>
                    }>
                        <MonacoEditor
                            width="100%"
                            height="500"
                            language="json"
                            theme="vs-dark"
                            value={codeValue}
                            options={options}
                            onChange={onChange}
                            editorDidMount={editorDidMount}
                        />
                    </Card>
                </TabPane>
                <TabPane tab="文档" key="2">
                    <Collapse onChange={callback}>
                        <Panel header="特性(annotations)" key="1">
                        <Collapse defaultActiveKey="1">
                            <Panel header="This is panel nest panel" key="1">
                                <p>test</p>
                            </Panel>
                        </Collapse>
                        </Panel>
                        <Panel header="图表属性(chart)" key="2">
                        <p>test</p>
                        </Panel>
                        <Panel header="颜色(colors)" key="3">
                        <p>test</p>
                        </Panel>
                    </Collapse>
                </TabPane>
            </Tabs>
        </Col>
        <Col span={14}>
            <Card style={{marginTop: '62px', height: '500px'}}>
                <Chart style={{width: '100%'}} options={chartOptions} series={series}/>
            </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Demo;
