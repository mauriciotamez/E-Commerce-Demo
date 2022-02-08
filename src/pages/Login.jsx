import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const [loginError, setLoginError] = useState('')
  const navigate = useNavigate()

  const submit = data => {
    console.log(data)
    axios
      .post('https://ecommerce-exercise-backend.herokuapp.com/login/', data)
      .then(res => {
        localStorage.setItem('token', res.data.access)
        navigate('/shop')
      })
      .catch(() => setLoginError('Invalid credentials'))
  }

  return (
    <div>
      <h1> Login </h1>
      <form action='' onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor='email'> Email </label>
          <input {...register('email')} type='email' required />
        </div>
        <div>
          <label htmlFor='password'> Password </label>
          <input {...register('password')} type='password' required />
        </div>
        {loginError}
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
