import React from 'react';
import logo from '../images/logo.png';
import { Input } from 'antd';

const { Search } = Input;

export default class SearchPage extends React.Component {
	
	onSearch = (value) => {
		this.props.history.push(`/search?q=${value}`);
	}

	render() {
		return (
			<div className="search-page-container">
				<div className="search-control">
					<div className="bing-logo">
						<img src={logo} alt='bing-search'></img>
					</div>
					<div className="search-input-control">
						<Search
							onSearch={this.onSearch}
							style={{ width: 546 , height: 45 }}
						/>
					</div>
				</div>
           </div>
		)
	}
}