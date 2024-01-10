import React from 'react'
import { useDispatch } from 'react-redux'
import { asyncUserSignin } from '../../app/store/slices/auth'
import { useForm } from 'react-hook-form'
import Cookies from 'universal-cookie';
import customHistory from '../utils/helper';


const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
  const submitValidate = (data) => {
    // const cookies = new Cookies();
    // cookies.set('example-cookie', 'xxxxxxxx');
    dispatch(asyncUserSignin(data))
  }

  return (
    <section className="py-5">
      <div className="container">
        <h1>Sign In</h1>
        <div className="card" style={{ width: '30rem', margin: 'auto' }}>
          <div className="card-body">
            <form onSubmit={handleSubmit(submitValidate)}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input name="email" type="email" className="form-control" {...register('email', { required: true })} />
                {errors.email && <small className="text-danger">This field is required</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input name="password" type="password" className="form-control" {...register('password', { required: true })} />
                {errors.password && <small className="text-danger">This field is required</small>}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn
