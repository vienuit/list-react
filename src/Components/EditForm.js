import React, { Component } from 'react';

class EditForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.userEdit.id,
            name : this.props.userEdit.name,
            tel : this.props.userEdit.tel,
            Permission :this.props.userEdit.Permission,
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    editDone = (id, name, tel, Permission) => {
        this.props.saveButton(id, name, 
            tel,Permission);
        this.props.closeFormEdit();
    }
    render() {
        return (

            <div className="card-group">
                <div className="card  ">
                <div className="card-body text-secondary">
                    <h3>Sửa thành viên</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" name="name" onChange = { (event) => {this.isChange(event)} } defaultValue={this.props.userEdit.name} className="form-control" placeholder='Tên'  />
                        </div>
                        <div className="form-group">
                            <input type="text" name="tel" onChange = { (event) => {this.isChange(event)} } defaultValue={this.props.userEdit.tel} className="form-control" placeholder='Điện thoại' />
                        </div>
                        <div className="form-group">
                            <select className="form-control" onChange = { (event) => {this.isChange(event)} } defaultValue={this.props.userEdit.Permission} name="Permission">
                                <option value>Chọn quyền</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <input type="button" class="btn btn-primary btn-block" 
                            onClick = { (id, name, tel, Permission) => 
                            this.editDone(this.state.id, this.state.name, this.state.tel, this.state.Permission)} value='Lưu'/>
                    </form>
                </div>
                </div>

            </div>
        );
    }
}

export default EditForm;