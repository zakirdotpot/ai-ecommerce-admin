/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { CategoryAdd, productTypeAdd } from "../Actions/Option";
import Swal from "sweetalert2";
import { optionGet } from "../Actions/Option";

function OptionView({ isModalOpen, closeModal, optionDetails }) {
  const [productype, setProductType] = useState([""]);
  const [option, setOption] = useState([]);

  const fetchOption = async () => {
    try {
      const response = await optionGet();
      console.log("Response from API:", response[0].productType);
      // Log the response

      const category = response[0].category;
      const pType = response[0].productType;

      if (optionDetails.id == 2) {
        setProductType(category);
      } else {
        setProductType(pType);
      }
    } catch (error) {
      console.error("Errot fetching ", error);
    }
  };

  useEffect(() => {
    fetchOption();
  }, [optionDetails]);

  console.log(optionDetails);

  const handleProductType = (e, index) => {
    const values = [...productype];
    values[index] = e.target.value;
    setProductType(values);
  };

  const addProductType = () => {
    setProductType([...productype, ""]);
  };

  const removeProductType = (index) => {
    const values = [...productype];
    values.splice(index, 1);
    setProductType(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (optionDetails.id === 1) {
      // Make sure optionDetails.id is a string for comparison
      if (productype.length > 0) {
        try {
          const data = {
            productType: productype,
          };
          const res = await productTypeAdd(data);
          console.log(res);
          setProductType([""]);
          closeModal();
          // Show success modal if response status is 201
          if (res.status === 201) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: res.data.message,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            // Show error modal if response status is not 201
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Failed to add product type!",
            });
          }
        } catch (error) {
          console.error("Error adding product types:", error);
          // Show error modal if there's an error during the request
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Failed to add product type!",
          });
        }
      } else {
        console.error("Product type array is empty");
        // Show error modal if product type array is empty
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Product type array is empty!",
        });
      }
    } else {
      if (productype.length > 0) {
        try {
          const data = {
            category: productype,
          };
          const res = await CategoryAdd(data);
          console.log(res);
          setProductType([""]);
          closeModal();
          // Show success modal if response status is 201
          if (res.status === 201) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: res.data.message,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            // Show error modal if response status is not 201
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Failed to add category!",
            });
          }
        } catch (error) {
          console.error("Error adding categories:", error);
          // Show error modal if there's an error during the request
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Failed to add category!",
          });
        }
      } else {
        console.error("Category array is empty");
        // Show error modal if category array is empty
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Category array is empty!",
        });
      }
    }
  };

  return (
    <div>
      {isModalOpen && (
        <dialog
          id="my_modal_2"
          className="modal absolute h-full overlay-hidden z-999"
          open
        >
          <div className="modal-box  max-w-xl">
            <div className="card lg:card-side bg-base-100 ">
              <div className="flex flex-col">
                <div className="flex flex-col lg:flex-row  justify-between gap-5">
                  <div className="w-full lg:w-[55vh] h-auto items-center ">
                    <form onSubmit={handleSubmit}>
                      <div className="w-full">
                        <div className="mb-2 w-full">
                          <label
                            htmlFor="option"
                            className="block font-semibold mb-1"
                          >
                            {optionDetails.name}
                          </label>
                          {productype.map((input, index) => (
                            <div key={index} className="relative mb-2">
                              <input
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                                value={input}
                                onChange={(e) => handleProductType(e, index)}
                              />
                              {index > 0 && (
                                <button
                                  type="button"
                                  className="absolute top-2 right-2 text-red-500"
                                  onClick={() => removeProductType(index)}
                                >
                                  X
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-row justify-between">
                          <button
                            type="button"
                            className="btn"
                            onClick={addProductType}
                          >
                            Add More
                          </button>
                          <button
                            type="submit"
                            className="bg-blue-500 btn   text-white rounded hover:bg-blue-600"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btn btn-circle absolute transform -translate-y-100 right-1 top-1 "
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default OptionView;
