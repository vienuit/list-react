import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            tel : '',
            Permission :''
        }
    }
    clickToAdd = (name, tel, Permission) => {
        
    }
    isChange = (event) => {
        const name = event.target.name;
        const valueEdit = event.target.value;
        this.setState({
            [name]: valueEdit
        });
    }
    render() {
        return (

            <div className="card-group  ">
                <div className="card-header border-secondary">
                <div className="card-body text-secondary">
                    <h3>Thêm thành viên</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" name='name' onChange = {(event) => this.isChange(event) } className="form-control" placeholder='Tên'  />
                        </div>
                        <div className="form-group">
                            <input type="text" name='tel' onChange = {(event) => this.isChange(event) } className="form-control" placeholder='Điện thoại' />
                        </div>
                        <div className="form-group">
                            <select className="form-control" onChange = {(event) => this.isChange(event) } name="Permission">
                                <option value>Chọn quyền</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <button type="reset" class="btn btn-primary btn-block" 
                            onClick = {(name, tel, Permission) => this.props.getData(
                                this.state.name, this.state.tel, this.state.Permission) } >Thêm</button>
                    </form>
                </div>
                </div>

            </div>




        );
    }
}

export default Form;