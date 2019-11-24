import React, { Component } from 'react';
import {Bar,Line} from "react-chartjs-2";
class ChartView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            graphData:{}
         };
    }
    componentDidMount(){
        this.modifyData()
    }

    modifyData=()=>{
        var data=this.props.pollutionData||[];
        var values=[],lables=[]
        data.forEach((item,ind)=>{
            lables.push((item.city.name).split(' ')[0])
            values.push(item.aqi)
        })
        let graphData={}
        graphData.labels = lables
        graphData.datasets = [
            {
                label: 'AQI',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: values
              }
        ]
        this.setState({graphData:graphData})

    }
    render() {
        return (
            <div className="row graph-card">
                <h3 style={{marginLeft:'0.2 rem'}}>Results</h3>
                <div className='graphType'>
                    <label><input type="radio" class="radio-inline" name="graph-type" checked/> Bar</label>
                    <label><input type="radio" class="radio-inline" name="graph-type" /> Line</label>
                    <label><input type="radio" class="radio-inline" name="graph-type" /> Histogram</label>
                </div>
                <Bar
                    data={this.state.graphData}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    }
}

export default ChartView;