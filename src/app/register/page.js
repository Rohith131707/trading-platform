'use client';

import { useState } from 'react';

export default function KYCForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    panNumber: '',
    dob: '',
    panType: '',
    address: '',
    kycFullName: '',
    kycDob: '',
    gender: '',
    aadhaarNumber: '',
    voterId: '',
    drivingLicense: '',
    passportNumber: '',
    mobileNumber: '',
    email: '',
    kycAddress: '',
    idProof: null,
    addressProof: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="container mx-auto p-6">
      <div className="progress-bar flex justify-between items-center mb-6">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>1. PAN Verification</div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Personal Details</div>
      </div>

      {step === 1 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">PAN Card Verification</h2>
          <input type="text" name="fullName" placeholder="Full Name" className="border p-2 w-full mb-2" value={formData.fullName} onChange={handleChange} />
          <input type="text" name="panNumber" placeholder="PAN Number" className="border p-2 w-full mb-2" value={formData.panNumber} onChange={handleChange} />
          <input type="date" name="dob" className="border p-2 w-full mb-2" value={formData.dob} onChange={handleChange} />
          <select name="panType" className="border p-2 w-full mb-2" value={formData.panType} onChange={handleChange}>
            <option value="">Select PAN Type</option>
            <option value="Individual">Individual</option>
          </select>
          <input type="text" name="address" placeholder="Address" className="border p-2 w-full mb-2" value={formData.address} onChange={handleChange} />
          <button className="bg-blue-500 text-white px-4 py-2" onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">KYC Verification</h2>
          <input type="text" name="kycFullName" placeholder="Full Name" className="border p-2 w-full mb-2" value={formData.kycFullName} onChange={handleChange} />
          <input type="date" name="kycDob" className="border p-2 w-full mb-2" value={formData.kycDob} onChange={handleChange} />
          <input type="tel" name="mobileNumber" placeholder="Mobile Number" className="border p-2 w-full mb-2" value={formData.mobileNumber} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" className="border p-2 w-full mb-2" value={formData.email} onChange={handleChange} />
          <input type="file" name="idProof" className="border p-2 w-full mb-2" onChange={handleFileChange} />
          <input type="file" name="addressProof" className="border p-2 w-full mb-2" onChange={handleFileChange} />
          <div className="flex justify-between">
            <button className="bg-gray-500 text-white px-4 py-2" onClick={prevStep}>Back</button>
            <button className="bg-green-500 text-white px-4 py-2">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}
