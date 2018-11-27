import React, { Component } from 'react';
import logo from '../../img/new3.png'

export default function Upper () {
  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col-md header-logo">
          <div className="image">
            <img src={logo} alt="Neobit logo"/>
          </div>
        </div>
        <div className="col-md header-menu">
          <div className="row">
            <div className="menu-list">
              <ul>
                <li>
                  <a href="#">Сотрудничество</a>
                </li>
                <li>
                  <a href="#">Фидбэк</a>
                </li>
                <li>
                  <a href="#">Поддержка</a>
                </li>
                <li>
                  <span className="separate">|</span>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-edit"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fas fa-user"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-globe"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fas fa-sliders-h"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}