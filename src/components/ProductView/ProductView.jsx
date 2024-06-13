import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProductView({ id, product, isModalOpen, closeModal }) {
  return (
    <div>
      {isModalOpen && (
        <dialog
          id="my_modal_2"
          className="modal absolute h-full font-poppins overlay-hidden z-999"
          open
        >
          <div className="modal-box  max-w-4xl">
            <div className="card lg:card-side bg-base-100 ">
              <div className="">
                <div className="flex flex-col">
                  <div className="flex flex-col lg:flex-row  justify-between gap-5">
                    <div className="w-full lg:w-[55vh] h-auto ">
                      <Carousel
                        autoPlay={true}
                        interval={3000}
                        infiniteLoop={true}
                      >
                        {product.images &&
                          product.images.map((image, index) => (
                            <div key={index}>
                              <img src={image} alt={index} />
                            </div>
                          ))}
                      </Carousel>
                    </div>

                    <div className="my-2 w-full">
                      <div className="border border-black p-2 mb-2 rounded-xl">
                        <h4 className="text-xl">
                          <strong>Product Name: {product.name}</strong>
                        </h4>
                      </div>

                      <div className="border border-black p-2 mb-2 rounded-xl">
                        <h4 className="text-xl">
                          {" "}
                          <strong>
                            Product Price: {product.price} ৳ Taka{" "}
                          </strong>
                        </h4>
                      </div>

                      <div className="border border-black p-2 mb-2 rounded-xl">
                        <div className="flex items-center mt-2.5 mb-5">
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                            <strong> Rating </strong> {product.rating}
                          </span>
                        </div>
                      </div>

                      <div className="flex py-2 pb-5 ">
                        <div className="border border-black rounded-xl p-2 ">
                          <h6 className="font-bold text-xl"> Size: </h6>
                        </div>
                        <ul className="flex">
                          {product.size?.map((s) => (
                            <li key={s} className="mx-1 lg:mx-2">
                              <div className="border border-black rounded-lg p-2">
                                {s}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xl font-bold pb-2"> Cart Details :</p>
                        <div className="card-body border border-black p-4 rounded-lg text-justify">
                          <p>{product.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btn btn-circle absolute transform -translate-y-100 right-2 top-1 "
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

export default ProductView;
