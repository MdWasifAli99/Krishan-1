import Layout from '../components/Layout'
import React from 'react'

const SignUp = () => {
  return (
    <Layout>
       <div className="flex items-center justify-center min-h-screen bg-green-50 p-4">
         <div className="w-full md:w-1/2 bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>
            <p className="text-center text-gray-600 mb-6">Join Krishan by signing up today!</p>
            <form>
                <input
                    type="text"
                    placeholder="First & Last Name"
                    className="input-field border p-2 w-full mb-4"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="input-field border p-2 w-full mb-4"
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="input-field border p-2 w-full mb-4"
                />
                <input
                    type="text"
                    placeholder="Village"
                    className="input-field border p-2 w-full"
                    style={{ marginBottom: '0.5cm' }}
                />
                <input
                    type="text"
                    placeholder="Upazila (Sub-district)"
                    className="input-field border p-2 w-full mb-4"
                />
                <input
                    type="text"
                    placeholder="District"
                    className="input-field border p-2 w-full mb-4"
                />
                <input
                    type="text"
                    placeholder="Division"
                    className="input-field border p-2 w-full mb-4"
                />
                <input
                    type="password"
                    placeholder="Create Password"
                    className="input-field border p-2 w-full mb-4"
                />
                <div className="flex items-center space-x-2 mb-4">
                    <input type="checkbox" id="terms" className="h-4 w-4" />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree with the{' '}
                        <a href="#" className="text-green-600">
                            Terms &amp; Conditions
                        </a>
                    </label>
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg">
                    Sign Up
                </button>
            </form>
            <div className="mt-4 text-center px-4">
                <button className="w-full flex items-center justify-center border py-2 rounded-lg bg-green-600 text-white">
                    <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google"
                        className="h-5 w-5 mr-2"
                    />
                    Sign up with Google
                </button>
                <p className="mt-4 text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-green-600">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default SignUp
