import React from 'react';
import logo from '../images/logo.png';
import { Input } from 'antd';

const { Search } = Input;

export default class SearchPage extends React.Component {

	render() {
		return (
			<div className="search-page-container">
				<div className="search-control">
					<div className="bing-logo">
						<img src={logo}></img>
					</div>
					<div className="search-input-control">
						<Search
							onSearch={value => console.log(value)}
							style={{ width: 546 , height: 45}}
						/>
					</div>
				</div>
           </div>
		)
	}
}