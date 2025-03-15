// src/pages/FeatureBlog1.jsx
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const CommunityBlogPage1 = () => {
  return (
    <Layout>
      <div className="container mx-auto p-8">
        {/* Hero Section */}
        <header className="text-center py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg mb-12">
          <h1 className="text-5xl font-bold">Real Stories from Our Farming Community</h1>
          <p className="text-2xl mt-4">Discover how fellow farmers have transformed their practices and achieved remarkable results</p>
          <img src="path-to-your-hero-image.jpg" alt="Farming Community" className="mt-8 w-full rounded-xl shadow-lg" />
        </header>

        {/* Section 1 - Innovative Techniques */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Innovative Techniques Led to a Bountiful Harvest</h2>
          <p className="text-lg text-gray-700 mb-6">
            Many farmers in our community have adopted new techniques that have revolutionized their harvests. 
            With sustainable farming methods, innovative irrigation systems, and precision agriculture, they've been able to increase yield while minimizing environmental impact.
          </p>
          <img src="path-to-innovative-techniques-image.jpg" alt="Innovative Farming Techniques" className="w-full rounded-lg shadow-xl mb-6" />
          
          <p className="text-lg text-gray-700 mb-6">
            As technology advances, so does the way we approach farming. Techniques such as vertical farming, hydroponics, and the use of drones for crop monitoring have enabled farmers to increase efficiency while reducing the usage of water and pesticides.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Farmers are also experimenting with bioengineering, genetic modifications, and integrated pest management to overcome challenges that were once considered insurmountable.
          </p>

          {/* Subsection - Sustainable Practices */}
          <h3 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Sustainable Practices for a Better Future</h3>
          <p className="text-lg text-gray-700 mb-6">
            Sustainable farming methods have become a cornerstone for many community members. Crop rotation, mulching, and organic farming techniques help preserve soil health, ensuring the land remains fertile for future generations. These methods also reduce dependency on synthetic fertilizers and pesticides, making farming practices more eco-friendly.
          </p>

          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Adoption of Precision Farming</h3>
          <p className="text-lg text-gray-700 mb-6">
            Precision farming involves the use of GPS, IoT sensors, and big data analytics to optimize crop production. By tracking and analyzing variables like soil moisture, temperature, and nutrient levels, farmers can apply resources more effectively, reducing waste and increasing crop yields.
          </p>
        </section>

        {/* Section 2 - Overcoming Weather Challenges */}
        <section className="mb-12 bg-gray-100 p-10 rounded-xl shadow-lg">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Community Support Helped Overcome Weather Challenges</h2>
          <p className="text-lg text-gray-700 mb-6">
            Weather-related challenges have always been a significant concern for farmers. However, community collaboration and shared resources have proven to be a lifesaver.
            During unpredictable weather events, our community rallied together, shared tips on weatherproofing crops, and supported each other in times of need. With these efforts, farmers were able to minimize losses and safeguard their livelihoods.
          </p>
          <img src="path-to-weather-challenges-image.jpg" alt="Weather Challenges" className="w-full rounded-lg shadow-xl mb-6" />
          
          <p className="text-lg text-gray-700 mb-6">
            Farmers now have access to advanced weather prediction technologies, which allow them to plan their activities more effectively. Through mobile applications and weather tracking tools, they can predict storms, heatwaves, or other disruptive weather patterns in advance, helping them adjust their practices.
          </p>

          {/* Subsection - Weatherproofing Techniques */}
          <h3 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Weatherproofing Techniques for Farmers</h3>
          <p className="text-lg text-gray-700 mb-6">
            Farmers have developed numerous weatherproofing strategies, such as using crop covers to protect plants from frost, installing irrigation systems to reduce the effects of drought, and planting windbreaks to shield crops from strong winds. These efforts help mitigate the risks posed by unpredictable weather.
          </p>

          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Sharing Resources and Knowledge</h3>
          <p className="text-lg text-gray-700 mb-6">
            Community-driven support has been crucial during extreme weather events. Local farmers often share equipment, labor, and advice to help each other cope with difficult conditions. By pooling resources, they can weather any storm together and bounce back stronger.
          </p>
        </section>

        {/* Section 3 - Success Stories */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Success Stories from Local Farmers</h2>
          <p className="text-lg text-gray-700 mb-6">
            Here are some inspiring stories from local farmers who overcame obstacles and achieved remarkable success. From adopting new organic practices to embracing modern tools, these farmers have proven that determination and collaboration can lead to extraordinary results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <article className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Farmer A's Journey to Organic Success</h3>
              <p className="text-lg text-gray-700 mb-4">
                After years of traditional farming, Farmer A decided to switch to organic methods. Despite initial challenges, with the support of the community, they achieved a 30% increase in their harvest.
              </p>
              <img src="path-to-organic-farming-image.jpg" alt="Organic Farming" className="w-full rounded-lg shadow-xl mb-6" />
              <p className="text-lg text-gray-700">
                Through careful planning and community-backed initiatives, Farmer A improved soil quality, reduced pesticide use, and witnessed a robust improvement in plant health and yield. This success story showcases the potential of organic farming in today's market.
              </p>
            </article>

            <article className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Farmer B's Resilience During Drought</h3>
              <p className="text-lg text-gray-700 mb-4">
                Farmer B faced a severe drought but managed to save their crops with innovative water management strategies. Their story highlights the power of resilience and the importance of community knowledge sharing.
              </p>
              <img src="path-to-drought-resilience-image.jpg" alt="Drought Resilience" className="w-full rounded-lg shadow-xl mb-6" />
              <p className="text-lg text-gray-700">
                By installing drip irrigation systems and collecting rainwater, Farmer B was able to sustain crops even during the driest months. They also participated in local training sessions to learn water conservation techniques, sharing their knowledge with neighboring farmers.
              </p>
            </article>
          </div>
        </section>

        {/* Section 4 - Environmental Sustainability */}
        <section className="mb-12 bg-green-100 p-10 rounded-xl shadow-lg">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Commitment to Environmental Sustainability</h2>
          <p className="text-lg text-gray-700 mb-6">
            Sustainable farming practices are at the heart of our community's efforts. Farmers are increasingly adopting practices that not only improve yields but also reduce environmental impact. From composting organic matter to minimizing the use of chemical fertilizers, they are committed to a healthier environment for future generations.
          </p>
          <img src="path-to-sustainability-image.jpg" alt="Environmental Sustainability" className="w-full rounded-lg shadow-xl mb-6" />
          <p className="text-lg text-gray-700">
            The adoption of agroforestry, which integrates trees into agricultural systems, has also proven to be highly beneficial. These trees provide habitat for wildlife, prevent soil erosion, and even contribute to climate resilience by sequestering carbon.
          </p>

          {/* Subsection - Green Technologies */}
          <h3 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Green Technologies in Farming</h3>
          <p className="text-lg text-gray-700 mb-6">
            Technologies like solar-powered irrigation systems, biogas for farm waste management, and electric tractors are helping farmers reduce their carbon footprint. These technologies not only make farming more sustainable but also lower long-term costs for farmers.
          </p>
        </section>

        {/* Section 5 - How to Join the Community */}
        <section className="mb-12 bg-blue-100 p-10 rounded-xl shadow-lg">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Join Our Farming Community</h2>
          <p className="text-lg text-gray-700 mb-6">
            Interested in learning more about sustainable farming, sharing your experiences, or supporting fellow farmers? Join our community today! We offer workshops, discussions, and opportunities to collaborate with like-minded individuals who are passionate about transforming the farming landscape.
          </p>
          <Link to="/signup" className="inline-block px-8 py-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Join Now
          </Link>
        </section>

        {/* Section 6 - Testimonials */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">What Our Farmers Say</h2>
          <div className="space-y-12">
            <blockquote className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">"This community has been a lifesaver! The support and knowledge sharing are invaluable. I have been able to grow healthier crops and improve my profits with the help of everyone here."</p>
              <cite className="text-sm text-gray-500">- Ahmed Nafish Siam</cite>
            </blockquote>

            <blockquote className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">"I never knew how much difference sustainable practices could make. Thanks to this community, I've increased my harvest and decreased my environmental footprint."</p>
              <cite className="text-sm text-gray-500">- Hridoy Saha</cite>
            </blockquote>
          </div>
        </section>

        {/* Footer Section */}
       
      </div>
    </Layout>
  );
};

export default CommunityBlogPage1;
