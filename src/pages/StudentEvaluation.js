import React from 'react';
import styled from 'styled-components';
import { COLOR_SUPORTE_SUCCESS , COLOR_SUPORTE_DANGER } from '../styles';
import { Typography, Rate, Avatar, Button, Divider, Input, Progress } from 'antd';

const { TextArea } = Input;
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

const SaveButton = styled(Button)`
    &&.ant-btn {
      background-color: ${COLOR_SUPORTE_SUCCESS};
      border-color: ${COLOR_SUPORTE_SUCCESS};
      color: #ffffff;
    }
    &&.ant-btn:hover, .ant-btn:focus {
      color: #ffffff;
      background-color: ${COLOR_SUPORTE_SUCCESS};
      border-color: ${COLOR_SUPORTE_SUCCESS};
    }
`;

const CancelButton = styled(Button)`
    &&.ant-btn {
      margin-right: 10px;
      background-color: ${COLOR_SUPORTE_DANGER};
      border-color: ${COLOR_SUPORTE_DANGER};
      color: #ffffff;
    }
    &&.ant-btn:hover, .ant-btn:focus {
      color: #ffffff;
      background-color: ${COLOR_SUPORTE_DANGER};
      border-color: ${COLOR_SUPORTE_DANGER};
    }
`;

const hardSkills = ['JavaScript', 'NodeJS', 'ReactJS', 'React Native'];

const softSkill = ['Comunicação interpessoal',
                   'Capacidade de persuasão',
                   'Proatividade',
 ];

const StudentEvaluation = () => (
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
                <Progress type="circle" percent={75} width={64}   strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}/>
                </div>
            </div>
            <Divider />

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <TitleLabel level={4}>Habilidade profissionais</TitleLabel>
            </div>
            {hardSkills.map((skill, index) => 
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <span> {index +1}) {skill}</span>
                <Rate/>
            </div>
             )}
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <TitleLabel level={4}>Habilidade comportamentais</TitleLabel>
            </div>
            {softSkill.map((skill, index) => 
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <span> {index + 1}) {skill}</span>
                <Rate/>
            </div>
             )}

             <span style={{fontWeight: 600, color: 'rgba(0, 0, 0, 0.85)', fontSize: 15}}>Considerações Finais</span>
             <TextArea style={{marginTop: 10}}/>

             <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: 10}}>
                 <CancelButton icon="close">Cancelar</CancelButton>
                 <SaveButton icon="save">Salvar</SaveButton>
             </div>
        </Content>
    </Container>
);

export default StudentEvaluation;
