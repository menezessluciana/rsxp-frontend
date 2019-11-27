import React from 'react';
import './App.css';
import StudentEvalution from './pages/StudentEvaluation';
import StudentProgress from './pages/StudentProgress';
import CompanyForm from './components/Students/List'
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <StudentProgress/>
    </Layout>
  );
}

export default App;
