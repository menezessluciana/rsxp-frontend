import React from 'react';
import { Card, Statistic, Col, Row, Icon, Button, Result } from 'antd'

export default function() {
    return (
        <>
       <div style={{display: 'flex',justifyContent: 'center'}}>
           <h2>Alunos em destaque</h2>
       </div>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
            <Col span={12}>
                <Card>
                <Statistic
                    title="Bernardo Campos"
                    value={82.28}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<Icon type="arrow-up" />}
                    suffix="%"
                />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                <Statistic
                    title="Fernanda Souza"
                    value={70.89}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<Icon type="arrow-up" />}
                    suffix="%"
                />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                <Statistic
                    title="Josimar Gomes"
                    value={67.89}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<Icon type="arrow-up" />}
                    suffix="%"
                />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                <Statistic
                    title="João Augusto"
                    value={56.66}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<Icon type="arrow-up" />}
                    suffix="%"
                />
                </Card>
            </Col>
            </Row>
            <Row>
            </Row>
        </div>
        </>
    )
}