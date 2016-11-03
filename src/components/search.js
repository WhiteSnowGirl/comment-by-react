require('normalize.css/normalize.css');

import React from 'react';

export default class Search extends React.Component{
	constructor(props){
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
	}
	handleSearch(){
		let name = this.refs.name.value;
		if(name == ''){
			return;
		}
		this.props.sendAction(name);
	}
	render(){
		return(
			<div>
				<input type="text" ref="name" placeholder="enter the name you wanna search" />
				<button onClick={this.handleSearch}>查询</button>
			</div>
		)
	}
}
