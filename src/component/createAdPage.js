import React from 'react';
import microsoftLogo from '../images/microsoft.svg';
import { Input, Icon, Upload, message, Button } from 'antd';

const { Search } = Input;

class SidebarItem extends React.Component {
    render() {
        const icon = this.props.icon ? (
            <div className='icon'>
                <Icon type={this.props.icon} style={{ fontSize: '20px' }} />
            </div>) : null;
        return (
            <div className={`side-bar-item${this.props.active ? ' active': ''}`}>
                {icon}
                <div className='text'>
                    <span>{this.props.text}</span>
                </div>
            </div>
        );
    }
}

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.campaignNameList = [];
        for (let i = 0 ; i < 10 ; i ++ ){
            this.campaignNameList.push(`Campaign #${i}`);
        }
        this.campaignList = [];
        this.campaignNameList.forEach((name, idx) => {
            this.campaignList.push(
                <SidebarItem key={`cp-${idx}`} icon={'pause'} text={name} />
            );
        });
    }

    render() {
        return (
            <div>
                <div className='side-bar'>
                    <SidebarItem icon={'appstore'} text={'All Campaigns'} />
                    <div className='spliter-bar' />
                    <SidebarItem icon={'monitor'} text={'Search Campaigns'} />
                    <SidebarItem active icon={'shop'} text={'Shopping Campaigns'} />
                    <SidebarItem icon={'thunderbolt'} text={'Dynamic Search Ads'} />
                    <SidebarItem icon={'switcher'} text={'Audience Campaign'} />
                    <div className='spliter-bar' />
                    <SidebarItem active icon={'play-circle'} text={'Slide Show - 1'} />
                    {this.campaignList}
                </div>
                <div className='side-bar adgroup'>
                    <SidebarItem icon={'appstore'} text={'AdGroups'} />
                    <div className='spliter-bar' />
                    <SidebarItem text={'Overview'} />
                    <SidebarItem text={'Recommendations'} />
                    <SidebarItem active text={'Ads & extensions'} />
                    <SidebarItem text={'Landing pages'} />
                    <SidebarItem text={'Keywords'} />
                    <SidebarItem text={'Settings'} />
                    <SidebarItem text={'Demographics'} />
                    <SidebarItem text={'Locations'} />
                    <SidebarItem text={'Ad schedule'} />
                </div>
            </div>
        );
    }
}

function topBar() {
    return (
        <div className='top-bar'>
            <img src={microsoftLogo} alt='ms' />
            <div className='spliter' />
            <span className='logo-span'>Advertising</span>
            <Search
                onSearch={console.log('haha')}
            />
            <div className='function-control'>
                <Icon type="arrow-up" style={{ fontSize: '20px' }} />
                <span>Import</span>
            </div>
            <div className='function-control'>
                <Icon type="line-chart" style={{ fontSize: '20px' }} />
                <span>Reports</span>
            </div>
            <div className='function-control'>
                <Icon type="tool" style={{ fontSize: '20px' }} />
                <span>Tools</span>
            </div>
            <div className='spliter' />
            <div className='function-control'>
                <Icon type="question" style={{ fontSize: '20px' }} />
                <span>Help</span>
            </div>
            <div className='function-control'>
                <Icon type="bell" style={{ fontSize: '20px' }} />
                <span>Notif</span>
            </div>
        </div>
    );
}

class MainContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPreview: false,
        };
        this.uploadProps = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            },
            onChange: info => {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                    this.setState({
                        showPreview: true,
                    });
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
    }

    onSubmit = () => {
        message.success(`create Slide Show Ad successfully`);
    }

    render() {
        return (
            <div className='main'>
                <span className='title'>Ads</span>
                <div className='spliter-bar' />
                <span style={{ 'fontSize': '18px', 'fontWeight': 'bold', display: 'block' }}> Create a Slide Show Ad</span>
                <div className='content'>
                    <div className='input-line'>
                        <span className='label'>Ad Title:</span>
                        <Input placeholder='input ad name' />
                    </div>
                    <div className='input-line'>
                        <span className='label'>Destination URL:</span>
                        <Input placeholder='input URL' />
                    </div>
                    {/* <div className='input-line'>
                        <span className='label'>Keywords:</span>
                        <Input placeholder='input description' />
                    </div> */}
                    <div className='input-line'>
                        <span className='label'>Description:</span>
                        <Input placeholder='input description' />
                    </div>
                    <div className='input-line'>
                        <span className='label'>PPT:</span>
                        <Upload {...this.uploadProps}>
                            <Button>
                                <Icon type="upload" /> Click to Upload
                                </Button>
                        </Upload>
                    </div>
                    <div className='button-group'>
                        <Button type="primary" onClick={this.onSubmit}>Submit</Button>
                        <Button style={ {'margin-left': '5px' } }>Cancel</Button>
                    </div>
                </div>
                <div className='vertical-spliter' />
                <Preview showPreview={this.state.showPreview} />
            </div>
        );
    }
}

class Preview extends React.Component {
    render() {
        const previewContent = this.props.showPreview ? (
            <div className='ppt-iframe'>
                <iframe src="https://microsoftapc-my.sharepoint.com/personal/surui_microsoft_com1/_layouts/15/Doc.aspx?sourcedoc={bd24f13a-ef58-4057-bb4d-adb943544ab3}&amp;action=embedview&amp;wdAr=1.7777777777777777&amp;wdEaa=1" width="350px" height="221px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office Online</a>.</iframe>
            </div>
        ) : (
            <div className='blank'>Not uploaded</div>
        );
        return (
            <div className='preview'>
                {previewContent}
                <div>PPT Preview</div>
            </div>
        );
    }
}

class CreateAdPage extends React.Component {
    render() {
        return (
            <div className='create-ad-container'>
                {topBar()}
                <div className='create-ad-body'>
                    <Sidebar />
                    <MainContent uploadProps={this.uploadProps}/>
                </div>
            </div>
        );
    }
}

export default CreateAdPage;