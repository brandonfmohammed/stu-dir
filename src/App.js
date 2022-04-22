import React, {Component} from 'react';
import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        students:[],
        searchField: ''
    };
  }
  componentDidMount(){
    fetch('https://625cdc9a4c36c753576b0849.mockapi.io/test/v1/users')
        .then(response=>response.json())
        .then(users => this.setState({students: users}));

   }
   handleChange =e =>{
     this.setState({searchFields: e.target.value});
   };
   
   render(){
    const { students, searchField} = this.state;
    const filteredStudents = students.filter(student =>
        student.student_id.includes(searchField))
     return(
        <div className="App">
          <h1> Student Directory </h1>
            <SearchBox
              placeholder='Search ID'
              handleChange = {e => this.setState ({ searchField: e.target.value })}
              />
            <CardList students ={filteredStudents}/>

          </div>
      );
    }
}

export default App;
