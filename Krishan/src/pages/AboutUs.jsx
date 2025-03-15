import React from 'react';
import Layout from '../components/Layout';

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
              Embracing innovation while honoring time-honored agricultural practices in Bangladesh.
            </p>
          </div>

          {/* About Us Content Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Our Mission',
                image: '/i1.png', // Updated image reference
                text: 'At Krishan, we are dedicated to creating sustainable farming practices that combine traditional wisdom and innovative technology for a greener tomorrow.'
              },
              {
                title: 'Our Story',
                image: '/i2.png', // Updated image reference
                text: 'Founded as a small family farm, Krishan has evolved into a leader in sustainable agricultural solutions, rooted in tradition and focused on innovation.'
              },
              {
                title: 'Our Values',
                image: '/i3.png', // Updated image reference
                text: 'We value respect for the earth, quality commitment, and community focus, supporting local farmers and sustainable agriculture for future generations.'
              },
              {
                title: 'Our Struggles: Challenges Faced by Farmers in Bangladesh',
                image: '/i4.png', // Replace with your image URL
                text: 'Farmers in Bangladesh face numerous challenges, including unpredictable weather, flooding, and limited access to advanced agricultural technologies. These struggles hinder productivity and often lead to crop failures, which affect the livelihood of millions of farmers in rural areas.'
              },
              {
                title: 'Our Success: Overcoming Challenges Through Innovation',
                image: '/i5.png', // Replace with your image URL
                text: 'Despite these challenges, Krishan has helped countless farmers overcome adversity through innovative practices, such as the use of smart irrigation systems, crop management tools, and weather forecasting systems. By embracing these technologies, farmers in Bangladesh are now able to adapt and thrive, increasing their yields and ensuring food security.'
              },
              {
                title: 'Bangladeshi Farmers: The Heart of Agriculture',
                image: '/i7.png', // Replace with your image URL
                text: 'The farmers of Bangladesh are the backbone of the country’s agricultural economy. Despite facing numerous challenges like land scarcity, water shortages, and climate change, they continue to feed the nation. By empowering them with the right tools and technologies, we can help them build a more sustainable and prosperous future.'
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
              src="/i6.png" // Replace with your image URL
              alt="Agricultural scene"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-xl"
            />
            <p className="text-xl text-gray-700 mt-8">
              Join us in cultivating a future that is both prosperous and sustainable for Bangladeshi farmers.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
