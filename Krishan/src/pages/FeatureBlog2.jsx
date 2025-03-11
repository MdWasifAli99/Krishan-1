import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom'; // CSS file to style the page

const FeatureBlog1 = () => {
  return (
    <Layout>
    <div className="max-w-7xl mx-auto p-8">
  <header className="text-center mb-12">
    <h2 className="text-sm text-gray-500">Features</h2>
    <h1 className="text-4xl font-bold text-green-800">Explore Our Innovative Farming Solutions</h1>
    <p className="text-gray-600 mt-4">
      At Krishan, we harness technology to empower farmers with essential tools. Our features are used to enhance productivity and foster a thriving agricultural community. Join us as we explore how these technologies are revolutionizing the agricultural industry and improving the livelihoods of farmers around the world.
    </p>
  </header>

  {/* Market Monitoring Section */}
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-green-700">Market Monitoring: Stay Ahead of Trends</h2>
    <p className="text-gray-600 mt-4">
      Access real-time price trends and demand insights to make informed decisions. Market monitoring empowers farmers to adjust strategies for maximum profitability. By leveraging advanced data analysis and predictive algorithms, farmers can stay ahead of market fluctuations and plan their crops accordingly. This leads to more efficient sales and optimized pricing strategies.
    </p>
    <img src="https://via.placeholder.com/800x400" alt="Market Monitoring" className="w-full mt-4" />
    <p className="text-gray-600 mt-4">
      With real-time market data, farmers can make informed decisions about which crops to grow, when to sell, and how to price their produce. This reduces the risk of crop overproduction or underproduction, ensuring that supply meets demand. The ability to track market trends helps farmers maintain a competitive edge and increase profitability.
    </p>
  </section>

  {/* Weather Info Section */}
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-green-700">Weather Info: Plan Your Farming Activities</h2>
    <p className="text-gray-600 mt-4">
      Get accurate weather forecasts and alerts tailored for agriculture. Stay updated with the best planting, irrigation, and harvesting times. By using advanced meteorological tools, farmers can access hyper-local weather data that helps them avoid adverse weather conditions. These insights allow for better resource management, preventing overwatering, frost damage, and crop loss.
    </p>
    <img src="https://via.placeholder.com/800x400" alt="Weather Info" className="w-full mt-4" />
    <p className="text-gray-600 mt-4">
      For example, farmers can use weather data to determine the best time to plant seeds or water crops. By receiving warnings about impending weather events such as frost, heavy rainfall, or heat waves, they can take preventive measures to protect crops from damage. Weather forecasts also help farmers optimize their irrigation schedules, conserving water and ensuring crops receive the right amount of moisture.
    </p>
  </section>

  {/* Farmer Community Section */}
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-green-700">Farmer Community: Connect and Share Knowledge</h2>
    <p className="text-gray-600 mt-4">
      Join forums and discussions to learn from fellow farmers. Share insights, tips, and best practices for successful farming. This feature creates a virtual network where farmers can exchange knowledge about new technologies, pest management, and soil health. Collaborative learning in a community setting fosters innovation and problem-solving for challenges faced by farmers globally.
    </p>
    <img src="https://via.placeholder.com/800x400" alt="Farmer Community" className="w-full mt-4" />
    <p className="text-gray-600 mt-4">
      By joining a farmer community, farmers have the opportunity to discuss common challenges, share solutions, and access resources that can improve their operations. These networks allow farmers to stay updated with the latest trends and best practices, helping them grow and thrive in a rapidly changing agricultural landscape.
    </p>
  </section>

  {/* Expert Advice Section */}
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-green-700">Expert Advice: Get Professional Guidance</h2>
    <p className="text-gray-600 mt-4">
      Receive expert advice from seasoned agricultural specialists. Get personalized insights to improve your farming practices and boost yield. With access to top agricultural experts, farmers can receive real-time advice on crop diseases, pest management, and market trends. This feature helps farmers stay informed and make the best decisions for their operations.
    </p>
    <img src="https://via.placeholder.com/800x400" alt="Expert Advice" className="w-full mt-4" />
    <p className="text-gray-600 mt-4">
      Expert advice empowers farmers to address specific challenges they face in their day-to-day operations. Whether it’s managing pests, handling crop diseases, or optimizing soil health, agricultural specialists can provide tailored solutions that result in healthier crops, increased yields, and more efficient operations.
    </p>
  </section>

  {/* Smart Irrigation Section */}
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-green-700">Smart Irrigation: Save Water and Boost Yields</h2>
    <p className="text-gray-600 mt-4">
      Utilize smart irrigation systems that optimize water usage, ensuring crops receive the perfect amount of water while conserving resources. Smart irrigation technologies use sensors to monitor soil moisture levels and weather forecasts to determine the precise amount of water needed. This approach prevents overwatering and helps in water conservation, especially in regions with water scarcity.
    </p>
    <img src="https://via.placeholder.com/800x400" alt="Smart Irrigation" className="w-full mt-4" />
    <p className="text-gray-600 mt-4">
      By using real-time data, farmers can ensure that water is used efficiently, reducing waste and lowering operational costs. This not only improves the health and productivity of crops but also helps conserve water resources, which is increasingly important in drought-prone areas.
    </p>
  </section>

  {/* Crop Management Tools Section */}
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-green-700">Crop Management Tools: Optimize Growth</h2>
    <p className="text-gray-600 mt-4">
      Manage your crops with precision tools that track growth patterns, detect diseases, and provide optimal care recommendations. These management tools allow farmers to monitor the health of their crops with real-time data from satellite imagery and field sensors. By identifying early signs of diseases or pests, farmers can take preventative measures that result in higher quality crops and reduced crop losses.
    </p>
    <img src="https://via.placeholder.com/800x400" alt="Crop Management" className="w-full mt-4" />
    <p className="text-gray-600 mt-4">
      By integrating crop management tools into their operations, farmers can make proactive decisions that prevent losses, improve soil health, and maximize crop yields. These tools provide a comprehensive view of the farm, helping farmers optimize every aspect of their operations.
    </p>
  </section>

  {/* Soil Health Monitoring Section */}
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-green-700">Soil Health Monitoring: Ensure Fertile Land</h2>
    <p className="text-gray-600 mt-4">
      Monitor soil health with cutting-edge sensors that measure moisture, pH levels, and nutrient content, allowing you to improve soil quality and maximize crop productivity. Healthy soil is the foundation of sustainable farming. By utilizing soil monitoring technologies, farmers can adjust fertilizer use, prevent nutrient runoff, and ensure soil fertility for future generations of crops.
    </p>
    <img src="https://via.placeholder.com/800x400" alt="Soil Health Monitoring" className="w-full mt-4" />
    <p className="text-gray-600 mt-4">
      Soil health monitoring helps farmers maintain optimal growing conditions by ensuring that the soil has the right balance of nutrients and moisture. This approach results in stronger plants, higher yields, and more sustainable farming practices.
    </p>
  </section>

  {/* Drone Surveillance Section */}
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-green-700">Drone Surveillance: Efficient Field Management</h2>
    <p className="text-gray-600 mt-4">
      Use drones for aerial surveillance to monitor crop conditions, detect pests, and manage large fields with precision and ease. Drones are equipped with high-resolution cameras and thermal sensors that allow farmers to get real-time views of their fields. These drones provide aerial images that help identify issues such as pest infestations, crop stress, and water distribution, making it easier to manage large farm operations.
    </p>
    <img src="https://via.placeholder.com/800x400" alt="Drone Surveillance" className="w-full mt-4" />
    <p className="text-gray-600 mt-4">
      Drones enable farmers to monitor their fields from above, allowing for quicker detection of potential problems. This proactive approach reduces the need for manual inspections and enables more effective management of large areas of farmland.
    </p>
  </section>

  {/* Automated Harvesting Section */}
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-green-700">Automated Harvesting: Efficiency at its Best</h2>
    <p className="text-gray-600 mt-4">
      Automate harvesting with the latest equipment that allows for faster, more efficient harvesting, reducing labor costs and increasing yield. Automated harvesters are designed to operate quickly and efficiently, reducing the time it takes to bring crops in from the field. This automation frees up labor for other essential tasks and ensures that crops are harvested at peak maturity for maximum quality and yield.
    </p>
    <img src="https://via.placeholder.com/800x400" alt="Automated Harvesting" className="w-full mt-4" />
    <p className="text-gray-600 mt-4">
      By automating the harvesting process, farmers can significantly reduce the time and labor involved in harvesting. This also ensures that crops are harvested efficiently, preserving quality and reducing waste, ultimately leading to higher profits.
    </p>
  </section>
</div>

    </Layout>
  );
};

export default FeatureBlog1;
