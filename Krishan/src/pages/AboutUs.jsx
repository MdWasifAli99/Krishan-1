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
    </Layout>
  )
}

export default AboutUs
