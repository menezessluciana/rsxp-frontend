import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

const Container = styled.div``;

export default function({ children}) {
    return (
        <Container>
            <Header />
            { children }
        </Container>
    )
}