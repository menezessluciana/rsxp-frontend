import React from 'react';
import {
  Layout, Row, Col, Avatar
} from 'antd';
import styled from 'styled-components';
import { COLOR_BRAND_PRIMARY } from '../../styles'

const AntdHeader = styled(Layout.Header)`
  display: flex;
  height: 64px;
  background-color: ${COLOR_BRAND_PRIMARY};
  padding: 0 24px;
  z-index: 2;
  flex-direction: column;
  justify-content: center;
  box-shadow: 3px 3px 40px 0 rgba(0, 0, 0, 0.05);
`;

const FlexEndContainer = styled.div`
    justify-content: flex-end;
    align-items: center;
    display: flex;
`;

const Header = ({ style }) => (
  <AntdHeader style={style}>
    <Row type="flex" align="middle">
      <Col xs={0} sm={0} md={24}>
        <FlexEndContainer>
            <Avatar size={44} icon="user" />
        </FlexEndContainer>
      </Col>
    </Row>
  </AntdHeader>
);

export default Header;
