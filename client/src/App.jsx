import * as React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  return (
    
    <>
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
          <h1>Организуйте мероприятие прямо на сайте: найдите команду профессионалов в Вашем городе,
          опубликуйте объявление о найме бесплатно, заполните календарь, автоматически напоминающий, когда придёт срок мероприятия и ещё много всего.</h1>
          <div className="cards">
            <div className="card">
                <p>О проблемах рутины организации можно забыть. Все необходимые документы заполнятся автоматически, когда Вы внесёте всю основную информацию 
                о мероприятии и предоставите документы всего в пару кликов.</p>
            </div>
            <div className="card">
              <p>Функционал сайта идеально подходит для создания меню, прайс-листов и расписаний - Вы не потеряетесь в бумажках.</p>
            </div>
          </div>
          <Link to='/' id='a-block' className="centered-a">Посмотреть больше информации о функционале...</Link>
          <h1 className="centered-a" id='centered-h'>Пройдите регистрацию и убедитесь в этом сами:</h1>
          <div className="form">
            <form action="GET">
              <input type="mail" placeholder='Почта'/>
              <input type="password" placeholder='Пароль'/>
              <Link to='/' id='a-block'>Пользовательское соглашение</Link>
              <button id='btn' type='submit'>Зарегистрироваться</button>
            </form>
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

export default App
