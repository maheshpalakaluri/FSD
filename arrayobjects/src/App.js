import React from 'react';
import TableView from './TableView';
import './index.css';

const App = () => {
  const data = [
    {ID : 1 , Name : 'Mahesh' ,   Age : 20},
    {ID : 2 , Name : 'charan'   ,   Age : 21},
    {ID : 3 , Name : 'srishanth' ,   Age : 20},
    {ID : 4 , Name : 'vishnu' ,   Age : 21},
    {ID : 5 , Name : 'kalyan'  ,   Age : 21},

  ];

  return (
    <div>
      <h1 style = {{ textAlign : 'center' , borderBottom : '2px solid blue' , paddingTop : '20px',marginBottom : '100px'}}>
        Array of Objects - TableView
      </h1>
      <TableView data= {data} />
    </div>
  );
};

export default App;