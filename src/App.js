import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StudentEvalution from './pages/StudentEvaluation';
import StudentProgress from './pages/StudentProgress';
import Register from './pages/Register';
import Students from './pages/Students';
import BookingTrainning from './pages/BookingTrainning';
import Dashboard from './pages/Dashboard';
import TrainningList from './pages/Trainninglist';
import Layout from './components/Layout';


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Layout>
            <Route
              path={"/students/:id/evaluation"}
              component={StudentEvalution}
            />
            <Route
              path={"/students/:id/progress"}
              component={StudentProgress}
            />
            <Route
              path="/register/:type"
              component={Register}
            />
            <Route
              path="/students/list"
              component={Students}
            />
            <Route
              path="/trainning/list"
              component={TrainningList}
            />
            <Route
              path="/tranning/new"
              component={BookingTrainning}
            />
            <Route
              path="/"
              component={Dashboard}
              exact
            />
          </Layout>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
