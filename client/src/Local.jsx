import * as React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, Form } from 'react'
import './App.css'
import Modal from './Modal.jsx'

function Local() {

    const [modalActive, setModalActive] = useState(false)
    return (
    <>
    <Modal active={modalActive} setActive={setModalActive}>
        <form action="post">
            <input type="text" placeholder='Название мероприятия'/>
            <input type="text" placeholder='Описание (опционально)'/>
            <input type="date"/>
            <button id='btn' type='submit' onClick={() => setModalActive(false)}>Создать</button>
        </form>
    </Modal>
    <div className="header">
        <ul>
          <div className="header-box">
            <li id='header-link'><Link to='/'><h1>Мероприятия - организуйте за пару кликов.</h1></Link></li>
          </div>
          <div className="header-box">
            <li><Link to='/'>помощь</Link></li>
            <li><Link to='/'>о нас</Link></li>
            <li><Link to='/'>новости</Link></li>
            <li><Link to='/'>навигация</Link></li>
            <li><Link to='account'>аккаунт</Link></li>
          </div>
        </ul>
      </div>
      <div className="main">
        <div className="left-block">
          <h1 id='splitted-block'>Ваши мероприятия: <button id='btn' onClick={() => setModalActive(true)}>+ создать новое</button></h1>
          <div className="block" id='block'>
            <h2 className="block-name">Example</h2>
            <p className="block-desc">Example</p>
          </div>
        </div>
        <div className="right-block">
            <p>Мероприятия наших пользователей:</p>
            <p className="all-event">Example</p>

          <div className="links"><p>Полезные ссылки:</p>
            <Link to='/' id='a-block'>Руководство пользователя</Link>
            <Link to='/' id='a-block'>Подробнее о сайте</Link>
          </div>
        </div>
      </div>
      <div className="footer">
          <ul>
            <li><i>Наумкин, 4вб3</i></li>
            <li><Link to='/'>контакты</Link></li>
            <li><Link to='/'>помощь</Link></li>
            <li><Link to='/'>пользовательское соглашение</Link></li>
          </ul>
      </div>
    </>
  )
}

export default Local
