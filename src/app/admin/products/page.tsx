'use client'
import { deleteProductById, getAllProducts, getProductById, makeFeature } from "Actions/products";
import ProductView from "components/ProductView/ProductView";
import MakeFlashSale from "components/admin/MakeFlashSale/MakeFlashSale";
import ProductAddForm from "components/admin/ProductAddForm/ProductAddForm";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";



function Products() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);

  const token ="38437";

  const handleProductDetails = async (id) => {
   
    setIsModalOpen(true); // Ensure isModalOpen is set to true when "View" button is clicked
    
    const response = await getProductById(id,token);
    setProduct(response);
  };
  
  
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await getAllProducts(token);
      setProducts(response);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
  const productDeleteById = async (productId) => {
    try {
      const response = await deleteProductById(productId,token);
      if (response.status === 200) {
        getProduct();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Product successfully deleted!',
          showConfirmButton: false,
          timer: 1500,
        });
        // Refresh products after deletion
       
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Failed to remove product.',
      });
    }
  };




  const handleFeature = async (productId, feature) => {
    try {
      const res = await makeFeature({ productId: productId, isFeatured: feature }, token);
  
      if (res.status === 200) {
        Swal.fire({
          position: 'center',   
          icon: 'success',
          title: 'Product Featured successfully ',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          getProduct();
        });
      }
  
    } catch (error) {
      // Handle any errors that occur during the asynchronous operation
      console.error('Error Product Featured: ', error);
    }
  };
  
  const viewFlashSaleModal = async(id) => {
    setIsDiscountModalOpen(true);
    const response = await getProductById(id,token);
    setProduct(response);
  };
  const closeDiscountModal = () => {
   setIsDiscountModalOpen(false);
  };

  const columns = [
 
    {
      field: "name",
      headerName: "Name",
      width: 250,
      renderCell: (param) => <div>{param.row.name}</div>,
    },

    {
      field: "quantity",
      headerName: "Quantity",
      type: "quantity",
      width: 100,
      renderCell: (param) => <div>{param.row.quantity}</div>,
    },
    {
      field: "price",
      headerName: "Price",

      width: 150,
      renderCell: (param) => <div>{param.row.price}</div>,
    },
    {
      field: "view",
      headerName: "View",

      width: 150,
      renderCell: (param) => <div>   <button className="btn btn-sm btn-outline"  onClick={() => handleProductDetails(param.row._id)} >
    View
  </button>
     </div>,
    },
    {
      field: "edit",
      headerName: "Edit",

      width: 150,
      renderCell: (param) => <div className="btn btn-info btn-sm">Edit</div>,
    },
    {
      field: "feature",
      headerName: "Make Feature Product",
      width: 250,
      renderCell: (param) => (
        param.row.isFeatured ? (
          <div className="font-bold">Featured Product</div>
        ) : (
          <div className="btn btn-sm btn-outline" onClick={() => handleFeature(param.row._id, true)}>
            Make Feature Product
          </div>
        )
      ),
    },
    
    {
      field: "flashSale",
      headerName: "Flash Sale Product",
      width: 250,
      renderCell: (param) =>  (
        param.row.discountedPrice>0 ? (
          <div className="font-bold">Discounted</div>
        ) : (
          <button className="btn btn-sm btn-outline" onClick={()=>viewFlashSaleModal(param.row._id)}>
      Make Discount
    </button>
        )
      ),
      
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (param) => (
        <div className="btn btn-warning btn-sm" onClick={() => productDeleteById(param.row._id)}>
          Delete
        </div>
      ),
    },
    
  ];

  return (
    <div className="font-poppins text-navy-700 dark:text-white">
      <div className="w-full ">
      <ProductView
      id={product} // Assuming product has an _id property
      product={product}
      isModalOpen={isModalOpen}
     
      closeModal={closeModal}
    /> 
      <MakeFlashSale
      id={product} // Assuming product has an _id property
      productName={product}
      productPrice={product}
      isModalOpen={isDiscountModalOpen}

      closeModal={closeDiscountModal}
    /> 
        <div className="flex flex-row  justify-between   items-center p-4 py-5">
          <div className="w-full flex flex-row gap-3">
            <div className="btn btn-outline btn-active  border-2   btn-inactive">
              Total Products  :  {products.length}
            </div>
          </div>
          <ProductAddForm getProduct={getProduct} />{" "}
        </div>
      </div>
      <div className='px-4' style={{ height: '100%', width: '100%' }} > 
        <DataGrid autoHeight 
          rows={products}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 11,
              },
            },
          }}
          // rowsPerPageOptions={[6]}
          getRowId={(row) => row._id}
          slots={{
            toolbar: CustomToolbar,
          }}
        />
      </div>
   
    </div>
  );
}
export default Products;
