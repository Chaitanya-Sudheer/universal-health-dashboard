import React from 'react';
import Sidemenu from './Sidemenu';
import Dnav from './Dnav';

const Social_history = () => {
  const socialHistoryData = [
    {
      id: 1,
      category: "Education",
      detail: "Completed Bachelor's Degree in Computer Science",
    },
    {
      id: 2,
      category: "Occupation",
      detail: "Software Engineer at XYZ Tech Company",
    },
    {
      id: 3,
      category: "Smoking Status",
      detail: "Never Smoked",
    },
    {
      id: 4,
      category: "Alcohol Consumption",
      detail: "Occasional, social drinker",
    },
    {
      id: 5,
      category: "Physical Activity",
      detail: "Regular exercise, 3 times a week",
    },

    {
        id: 6,
        category: "Diet",
        detail: "Vegetarian diet with occasional fish",
      },
      {
        id: 7,
        category: "Sleep Pattern",
        detail: "Average 7-8 hours of sleep per night",
      },
      {
        id: 8,
        category: "Stress Level",
        detail: "Moderate stress due to work deadlines",
      },
      {
        id: 9,
        category: "Hobbies",
        detail: "Photography, hiking, and reading",
      },
      {
        id: 10,
        category: "Travel History",
        detail: "Frequent traveler for work and leisure",
      },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <Sidemenu />
      <Dnav />
      <div className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 mb-20 mt-20 ml-12 text-2xl md:w-3/4 lg:w-2/3 xl:w-3/4 h-auto">
        <p className="text-black text-left pl-2 pb-6">
          RECORDS - SOCIAL HISTORY
        </p>

        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th className="text-black pt-2"></th>
                <th className="text-black">Category</th>
                <th className="text-black">Detail</th>
              </tr>
            </thead>
            <tbody>
              {socialHistoryData.map((item, index) => (
                <tr key={index} className="text-black">
                  <th>{item.id}</th>
                  <td>{item.category}</td>
                  <td>{item.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Social_history;
