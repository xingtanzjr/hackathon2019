import React from 'react';
import { Input } from 'antd';
import simpleBingLogo from '../images/bing-icon.png';
import searchItemsData from './searchResultData';

const { Search } = Input;

class SimpleSearchControl extends React.Component {
    render() {
        return (
            <div className="header-search-control">
                <div className="simple-bing-logo">
                    <img src={simpleBingLogo}></img>
                </div>
                <div className="simple-search-input-control">
                    <Search
                        defaultValue={this.props.query}
                        onSearch={this.props.onSearch}
                        style={{ width: 630, height: 40 }}
                    />
                </div>
            </div>
        );
    }
}

class MiddleNavBar extends React.Component {
    render() {
        return (
            <div className="middleNav-container">
                <ul>
                    <li className="nav-tab active"><span>All</span></li>
                    <li className="nav-tab"><span>Images</span></li>
                    <li className="nav-tab"><span>Videos</span></li>
                    <li className="nav-tab"><span>Maps</span></li>
                    <li className="nav-tab"><span>News</span></li>
                    <li className="nav-tab"><span>Shopping</span></li>
                </ul>
            </div>
        );
    }
}

class SpliterBar extends React.Component {
    render() {
        return (
            <div className="spliter-bar">
            </div>
        );
    }
}

class StatisticBar extends React.Component {
    render() {
        return (
            <div className="statistic-bar">
                <span>950,000,000 Results</span>
                <span>Any time</span>
            </div>
        );
    }
}

class SearchResultItem extends React.Component {
    render() {
        const ppt = !this.props.ppt ? null : (
            <div className="ppt-container">
                {this.props.ppt}
            </div>
        );
        return (
            <div className="result-item-container">
                <div className="result-title"><a href='javascript:void(0);'>{this.props.title}</a></div>
                <span className="result-url">{this.props.url}</span>
                <span className="result-description">{this.props.description}</span>
                {ppt}
            </div>
        );
    }
}

export default class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        const params = new URLSearchParams(props.location.search);
        this.state = {
            query: params.get('q'),
        };
    }

    search = () => {
        for (const key in searchItemsData) {
            if (this.state.query.toLowerCase().includes(key)) {
                return searchItemsData[key];
            }
        }
        return searchItemsData.bmw;
    }

    onSearch = (value) => {
        this.props.history.push(`/search?q=${value}`);
        this.setState({
            query: value,
        });
	}

    render() {
        const items = [];
        const searchData = this.search();
        searchData.forEach((data, idx) => {
            items.push((
                <SearchResultItem
                    key={`SR-${idx}`}
                    title={data.title}
                    url={data.url}
                    description={data.description}
                    ppt={data.ppt}
                />
            ));
        });

        return (
            <div className="result-page-container">
                <div className="result-header">
                    <SimpleSearchControl
                        onSearch={this.onSearch}
                        query={this.state.query}
                    />
                    <MiddleNavBar />
                    <SpliterBar />
                    <StatisticBar />
                </div>
                <div className="result-items-container">
                    {items}
                </div>
            </div>
        );
    }
}