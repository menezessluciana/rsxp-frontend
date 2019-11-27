import React from 'react';
import { Progress, Avatar, Typography } from 'antd';
import moment from 'moment';
const currentDate = moment().format('L');
const { Title } = Typography;

export default function({ studentName, schoolName, progress }) {
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex'}}>
                <Avatar size={64} icon="user" />
                <div style={{ marginLeft: 15 }}>
                    <Title style={{ margin: 0}} level={3}>{ studentName }</Title>
                    <Title style={{ margin: 0}} level={4}>{ schoolName }</Title>
                </div>
            </div>
            <div>
            <Progress type="circle" percent={progress} width={64}   strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
            }}/>
            </div>
        </div>
         <div style={{marginTop: 10}}>
            <span>Data da avaliação: {currentDate}</span>
         </div>
         </>
    )
}