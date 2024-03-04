import React from 'react';
import { Link } from 'react-router-dom';
import { GenderCheckBox } from './GenderCheckBox';

export const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center text-gray-300">
          Signup{' '}
          <span className="text-pink-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label htmlFor="firstname" className="label">
              <span className="text-base text-gray-300 label-text">
                First Name{' '}
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              name="firstname"
              id="firstname"
              className="w-full input input-bordered h-10 "
            />
          </div>
          <div>
            <label htmlFor="lastname" className="label">
              <span className="text-base text-gray-300 label-text">
                Last Name{' '}
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              name="lastname"
              id="lastname"
              className="w-full input input-bordered h-10 "
            />
          </div>
          <GenderCheckBox></GenderCheckBox>
          <div>
            <label htmlFor="username" className="label">
              <span className="text-base text-gray-300 label-text">
                {' '}
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              id="username"
              className="w-full input input-bordered h-10 "
            />
          </div>
          <div>
            <label htmlFor="password" className="label">
              <span className="text-base text-gray-300 label-text">
                {' '}
                Passwork
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              id="password"
              className="w-full input input-bordered h-10 "
            />
          </div>
          <Link className="hover:text-pink-400 text-xs text-gray-300">
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 hover:opacity-75">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
