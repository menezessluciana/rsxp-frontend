import React from 'react';
import styled from 'styled-components';
import { COLOR_SUPORTE_SUCCESS , COLOR_SUPORTE_DANGER } from '../styles';
import { Typography, Rate, Button, Divider, Input } from 'antd';
import StudentyProgress from '../components/Students/StudentHeader';

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
      width: 600px;
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

const StudentProgress = () => (
    <Container>
        <Content>
            <StudentyProgress
                studentName="Josimar dos Santos Gomes"
                schoolName="Maria Cristina do amaral"
                progress={46}
            />
            <Divider />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <TitleLabel level={4}>Habilidade profissionais</TitleLabel>
            </div>
            {hardSkills.map((skill, index) => 
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <span> {index +1}) {skill}</span>
                <Rate disabled />
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

             <span style={{fontWeight: 600, color: 'rgba(0, 0, 0, 0.85)', fontSize: 15,display: 'block' }}>Considerações Finais</span>
             <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</span>

             <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: 10}}>
                 <CancelButton icon="close">Cancelar</CancelButton>
                 <SaveButton icon="save">Salvar</SaveButton>
             </div>
        </Content>
    </Container>
);

export default StudentProgress;
