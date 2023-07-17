import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuthentication } from '../../helpers/checkAuthentication';

const withAuthentication = (WrappedComponent) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Проверка наличия токена
    const isAuthenticated = checkAuthentication(); // Здесь вы должны выполнить проверку наличия токена

    // Если пользователь не авторизован, перенаправляем на страницу авторизации
    if (!isAuthenticated) {
      navigate('/SingUp');
    }
  }, [navigate]);
  return WrappedComponent;
};

export default withAuthentication;
