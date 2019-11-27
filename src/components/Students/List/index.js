import React from 'react';
import { Table } from 'antd';
import StudentHeader from '../StudentHeader';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

const columns = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
        <Link to="/students/233/evaluation">
            <StudentHeader
                studentName={record.studentName}
                schoolName={record.schoolName}
                progress={record.progress}
            />
        </Link>
    )
  },
];

const data = [
  {
    key: '1',
    studentName: 'John Brown',
    schoolName: 'Maria Tolentina',
    progress: 79,
  },
  {
    key: '2',
    studentName: 'Jim Green',
    schoolName: 'London No. 1 Lake Park',
    progress: 46,
  },
  {
    key: '3',
    studentName: 'Joe Black',
    schoolName: 'Sidney No. 1 Lake Park',
    progress: 89
  },
  {
    key: '3',
    studentName: 'Robson Crruzoé',
    schoolName: 'Sidney No. 1 Lake Park',
    progress: 70,
  },
];

export default function(props) {
    return (
        <Container>
            <Content>
                <Table
                    columns={columns}
                    dataSource={data}
                    loading={false}
                    onRow={(record, rowIndex) => ({
                        onClick: event => console.log("clickou"),
                        // onDoubleClick: event => {}, // double click row
                        // onContextMenu: event => {}, // right button click row
                        // onMouseEnter: event => {}, // mouse enter row
                        // onMouseLeave: event => {}, // mouse leave row
                    })}
                />
            </Content>
        </Container>
    )
}