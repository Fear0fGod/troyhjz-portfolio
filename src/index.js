import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { ShowcaseAdidas, ShowcaseInstruworld, ShowcaseNuzzle, ShowcaseWhatIf, ShowcaseYogood, ShowcaseSite } from "./projects";

import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/1e8f4795-6661-4a77-a260-9bddf6c9c0fb" element={<ShowcaseNuzzle />} />
      <Route path="/8ca8d0ce-508d-487f-8ed2-60c008f598e3" element={<ShowcaseWhatIf />} />
      <Route path="/5e4fed78-eb03-4379-96ee-32ae5c1b6edc" element={<ShowcaseYogood />} />
      <Route path="/8d8cb163-c836-47a2-a9ca-891eef6876ae" element={<ShowcaseInstruworld />} />
      <Route path="/a7bd32c4-c9f9-42e9-9029-b42f7a1b304b" element={<ShowcaseAdidas />} />
      <Route path="/a7bd32c4-c9f9-42e9-9029-b42f7a1b304b" element={<ShowcaseAdidas />} />
      <Route path="/b9489abb-a407-4759-8c6a-76f001db88b3" element={<ShowcaseSite />} />
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);