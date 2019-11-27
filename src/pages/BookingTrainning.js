import React from 'react';
import styled from 'styled-components';
import { Typography, Divider, Calendar, Button } from 'antd';
import { Select } from 'antd';
import { COLOR_SUPORTE_SUCCESS , COLOR_SUPORTE_DANGER } from '../styles';

const { Option } = Select;
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
      overflow: hidden;
      padding: 10px 20px;
      border-radius: 10px;
      box-shadow: 0px 3px 16px #00000029;
`;

const CustomDivider = styled(Divider)`
     &.ant-divider-horizontal{
       margin: 12px 0;
    }
`;

const CustomTitle = styled.span`
    display: block;
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

const BookingTrainning = () =>(
        <Container>
            <Content>
                <div style={{display:'flex', justifyContent: 'center'}}>
                    <Title level={3}>Agendamento de treinamento</Title>
                </div>
                <CustomDivider />
                <span>Selecione a data:</span>
                <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 10 }}>
                     <Calendar fullscreen={false} />
                </div>
                <CustomTitle>Selecione a escola:</CustomTitle>
                <Select defaultValue="Integral" style={{ width: 120 }}>
                    <Option value="Objetivo">Objetivo</Option>
                    <Option value="Anglo">Anglo</Option>
                    <Option value="Integral">Integral</Option>
                </Select>
                <CustomTitle>Selecione o curso:</CustomTitle>
                <Select defaultValue="IAJ" style={{ width: 300 }}>
                    <Option value="OO">Orientação a objeto</Option>
                    <Option value="IAJ">Introdução ao JavaScript</Option>
                    <Option value="DS">Design System</Option>
                </Select>
                
             <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: 10, height: '100%'}}>
                 <CancelButton icon="close">Cancelar</CancelButton>
                 <SaveButton icon="save">Salvar</SaveButton>
             </div>
            </Content>
        </Container>
    );

export default BookingTrainning;
