import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // string: 'Hello bhavani',
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
    
  }
  handleChange = e => {
    // this.setState({ searchField : e.target.value })
  }
  render() {
    console.log('render');
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        {/* <input 
        type='search' 
        placeholder='Search monster' 
        onChange={e => {
          this.setState({ searchField : e.target.value}, () => 
          console.log(this.state)
          )}}/> */}
          <h1>Monsters Rolodex</h1>
          <SearchBox placeholder='search monsters' 
          handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}>
        </CardList>
     </div>
    );
  }
}
export default App;
