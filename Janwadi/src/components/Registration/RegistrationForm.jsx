import React, { useState } from "react";

const RegistrationForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, password, confirm } = data;

    if (!firstName || !lastName || !phone || !email || !password || !confirm)
      return setMsg("⚠️ All fields are required");
    if (!/^[0-9]{10}$/.test(phone))
      return setMsg("📱 Enter valid 10-digit phone");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setMsg("📧 Enter valid email");
    if (password.length < 6)
      return setMsg("🔒 Password must be 6+ characters");
    if (password !== confirm) return setMsg("❌ Passwords do not match");

    setMsg("✅ Registration Successful!");
    console.log("User Data:", data);
  };

  return (
    <div className="flex justify-center items-center h-auto md:h-150 w-full max-w-150 rounded-3xl p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 md:p-8 w-full max-w-md space-y-4 hover:shadow-2xl transition"
      >
        <h2 className="text-xl md:text-2xl font-bold text-center text-indigo-600">
          Registration Form
        </h2>

        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            className="flex-1 border p-2 rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            className="flex-1 border p-2 rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="password"
          name="confirm"
          placeholder="Retype Password"
          onChange={handleChange}
          className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-indigo-400"
        />

        {msg && (
          <p
            className={`text-center text-sm ${
              msg.includes("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {msg}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
