import React from 'react'
import Cardlist from '../components/Cardlist'
import './App.css'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
class App extends React.Component {

    constructor(){
        super()
        this.state={
            robots :[],
            searchField : ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(response =>{this.setState({robots:response})})
    }
    onSearchChange=(e)=>{
        this.setState({searchField:e.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter( robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()) )
        return !this.state.robots.length?
             <h1>Loading</h1>:
          (
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                    <Cardlist robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>   ) 
    } 
    
}

export default App