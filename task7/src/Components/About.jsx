const About = () => {
    return (
      <div className="container mx-auto px-4 py-8 pt-20">
        {" "}
        {/* Added pt-20 for top padding */}
        <h1 className="text-4xl font-bold mb-6 ml-80">
          About Innomatics Research Labs
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
          <p className="text-gray-700 mb-4">
            Innomatics Research Labs is a pioneer in technology education,
            specializing in Data Science, Machine Learning, and Full Stack
            Development. Founded with the vision to bridge the gap between
            academic knowledge and industry requirements, we have successfully
            trained thousands of students and professionals since our inception.
          </p>
          <p className="text-gray-700 mb-4">
            Our commitment to excellence and practical learning has made us one of
            the most trusted names in technology training. We focus on hands-on
            experience, real-world projects, and industry-relevant skills that
            prepare our students for successful careers in tech.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-lg font-semibold">Students Trained</div>
            <p className="text-gray-600">Successfully completed our programs</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-lg font-semibold">Industry Partners</div>
            <p className="text-gray-600">Collaborating for placements</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-lg font-semibold">Placement Rate</div>
            <p className="text-gray-600">Successful career transitions</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Practical Learning</h3>
              <p className="text-gray-700">
                Focus on hands-on experience and real-world applications
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Industry Relevance</h3>
              <p className="text-gray-700">
                Curriculum aligned with current industry requirements
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Mentorship</h3>
              <p className="text-gray-700">
                Guidance from experienced industry professionals
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Career Support</h3>
              <p className="text-gray-700">
                Comprehensive placement assistance and career guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  