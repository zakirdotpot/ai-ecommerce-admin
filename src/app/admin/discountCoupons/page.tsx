'use client'

import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";

function DiscountCoupons() {
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discount: "",
    description: "",
    expiryDate: "",
  });

  const [couponData, setCouponData] = useState([
    {
      code: "SAVE20",
      discount: "20%",
      description: "Get 20% off on all items",
      expiryDate: "2024-03-31",
    },
    {
      code: "GET10OFF",
      discount: "10%",
      description: "Take 10% off your purchase",
      expiryDate: "2024-03-15",
    },
    {
      code: "FREESHIP",
      discount: "Free Shipping",
      description: "Enjoy free shipping on orders over $50",
      expiryDate: "2024-04-30",
    },
    // Add more coupon data as needed
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCoupon((prevCoupon) => ({ ...prevCoupon, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCouponData([...couponData, newCoupon]);
    setNewCoupon({ code: "", discount: "", description: "", expiryDate: "" });
  };

  const handleCopy = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Coupon code copied to clipboard!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-navy-700 dark:text-white mb-6 text-center">Discount Coupons</h1>


      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="code"
            placeholder="Coupon Code"
            value={newCoupon.code}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-sm"
            required
          />
          <input
            type="text"
            name="discount"
            placeholder="Discount"
            value={newCoupon.discount}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-sm"
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newCoupon.description}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-sm"
            required
          />
          <input
            type="date"
            name="expiryDate"
            value={newCoupon.expiryDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]} // Set min attribute to today's date
            className="border rounded-lg px-3 py-2 text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-4"
        >
          Add
        </button>
      </form>

      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Coupon Code</th>
            <th className="border border-gray-400 px-4 py-2">Discount</th>
            <th className="border border-gray-400 px-4 py-2">Description</th>
            <th className="border border-gray-400 px-4 py-2">Expiry Date</th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {couponData.map((coupon, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">
                {coupon.code}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {coupon.discount}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {coupon.description}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {coupon.expiryDate}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <CopyToClipboard text={coupon.code} onCopy={handleCopy}>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Copy Coupon
                  </button>
                </CopyToClipboard>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DiscountCoupons;
