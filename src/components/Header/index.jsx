import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import withAuthentication from '../HOC/withAuthentication';
import { ReactComponent as ExtSvg } from '../../assets/ext.svg';
import './style.scss'

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleExit = () => {
    localStorage.removeItem('token');
    navigate('/SingUp');
  }
  const pathSegments = location.pathname.split('/');
  const shouldShowBackButton = pathSegments.length > 2;
  
  return withAuthentication(
    <header>
      <div className="container">
        <menu className="header-menu">
          {shouldShowBackButton && (
            <button className="btn header-btn" onClick={handleGoBack}>
              назад
            </button>
          )}
          <div></div>
          <button className="btn header-btn btn-not-mobile" onClick={handleExit}>
            Выход
          </button>
          <button className="btn-mobile" onClick={handleExit}>
            <ExtSvg />
          </button>
          
        </menu>
      </div>
    </header>
  )
}