import React from 'react';
import styled from 'styled-components';
import { Typography, Rate, Divider } from 'antd';
import StudentyProgress from '../components/Students/StudentHeader';

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
            <StudentyProgress
                studentName="Josimar dos Santos Gomes"
                schoolName="Maria Cristina do amaral"
                progress={46}
            />
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
