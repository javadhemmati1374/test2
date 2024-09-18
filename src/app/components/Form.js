"use client";

import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../lib/redux/formSlice";
import { useRouter } from "next/navigation";

const Form = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);
  const router = useRouter();

  const handleChange = (e) => {
    dispatch(updateForm({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/result");
  };

  const fields = [
    { name: "firstName", label: "نام", type: "text" },
    { name: "lastName", label: "نام خانوادگی", type: "text" },
    { name: "mobileNumber", label: "شماره موبایل", type: "tel" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map(({ name, label, type }) => (
        <div key={name}>
          <label htmlFor={name}>{label}:</label>
          <input
            type={type}
            id={name}
            name={name}
            value={formData[name] || ""}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        ارسال
      </button>
    </form>
  );
};

export default Form;
