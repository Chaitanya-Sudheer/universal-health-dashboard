// Sidemenu.jsx
import React from "react";
import { FiActivity } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import { GiOpenFolder } from "react-icons/gi";
import { FaFilePrescription } from "react-icons/fa";
import { RiMedicineBottleLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Sidemenu = () => {
  let navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  function handleClick1() {
    navigate("/");
  }

  function handleClick2() {
    navigate("/dashboard/patient/");
  }

  function handleClick3() {
    navigate("/dashboard/patient/profile");
  }

  function handleClick4() {
    navigate("/dashboard/patient/prescription");
  }

  function handleClick5() {
    navigate("/dashboard/patient/records");
  }

  function handleClick6() {
    navigate("/dashboard/patient/medicines");
  }

  function handleClick7() {
    navigate("/dashboard/patient/appointments");
  }
  function handleClick8() {
    navigate("/dashboard/patient/order_medicines");
  }

  return (
    <div className="Sidemenu p-10 bg-gradient-to-r from-[#AECCFE] from-3% via-white via-45% to-blue-100 to-96% text-black rounded-md">
    <div className='logo mt-4 gap-2 text-[black] flex items-center justify-center m-auto'>
        <FiActivity className="text-[30px]" />
        <h1 className="text-[40px] align-center justify-center font-black ">
          UNIMED
        </h1>
      </div>
      <div className="flex items-center justify-center text-[black] flex-col mt-[3rem] admin">
        <img
          src="https://static.vecteezy.com/system/resources/previews/029/271/069/original/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg"
          className="h-[100px] w-[100px] border-black-200 border-[4px] object-cover rounded-full"
          alt="Profile Avatar"
        />
        <span className="opacity-100 mt-2 text-black-400">User</span>
        <h3 className="font-bold text-textColor">User</h3>
      </div>

      <div className="m-auto grid justify-center mt-4">
        <li
          className="flex pt-3 pb-3 pl-3 gap-2 hover:opacity-100 items-center "
          onClick={handleClick2}
        >
          <LuLayoutDashboard className="text-black" />
          <span className="text-black">Overview</span>
        </li>

        <li
          className="flex pt-3 pb-3 pl-3 gap-2 hover:opacity-100 items-center "
          onClick={handleClick3}
        >
          <RxAvatar className="text-black" />
          <span className="text-black">Profile</span>
        </li>

        <li
          className="flex pt-3 pb-3 pl-3 gap-2 hover:opacity-100 items-center"
          onClick={handleClick5}
        >
          <GiOpenFolder className="text-black" />
          <span className="text-black">Records</span>
        </li>

        <li
          className="flex pt-3 pb-3 pl-3 gap-2 hover:opacity-100 items-center"
          onClick={handleClick4}
        >
          <FaFilePrescription className="text-black" />
          <span className="text-black">Prescription</span>
        </li>

        <li
          className="flex pt-3 pb-3 pl-3 gap-2 hover:opacity-100 items-center"
          onClick={handleClick6}
        >
          <RiMedicineBottleLine className="text-black" />
          <span className="text-black">Medicines</span>
        </li>

        <li
          className="flex pt-3 pb-3 pl-3 gap-2 hover:opacity-100 items-center"
          onClick={handleClick7}
        >
          <FaRegCalendarAlt className="text-black" />
          <span className="text-black">Appointments</span>
        </li>

        <li
          className="flex pt-3 pb-3 pl-3 gap-2 hover:opacity-100 items-center"
          onClick={handleClick8}
        >
          <FaRegCalendarAlt className="text-black" />
          <span className="text-black">Order Medicines</span>
        </li>

        <li
          className="flex pt-3 pb-3 pl-3 gap-2 hover:opacity-100 items-center"
          onClick={handleLogout}
        >
          <CiLogout className="text-black" />
          <span className="text-black">Logout</span>
        </li>
      </div>
    </div>
  );
};

export default Sidemenu;
