import React, { useState } from "react";
import Sidemenu from "./Sidemenu"; // Adjust the import path as necessary
import dNav from "./Dnav"; // Adjust the import path as necessary

const DelegateOrderForm = () => {
  const [address, setAddress] = useState("");
  const [prescription, setPrescription] = useState("");
  const [sendToProfile, setSendToProfile] = useState(true);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Address:", address);
    console.log("Prescription:", prescription);
    console.log("Send to Profile:", sendToProfile);
    setSubmissionMessage(
      "Your order has been recorded and an authorized medical partner will contact you soon."
    );
  };

  const handleAddressOptionChange = (event) => {
    setShowAddressForm(event.target.value === "different");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      <Sidemenu className="hidden md:block" />
      <div className="flex-grow bg-gray-100">
        <dNav />
        <div className="p-8 max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-4">Delegate Medicinal Order</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                htmlFor="prescription"
                className="block text-sm font-medium text-gray-700"
              >
                Prescription
              </label>
              <select
                id="prescription"
                value={prescription}
                onChange={(e) => setPrescription(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Select a prescription</option>
                {/* Map over your prescriptions here */}
                <option value="prescription1">Prescription 1</option>
                <option value="prescription2">Prescription 2</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="sendToProfile"
                className="block text-sm font-medium text-gray-700"
              >
                Send to Profile
              </label>
              <input
                type="radio"
                id="sendToProfile"
                name="addressOption"
                value="profile"
                checked={!showAddressForm}
                onChange={handleAddressOptionChange}
                className="rounded text-indigo-600"
              />
              <label htmlFor="sendToProfile" className="ml-2">
                Send to Profile
              </label>
              <input
                type="radio"
                id="sendToDifferent"
                name="addressOption"
                value="different"
                checked={showAddressForm}
                onChange={handleAddressOptionChange}
                className="ml-4 rounded text-indigo-600"
              />
              <label htmlFor="sendToDifferent" className="ml-2">
                Send to a different address
              </label>
            </div>
            {showAddressForm && (
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter address"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
          {submissionMessage && (
            <div
              className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Success! </strong>
              <span className="block sm:inline">{submissionMessage}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DelegateOrderForm;
