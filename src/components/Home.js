import React, { Component } from 'react';
import {Button} from "react-bootstrap"
import axios from 'axios'


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
    onSubmit=()=>{
        let boxes = this.state.boxes;
        var respData = []
        boxes.forEach((item)=>{
            axios.get('https://api.waqi.info/feed/'+item+'/?token='+process.env.token).then((resp)=>{
                if(resp.status=='ok'){
                  respData.push(resp.data)
                }
            }).catch(err=>{
                console.log(err)
                return
            })
        })
    }
    render() {
        var boxes = this.state.boxes
        console.log(process.env)
        return (
            <div>
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
                <Button variant="primary" onClick={()=>this.onSubmit()}>Submit</Button>
            </div>
            
        );
    }
}

export default Home;