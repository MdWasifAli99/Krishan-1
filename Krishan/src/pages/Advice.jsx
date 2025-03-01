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

  <footer className="bg-gray-100 text-center p-4 mt-6">
    <p className="text-sm">&copy; 2025 KrishanPlatform | Your trusted source for agricultural expertise and resources.</p>
    <div className="space-x-4 mt-2">
      <a href="#" className="hover:text-gray-700">Facebook</a>
      <a href="#" className="hover:text-gray-700">Twitter</a>
      <a href="#" className="hover:text-gray-700">LinkedIn</a>
    </div>
  </footer>
</div>

    </Layout>
  )
}

export default Advice
