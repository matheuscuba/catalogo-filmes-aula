import React, { Component } from 'react';
import SearchSvg from './../../svg/search';
import './searchBar.scss'
import debounce from 'lodash.debounce';

export default class SearchBar extends Component {

	state = {
		text: '',
	}

	setText(e){
		this.setState({
			text: e.target.value
		}, () => {
			this.onTextChange(this.state.text);
		});
	}

	onTextChange = debounce((text) => {
		this.props.onSearch(text);
	}, 500);

    render() {
      	return (
			<div className="search-container">
				<SearchSvg width="20" height="20" />
				<input onChange={(e) => this.setText(e)}  value={this.state.text} id="search-bar" placeholder="Procure por um filme..." />
			</div>
		);
	}
}