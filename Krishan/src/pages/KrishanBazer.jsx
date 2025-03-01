import Layout from '../components/Layout'
import React from 'react'


const KrishanBazer = () => {
  return (
    <Layout>
          <div className="bg-white font-sans text-gray-800">
      {/* Search Section */}
      <section className="p-10 bg-gray-100 text-center">
        <h1 className="text-3xl font-bold mb-4">Get real-time market updates for your crops</h1>
        <p className="text-xl mb-4">Browse articles and ask questions to our experts</p>
        <div className="flex justify-center">
          <input
            type="text"
            className="px-6 py-2 rounded-l-lg border-2 border-gray-300 focus:outline-none"
            placeholder="Enter your market query here"
          />
          <button className="px-6 py-2 bg-black text-white rounded-r-lg">Search</button>
        </div>
      </section>

      {/* Market Monitoring Section */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-white">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
          <h3 className="font-bold">Crop Prices</h3>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
          <h3 className="font-bold">Expert Advice</h3>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
          <h3 className="font-bold">User Profiles</h3>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
          <h3 className="font-bold">Secure Login</h3>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="path_to_image1.jpg" alt="Product 1" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-4">$5.99 - High-yield crop seeds</h3>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Add to cart</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="path_to_image2.jpg" alt="Product 2" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-4">$6.99 - Organic fertilizers</h3>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Add to cart</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="path_to_image3.jpg" alt="Product 3" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-4">$7.99 - Smart irrigation system</h3>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Add to cart</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="path_to_image4.jpg" alt="Product 4" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-4">$9.99 - Precision farming equipment</h3>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Add to cart</button>
          </div>
        </div>
      </section>

      {/* Expert Advice Section */}
      <section className="p-6 bg-white">
        <h2 className="text-2xl font-bold mb-4">Expert Advice</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
            <h3 className="font-bold">Crop cultivation tips</h3>
            <p className="text-gray-700">Learn about crop cultivation techniques for better yields.</p>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Read More</button>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
            <h3 className="font-bold">Livestock essentials</h3>
            <p className="text-gray-700">Essential equipment for raising healthy livestock.</p>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Discover</button>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
            <h3 className="font-bold">Soil management advice</h3>
            <p className="text-gray-700">Understand soil health and its impact on crops.</p>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Learn More</button>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Explore our articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="path_to_image5.jpg" alt="Livestock care" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-4">5 Tips on Livestock Care</h3>
            <p className="text-gray-700">Get expert advice on livestock care for better yields.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="path_to_image6.jpg" alt="Crop cultivation" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-4">10 Tips for Growing Healthy Crops</h3>
            <p className="text-gray-700">Expert advice for successful crop cultivation.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="path_to_image7.jpg" alt="Farming tips" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-4">Essential Farming Equipment</h3>
            <p className="text-gray-700">Make sure you have the right tools for efficient farming.</p>
          </div>
        </div>
      </section>
    </div>  
    </Layout>
  )
}

export default KrishanBazer
