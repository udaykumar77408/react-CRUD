import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Form from './Form';
import DataList from './DataList';

const App = () => {
  return (
    <div className='mt-5'>
        <center>
            <Form/><br/>
            <DataList/>
        </center>
    </div>
  )
}

export default App
