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
                <div className="result-title"><a href='javascript:void(0);'>{this.props.title}</a></div>
                <span className="result-url">{this.props.url}</span>
                <span className="result-description">{this.props.description}</span>
                <div className="ppt-container">
                    {this.props.ppt}
                </div>
            </div>
        );
    }
}

export default class SearchResult extends React.Component {
    render() {
        const items = [];
        for (let i = 0; i < 5; i++) {
            const ppt = i !== 0 ? null : <iframe src="https://microsoftapc-my.sharepoint.com/personal/jinrzhan_microsoft_com/_layouts/15/Doc.aspx?sourcedoc={2039b196-9ccf-4406-8b61-51611cd0d6d5}&amp;action=embedview&amp;wdAr=1.7777777777777777&amp;wdEaa=1" width="350px" height="221px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office Online</a>.</iframe>;
            items.push((
                <SearchResultItem
                    key={`SR-${i}`}
                    title="Nike Shoes Store - Nike Outlet Store - Nike Factory Outlet"
                    url="www.nike-shoes.us.com"
                    description="Stride out mile after mile and attack your courses and routes with the latest women's running shoes at Nike.com. Choose from a variety of color combinations, materials and footwear technologies, and find women's shoes designed for your running style. Enjoy free shipping and returns with NikePlus."
                    ppt={ppt}
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