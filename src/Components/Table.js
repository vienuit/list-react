import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {


    mappingDataUser = () => 
        this.props.dataForTable.map((value, key) => (
            <TableRow key = {key} id ={value.id} 
             name ={value.name} tel ={value.tel}
             Permission ={value.Permission}
             stt={key}
             editStt_tableRow = { (user) => this.props.editStatus_table(value)}
             idDelete = {(id) => this.props.idDelete(value.id) }
            />
         ) )
    

    render() {
        return (
            <div className='col'>
                <table className="table  table-inverse table-hover">
                <thead className="thead-inverse">
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Điện thoại</th>
                    <th>Quyền</th>
                    <th>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                   
                {this.mappingDataUser()}

                </tbody>
            </table>
          </div>
          
        );
    }
}

export default Table;