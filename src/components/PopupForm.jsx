import React, { useState, useEffect } from "react";
import ContackLayer from "../assets/Layer.png";

const TABS = ["RESIDENTIAL", "HOUSING SOCIETY", "COMMERCIAL"];

const BILL_OPTIONS = [
  "Less than ₹ 1500",
  "₹ 1500 - ₹ 2500",
  "₹ 2500 - ₹ 4000",
  "₹ 4000 - ₹ 8000",
  "More than ₹ 8000",
];

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedBill, setSelectedBill] = useState(null);
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [agreed, setAgreed] = useState(true);
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    pincode: "",
    societyName: "",
    companyName: "",
    city: "",
    commercialBill: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsVisible(false)}
        className="fixed inset-0 bg-black/55 backdrop-blur-sm z-[999]"
        style={{ animation: "fadeIn 0.3s ease" }}
      />

      {/* Modal */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] w-[92%] max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl"
        style={{ animation: "slideUp 0.35s cubic-bezier(0.34,1.56,0.64,1)" }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1a7a3c] to-[#2ea84f] px-6 pt-5 pb-4 relative">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-4 w-7 h-7 rounded-full bg-white/20 text-white text-sm flex items-center justify-center hover:bg-white/30 transition border-none cursor-pointer"
          >
            ✕
          </button>
          <p className="text-white/80 text-[10px] uppercase tracking-widest mb-1">
            Free Consultation
          </p>
          <h2 className="text-white text-xl font-black font-heading">
            Get a Solar Quote Today
          </h2>
          <p className="text-white/75 text-xs mt-1">
            Fill in your details and our expert will reach out within 24 hours.
          </p>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto max-h-[75vh]">

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {TABS.map((tab, i) => (
              <button
                key={i}
                onClick={() => { setActiveTab(i); setSelectedBill(null); setSelectedDesignation(null); }}
                className={`flex-1 py-2.5 text-[10px] font-bold tracking-wide border-none cursor-pointer transition-all
                  ${activeTab === i
                    ? "bg-[#f0faf4] text-[#1a7a3c] border-b-2 border-[#1a7a3c]"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">

            {/* Full Name */}
            <div>
              <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 outline-none focus:border-[#1a7a3c] focus:bg-white transition"
              />
            </div>

            {/* Housing Society Name */}
            {activeTab === 1 && (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                  Name of Housing Society *
                </label>
                <input
                  type="text"
                  placeholder="Enter Housing Society Name"
                  value={form.societyName}
                  onChange={(e) => setForm({ ...form, societyName: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 outline-none focus:border-[#1a7a3c] focus:bg-white transition"
                />
              </div>
            )}

            {/* Company Name */}
            {activeTab === 2 && (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                  Company Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  value={form.companyName}
                  onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 outline-none focus:border-[#1a7a3c] focus:bg-white transition"
                />
              </div>
            )}

            {/* City + Pincode (Commercial) OR just Pincode */}
            {activeTab === 2 ? (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                    City *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 outline-none focus:border-[#1a7a3c] focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    value={form.pincode}
                    onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                    className="w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 outline-none focus:border-[#1a7a3c] focus:bg-white transition"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                  Pincode *
                </label>
                <input
                  type="text"
                  placeholder="Enter your Pincode"
                  value={form.pincode}
                  onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 outline-none focus:border-[#1a7a3c] focus:bg-white transition"
                />
              </div>
            )}

            {/* WhatsApp */}
            <div>
              <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                placeholder="Enter your WhatsApp Number"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                required
                className="w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 outline-none focus:border-[#1a7a3c] focus:bg-white transition"
              />
            </div>

            {/* Housing Society — Monthly Bill dropdown */}
            {activeTab === 1 && (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                  Monthly Electricity Bill *
                </label>
                <select className="w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 outline-none focus:border-[#1a7a3c] focus:bg-white transition">
                  <option>0 - 50,000</option>
                  <option>50,000 - 1,00,000</option>
                  <option>1,00,000+</option>
                </select>
              </div>
            )}

            {/* Housing Society — Designation */}
            {activeTab === 1 && (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide mb-2 block">
                  Your Designation in Housing Society *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Management Committee Member", "Resident", "Builder", "Facility Manager"].map((role, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setSelectedDesignation(i)}
                      className={`px-3 py-2 rounded-lg text-xs border font-medium cursor-pointer transition
                        ${selectedDesignation === i
                          ? "bg-[#1a7a3c] text-white border-[#1a7a3c]"
                          : "bg-white text-gray-600 border-gray-200 hover:border-[#1a7a3c]"
                        }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Housing Society — AGM */}
            {activeTab === 1 && (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                  AGM Approval Status *
                </label>
                <select className="w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 outline-none focus:border-[#1a7a3c] focus:bg-white transition">
                  <option>We already have AGM approval</option>
                  <option>We don't have an AGM approval yet</option>
                  <option>We want help in preparing for our AGM</option>
                </select>
              </div>
            )}

            {/* Commercial — Average Monthly Bill */}
            {activeTab === 2 && (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                  Average Monthly Bill *
                </label>
                <input
                  type="text"
                  placeholder="Enter Average Monthly Bill"
                  value={form.commercialBill}
                  onChange={(e) => setForm({ ...form, commercialBill: e.target.value })}
                  className="w-full mt-1 px-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 outline-none focus:border-[#1a7a3c] focus:bg-white transition"
                />
              </div>
            )}

            {/* Residential — Monthly Bill chips */}
            {activeTab === 0 && (
              <div>
                <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide mb-2 block">
                  Average Monthly Electricity Bill *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {BILL_OPTIONS.map((opt, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setSelectedBill(i)}
                      className={`px-3 py-2 rounded-lg text-xs border font-medium cursor-pointer transition
                        ${selectedBill === i
                          ? "bg-[#1a7a3c] text-white border-[#1a7a3c]"
                          : "bg-white text-gray-600 border-gray-200 hover:border-[#1a7a3c]"
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Terms */}
            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 mt-0.5 accent-[#1a7a3c] cursor-pointer"
              />
              <span className="text-xs text-gray-500 leading-relaxed">
                I agree to Savorka's{" "}
                <span className="text-[#1a7a3c] underline cursor-pointer">Terms of Service & Policies.</span>
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!agreed}
              className="w-full py-3 bg-gradient-to-r from-[#1a7a3c] to-[#2ea84f] text-white font-bold text-sm rounded-lg tracking-widest hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-lg shadow-green-200"
            >
              SUBMIT DETAILS →
            </button>

            <p className="text-center text-[10px] text-gray-400 pb-1">
              🔒 Your information is safe with us. No spam, ever.
            </p>

          </form>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp {
          from { opacity: 0; transform: translate(-50%, -44%) scale(0.95); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </>
  );
};

export default PopupForm;