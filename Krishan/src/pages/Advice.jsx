import React from 'react'
import Layout from '../components/Layout'

const Advice = () => {
  return (
    <Layout>
       <div className="bg-white text-black font-sans">

  <main className="p-4">
    <div className="max-w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Categories Section */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <div className="space-y-4">
            <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-between">
              <img src="soil-management.jpg" alt="Soil Management" className="w-16 h-16 rounded-md" />
              <div className="flex-grow ml-4">
                <h3 className="font-semibold">Soil Management</h3>
                <p className="text-sm">Learn the best soil management practices for sustainable agriculture.</p>
              </div>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-between">
              <img src="crop-rotation.jpg" alt="Crop Rotation" className="w-16 h-16 rounded-md" />
              <div className="flex-grow ml-4">
                <h3 className="font-semibold">Crop Rotation</h3>
                <p className="text-sm">Understand the benefits of effective crop rotation techniques.</p>
              </div>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-between">
              <img src="pest-control.jpg" alt="Pest Control" className="w-16 h-16 rounded-md" />
              <div className="flex-grow ml-4">
                <h3 className="font-semibold">Pest Control</h3>
                <p className="text-sm">Explore organic methods to manage and control pests.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ask an Expert Section */}
        <div className="bg-gray-50 p-6 rounded-lg md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Ask an Expert</h2>
          <form>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm">Your Name</label>
                <input id="name" type="text" className="w-full p-2 mt-2 bg-gray-200 text-black rounded" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm">Your Email</label>
                <input id="email" type="email" className="w-full p-2 mt-2 bg-gray-200 text-black rounded" />
              </div>
              <div>
                <label htmlFor="question" className="block text-sm">Your Question</label>
                <textarea id="question" rows="4" className="w-full p-2 mt-2 bg-gray-200 text-black rounded"></textarea>
              </div>
              <button type="submit" className="mt-4 w-full bg-gray-300 p-3 text-white rounded">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
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

export default Advice
