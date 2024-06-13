'use client'
import  { useState, useEffect } from "react";


import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import Swal from "sweetalert2";

import { useSelector } from "react-redux";
import { deleteDiscount, getDiscountedProducts, getProductById } from "Actions/products";
import DiscountEdit from "components/DiscountEdit";
import ProductView from "components/ProductView/ProductView";


function FlashSaleProduct() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [open,setOpen]=useState(false);
  const [openView,setOpenView]=useState(false);

  const handleDiscountEdit = async (id) => {

   setOpen(true)
    // try {
     
    const response = await getProductById(id,token);
    setProduct(response);
  
  };
  const closeModal = () => {
    setOpen(false);
    setOpenView(false)
  };
  const handleDiscountRemove = async (id) => {
  
    try {
     
      const res = await deleteDiscount(id,token);
      console.log(res);
  
      if (res.status === 200) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Product Discount Removed successfully ',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          getProduct();
        });
      }
  
    } catch (error) {
      console.error('Error Product Discount Removed: ', error);
    }
  };
  
  const token = 232;

  const handleViewDiscount = async(id) => {
    setOpenView(true);
    const response = await getProductById(id,token);
    setProduct(response);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await getDiscountedProducts(token);
      setProducts(response);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };



  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
 
  console.log(products);
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
      width: 300,
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
      renderCell: (param) => (<button className="btn btn-info btn-sm" onClick={() => handleViewDiscount(param.row._id)}>
      View
    </button>),
    },
    {
        field: "edit discount",
        headerName: "Edit",
        width: 250,
        renderCell: (param) => (
          <button className="btn btn-success btn-sm" onClick={() => handleDiscountEdit(param.row._id)}>
            Edit Discount
          </button>
        ),
      },
    {
        field: "DisacountRemove",
        headerName: "Remove Discount",
        width: 250,
        renderCell: (param) => (
          <div className="btn btn-warning btn-sm" onClick={() => handleDiscountRemove(param.row._id)}>
            Remove Discount
          </div>
        ),
      },
      
   
    
  ];

  return (
    <div className="">
      <div className="w-full ">
      <ProductView
      id={product} // Assuming product has an _id property
      product={product}
      isModalOpen={openView}
     
      closeModal={closeModal}
    /> 
      <DiscountEdit
      id={product} // Assuming product has an _id property
      productName={product}
      productPrice={product}
      isModalOpen={open}

      closeModal={closeModal}
    /> 
        <div className="flex flex-row  justify-between items-center p-4 py-5">
          <div className="w-full flex flex-row gap-3">
            <h2> Product List</h2>
          </div>
        </div>
      </div>
      <div className='px-4 mt-5' style={{ height: 720, width: '100%' }} > 
        <DataGrid autoHeight 
          rows={products}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 40,
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



export default FlashSaleProduct