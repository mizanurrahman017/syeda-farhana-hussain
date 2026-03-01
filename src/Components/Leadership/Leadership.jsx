import React from "react";

const Leadership = () => {

  const leaders = [
    {
      name: "জনাব রোকনুজ্জামান শামীম ",
      role: "Chairman",
      school: "Syeda Farhana Hussain High School",
      img: "/public/shamim.jpg",
    },
    {
      name: "জনাব হোসেন আহমেদ ",
      role: "Principal",
      school: "Syeda Farhana Hussain High School",
      img: "/public/hussen.jpeg",
    },
    {
      name: "মোঃ জামিলুর রহমান ",
      role: "Assistant Head Master",
      school: "Syeda Farhana Hussain High School",
      img: "/public/jamil.jpeg",
    },
    {
      name: "মোঃ সাইদুর রহমান ",
      role: "Senior Teacher",
      school: "Syeda Farhana Hussain High School",
      img: "/public/saidur.jpeg",
    },
    {
      name: "উজ্জ্বল কান্তি দাস",
      role: "Senior Teacher",
      school: "Syeda Farhana Hussain High School",
      img: "/public/ujjal.jpeg",
    },
    {
      name: "মুন্নি বেগম ",
      role: "Teacher",
      school: "Syeda Farhana Hussain High School",
      img: "/public/munni.jpeg",
    },
    {
      name: "মরিয়ম বেগম",
      role: "Teacher",
      school: "Syeda Farhana Hussain High School",
      img: "/public/moriom.jpeg",
    },
    {
      name: "সাজেদা বেগম ",
      role: "Teacher",
      school: "Syeda Farhana Hussain High School",
      img: "/public/sajeda.jpeg",
    },
    {
      name: "জনাব পাপ্পু আহমেদ ",
      role: "Teacher",
      school: "Syeda Farhana Hussain High School",
      img: "/leaders/leader7.jpg",
    },
    {
      name: "জনাব শুভন  আহমেদ ",
      role: "Teacher",
      school: "Syeda Farhana Hussain High School",
      img: "/leaders/leader8.jpg",
    },
    {
      name: "জনাব ________",
      role: "Teacher",
      school: "Syeda Farhana Hussain High School",
      img: "/leaders/leader9.jpg",
    },
  ];

  return (
    <div className="py-16 bg-gray-100 overflow-hidden">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Messages from Leadership
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-3"></div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {leaders.map((leader, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md p-6 text-center
            transform transition duration-500
            hover:-translate-y-2 hover:shadow-xl
            animate-float"
          >

            {/* Image */}
            <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-blue-500">
              <img
                src={leader.img}
                alt={leader.name}
                className="w-full h-full object-cover
                transition duration-500
                group-hover:scale-110"
              />
            </div>

            {/* Name */}
            <h3 className="text-lg font-bold text-gray-800">
              {leader.name}
            </h3>

            {/* Role */}
            <p className="text-blue-600 font-semibold">
              {leader.role}
            </p>

            {/* School */}
            <p className="text-gray-500 text-sm">
              {leader.school}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Leadership;