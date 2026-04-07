import React from "react";

const Team = () => {
  const coFounders = [
    {
      name: "Ankita Kumar",
      role: "CEO & Co-Founder",
      bio: "Founder and technology builder with expertise in scalable digital platforms, data-driven systems, and product architecture. Combines strong technical execution with strategic product vision to build platforms designed for global scale and operational efficiency.",
      image: "/images/CEO.jpeg",
    },
    {
      name: "Nav Sharma",
      role: "Creative Director & Co-Founder",
      bio: "Media and storytelling specialist with expertise in digital video production and content platforms. Experienced in crafting compelling visual narratives and building high-quality media pipelines, with a focus on creating immersive edutainment experiences at scale.",
      image: null, // Placeholder - to be replaced later
    },
    {
      name: "Shreejan Mishra",
      role: "Founding Engineer & Co-Founder",
      bio: "Fullstack engineer with 4 years of proven experience, specializing in scalable, high-performance web platforms built with React.js, Node.js, and Express.js. AI-Native Engineer with expertise in rapid building and scaling of products.",
      image: "/images/FoundingEngineer.jpg",
    },
  ];

  const teamMembers = [
    {
      name: "Atif Kader",
      role: "Marketing Head",
      image: "/images/marketing.png",
    },
    {
      name: "Satyam Gupta",
      role: "Back End Founding Engineer",
      image: "/images/Backend.png",
    },
    {
      name: "Riya Sharma",
      role: "Children Psychologist",
      image: "/images/childPsychologist.png",
    },
    {
      name: "Rajat Shah",
      role: "Finance & Compliance Partner",
      image: null, // Placeholder - to be replaced later
    },
  ];

  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow">
        {/* Co-Founders */}
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">
          Co-Founders
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {coFounders.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-primary/20 p-8 rounded-xl shadow-lg text-center hover:shadow-primary/20 hover:border-primary/40 transition-all"
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover border-2 border-primary/30 rounded-full mx-auto mb-6"
                />
              ) : (
                <div className="w-32 h-32 bg-dark-light border-2 border-primary/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">
                    Photo Coming Soon
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold mb-2 text-white">
                {member.name}
              </h3>
              <p className="text-primary font-semibold mb-4">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Extended Team */}
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">
          Team
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-primary/20 p-6 rounded-xl shadow-lg text-center hover:shadow-primary/20 hover:border-primary/40 transition-all"
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover border-2 border-primary/30 rounded-full mx-auto mb-4"
                />
              ) : (
                <div className="w-24 h-24 bg-dark-light border-2 border-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">
                    Photo Coming Soon
                  </span>
                </div>
              )}
              <h3 className="text-lg font-bold mb-2 text-white">
                {member.name}
              </h3>
              <p className="text-primary font-semibold text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
