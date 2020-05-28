import React, { Component } from 'react';

class TableRow extends Component {

    displayPermission = () => {
        if(this.props.Permission === 1){
            return 'Admin'
        }
        else if(this.props.Permission === 2){
            return 'Moderator'
        }
        else{
            return 'Normal user'
        }
    }
    clickEdit = () => {
        this.props.editStt_tableRow();
    }

    render() {        
        return (
            <tr>
                <td >{this.props.stt}</td>
                <td >{this.props.name}</td>
                <td >{this.props.tel}</td>
                <td >{this.displayPermission()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua"  >
                        <i className="fa fa-edit" onClick = {() => this.clickEdit() } >Sửa</i>
                        </div>
                        <div className="btn btn-danger xóa" >
                        <i className="fa fa-delete" onClick = { () => this.props.idDelete() } > 
                            Xóa
                        </i>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableRow;