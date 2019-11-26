import styled from 'styled-components';
import { Form } from 'antd';
import { COLOR_NEUTRAL_DARKEST } from '../../../styles'

export const FormRegister = styled(Form)`
    width: 600px;
`

export const Container = styled.div`
    width: 100%;
    padding: 50px;
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const FormTitle = styled.h2`
    color: ${COLOR_NEUTRAL_DARKEST};
    font-size: 32px;
    margin-left: 10px;
`;