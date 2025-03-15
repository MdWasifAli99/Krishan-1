import React from 'react';
import Layout from '../components/Layout';

const AboutUs = () => {
  return (
    <Layout>
      <div className="font-poppins bg-gradient-to-b from-[#0a1f1d] to-[#0d2a28] text-white min-h-screen">
        {/* Header Section */}
        <section className="relative py-24 px-6 md:px-12 lg:px-24 text-center">
          <p1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
            Cultivating Future, Sustaining Traditions
          </p1> <br></br><br></br>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Embracing innovation while honoring time-honored agricultural practices in Bangladesh.
          </p>
        </section>

        {/* About Us Content Section */}
        <section className="py-6 px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Our Mission',
                image: '/i1.png', // Updated image reference
                text: 'At Krishan, we are dedicated to creating sustainable farming practices that combine traditional wisdom and innovative technology for a greener tomorrow.',
              },
              {
                title: 'Our Story',
                image: '/i2.png', // Updated image reference
                text: 'Founded as a small family farm, Krishan has evolved into a leader in sustainable agricultural solutions, rooted in tradition and focused on innovation.',
              },
              {
                title: 'Our Values',
                image: '/i3.png', // Updated image reference
                text: 'We value respect for the earth, quality commitment, and community focus, supporting local farmers and sustainable agriculture for future generations.',
              },
              {
                title: 'Our Struggles: Challenges Faced by Farmers in Bangladesh',
                image: '/i4.png', // Replace with your image URL
                text: 'Farmers in Bangladesh face numerous challenges, including unpredictable weather, flooding, and limited access to advanced agricultural technologies. These struggles hinder productivity and often lead to crop failures, which affect the livelihood of millions of farmers in rural areas.',
              },
              {
                title: 'Our Success: Overcoming Challenges Through Innovation',
                image: '/i5.png', // Replace with your image URL
                text: 'Despite these challenges, Krishan has helped countless farmers overcome adversity through innovative practices, such as the use of smart irrigation systems, crop management tools, and weather forecasting systems. By embracing these technologies, farmers in Bangladesh are now able to adapt and thrive, increasing their yields and ensuring food security.',
              },
              {
                title: 'Bangladeshi Farmers: The Heart of Agriculture',
                image: '/i7.png', // Replace with your image URL
                text: 'The farmers of Bangladesh are the backbone of the country’s agricultural economy. Despite facing numerous challenges like land scarcity, water shortages, and climate change, they continue to feed the nation. By empowering them with the right tools and technologies, we can help them build a more sustainable and prosperous future.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#0a2f2c] rounded-2xl border-2 border-[#00ff88]/20 hover:border-[#00b8ff] transition-all shadow-2xl shadow-[#00ff88]/10 hover:shadow-[#00b8ff]/20 overflow-hidden transform hover:scale-105 duration-300"
              >
                <img
                  src={item.image}
                  alt={`${item.title} Image`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-[#00ff88] mb-4">{item.title}</h2>
                  <p className="text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-10 px-6 md:px-12 lg:px-5 text-center">
          
          <p2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
            Owners of Krishan 
          </p2> <br></br><br></br><br></br><br></br>

          {/* New Section: Replacing Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Market Monitoring Card */}
            <div className="bg-[#0d2a28] p-13 rounded-lg shadow-2xl shadow-[#00ff88]/30 transform hover:scale-105 transition-transform duration-300">
              
              <p2 className="text-2xl font-bold mb-8 text-[#00ff88]">Md. Wasif Ali</p2> <br></br><br></br>
              <p className="text-lg text-gray-300 mb-8">
                ID: 20220204054
              </p>
              
            </div>

            {/* Weather Info Card */}
            <div className="bg-[#0d2a28] p-13 rounded-lg shadow-2xl shadow-[#00ff88]/30 transform hover:scale-105 transition-transform duration-300">
              <p2 className="text-2xl font-bold mb-8 text-[#00ff88]">Ma-Huan Sheikh Meem</p2><br></br><br></br>
              <p className="text-lg text-gray-300 mb-8">
                ID: 20220204070
              </p>
             
            </div>

            {/* Farmer Community Card */}
            <div className="bg-[#0d2a28] p-13 rounded-lg shadow-2xl shadow-[#00ff88]/30 transform hover:scale-105 transition-transform duration-300">
              
              <p2 className="text-2xl font-bold mb-8 text-[#00ff88]">Hasibuzzaman Khan Rafi</p2><br></br><br></br>
              <p className="text-lg text-gray-300 mb-8">
                ID: 20220204055
              </p>
            
            </div>
          </div>
        </section>
        

      </div>
    </Layout>
  );
};

export default AboutUs;