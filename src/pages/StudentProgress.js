import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Typography, Rate, Avatar, Divider, Progress } from 'antd';

const currentDate = moment().format('L');

const { Title } = Typography;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
      width: 500px;
      height: 95%;
      overflow: hidden;
      padding: 10px 20px;
      border-radius: 10px;
      box-shadow: 0px 3px 16px #00000029;
`;

const TitleLabel =styled(Title)`
    display: inline;
`;

const CustomDivider = styled(Divider)`
     &.ant-divider-horizontal{
       margin: 12px 0;
    }
`;

const hardSkills = ['JavaScript', 'NodeJS', 'ReactJS', 'React Native'];

const softSkill = ['Comunicação interpessoal',
                   'Capacidade de persuasão',
                   'Proatividade',
 ];

const StudentProgress = () => (
    <Container>
        <Content>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}>
                    <Avatar size={64} icon="user" />
                    <div style={{ marginLeft: 15 }}>
                        <Title style={{ margin: 0}} level={3}>Josimar Gomes</Title>
                        <Title style={{ margin: 0}} level={4}>Escola Integral</Title>
                    </div>
                </div>
                <div>
                <Progress type="circle" 
                    percent={75} 
                    width={64}   
                    strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                    }}
                />
                </div>
            </div>
            <div style={{marginTop: 10}}>
                 <span>Data da avaliação: {currentDate}</span>
            </div>
            <CustomDivider />

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <TitleLabel level={4}>Habilidade profissionais</TitleLabel>
            </div>
            {hardSkills.map((skill, index) => 
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <span> {index +1}) {skill}</span>
                <Rate disabled defaultValue={index +2} />
            </div>
             )}
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <TitleLabel level={4}>Habilidade comportamentais</TitleLabel>
            </div>
            {softSkill.map((skill, index) => 
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <span> {index + 1}) {skill}</span>
                <Rate disabled defaultValue={index +1} />
            </div>
             )} 
            <CustomDivider />
             <span style={{fontWeight: 600, color: 'rgba(0, 0, 0, 0.85)', fontSize: 15,display: 'block' }}>Considerações Finais</span>
             <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</span>
        </Content>
    </Container>
);

export default StudentProgress;
