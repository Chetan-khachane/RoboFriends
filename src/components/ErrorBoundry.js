import React from 'react'

class ErrorBoundry extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error){
        this.setState({hasError:true})
    }
    render(){
        return this.state.hasError ? 
            <h1 style={{fontSize : "2rem"}}>Oops! Something went wrong!</h1>:
        this.props.children
    }
}
export default ErrorBoundry