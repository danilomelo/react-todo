import React from 'react';

class Field extends React.Component{
    render(){
        return ( <input type="text" value={this.props.value} onChange={this.props.changeValue}/>)
    }
}

export default Field