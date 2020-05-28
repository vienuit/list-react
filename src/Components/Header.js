import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
                <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-3">Quản lý thành viên</h1>
                    <b className="lead">ReactJS</b>
                    <p>Thêm - Sửa - Xóa - Tìm Kiếm</p>
 
                </div>
                </div>

        );
    }
}

export default Header;