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
    {/* Footer */}
    <footer className="bg-green-50 border-t border-gray-200 mt-10">
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
      {/* Newsletter */}
      <div className="md:w-1/2 lg:w-1/3 space-y-2">
        <h3 className="text-sm font-semibold text-gray-700">
          Subscribe to our newsletter for the latest updates on features and releases
        </h3>
        <div className="flex">
          <input
            type="email"
            placeholder="Your Email Here"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-green-600"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r">
            Join
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap md:w-1/2 lg:w-2/3 justify-between">
        {/* Resources */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold text-gray-800">Resources</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>
              <a href="#about" className="hover:text-green-600">About</a>
            </li>
            <li>
              <a href="#blog" className="hover:text-green-600">Blog Posts</a>
            </li>
            <li>
              <a href="#help" className="hover:text-green-600">Help Center</a>
            </li>
            <li>
              <a href="#community" className="hover:text-green-600">Community</a>
            </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold text-gray-800">Connect With Us</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>
              <a href="#facebook" className="hover:text-green-600">Facebook Page</a>
            </li>
            <li>
              <a href="#instagram" className="hover:text-green-600">Instagram Feed</a>
            </li>
            <li>
              <a href="#twitter" className="hover:text-green-600">Twitter</a>
            </li>
            <li>
              <a href="#linkedin" className="hover:text-green-600">LinkedIn</a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold text-gray-800">Legal Links</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>
              <a href="#privacy" className="hover:text-green-600">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms" className="hover:text-green-600">Terms of Service</a>
            </li>
            <li>
              <a href="#cookie" className="hover:text-green-600">Cookie Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
    
    </Layout>
  )
}

export default SignUp
