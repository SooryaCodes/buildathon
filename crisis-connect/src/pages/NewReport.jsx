import React, { useState } from "react";
import { db } from '../firebase'; // Import Firestore configuration
import { collection, addDoc } from 'firebase/firestore';

const NewReport = () => {
  const [formData, setFormData] = useState({
    virusName: "",
    location: "",
    dateSymptoms: "",
    unusualSymptoms: "",
    severity: "mild",
    additionalSymptoms: "",
    contactInfo: "unknown",
    quarantineStatus: "no",
    additionalInfo: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Submit form data to Firestore
    try {
      const docRef = await addDoc(collection(db, "reports"), formData);
      console.log("Document written with ID: ", docRef.id);
      // Optionally reset the form after submission
      setFormData({
        virusName: "",
        location: "",
        dateSymptoms: "",
        unusualSymptoms: "",
        severity: "mild",
        additionalSymptoms: "",
        contactInfo: "unknown",
        quarantineStatus: "no",
        additionalInfo: "",
        email: ""
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="grid grid-cols-3">
      <div className="w-full min-h-screen bg-blue-950 relative top-20"></div>
      <div className="grid place-items-center mb-20 col-span-2">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto container absolute top-24 p-4 grid grid-cols-2 gap-4 mb-10 bg-white shadow-lg rounded-lg border border-gray-200"
        >
          <h2 className="text-2xl font-bold mb-4 col-span-2">Report an Unknown Virus Case</h2>

          <div className="mb-4">
            <label htmlFor="virus-name" className="block text-sm font-semibold mb-2">
              Virus Type or Symptoms Name (if known):
            </label>
            <input
              type="text"
              id="virus-name"
              name="virusName"
              value={formData.virusName}
              onChange={handleChange}
              placeholder="Leave empty if unknown, or describe key symptoms"
              className="block w-full px-3 py-2 bg-white border rounded-md shadow-sm text-sm focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-semibold mb-2">
              Location (City, Country):
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Where did the infection occur?"
              className="block w-full px-3 py-2 bg-white border rounded-md shadow-sm text-sm focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date-symptoms" className="block text-sm font-semibold mb-2">
              Date Symptoms First Appeared:
            </label>
            <input
              type="date"
              id="date-symptoms"
              name="dateSymptoms"
              value={formData.dateSymptoms}
              onChange={handleChange}
              className="block w-full px-3 py-2 bg-white border rounded-md shadow-sm text-sm focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="unusual-symptoms"
              className="block text-sm font-semibold mb-2"
            >
              Describe Unusual Symptoms:
            </label>
            <textarea
              id="unusual-symptoms"
              name="unusualSymptoms"
              value={formData.unusualSymptoms}
              onChange={handleChange}
              placeholder="Describe any symptoms that seem new, unusual, or severe"
              rows="4"
              className="block w-full px-3 py-2 bg-white border rounded-md shadow-sm text-sm focus:ring-primary-500 focus:border-primary-500"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="severity" className="block text-sm font-semibold mb-2">
              How Severe Are the Symptoms?
            </label>
            <select
              id="severity"
              name="severity"
              value={formData.severity}
              onChange={handleChange}
              className="block w-full px-3 py-2 bg-white border rounded-md shadow-sm text-sm focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="mild">Mild</option>
              <option value="moderate">Moderate</option>
              <option value="severe">Severe</option>
              <option value="critical">Critical</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="additional-symptoms"
              className="block text-sm font-semibold mb-2"
            >
              Other Symptoms Experienced (if any):
            </label>
            <textarea
              id="additional-symptoms"
              name="additionalSymptoms"
              value={formData.additionalSymptoms}
              onChange={handleChange}
              placeholder="Include any other symptoms"
              rows="3"
              className="block w-full px-3 py-2 bg-white border rounded-md shadow-sm text-sm focus:ring-primary-500 focus:border-primary-500"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="contact-info" className="block text-sm font-semibold mb-2">
              Did You Have Close Contact with Others Before Symptoms?
            </label>
            <select
              id="contact-info"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              className="block w-full px-3 py-2 bg-white border rounded-md shadow-sm text-sm focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="unknown">Not Sure</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="quarantine-status"
              className="block text-sm font-semibold mb-2"
            >
              Have You Been in Quarantine or Isolation?
            </label>
            <select
              id="quarantine-status"
              name="quarantineStatus"
              value={formData.quarantineStatus}
              onChange={handleChange}
              className="block w-full px-3 py-2 bg-white border rounded-md shadow-sm text-sm focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="not_required">Not Required</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="additional-info"
              className="block text-sm font-semibold mb-2"
            >
              Additional Information (if any):
            </label>
            <textarea
              id="additional-info"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Any additional details, e.g., recent travel"
              rows="4"
              className="block w-full px-3 py-2 bg-white border rounded-md shadow-sm text-sm focus:ring-primary-500 focus:border-primary-500"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address (optional):
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Leave empty if you don't want to provide"
              className="block w-full px-3 py-2 bg-white border rounded-md shadow-sm text-sm focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewReport;
