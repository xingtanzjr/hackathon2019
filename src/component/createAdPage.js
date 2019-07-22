import React from 'react';
import microsoftLogo from '../images/microsoft.svg';
import { Input, Icon, Upload, message, Button } from 'antd';

const { Search } = Input;

class CreateAdPage extends React.Component {

    constructor(props) {
        super(props);
        this.uploadProps = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
    }

    render() {
        return (
            <div className='create-ad-container'>
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
                        <Icon type="alert" style={{ fontSize: '20px' }} />
                        <span>Notif</span>
                    </div>
                </div>
                <div className='create-ad-body'>
                    <span className='title'>Create Ad</span>
                    <div className='spliter-bar' />
                    <div className='content'>
                        <div className='input-line'>
                            <span className='label'>Name:</span>
                            <Input placeholder='input ad name' style={{ width: '400px' }} />
                        </div>
                        <div className='input-line'>
                            <span className='label'>URL:</span>
                            <Input placeholder='input URL' style={{ width: '400px' }} />
                        </div>
                        <div className='input-line'>
                            <span className='label'>Description:</span>
                            <Input placeholder='input description' style={{ width: '400px' }} />
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
                            <Button type="primary">Submit</Button>
                            <Button >Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateAdPage;