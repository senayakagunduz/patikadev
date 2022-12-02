import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BookList from './bookList';
// import Counter from './components/Counter';
// import InputExample from './components/InputExample';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <BookList/>
  </React.StrictMode>
);
