import React from 'react';
import { ReactDOM } from 'react';

function Modal() {
    const portalRoot = document.getElementById('portal-root')
  return ReactDOM.createPortal (
    <h1>hello</h1>, portalRoot
  )
}

export default Modal