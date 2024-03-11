import * as React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import './App.css'

const Modal = ({active, setActive, children}) => {
    return (
    <>
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            {children}
        </div>
      </div>
    </>
  )
}

export default Modal
