import React from 'react';
import './App.css';
import StudentEvalution from './pages/StudentEvaluation';
import StudentProgress from './pages/StudentProgress';
import CompanyForm from './components/Students/List';
import BookingTrainning from './pages/BookingTrainning';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <BookingTrainning/>
    </Layout>
  );
}

export default App;
