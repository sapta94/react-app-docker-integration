import React, { Component } from 'react';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            boxes:['','']
        };
    }
    changeValue=(e,index)=>{
        let val = e.target.value;
        let boxes = this.state.boxes;
        boxes[index] = val
        this.setState({
            boxes:boxes
        })
    }
    render() {
        var boxes = this.state.boxes
        return (
            <div className='row'>
                {
                    boxes.map((item,index)=>{
                        return(
                            <div className='col-md-3'>
                                <div className="form-group">
                                    <label for="usr">Enter a city:</label>
                                    <input type="text" onChange={(e)=>this.changeValue(e,index)} className="form-control" value={item}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        );
    }
}

export default Home;