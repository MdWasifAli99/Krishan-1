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

    </Layout>
  )
}

export default AboutUs
