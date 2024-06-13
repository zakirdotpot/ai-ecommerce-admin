import { useState } from "react";
import Swal from "sweetalert2";
import { productAdd } from "../Actions/products";

function InformationAddForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone_number", phoneNumber);
      formData.append("address", address);
      formData.append("facebooklink", facebookLink);
      formData.append("instagramLink", instagramLink);
      formData.append("linkedinLink", linkedinLink);
      formData.append("twitterLink", twitterLink);
      formData.append("description", description);
      formData.append("image", image);

      const response = await productAdd(formData);
      console.log(response);
      handleCloseModal();

      if (response.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.data.error,
      });
    }
  };

  const handleCloseModal = () => {
    const modal = document.getElementById("my_modal_4");
    if (modal) {
      modal.close();
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <button
        className="btn btn-success btn-outline items-center"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Add Company Information
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="text-center text-2xl font-bold">Add Company Information</h3>

          <div className="modal-action flex flex-col">
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 items-center p-4 "
              >
                <div className="mb-2 w-full">
                  <label htmlFor="name" className="block font-semibold mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter company name"
                  />
                </div>

                <div className="mb-2 w-full">
                  <label htmlFor="email" className="block font-semibold mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                </div>

                <div className="mb-2 w-full">
                  <label htmlFor="phoneNumber" className="block font-semibold mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="mb-2 w-full">
                  <label htmlFor="address" className="block font-semibold mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter address"
                  />
                </div>

                <div className="mb-2 w-full">
                  <label htmlFor="facebook" className="block font-semibold mb-1">
                    FaceBook Link
                  </label>
                  <input
                    type="text"
                    id="facebooklink"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={facebookLink}
                    onChange={(e) => setFacebookLink(e.target.value)}
                    placeholder="Enter Facebook Link"
                  />
                </div>

                <div className="mb-2 w-full">
                  <label htmlFor="facebook" className="block font-semibold mb-1">
                    Instagram Link
                  </label>
                  <input
                    type="text"
                    id="instagramlink"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={instagramLink}
                    onChange={(e) => setInstagramLink(e.target.value)}
                    placeholder="Enter Instagram Link "
                  />
                </div>

                <div className="mb-2 w-full">
                  <label htmlFor="linkedin" className="block font-semibold mb-1">
                    LinkedIn Link
                  </label>
                  <input
                    type="text"
                    id="linkedin"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={linkedinLink}
                    onChange={(e) => setLinkedinLink(e.target.value)}
                    placeholder="Enter LinkedIn Link"
                  />
                </div>
                

                <div className="mb-2 w-full">
                  <label htmlFor="twitter" className="block font-semibold mb-1">
                    Twitter Link
                  </label>
                  <input
                    type="text"
                    id="twitter"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={twitterLink}
                    onChange={(e) => setTwitterLink(e.target.value)}
                    placeholder="Enter Twitter Link"
                  />
                </div>

                <div className="mb-2 w-full">
                  <label htmlFor="picture" className="block font-semibold mb-1">
                    Company Logo
                  </label>
                  <input
                    type="file"
                    id="picture"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleFileChange}
                    required
                  />
                </div>

                <div className="mb-2 w-full">
                  <label
                    htmlFor="description"
                    className="block font-semibold mb-1 mt-4"
                  >
                    Company Description
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Enter company description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id="description"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 w-full mx-auto h-14 md:mt-7 text-black rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
            <button
              className="btn w-full items-center"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default InformationAddForm;
