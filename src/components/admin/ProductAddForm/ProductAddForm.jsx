import { useState } from "react";
import Swal from "sweetalert2";
import { productAdd } from "../../../Actions/products";
import { SketchPicker } from "react-color";
import Select from 'react-select';
import { useSelector } from "react-redux";
function ProductAddForm({getProduct}) {
  const [hoveredColorIndex, setHoveredColorIndex] = useState(null);
  //all categories
  const categories = [
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
    { value: "children", label: "Children" },
    { value: "sneakers", label: "Sneakers" },
    { value: "shoes", label: "Shoes" },
    { value: "bags", label: "Bags" },  
    { value: "electronics", label: "Electronics" },
    { value: "home", label: "Home" },
    { value: "books", label: "Books" },
    { value: "sports", label: "Sports" },
    { value: "fitness", label: "Fitness" },
    { value: "beauty", label: "Beauty" },
    { value: "health", label: "Health" },
    { value: "food", label: "Food" },
    { value: "drinks", label: "Drinks" },
    { value: "toys", label: "Toys" },
    { value: "games", label: "Games" },
    { value: "stationery", label: "Stationery" },
    { value: "music", label: "Music" },
    { value: "movies", label: "Movies" },
    { value: "pets", label: "Pets" },
    { value: "art", label: "Art" },
    { value: "crafts", label: "Crafts" },
    { value: "gardening", label: "Gardening" },
    { value: "travel", label: "Travel" },
    { value: "fashion", label: "Fashion" },
    { value: "jewelry", label: "Jewelry" },
    { value: "vintage", label: "Vintage" },
    { value: "outdoor", label: "Outdoor" },
    { value: "pen", label: "Pen" },
    { value: "tshirt", label: "T-Shirt" },
    { value: "cosmetics", label: "Cosmetics" },
    { value: "furniture", label: "Furniture" },
    { value: "technology", label: "Technology" },
    { value: "phones", label: "Phones" },
    { value: "computers", label: "Computers" },
    { value: "kitchen", label: "Kitchen" },
    { value: "tools", label: "Tools" },
    { value: "DIY", label: "DIY" },
    { value: "wallets", label: "Wallets" },
    { value: "jackets", label: "Jackets" },
    { value: "coats", label: "Coats" },
    { value: "umbrellas", label: "Umbrellas" },
    { value: "scarves", label: "Scarves" },
    { value: "belts", label: "Belts" },
    { value: "hats", label: "Hats" },
    { value: "gloves", label: "Gloves" },
    { value: "sunglasses", label: "Sunglasses" },
    { value: "swimwear", label: "Swimwear" },
    { value: "lingerie", label: "Lingerie" },
    { value: "socks", label: "Socks" },
    { value: "underwear", label: "Underwear" },
    { value: "sleepwear", label: "Sleepwear" },
    { value: "bathrobes", label: "Bathrobes" },
    { value: "towels", label: "Towels" },
    { value: "blankets", label: "Blankets" },
    { value: "pillows", label: "Pillows" },
    { value: "curtains", label: "Curtains" },
    { value: "rugs", label: "Rugs" },
    { value: "mattresses", label: "Mattresses" },
    { value: "bedsheets", label: "Bedsheets" },
    { value: "desk", label: "Desk" },
    { value: "chairs", label: "Chairs" },
    { value: "tables", label: "Tables" },
    { value: "cabinets", label: "Cabinets" },
    { value: "sofas", label: "Sofas" },
    { value: "armchairs", label: "Armchairs" },
    { value: "mirrors", label: "Mirrors" },
    { value: "lighting", label: "Lighting" },
    { value: "racks", label: "Racks" },
    { value: "appliances", label: "Appliances" },
    { value: "cooking", label: "Cooking" },
    { value: "bakeware", label: "Bakeware" },
    { value: "utensils", label: "Utensils" },
    { value: "cutlery", label: "Cutlery" },
    { value: "dining", label: "Dining" },
    { value: "storage", label: "Storage" },
    { value: "cleaning", label: "Cleaning" },
    { value: "power", label: "Power" },
    { value: "hand", label: "Hand" },
    { value: "construction", label: "Construction" },
    { value: "paint", label: "Paint" },
    { value: "carpentry", label: "Carpentry" },
    { value: "plumbing", label: "Plumbing" },
    { value: "electricity", label: "Electricity" },
    { value: "homeimprovement", label: "Home Improvement" },
    { value: "software", label: "Software" },
    { value: "hardware", label: "Hardware" },
    { value: "gadgets", label: "Gadgets" },
    { value: "laptops", label: "Laptops" },
    { value: "desktops", label: "Desktops" },
    { value: "monitors", label: "Monitors" },
    { value: "peripherals", label: "Peripherals" },
    { value: "tablets", label: "Tablets" },
    { value: "smartphones", label: "Smartphones" },
    { value: "smartwatches", label: "Smartwatches" },
    { value: "smart-home", label: "Smart Home" },
    { value: "homeappliances", label: "Home Appliances" },
    { value: "kitchenappliances", label: "Kitchen Appliances" },
    { value: "mobilephones", label: "Mobile Phones" },
    { value: "videogames", label: "Video Games" },
    { value: "consoles", label: "Consoles" },  
    { value: "cameras", label: "Cameras" },
    { value: "lenses", label: "Lenses" },
    { value: "photography", label: "Photography" },
    { value: "audio", label: "Audio" },
    { value: "headphones", label: "Headphones" },
    { value: "speakers", label: "Speakers" },
    { value: "home-theater", label: "Home Theater" },
    { value: "music-instruments", label: "Music Instruments" },
    { value: "guitars", label: "Guitars" },
    { value: "drums", label: "Drums" },
    { value: "keyboards", label: "Keyboards" },
    { value: "amps", label: "Amps" },
    { value: "necklaces", label: "Necklaces" },
    { value: "bracelets", label: "Bracelets" },
    { value: "earrings", label: "Earrings" },
    { value: "rings", label: "Rings" },
    { value: "handbags", label: "Handbags" },
    { value: "backpacks", label: "Backpacks" },
    { value: "luggage", label: "Luggage" },
    { value: "dresses", label: "Dresses" },
    { value: "tops", label: "Tops" },
    { value: "bottoms", label: "Bottoms" },
    { value: "skirts", label: "Skirts" },
    { value: "pants", label: "Pants" },
    { value: "shorts", label: "Shorts" },
    { value: "suits", label: "Suits" },
    { value: "outerwear", label: "Outerwear" },
    { value: "ties", label: "Ties" },
    { value: "pocketsquares", label: "Pocket Squares" },
  ];

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [name, setName] = useState("");
  // const [discount, setDiscount] = useState(0);
  const [origin, setOrigin] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [sizes, setSizes] = useState([]);
  const [price, setPrice] = useState();
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [productCode, setProductCode] = useState("");
  const [selectedColors, setSelectedColors] = useState([]); // Default selected color is white
  const [open, setOpen] = useState(false);
  // const [discountType, setDiscountType] = useState("");
  const [productType, setProductType] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);


  // const token = useSelector((state) => state.auth.token);
  const token=23828

  const handleCategoryChange = (selectedOptions) => {
    const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setSelectedCategories(values);
  };
  const handleProductType = (event) => {
    setProductType(event.target.value);
  };

  // const handleDiscountType = (event) => {
  //   setDiscountType(event.target.value);
  // };
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleRemoveColor = (indexToRemove) => {
    const updatedColors = selectedColors.filter(
      (_, index) => index !== indexToRemove
    );
    setSelectedColors(updatedColors);
  };

  const handleColorChange = (color) => {
    setOpen(false);
    const isSelected = selectedColors.includes(color.hex);
    if (isSelected) {
      const updatedColors = selectedColors.filter((c) => c !== color.hex);
      setSelectedColors(updatedColors);
    } else {
      setSelectedColors([...selectedColors, color.hex]);
    }
  };
  const availableSizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

  const handleSizeChange = (e) => {
    const value = e.target.value;
    if (!sizes.includes(value)) {
      setSizes([...sizes, value]);
    } else {
      const updatedSizes = sizes.filter((size) => size !== value);
      setSizes(updatedSizes);
    }
  };
 
  const isSizeSelected = (size) => {
    return sizes.includes(size) ? "selected" : "";
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

 

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a new FormData instance
    const formData = new FormData();

    // Append other product details to the form data
    formData.append("name", name);
    formData.append("rating", parseInt(rating) || 0);
    formData.append("origin", origin);
    formData.append("color", (selectedColors)); // Convert selectedColors array to JSON string
    formData.append("quantity", parseInt(quantity) || 0);
    // formData.append("discount", parseFloat(discount) || 0);
    formData.append("size", (sizes)); // Convert sizes array to JSON string
    formData.append("brand", brand);
    formData.append("description", description);
    formData.append("price", parseInt(price) || 0);
    formData.append("productCode", productCode);
    formData.append("productType", productType);
    // formData.append("discountType", discountType);
  
    // Append images as separate files
    formData.append("category", (selectedCategories));
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });
  
    // Append selectedCategories as a JSON string
    // const logFormData = (formData) => {
    //   for (let pair of formData.entries()) {
    //     console.log(pair[0], pair[1]);
    //   }
    // };
    
    // Assuming formData is your FormData object
    // logFormData(formData)
    try {
      const response = await productAdd(formData,token);
      console.log(response)
      handleCloseModal();
      getProduct();
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

 
  return (
    <div>
      <button
        className="btn btn-success btn-outline"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Add New Product
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="text-center text-2xl font-bold">Add a New Product</h3>

          <div className="modal-action flex flex-col">
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-row flex-wrap gap-3 items-center p-4 "
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full justify-between items-center gap-2 lg:gap-7">
                  <div className="mb-2 w-full">
                    <label htmlFor="name" className="block font-semibold mb-1">
                      Product Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter product name"
                    />
                  </div>
                  <div>
                    <div className="mb-2 w-full ">
                      <labelf
                        htmlFor="rating"
                        className="block font-semibold mb-1"
                      >
                        Ratings
                      </labelf>
                      <input
                        type="number"
                        id="rating"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        placeholder="Enter Ratings"
                        min="0"
                        max="5"
                      />
                    </div>
                  </div>

                  <div className="mb-2 w-full">
                    <label
                      htmlFor="origin"
                      className="block font-semibold mb-1"
                    >
                      Country of Origin
                    </label>
                    <input
                   
                      type="text"
                      id="origin"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      placeholder="Enter country of origin"
                    />
                  </div>
                </div>
                <div className="mb-2 w-full ">
                  <label htmlFor="picture" className="block font-semibold mb-1">
                    Product Image
                  </label>
                  <input
                    type="file"
                    id="picture"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    onChange={handleFileChange}
                    multiple
                    required
                  />
                  <div className="mt-3">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="mt-3">
                        <p>{file.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 w-full justify-between items-center gap-2 lg:gap-7">
                  {/* <div className="mb-2 w-full">
                    <label
                      htmlFor="discount"
                      className="block font-semibold mb-1"
                    >
                      Discount
                    </label>
                    <input
                      type="number"
                      id="discount"
                      placeholder="Enter Discount in percent"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                  </div> */}

                  {/* Product color */}
                  <div>
                    <div className="mb-2 w-full">
                      <label
                        htmlFor="color"
                        className="block font-semibold mb-1"
                      >
                        Product Color
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {selectedColors.map((color, index) => (
                          <div
                            key={index}
                            className="relative"
                            onMouseEnter={() => setHoveredColorIndex(index)}
                            onMouseLeave={() => setHoveredColorIndex(null)}
                          >
                            <div
                              style={{
                                backgroundColor: color,
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              onClick={() => handleColorChange(color)}
                            ></div>
                            {hoveredColorIndex === index && (
                              <button
                                className="absolute top-1.5 right-1.5 rounded-full  "
                                onClick={() => handleRemoveColor(index)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-white"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M14.293 5.293a1 1 0 011.414 1.414L11.414 12l4.293 4.293a1 1 0 01-1.414 1.414L10 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 12 4.293 7.707a1 1 0 011.414-1.414L10 10.586l4.293-4.293z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            )}
                          </div>
                        ))}

                        <div className="tooltip" data-tip="ADD COLOR">
                          <button
                            onClick={handleOpen}
                            className="btn btn-outline btn-success border-2 font-bold btn-sm text-xl"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {open == true && (
                      <div style={{ marginBottom: "10px" }}>
                        <SketchPicker
                          color={selectedColors[selectedColors.length - 1]} // Display the last selected color in the color picker
                          onChangeComplete={(newColor) =>
                            handleColorChange(newColor)
                          }
                        />
                      </div>
                    )}
                  </div>

                  <div className="mb-2 w-full">
                    <label
                      htmlFor="brand"
                      className="block font-semibold mb-1 mt-4"
                    >
                      Brand
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="Enter  Product brand"
                      value={brand}
                      onChange={handleBrandChange}
                      id="brand"
                    />
                  </div>

                  <div>
                    <label htmlFor="size" className="block font-semibold mb-1">
                      Size
                    </label>
                    <div className="size-options flex gap-2">
                      {availableSizes.map((size) => (
                        <label
                          key={size}
                          className={`size-option ${isSizeSelected(size)}`}
                        >
                          <input
                            className="flex flex-row"
                            type="checkbox"
                            value={size}
                            checked={sizes.includes(size)}
                            onChange={handleSizeChange}
                          />
                          {size}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}

                  <div className="mb-2 w-full">
                    <label
                      htmlFor="quantity"
                      className="block font-semibold mb-1"
                    >
                      Quantity
                    </label>

                    <input
                      required
                      type="number"
                      id="quantity"
                      placeholder="Enter Product Quantity"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>

                  <div className="mb-2 w-full">
                    <label
                      htmlFor="productCode"
                      className="block font-semibold mb-1"
                    >
                      SKU/Product Code
                    </label>
                    <input
                      type="text"
                      id="productcode"
                      required
                      placeholder="Enter Product code"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={productCode}
                      onChange={(e) => setProductCode(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 w-full">
      <label htmlFor="category" className="block font-semibold mb-1">
        Category
      </label>
      <Select
        options={categories}
        isMulti
        required
        value={categories.filter(option => selectedCategories.includes(option.value))}
        onChange={handleCategoryChange}
      />
    </div>

                  {/* <div className="mb-3 w-full">
                    <label
                      htmlFor="discountType"
                      className="block font-semibold mb-1"
                    >
                      Discount Type
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={discountType}
                      onChange={handleDiscountType}
                      id="category"
                    >
                      <option value="">Select Discount Type</option>
                      <option value="%">By Percentage</option>
                      <option value="$">By Dollar Amount</option>
                    </select>
                  </div> */}

                  <div className="mb-3 w-full">
                    <label
                      htmlFor="productType"
                      className="block font-semibold mb-1"
                    >
                      Product Type
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={productType}
                      onChange={handleProductType}
                      id="productType"
                      required
                    >
                      <option value="">Select Product Type</option>
                      <option value="All">All</option>
                      <option value="Man">Man</option>
                      <option value="Woman">Woman</option>
                      <option value="Kid's">Kid's</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Shoes">Shoes</option>
                    </select>
                  </div>

                  {/* Price */}
                  <div className="mb-2 w-full">
                    <label htmlFor="price" className="block font-semibold mb-1">
                      Price
                    </label>
                    <input
                      type="number"
                      required
                      id="price"
                      placeholder="Enter Price"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-2 w-full">
                  <label
                    htmlFor="description"
                    className="block font-semibold mb-1 mt-4"
                  >
                    Description
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Enter  Product description"
                    value={description}
                    onChange={handleDescriptionChange}
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
      {console.log('token',token)}
    </div>
  );
}

export default ProductAddForm;
