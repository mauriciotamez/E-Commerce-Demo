import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const [loginError, setLoginError] = useState('')
  const navigate = useNavigate()

  const submit = data => {
    axios
      .post('https://ecommerce-exercise-backend.herokuapp.com/login/', data)
      .then(res => {
        localStorage.setItem('token', res.data.access)
        navigate('/shop')
      })
      .catch(() => setLoginError('Invalid credentials'))
  }

  return (
    <>
    <div className="bg-[url('src/cool-background.svg')] bg-cover h-screen  ">
    <div className="relative mx-20 py-40 flex flex-col justify-center items-center ">
      <span className='text-4xl font-formal relative bottom-16 text-white'>Anise </span>
      <h1 className='text-center text-xl pt-10 mb-5 font-bold font-formal text-white'> Log In </h1>
      <div className='w-[19rem]  bg-zinc-800 rounded-md shadow-2xl '>
        <div className='flex flex-col px-16'>
          <span className='text-lg text-center pt-5 font-semibold  text-white'>Test data</span>
          <span className='pt-2 text-white relative left-5'>admin@admin.com</span>
          <span className='text-white relative left-16'>root</span>
        </div>
        <form action='' onSubmit={handleSubmit(submit)} className='py-10'>
          <div className='px-14 py-1'>
            <label className='relative left-16 bottom-2 text-white outline-none' htmlFor='email'></label>
            <input {...register('email')} className='px-2 rounded-md' type='email' required placeholder='Your email' autocomplete="off"  />
          </div>
          <div className='px-14 py-5'>
            <label className='relative left-12 bottom-2 text-white' htmlFor='password'> </label>
            <input {...register('password')} className='px-2 rounded-md' type='password' required placeholder='Your password' autocomplete="off" />
          </div>
          <div >
          <button className='bg-slate-200 text-black rounded px-5 relative left-[6.5rem] mb-5'>Submit</button>
          <span className='text-white relative top-10'>{loginError}</span>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Login
