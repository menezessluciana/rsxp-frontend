import React from 'react';
import StudentEvalution from './pages/StudentEvaluation';
import StudentProgress from './pages/StudentProgress';
import moment from 'moment';
import './App.css';

moment.locale('pt-BR');

function App() {
  return (
    <StudentEvalution/>
  );
}

export default App;
