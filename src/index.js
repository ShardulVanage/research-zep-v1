import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ZepResarch from './pages/ZepResarch'
import ScientificAssistance from './pages/ScientificAssistance'
import Publication from './pages/Publications'
import Patners from './pages/Partners'
import MissionVission from './pages/MissionVision'
import Membership from './pages/Membership'
import Gallery from './pages/Gallery'
import Excellence from './pages//Excellence'
import Courses from './pages/Courses'
import Careers from './pages/Careers'
import Conferences from './pages/Conferences'
import AwardsRecognitions from '../src/pages/AwardsRecognitions'
import Nav from './components/Nav';
import Footers from './components/Footer';
import ContactUs from './pages/ContactUs';
import CourseDetail from './pages/CourseDetail/CourseDetailDA';
import CourseDetailDS from './pages/CourseDetail/CourseDetailDS';
const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path:"/ZepResarch",
    element:<ZepResarch/>
  },
  {
    path:"/ScientificAssistance",
    element:<ScientificAssistance/>
  },{
    path:"/Publication",
    element:<Publication/>
  },{
    path:"/Patners",
    element:<Patners/>
  },{
    path:"/Mission&Vission",
    element:<MissionVission/>
  },{
    path:"/Membership",
    element:<Membership/>
  },{
    path:"/Gallery",
    element:<Gallery/>
  },{
    path:"/Excellence",
    element:<Excellence/>
  },{
    path:"/Courses",
    element:<Courses/>
  },{
    path:"/Awards&Recognitions",
    element:<AwardsRecognitions/>
  },
  {
    path:"/Careers",
    element:<Careers/>
  },
   {
    path:"/Conferences",
    element:<Conferences/>
  },
  {
    path:"/ContactUs",
    element:<ContactUs/>
  },
  {
    path:"/CourseDetailDA",
    element:<CourseDetail/>
  },
  {
    path:"/CourseDetailDS",
    element:<CourseDetailDS/>
  },
]);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Nav/>
     <RouterProvider router={router} />
     <Footers/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
