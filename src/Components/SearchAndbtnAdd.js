import React, { Component } from 'react';

class SearchAndbtnAdd extends Component {

    constructor(props) {
        super(props);
        this.state={
            tempValue:''
        }
    }
    

    
 
    isShowForm = () => {
        if(this.props.sttShow){
            return (
                <div className="px-2 btn-block">
                    <button type="button" onClick={() => this.props.changeStt()} class="btn btn-primary">Đóng lại</button>
                </div>
            )   
        }
        else{
            return (
                <div className="px-2 btn-block">
                    <button type="button" onClick={() => this.props.changeStt()} class="btn btn-primary">Thêm mới</button>
                </div>
            ) 
        }
    }

    isChange = (event) =>{
        //console.log(event.target.value);
        this.setState({
            tempValue:event.target.value
        });
        this.props.getText(this.state.tempValue) 
    }
    
    UNSAFE_componentWillMount() {
        this.props.getText(this.state.tempValue);
    }
    
    render() {


        return (
            <div>
                <div className="form-group">
                    <div className="btn-group btn-block">
                        <input type="text" name='search' onChange = {(event) => this.isChange(event) } className="form-control" placeholder="Tìm kiếm"  />
                        <button type="button" onClick = {(text) => this.props.getText(this.state.tempValue) } class="btn btn-primary">Tìm</button>
                        
                        {this.isShowForm()}
                    </div>
                    
                </div>
            </div>

        );
    }
}

export default SearchAndbtnAdd;