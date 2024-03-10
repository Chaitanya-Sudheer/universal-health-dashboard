import React from 'react';
import Sidemenu from './Sidemenu';
import Dnav from './Dnav';


const Vaccination_history = () => {
const vaccinationHistoryData = [
  {
    id: 1,
    vaccineName: "Hepatitis B Vaccine",
    dose: "1st Dose",
    date: "15/03/2000",
    administeredBy: "Dr. Smith",
    location: "City Hospital",
    status: "Completed",
  },
  {
    id: 2,
    vaccineName: "DTaP Vaccine",
    dose: "1st Dose",
    date: "22/06/2001",
    administeredBy: "Nurse Johnson",
    location: "Pediatric Clinic",
    status: "Completed",
  },
  {
    id: 3,
    vaccineName: "Polio Vaccine",
    dose: "1st Dose",
    date: "10/09/2001",
    administeredBy: "Dr. Lee",
    location: "Community Clinic",
    status: "Completed",
  },
  {
    id: 4,
    vaccineName: "MMR Vaccine",
    dose: "1st Dose",
    date: "05/11/2002",
    administeredBy: "Dr. Brown",
    location: "Wellness Clinic",
    status: "Completed",
  },
  {
    id: 5,
    vaccineName: "Varicella Vaccine",
    dose: "1st Dose",
    date: "30/07/2003",
    administeredBy: "Dr. Johnson",
    location: "City Hospital",
    status: "Completed",
  },
  {
    id: 6,
    vaccineName: "Hepatitis A Vaccine",
    dose: "1st Dose",
    date: "12/04/2004",
    administeredBy: "Nurse Smith",
    location: "Pediatric Clinic",
    status: "Completed",
  },
  {
    id: 7,
    vaccineName: "Flu Vaccine",
    dose: "Annual Dose",
    date: "20/12/2004",
    administeredBy: "Dr. White",
    location: "Community Clinic",
    status: "Completed",
  },
  {
    id: 8,
    vaccineName: "HPV Vaccine",
    dose: "1st Dose",
    date: "10/08/2005",
    administeredBy: "Dr. Lee",
    location: "Wellness Clinic",
    status: "Completed",
  },
  {
    id: 9,
    vaccineName: "MenACWY Vaccine",
    dose: "1st Dose",
    date: "25/06/2006",
    administeredBy: "Nurse Johnson",
    location: "City Hospital",
    status: "Completed",
  },
  {
    id: 10,
    vaccineName: "Tdap Vaccine",
    dose: "Booster Dose",
    date: "15/09/2007",
    administeredBy: "Dr. Brown",
    location: "Pediatric Clinic",
    status: "Completed",
  },
  {
    id: 11,
    vaccineName: "COVID-19 Vaccine (Pfizer-BioNTech)",
    dose: "1st Dose",
    date: "05/06/2021",
    administeredBy: "Dr. Smith",
    location: "City Hospital",
    status: "Completed",
  },
  {
    id: 12,
    vaccineName: "COVID-19 Vaccine (Pfizer-BioNTech)",
    dose: "2nd Dose",
    date: "26/06/2021",
    administeredBy: "Dr. Smith",
    location: "City Hospital",
    status: "Completed",
  },
];


  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <Sidemenu />
        <Dnav />
        <div className="border border-blue-500 border-b-4 border-r-4 rounded-lg p-6 mb-20 mt-20 ml-12 text-2xl md:w-3/4 lg:w-2/3 xl:w-3/4 h-auto">
          <p className="text-black text-left pl-2 pb-6">
            RECORDS - VACCINATION HISTORY
          </p>

          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th className="text-black pt-2">ID</th>
                  <th className="text-black">Vaccine Name</th>
                  <th className="text-black">Dose</th>
                  <th className="text-black">Date Administered</th>
                  <th className="text-black">Administered By</th>
                  <th className="text-black">Location</th>
                  <th className="text-black">Status</th>
                </tr>
              </thead>
              <tbody>
                {vaccinationHistoryData.map((item) => (
                  <tr key={item.id} className="text-black">
                    <td>{item.id}</td>
                    <td>{item.vaccineName}</td>
                    <td>{item.dose}</td>
                    <td>{item.date}</td>
                    <td>{item.administeredBy}</td>
                    <td>{item.location}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vaccination_history;
