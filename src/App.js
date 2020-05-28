import React from 'react';
import './App.css';
import Header from './Components/Header';
import Table from './Components/Table';
import Form from './Components/Form';
import EditForm from './Components/EditForm';
import SearchAndbtnAdd from './Components/SearchAndbtnAdd';
import DataUser from './Data.json';
import { uuid } from 'uuidv4';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      isShowFormAdd: false,
      isShowFormEdit : false,
      data: DataUser,
      infoUser: {}
    }
  }
  
  UNSAFE_componentWillMount() {
        // kiem tra xem co localStorage chưua
        if(localStorage.getItem('userData') === null)  // chưa có thì set
        {
          localStorage.setItem('userData', JSON.stringify(DataUser)); 
        }
        else{  // có rồi thì lôi nó ra
          var temp = JSON.parse(localStorage.getItem('userData'));
          this.setState({
            data: temp
          });
        }
  }
  
  
  changeStatusShowForm = () => {
    if(this.state.isShowFormEdit){
      this.changeEditStatus();
    }
    this.setState({
        isShowFormAdd: !this.state.isShowFormAdd
    });
  }
  addData =  (name, tel, Permission) => {
    console.log(name + tel +  Permission);
    var id = uuid();
    console.log(id);
    var item = {};
    item.id = uuid();
    item.name = name;
    item.tel = tel;
    item.Permission = parseInt(Permission);
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
    localStorage.setItem('userData', JSON.stringify(items));
  }
  isShowForm = () => {
    if(this.state.isShowFormAdd){
      return (
        <Form
            getData = { (name, tel, Permission) => this.addData(name, tel, Permission) }
        />
      )
    }
    else{}
  }
  isShowEditForm = () => {
    if(this.state.isShowFormEdit){
      return (
        <EditForm
          getEditData = {() => {}}
          userEdit = {this.state.infoUser}
          closeFormEdit = {() => this.changeEditStatus() }
          saveButton = { (id,name, tel, Permission) => this.SaveUser(id, name, tel, Permission) }
        />
      )
    }
    else{}
  }
  changeEditStatus = (user) => {  //user được chọn
    console.log('click edit' + JSON.stringify(user));

    //nếu form thêm đang mở thì tắt nó
    if(this.state.isShowFormAdd){
      this.changeStatusShowForm();
    }
    this.setState({
      isShowFormEdit : !this.state.isShowFormEdit
    });

    this.setState({
      infoUser: user
    });


    }
    SaveUser = (id,name, tel, Permission) => {
      var newData = this.state.data;
        newData.forEach((value, key) =>{
          if(value.id === id){
            console.log('id nè' + value.id + id);
            value.name = name;
            value.tel = tel;
            value.Permission = parseInt(Permission);
          }
        } )

        this.setState({
          data: newData
        });
        localStorage.setItem('userData', JSON.stringify(newData));
    }
    getTextSearch = (text) => {
      console.log(text);
      this.setState({
        searchText: text
      });
    }
    idDelete = (id) => {
      console.log(id);
      var tempData = this.state.data.filter( item => item.id !== id);
      this.setState({
        data: tempData
      });
      localStorage.setItem('userData', JSON.stringify(tempData));
    }

  render() {

    //localStorage.setItem('userData', JSON.stringify( DataUser));
    var dataSearch = [];
    this.state.data.forEach( (item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){ //indexOf là hàm tìm kiếm, !== -1 tức là có  tìm thấy
        dataSearch.push(item);
      }
    } )

    return(
      <div>
        <Header/>
        <div className="container">
          < SearchAndbtnAdd
            changeStt = { () => this.changeStatusShowForm() }
            sttShow = {this.state.isShowFormAdd}
            getText = { (text) => this.getTextSearch(text) }
          />
          <div className="row">
              <Table 
              dataForTable = {dataSearch} 
              editStatus_table = {(user) => this.changeEditStatus(user)}
              idDelete = { (id) => this.idDelete(id) }
              />
              {this.isShowForm()}
              {this.isShowEditForm()}
          </div>

        </div>
      </div>
    )
  }
  
}

export default App;
