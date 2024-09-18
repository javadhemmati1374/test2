"use client";

import { useSelector } from "react-redux";
import Link from "next/link";

const fieldLabels = {
  firstName: "نام",
  lastName: "نام خانوادگی",
  mobileNumber: "شماره موبایل",
};

export default function Result() {
  const formData = useSelector((state) => state.form);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">نتیجه ثبت‌نام</h1>
      {Object.entries(formData).map(([key, value]) => (
        <p key={key}>
          {fieldLabels[key]}: {value}
        </p>
      ))}
      <Link href="/" className="text-blue-500 underline">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
