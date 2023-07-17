import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import { register } from '../../services/auth/auth';
import { validateEmail } from '../../helpers/validate';
import './style.scss'


export default function SingUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordCorrect, setPasswordCorrect] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(true);      
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangePasswordCorrect = (event) => {
    setPasswordCorrect(event.target.value);
  };
  const handleClickRegBtn = async () => {
    const validateEmailBool = validateEmail(email);
    const validPassword = password == passwordCorrect && password != "" && password != " ";
    setIsValidEmail(validateEmailBool);
    setIsValidPassword(validPassword);
    if(validateEmailBool, validPassword){
      const response = await register(email, password);
      console.log('response', response);
      if(response?.token){
        localStorage.setItem('token', response?.token);
        navigate('/our-team');
      } else {
        setError(response.message);
      }
         
    }
  }

  return (
    <div className="container">
      <div className='sing-up'>
        <div className='sing-up__form'>
          <h2 className='sing-up__title'>Регистрация</h2>
          <CustomInput label={"Имя:"} value={name} onChange={handleChangeName} />
          <CustomInput 
            label={"Электронная почта:"} 
            value={email} 
            type={'email'}
            onChange={handleChangeEmail} 
            isCorrect={isValidEmail}
            />
          <CustomInput 
            label={"Пароль:"} 
            value={password}
            type={'password'}
            onChange={handleChangePassword} 
            isCorrect={isValidPassword}
            />
          <CustomInput 
            label={"Подтвердите пароль:"} 
            value={passwordCorrect} 
            type={'password'} 
            onChange={handleChangePasswordCorrect} />
          <button type="button" className='btn btn-main' onClick={handleClickRegBtn}>Зарегистрироваться</button>
          {error && <p>{error}</p>}
        </div>
      </div>            
    </div>

  )
}
