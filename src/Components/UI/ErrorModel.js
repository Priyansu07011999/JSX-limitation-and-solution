
import React from 'react';
import ReactDOM from 'react-dom'

import Card from './Card';
import Button from './Button';
import './ErrorModel.css';

const Backdrop = props => {
  return <div className="backdrop" onClick={props.onConfirm}></div>
}

const ModelOverlay = props => {
  return <Card className='modal'>
  <header className='header'>
    <h2>{props.title}</h2>
  </header>
  <div className='content'>
    <p>{props.message}</p>
  </div>
  <footer className='actions'>
    <Button onClick={props.onConfirm}>Okay</Button>
  </footer>
</Card>
}

const ErrorModel = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root') )}
      {ReactDOM.createPortal(<ModelOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
    </>
  );
};

export default ErrorModel;
