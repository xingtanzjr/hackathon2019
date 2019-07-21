import React from 'react';
import { Input } from 'antd';
import simpleBingLogo from '../images/bing-icon.png';

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
                        defaultValue={this.props.keyword}
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

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="result-item-container">
                <div className="result-title"><a href="#">{this.props.title}</a></div>
                <span className="result-url">{this.props.url}</span>
                <span className="result-description">{this.props.description}</span>
            </div>
        );
    }
}

export default class SearchResult extends React.Component {
    render() {
        const items = [];
        for (let i = 0; i < 5; i++) {
            items.push((
                <SearchResultItem
                    key={`SR-${i}`}
                    title="BMW USA: Luxury Sedans, SUVs, Convertibles, Coupes & Wagons"
                    url="https://www.bmwusa.com"
                    description="Explore BMW models, build your own and find inventory from your nearest BMW center. Get behind the wheel of the Ultimate Driving Machine today and experience the innovation and joy of a BMW. d find inventory from your nearest BMW center. Get behind the wheel of the Ultimate Driving Machine today and experience the innovation and joy of a BMW."
                />
            ));
        }

        return (
            <div className="result-page-container">
                <div className="result-header">
                    <SimpleSearchControl 
                        onSearch={this.props.onSearch}
                        keyword={this.props.keyword}
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