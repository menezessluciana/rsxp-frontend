import React from 'react';
import { Card, Statistic, Col, Row, Icon, Button, Result } from 'antd'

export default function() {
    return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
            <Col span={12}>
                <Card>
                <Statistic
                    title="Active"
                    value={11.28}
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
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<Icon type="arrow-down" />}
                    suffix="%"
                />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                <Statistic
                    title="Active"
                    value={11.28}
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
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<Icon type="arrow-down" />}
                    suffix="%"
                />
                </Card>
            </Col>
            </Row>
            <Row>
            <Result
                    status="success"
                    title="Successfully Purchased Cloud Server ECS!"
                    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                    extra={[
                    <Button type="primary" key="console">
                        Go Console
                    </Button>,
                    <Button key="buy">Buy Again</Button>,
                    ]}
                />
            </Row>
        </div>
    )
}