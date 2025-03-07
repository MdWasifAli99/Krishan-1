import Layout from '../components/Layout'
import React from 'react'

const Login = () => {
  return (
    <Layout>  <div className="flex flex-col min-h-screen font-sans text-gray-800">
    {/* Main Content: Login Form */}
    <main className="flex-grow bg-white">
      <div className="max-w-md mx-auto mt-10 p-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Sign in to your account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Welcome back to Krishan!
        </p>

        <div className="bg-green-50 p-6 rounded-lg shadow-md max-w-md mx-auto">
  <form className="space-y-5">
    {/* Email Address */}
    <div>
  <label
    htmlFor="email"
    className="block text-gray-700 mb-1 font-medium"
  >
    Email Address
  </label>
  <input
    type="email"
    id="email"
    className="w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded focus:outline-none focus:ring focus:ring-green-600"
    placeholder="Enter your email"
  />
</div>


   {/* Password */}
<div>
  <label
    htmlFor="password"
    className="block text-gray-700 mb-1 font-medium"
  >
    Account Password
  </label>
  <input
    type="password"
    id="password"
    className="w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded focus:outline-none focus:ring focus:ring-green-600"
    placeholder="Enter your password"
  />
</div>

    {/* Remember Me / Forgot Password */}
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input type="checkbox" id="remember" className="mr-2" />
        <label htmlFor="remember" className="text-gray-700">
          Remember me
        </label>
      </div>
      <a
        href="#forgot-password"
        className="text-sm text-green-600 hover:underline"
      >
        Forgot password?
      </a>
    </div>

    {/* Sign In Button */}
    <button
      type="submit"
      className="w-full bg-green-400 hover:bg-green-500 text-white py-2 rounded transition-colors"
    >
      Sign In
    </button>

    {/* Or Divider */}
    <div className="flex items-center justify-center my-4">
      <div className="border-b w-1/5"></div>
      <p className="text-sm text-gray-500 mx-2">Or</p>
      <div className="border-b w-1/5"></div>
    </div>

    {/* Sign in with Google */}
    <button
      type="button"
      className="w-full flex items-center justify-center border border-gray-300 bg-white text-black rounded py-2 hover:bg-gray-100 transition-colors"
    >
      <svg className="h-5 w-5 mr-2" viewBox="0 0 48 48" fill="none">
        <path
          d="M44.5 20H24v8.5h11.7C34.7 33.4 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.4 0 6.6 1.3 9 3.7l5.9-5.9C34.1 5.5 29.3 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.8-.4-4.1z"
          fill="#FFC107"
        />
      </svg>
      Sign in with Google
    </button>
  </form>
</div>
        {/* Sign Up Link */}
        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{' '}
          <a
            href="signup"
            className="text-green-600 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </main>
  </div>
    </Layout>
  )
}

export default Login
