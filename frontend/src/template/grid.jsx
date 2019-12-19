import React from 'react'

export default class Grid extends React.Component{

    buildRows(numbers){
        const cols = numbers.split(',') || [];
        const colXS = 'col-xs-' + cols[0];
        const colSM = 'col-sm-' + cols[1];
        const colMD = 'col-md-' + cols[2];

        return [colXS, colSM, colMD].join(' ');
    }

    render(){
        return (
            <div className={this.buildRows(this.props.numbers)}>
                {this.props.children}
            </div>
        )
    }
}