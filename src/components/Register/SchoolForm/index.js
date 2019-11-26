import React, { useState } from 'react';
import { Icon, Card, Button, Input, message, Row, Avatar } from 'antd';

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
            <Avatar size={40} icon="profile" />
            <FormTitle>Cadastrar escolas</FormTitle>
          </Row>
          <FormRegister onSubmit={handleSubmit} className="login-form">
            <FormRegister.Item>
              {getFieldDecorator('Escola', {
                rules: [{ required: true, message: 'Digite o nome da escola' }],
              })(
                <Input
                  prefix={<Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="nome escola"
                />,
              )}
            </FormRegister.Item>
            <FormRegister.Item>
              {getFieldDecorator('Endereço', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="endereço"
                />,
              )}
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
  
  const SchoolForm = FormRegister.create({ name: 'register' })(RegistrationForm);
  export default SchoolForm;