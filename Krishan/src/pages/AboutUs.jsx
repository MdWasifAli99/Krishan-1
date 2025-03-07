import React from 'react'
import Layout from '../components/Layout'

const AboutUs = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-green-50 to-white py-16 px-8 min-h-screen flex items-center">
        <div className="w-full">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-green-900 leading-tight">
              Cultivating Future, Sustaining Traditions
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Embracing innovation while honoring time-honored agricultural practices.
            </p>
          </div>

          {/* About Us Content Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Our Mission',
                image: 'your-image-url-1.jpg',
                text: 'At Krishan, we are dedicated to creating sustainable farming practices that combine traditional wisdom and innovative technology for a greener tomorrow.'
              },
              {
                title: 'Our Story',
                image: 'your-image-url-2.jpg',
                text: 'Founded as a small family farm, Krishan has evolved into a leader in sustainable agricultural solutions, rooted in tradition and focused on innovation.'
              },
              {
                title: 'Our Values',
                image: 'your-image-url-3.jpg',
                text: 'We value respect for the earth, quality commitment, and community focus, supporting local farmers and sustainable agriculture for future generations.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105">
                <img src={item.image} alt={`${item.title} Image`} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-green-800 mb-4">{item.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image and Footer Section */}
          <div className="mt-20 text-center">
            <img
              src="/path-to-your-image.jpg"
              alt="Agricultural scene"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-xl"
            />
            <p className="text-xl text-gray-700 mt-8">
              Join us in cultivating a future that is both prosperous and sustainable.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-green-50 border-t border-gray-200 mt-10 w-full">
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
