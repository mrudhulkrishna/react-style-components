import React from 'react';
import './Comp8.scss';
import { Button } from '@material-ui/core';
import { DeleteForever, DeleteOutline } from '@material-ui/icons';

function Comp8() {
  return (
    <div className='container'>
        <h1 className='header'>Component using SCSS</h1>
        <p className='description'>styled using scss styles</p>

        <Button variant='contained' color='primary'>OK</Button>
        <Button variant='contained' color='secondary'>OK</Button>
        <Button color='default' variant='contained' startIcon={<DeleteForever/>}>Delete</Button>
    </div>

  )
}

export default Comp8