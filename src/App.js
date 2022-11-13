import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes/Route';
import Layout from "./Routes/Layout";

function App() {

  return (
    <>
       <Router>
          <Layout >
             <Route component={Routes} />
            </Layout>
        </Router>
    </>
  );
}

export default App;

