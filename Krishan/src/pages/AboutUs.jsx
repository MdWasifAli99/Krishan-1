import React from 'react'
import Layout from '../components/Layout'

const AboutUs = () => {
  return (
    <Layout>
      <div className="bg-gray-100 py-12 px-6">
  <div className="max-w-full mx-auto">
    {/* Header Section */}
    <div className="bg-gray-100 text-center mb-12 py-12">
  <h1 className="text-4xl font-bold text-green-800">Cultivating Future, Sustaining Traditions</h1>
  <p className="mt-4 text-xl text-gray-700">We embrace innovation while honoring age-old agricultural practices.</p>
</div>


    {/* About Us Content Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="card bg-white shadow-lg rounded-lg p-6">
  <img src="your-image-url-1.jpg" alt="Mission Image" className="w-full h-64 object-cover rounded-t-lg" />
  <h2 className="text-2xl font-semibold text-green-800 mt-4">Our Mission</h2>
  <p className="mt-4 text-gray-600">
    At Krishan, we are dedicated to creating sustainable farming practices that not only ensure the well-being of our planet but also strengthen the agricultural community. Our mission is to combine traditional farming wisdom with innovative technology for a greener tomorrow.
  </p>
</div>

<div className="card bg-white shadow-lg rounded-lg p-6">
  <img src="your-image-url-2.jpg" alt="Story Image" className="w-full h-64 object-cover rounded-t-lg" />
  <h2 className="text-2xl font-semibold text-green-800 mt-4">Our Story</h2>
  <p className="mt-4 text-gray-600">
    Founded with a passion for both the future and the past, Krishan began as a small family farm. Over the years, we have grown into a leading provider of sustainable agricultural solutions, rooted in tradition and focused on innovation. We’re proud to be part of the legacy of farmers who continue to shape the future of agriculture.
  </p>
</div>

<div className="card bg-white shadow-lg rounded-lg p-6">
  <img src="your-image-url-3.jpg" alt="Values Image" className="w-full h-64 object-cover rounded-t-lg" />
  <h2 className="text-2xl font-semibold text-green-800 mt-4">Our Values</h2>
  <p className="mt-4 text-gray-600">
    We believe in respect for the earth, commitment to quality, and a focus on community. By honoring nature and supporting our local farmers, we aim to make agriculture more sustainable and prosperous for future generations.
  </p>
</div>

    </div>

    {/* Image and Footer Section */}
    <div className="mt-16 text-center">
      <img
        src="/path-to-your-image.jpg"
        alt="Agricultural scene"
        className="w-full max-w-full mx-auto rounded-lg shadow-lg"
      />
      <div className="mt-8">
        <p className="text-xl text-gray-700">Join us in cultivating a future that's both prosperous and sustainable!</p>
      </div>
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

export default AboutUs
