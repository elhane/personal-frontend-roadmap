import React from 'react';
// import logo from '../../logo.svg';
import './App.scss';
import Layout from '../Layout/Layout'
import {SVGSource} from '../Svg';
import HomePage from '../../pages/HomePage/HomePage';
import { BrowserRouter } from "react-router-dom";
import {Route, Routes} from 'react-router';
import Interviews from '../../pages/Interviews/Interviews';
import Todos from '../../pages/Todos/Todos';
import SoftSkills from '../../pages/SoftSkills/SoftSkills';
import JobStats from '../../pages/JobStats/JobStats';
import HardSkills from '../../pages/HardSkills/HardSkills';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={
                  <Layout>
                      <HomePage />
                  </Layout>
              }/>

              <Route path="/todos" element={
                  <Layout>
                      <Todos />
                  </Layout>
              }/>

              <Route path="/interviews" element={
                  <Layout>
                      <Interviews />
                  </Layout>
              }/>

              <Route path="/hard-skills" element={
                  <Layout>
                      <HardSkills />
                  </Layout>
              }/>

              <Route path="/soft-skills" element={
                  <Layout>
                      <SoftSkills />
                  </Layout>
              }/>

              <Route path="/job-stats" element={
                  <Layout>
                      <JobStats />
                  </Layout>
              }/>
          </Routes>

      </BrowserRouter>
  );
}

export default App;
