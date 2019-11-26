import React, { useState } from 'react';
import { DatePicker, Card, Button, Input, message, Avatar, Row, Col } from 'antd';

import {
  FormRegister,
  Container,
  FormTitle,
} from '../styles'
  
 
  
  const RegistrationForm = (props) => {

    const [loading, setLoading] = useState(false); 

    const handleSubmit = e => {
      e.preventDefault();
      props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);

          setLoading(true);
          // handle requsty
          setTimeout(() => {
            message.success("Cadastro realizado com sucesso!");
            setLoading(false);
          }, 1500)

        }
      });
    };

    const { getFieldDecorator } = props.form;
  
    return (
      <Container>
        <Card>
          <Row style={{display: 'flex', justifyContent: 'flex-start' }}>
            <Avatar size={40} icon="user" />
            <FormTitle>Cadastrar aluno</FormTitle>
          </Row>
          <FormRegister onSubmit={handleSubmit} className="login-form">
            <FormRegister.Item label="Nome">
              {getFieldDecorator('Aluno', {
                rules: [{ required: true, message: 'Digite o nome do aluno' }],
              })(
                <Input placeholder="digite o nome do aluno aluno" />,
              )}
            </FormRegister.Item>
            <FormRegister.Item label="Endereço">
              {getFieldDecorator('endereco', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input placeholder="digite o endereço do aluno"/>,
              )}
            </FormRegister.Item>
            <FormRegister.Item label="CPF do aluno">
              {getFieldDecorator('CPF', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  placeholder="digite o cpf do aluno"
                />,
              )}
            </FormRegister.Item>
            <FormRegister.Item label="Data de nascimento">
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </FormRegister.Item>
            <FormRegister.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                loading={loading}>
                Cadastrar
              </Button>
            </FormRegister.Item>
          </FormRegister>
        </Card>
      </Container>
    );      
  }
  
  const StudentyForm = FormRegister.create({ name: 'register' })(RegistrationForm);
  export default StudentyForm;