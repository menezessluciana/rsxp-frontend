import React from 'react';
import { Card, List, Icon, Button } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Container = styled.div`
    width: 100%;
    padding: 50px;
    display: flex;
    justify-content: center;
`;

const CardList = styled(Card)`
    background: #FAEBD7;
`;

const getColors = () => ['#32CD32', "#FAEBD7", '#F0E68C', '#E0FFFF', '	#98FB98'][Math.floor(Math.random() * 4)]

const data = [
    {
      title: 'Treinamento Javascript',
      content: 'E.E. Maria Leonora',
      date: '21/07/2019'
    },
    {
      title: 'Treinamento de NodeJS',
      content: 'Escola Petrunia',
      date: '21/010/2019'
    },
    {
      title: 'Treinamento de Algoritimos e Lógica',
      content: 'E.E. Maria Leonora',
      date: '21/07/2019'
    },
    {
        title: 'Treinamento de React',
        content: 'Escola Marília Mendoça',
        date: '21/010/2019'
    },
    {
        title: 'Treinamento Introdução à Programação',
        content: 'E.E. Maria Leonora',
        date: '21/07/2019'
    },
    {
        title: 'Treinamento de Algoritimos e Lógica',
        content: 'E.E. Maria Leonora',
        date: '21/07/2019'
      },
      {
          title: 'Treinamento de NodeJS',
          content: 'Escola Petrunia',
          date: '21/010/2019'
      },
      {
          title: 'Treinamento de Algoritimos e Lógica',
          content: 'E.E. Maria Leonora',
          date: '21/07/2019'
      },
  ];

export default function() {
    return (
        <Container>
            <Card>
                <Link to="/trainning/new">
                    <Button type="dashed">
                        <Icon type="solution" />
                        AGENDAR NOVO TREINAMENTO
                    </Button>
                </Link>
            </Card>
            <List
                grid={{
                    gutter: 24,
                    xs: 3,
                    sm: 5,
                    md: 4,
                    lg: 5,
                    xl: 3,
                    xxl: 3,
                  }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <CardList title={item.title} bordered={false} style={{background: getColors()}}>
                            <h2>{ item.content }</h2>
                            { item.date }
                        </CardList>
                    </List.Item>
                )}
            />
        </Container>
    )
}