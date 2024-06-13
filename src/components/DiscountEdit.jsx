'use client'
import  { useState } from 'react';
import Swal from 'sweetalert2';

import { discountEdit } from '../Actions/products';
import { useSelector } from 'react-redux';

function DiscountEdit({ id, isModalOpen, closeModal, productName, productPrice }) {
    console.log(id)
  const [discountType, setDiscountType] = useState(''); // State for flash sale type
  const [discount, setDiscount] = useState(''); // State for discount

  const handleDiscountEdit = async (e) => {
    e.preventDefault();
    try {
      // Ensure discount is less than product price
      if (parseInt(discount) >= parseInt(productPrice)) {
        throw new Error('Discount cannot be equal to or greater than the product price.');
      }

      const info = { id: id, discountType, discount: parseInt(discount) };
console.log(info)
      // Make a flash sale with the provided details
      const response = await discountEdit(info,token);

      if (response.status === 200) {
        closeModal()
        // Show success modal using SweetAlert
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Discount updated successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
      
      // closeModal();
    } catch (error) {
      console.error('Error making flash sale: ', error);
    }
  };
  
  const token = 2345;

  return (
    <div>
      {isModalOpen && (
        <dialog id="my_modal_2" className="modal absolute h-full overlay-hidden z-999" open>
          <div className="modal-box  max-w-xl">
            <div className="card lg:card-side bg-base-100 ">
              <form onSubmit={handleDiscountEdit}>
                <div className="flex flex-col justify-center">
                  <h2 className="text-xl font-light mb-5">Update Discount!</h2>
                  <h3 className="text-lg">Product name: {productName}</h3>
                  <div className="flex flex-col mb-4">
                    <label htmlFor="flashSaleType" className="mb-1">
                      Discount Type:
                    </label>
                    <select
                      id="flashSaleType"
                      value={discountType}
                      onChange={(e) => setDiscountType(e.target.value)}
                      className="border rounded py-1 px-2"
                    >
                      <option value="">Select Type</option>
                      <option value="tk">By TK</option>
                      <option value="%">By ( % ) Percentage</option>
                    </select>
                  </div>
                  <div className="flex flex-col mb-4">
                    <label htmlFor="discount" className="mb-1">
                      Discount:
                    </label>
                    <input
                      type="number"
                      id="discount"
                      max={productPrice}
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                      className="border rounded py-1 px-2"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <button className="btn btn-circle absolute transform -translate-y-100 right-2 top-1 " onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default DiscountEdit