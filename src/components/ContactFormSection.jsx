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

          {/* Hide image only on small mobile */}
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
        <div
          className="hidden md:block"
          style={{
            width: "5px",
            backgroundColor: "#ffffff",
          }}
        />

        {/* RIGHT SIDE FORM */}
        <div
          className="flex-1 rounded-2xl p-4 md:p-8"
          style={{
            background: "#F6FCD0",
            border: "1px solid #eafcd9",
          }}
        >

          {/* Tabs */}
          <div
            className="flex flex-wrap md:flex-nowrap rounded-xl overflow-hidden mb-6"
            style={{ border: "1.5px solid #ccc" }}
          >
            {TABS.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex-1 py-2 text-xs font-heading font-bold transition
                ${
                  activeTab === i
                    ? "bg-navy text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* FULL NAME */}
            <div>
              <label className="text-xs font-semibold text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full mt-1 px-4 py-2 rounded-lg text-sm bg-white border border-gray-200"
              />
            </div>

            {/* HOUSING SOCIETY NAME */}
            {activeTab === 1 && (
              <div>
                <label className="text-xs font-semibold text-gray-700">
                  Name of Housing Society *
                </label>
                <input
                  type="text"
                  placeholder="Enter Housing Society Name"
                  className="w-full mt-1 px-4 py-2 rounded-lg text-sm bg-white border border-gray-200"
                />
              </div>
            )}

            {/* COMPANY NAME */}
            {activeTab === 2 && (
              <div>
                <label className="text-xs font-semibold text-gray-700">
                  Company Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  className="w-full mt-1 px-4 py-2 rounded-lg text-sm bg-white border border-gray-200"
                />
              </div>
            )}

            {/* CITY + PINCODE */}
            {activeTab === 2 ? (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700">
                    City *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="w-full mt-1 px-4 py-2 rounded-lg text-sm bg-white border border-gray-200"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    value={form.pincode}
                    onChange={(e) =>
                      setForm({ ...form, pincode: e.target.value })
                    }
                    className="w-full mt-1 px-4 py-2 rounded-lg text-sm bg-white border border-gray-200"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="text-xs font-semibold text-gray-700">
                  Pincode *
                </label>
                <input
                  type="text"
                  placeholder="Enter your Pincode"
                  value={form.pincode}
                  onChange={(e) =>
                    setForm({ ...form, pincode: e.target.value })
                  }
                  className="w-full mt-1 px-4 py-2 rounded-lg text-sm bg-white border border-gray-200"
                />
              </div>
            )}

            {/* WHATSAPP */}
            <div>
              <label className="text-xs font-semibold text-gray-700">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                placeholder="Enter your WhatsApp Number"
                value={form.whatsapp}
                onChange={(e) =>
                  setForm({ ...form, whatsapp: e.target.value })
                }
                className="w-full mt-1 px-4 py-2 rounded-lg text-sm bg-white border border-gray-200"
              />
            </div>

            {/* HOUSING SOCIETY BILL */}
            {activeTab === 1 && (
              <div>
                <label className="text-xs font-semibold text-gray-700">
                  Monthly Electricity Bill *
                </label>
                <select className="w-full mt-1 px-4 py-2 rounded-lg text-sm bg-white border border-gray-200">
                  <option>0 - 50000</option>
                  <option>50000 - 100000</option>
                  <option>100000+</option>
                </select>
              </div>
            )}

            {/* DESIGNATION */}
            {activeTab === 1 && (
              <div>
                <label className="text-xs font-semibold text-gray-700 mb-2 block">
                  What is your designation in Housing Society? *
                </label>

                <div className="grid grid-cols-2 md:flex flex-wrap gap-2">
                  {[
                    "Management committee member",
                    "Resident",
                    "Builder",
                    "Facility Manager",
                  ].map((role, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setSelectedDesignation(i)}
                      className={`px-3 py-2 rounded-lg text-xs border
                      ${
                        selectedDesignation === i
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

            {/* AGM */}
            {activeTab === 1 && (
              <div>
                <label className="text-xs font-semibold text-gray-700">
                  AGM approval status *
                </label>

                <select className="w-full mt-1 px-4 py-2 rounded-lg text-sm bg-white border border-gray-200">
                  <option>We already have AGM approval</option>
                  <option>We don't have an AGM approval yet</option>
                  <option>We want help in preparing for our AGM</option>
                </select>
              </div>
            )}

            {/* COMMERCIAL BILL */}
            {activeTab === 2 && (
              <div>
                <label className="text-xs font-semibold text-gray-700">
                  Average Monthly Bill *
                </label>
                <input
                  type="text"
                  placeholder="Enter Average Monthly Bill"
                  className="w-full mt-1 px-4 py-2 rounded-lg text-sm bg-white border border-gray-200"
                />
              </div>
            )}

            {/* RESIDENTIAL BILL */}
            {activeTab === 0 && (
              <div>
                <label className="text-xs font-semibold text-gray-700 mb-2 block">
                  What is your average monthly bill?
                </label>

                <div className="grid grid-cols-2 md:flex flex-wrap gap-2">
                  {BILL_OPTIONS.map((opt, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setSelectedBill(i)}
                      className={`px-3 py-2 rounded-lg text-xs border
                      ${
                        selectedBill === i
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
                I agree to Sarvoka's Terms of Service & Policies.
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