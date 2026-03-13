import React, { useState } from "react";
import ContackLayer from "../assets/Layer.png";

const TABS = ["RESIDENTIAL", "HOUSING SOCIETY", "COMMERCIAL"];

const BILL_OPTIONS = [
  "Less than ₹ 1500",
  "₹ 1500 - ₹ 2500",
  "₹ 2500 - ₹ 4000",
  "₹ 4000 - ₹ 8000",
  "More than ₹ 8000",
];

const ContactFormSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedBill, setSelectedBill] = useState(null);
  const [agreed, setAgreed] = useState(true);
  const [selectedDesignation, setSelectedDesignation] = useState(null);

  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    pincode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Please enter your Full Name");
      return;
    }

    if (!form.whatsapp.trim()) {
      alert("Please enter your WhatsApp Number");
      return;
    }

    if (!form.pincode.trim()) {
      alert("Please enter your Pincode");
      return;
    }

    if (activeTab === 0 && selectedBill === null) {
      alert("Please select your Average Monthly Bill");
      return;
    }

    if (activeTab === 1 && selectedDesignation === null) {
      alert("Please select your Designation");
      return;
    }

    if (!agreed) {
      alert("Please agree to the Terms of Service");
      return;
    }

    alert("Thank you! We will contact you shortly.");
  };

  return (
    <section
      id="contact"
      className="py-12 px-4 md:px-16"
      style={{ background: "#F6FCD0" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

        {/* LEFT SIDE */}
        <div className="flex-1">
          <h2 className="font-heading font-black text-dark text-base md:text-xl leading-tight mb-4">
            Let the Sun power your future,
            <br />
            Switch to Solar with complete confidence.
          </h2>

          <div className="my-6 hidden sm:block">
            <img
              src={ContackLayer}
              alt="Solar energy"
              className="w-full max-w-xs rounded-2xl object-cover"
              style={{ height: "200px" }}
            />
          </div>

          <p className="font-heading font-bold text-primary text-sm md:text-base mb-2">
            Please fill the form and we will get in touch with you
          </p>

          <p className="text-gray-600 text-sm">
            Take the first step toward clean, cost-saving solar energy with a
            free consultation from SAVORKA.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block" style={{ width: "5px", backgroundColor: "#ffffff" }} />

        {/* RIGHT SIDE FORM */}
        <div
          className="flex-1 rounded-2xl  md:p-8"
          style={{ background: "#F6FCD0", border: "1px solid #eafcd9" }}
        >

          {/* Tabs */}
          <div
            className="flex rounded-xl overflow-hidden mb-6"
            style={{ border: "1.5px solid #ccc" }}
          >
            {TABS.map((tab, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveTab(i);
                  setSelectedBill(null);
                  setSelectedDesignation(null);
                }}
                className={`flex-1 py-2 text-xs font-heading font-bold transition
                  ${activeTab === i
                    ? "text-green-600"
                    : "text-gray-600 hover:bg-gray-50"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* RESIDENTIAL — Name + Pincode in 2 cols on mobile */}
            {activeTab === 0 && (
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border border-gray-200 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700">Pincode *</label>
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    value={form.pincode}
                    onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                    className="w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border border-gray-200 outline-none"
                  />
                </div>
              </div>
            )}

            {/* HOUSING SOCIETY — Name + Society in 2 cols on mobile */}
            {activeTab === 1 && (
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border border-gray-200 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700">Society Name *</label>
                  <input
                    type="text"
                    placeholder="Enter Society Name"
                    className="w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border border-gray-200 outline-none"
                  />
                </div>
              </div>
            )}

            {/* COMMERCIAL — Name + Company in 2 cols on mobile */}
            {activeTab === 2 && (
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border border-gray-200 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700">Company Name *</label>
                  <input
                    type="text"
                    placeholder="Enter Company Name"
                    className="w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border border-gray-200 outline-none"
                  />
                </div>
              </div>
            )}

            {/* CITY + PINCODE — Commercial (always 2 cols) */}
            {activeTab === 2 && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700">City *</label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border border-gray-200 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700">Pincode *</label>
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    value={form.pincode}
                    onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                    className="w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border border-gray-200 outline-none"
                  />
                </div>
              </div>
            )}

            {/* HOUSING SOCIETY — Pincode + WhatsApp in 2 cols on mobile */}
            {activeTab === 1 && (
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700">Pincode *</label>
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    value={form.pincode}
                    onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                    className="w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border border-gray-200 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700">WhatsApp *</label>
                  <input
                    type="tel"
                    placeholder="WhatsApp Number"
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    className="w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border border-gray-200 outline-none"
                  />
                </div>
              </div>
            )}

            {/* RESIDENTIAL — WhatsApp full width */}
            {activeTab === 0 && (
              <div>
                <label className="text-xs font-semibold text-gray-700">WhatsApp Number *</label>
                <input
                  type="tel"
                  placeholder="Enter your WhatsApp Number"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border border-gray-200 outline-none"
                />
              </div>
            )}

            {/* COMMERCIAL — WhatsApp + Monthly Bill in 2 cols on mobile */}
            {activeTab === 2 && (
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700">WhatsApp *</label>
                  <input
                    type="tel"
                    placeholder="WhatsApp Number"
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    className="w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border border-gray-200 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700">Monthly Bill *</label>
                  <input
                    type="text"
                    placeholder="Avg Monthly Bill"
                    className="w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border border-gray-200 outline-none"
                  />
                </div>
              </div>
            )}

            {/* HOUSING SOCIETY BILL + AGM in 2 cols on mobile */}
            {activeTab === 1 && (
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700">Monthly Bill *</label>
                  <select className="w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border border-gray-200 outline-none">
                    <option>0 - 50,000</option>
                    <option>50,000 - 1,00,000</option>
                    <option>1,00,000+</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700">AGM Status *</label>
                  <select className="w-full mt-1 px-3 py-2 rounded-lg text-xs md:text-sm bg-white border border-gray-200 outline-none">
                    <option>AGM approved</option>
                    <option>No AGM approval yet</option>
                    <option>Need help for AGM</option>
                  </select>
                </div>
              </div>
            )}

            {/* DESIGNATION chips */}
            {activeTab === 1 && (
              <div>
                <label className="text-xs font-semibold text-gray-700 mb-2 block">
                  Your Designation *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Management Committee", "Resident", "Builder", "Facility Manager"].map((role, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setSelectedDesignation(i)}
                      className={`px-3 py-2 rounded-lg text-xs border font-medium transition
                        ${selectedDesignation === i
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-600 border-gray-200"
                        }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* RESIDENTIAL BILL chips */}
            {activeTab === 0 && (
              <div>
                <label className="text-xs font-semibold text-gray-700 mb-2 block">
                  Average Monthly Bill *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {BILL_OPTIONS.map((opt, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setSelectedBill(i)}
                      className={`px-3 py-2 rounded-lg text-xs border font-medium transition
                        ${selectedBill === i
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-600 border-gray-200"
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* TERMS */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 accent-navy"
              />
              <span className="text-xs text-gray-600">
                I agree to Savorka's Terms of Service & Policies.
              </span>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={!agreed}
              className="bg-navy text-white px-8 py-2 rounded-lg text-sm font-bold hover:bg-navy-light disabled:opacity-50"
            >
              Submit Details
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;