import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

function SignInPage() {
  const [formData, setFormData] = useState({ identifier: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData); // Temporary action for form submission
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row items-center justify-center bg-base-200 -mt-20">
      <div className="w-full lg:w-1/2 p-6">
        <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl p-6 mx-auto max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-primary text-center">Sign In</h1>
          
          <input
            type="text"
            placeholder="Username or Email"
            value={formData.identifier}
            onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
            className="input input-bordered w-full mb-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="input input-bordered w-full mb-4"
            required
          />
          <button type="submit" className="btn btn-primary text-white w-full">Sign In</button>
          
          <p className="text-center mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary font-semibold">
              Click here
            </Link>{' '}
            to create one.
          </p>
          <p className="text-center text-sm mt-1 text-gray-500">It's easy and free!</p>
        </form>

        <div className="divider">OR</div>
        
        <div className="flex gap-4 justify-center">
          <button className="btn btn-outline btn-info flex items-center">
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>
          <button className="btn btn-outline btn-primary flex items-center">
            <FaFacebook className="mr-2" /> Sign in with Facebook
          </button>
          <button className="btn btn-outline btn-neutral flex items-center">
            <FaApple className="mr-2" /> Sign in with Apple
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;

