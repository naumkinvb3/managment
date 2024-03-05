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
            <li><Link to='/'>аккаунт</Link></li>
          </div>
        </ul>
      </div>
      <div className="main">
        <div className="left-block">
          <h1>Организуйте мероприятие прямо на сайте: найдите команду профессионалов в Вашем городе,
          опубликуйте объявление о найме бесплатно, заполните календарь, автоматически напоминающий, когда придёт срок мероприятия и ещё много всего.</h1>
          <div className="cards">
            <div className="card">
              <Link to='/'><p>О проблемах рутины организации можно забыть. Все необходимые документы заполнятся автоматически, когда Вы внесёте всю основную информацию 
                о мероприятии и предоставите документы всего в пару кликов.</p></Link>
            </div>
            <div className="card">
              <Link to='/'><p>Функционал сайта идеально подходит для создания меню, прайс-листов и расписаний - Вы не потеряетесь в бумажках.</p></Link>
            </div>
          </div>
          <Link to='/' id='a-block' className="centered-a">Посмотреть больше информации о функционале...</Link>
          <h1 className="centered-a" id='centered-h'>Пройдите регистрацию и убедитесь в этом сами:</h1>
          <form action="GET">
            <input type="mail" placeholder='Почта'/>
            <input type="password" placeholder='Пароль'/>
            <Link to='/' id='a-block'>Пользовательское соглашение</Link>
            <button type='submit'>Зарегистрироваться</button>
          </form>
        </div>
        <div className="right-block">
          <p>Мероприятия наших пользователей:</p>
        </div>
      </div>
    </>
  )
}

export default App
