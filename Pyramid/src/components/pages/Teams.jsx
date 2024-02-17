import React, { useState } from 'react';


const TeamMember = ({ image, name, profession, phoneNumber }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (

    <div 
      className="relative overflow-hidden group w-[400px] px-3 flex items-center justify-center py-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      
    >
    
      <img
        src={image}
        alt={name}
        className="w-full h-auto rounded-xl transition-transform transform group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white rounded-xl ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } transition-opacity`}
      >
        <div className="text-center relative top-[120px]">
          <h2 className="text-lg font-semibold">{name}</h2>
          {isHovered && (
            <div>
              <p className="text-sm">{profession}</p>
              <p className="text-sm">{phoneNumber}</p>
            </div>
          )}
        </div>
      </div>
    </div>
   
  );
};

// Usage example
const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Er. Navaraj Vaidya',
      image: 'https://i.ibb.co/gyTDJNF/ceo.jpg',
      profession: 'Chairman',
      phoneNumber: '9851045200',
    },
    {
      id: 2,
      name: 'Gopal Shrestha',
      image: 'https://i.ibb.co/mHvBK78/Whats-App-Image-2024-01-08-at-12-35-38-3.jpg',
      profession: 'Director',
      phoneNumber: '9851087988',
    },
    {
      id: 3,
      name: 'Er. Arjun Marasini',
      image: 'https://i.ibb.co/HxShFLK/Whats-App-Image-2024-01-08-at-12-35-38-1.jpg',
      profession: 'Director',
      phoneNumber: '+1 123 456 7890',
    },
    {
      id: 4,
      name: 'Rajendra Chaku',
      image: 'https://i.ibb.co/x8WK8XT/Whats-App-Image-2024-01-08-at-12-35-38.jpg',
      profession: 'Account Head',
      phoneNumber: '9851087988',
    },
    {
      id: 5,
      name: 'Er. Sujan Pradhan',
      image: 'https://i.ibb.co/ZXHgsKX/Whats-App-Image-2024-01-08-at-12-35-38-4.jpg',
      profession: 'Managing Director',
      phoneNumber: '9801228414',
    },
    {
      id: 6,
      name:'Suresh Marasini',
      image: 'https://i.ibb.co/Z2TwG81/Whats-App-Image-2024-01-08-at-12-35-38-2.jpg',
      profession: 'Accountnant',
      phoneNumber: '9851140412',
    },
    // Add more team members as needed
  ];

  return (
        
    <div className="flex flex-wrap gap-x-20 gap-y-10 relative left-[150px] max-sm:relative max-sm:left-[10px]">
      {teamMembers.map((member) => (
        <TeamMember
          key={member.id}
          name={member.name}
          image={member.image}
          profession={member.profession}
          phoneNumber={member.phoneNumber}
        />
      ))}
    </div>
    
  );
};

export default TeamSection;