import React from 'react';
import styled from 'styled-components';
import { Typography, Rate, Avatar, Button, Divider } from 'antd';

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
      height: 80%;
      padding: 10px 20px;
      border-radius: 10px;
      box-shadow: 0px 3px 16px #00000029;
`;

const TitleLabel =styled.span`
    display: inline;
`;

const hardSkills = ['JavaScript', 'NodeJS', 'ReactJS', 'React Native', 'GraphQL', 'Styled Components'];

const softSkill = ['Comunicação interpessoal',
                   'Capacidade de persuasão',
                   'Proatividade',
                   'Resolução de conflitos',
 ];

const StudentEvaluation = () => (
    <Container>
        <Content>
            <div style={{display: 'flex'}}>
            <Avatar size={64} icon="user" />
                <div style={{ marginLeft: 10 }}>
                    <Title style={{ margin: 0}} level={3}>Josimar Gomes</Title>
                    <Title style={{ margin: 0}} level={4}>Escola Integral</Title>
                </div>
            </div>
            <Divider />

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <TitleLabel>Habilidade profissionais</TitleLabel>
            </div>
            {hardSkills.map((skill, index) => 
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <span> {index++}) {skill}</span>
                <Rate/>
            </div>
             )}
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <TitleLabel>Habilidade comportamentais</TitleLabel>
            </div>
        </Content>
    </Container>
);

export default StudentEvaluation;
