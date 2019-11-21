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
    handleAdd = () =>{
        let boxes = this.state.boxes;
        boxes.push('')
        this.setState({
            boxes:boxes
        })
    }
    render() {
        var boxes = this.state.boxes
        return (
            <div style={{margin:'10px'}} className='row'>
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
                <i style={{marginTop:'35px',cursor:"pointer"}} onClick={()=>this.handleAdd()} class="fa fa-plus-circle fa-2x" aria-hidden="true"></i>

            </div>
            
        );
    }
}

export default Home;