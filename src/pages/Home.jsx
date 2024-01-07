import React from 'react'
import { useSelector } from 'react-redux'
import { getUserDetails } from '../app/store/slices/auth'
import { useForm } from 'react-hook-form'

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const user = useSelector(getUserDetails)

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h5 className="py-3">Email : {user.email}</h5>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input name="name" type="text" className="form-control mb-2" {...register('name', { required: true })} />
                {errors.name && <small className="text-danger">This field is required</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input name="age" type="text" className="form-control mb-2" {...register('age', { required: true })} />
                {errors.age && <small className="text-danger">This field is required</small>}
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
