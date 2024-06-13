'use client'
import React, { useState, useEffect } from "react";

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import Swal from "sweetalert2";


import { useSelector } from "react-redux";
import { getAllFeatureProducts, getProductById, removeFeature } from "Actions/products";
import ProductView from "components/ProductView/ProductView";



function FeaturedProducts() {

  const token = 3455;

  const [featureProducts, setFeatureProducts] = useState([]);
    const [product, setProduct] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFeature = async (productId, feature) => {
    try {
      const res = await removeFeature({ productId: productId,isFeatured: feature },token);
      console.log(res);
  
      if (res.status === 200) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Product  Featuredless successfully ',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          getProduct();
        });
      }
  
    } catch (error) {
      console.error('Error Product Featured: ', error);
    }
  };
  
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await getAllFeatureProducts(token);
      
      setFeatureProducts(response.data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  const handleProductDetails = async (id) => {
    
    setIsModalOpen(true);

    const response = await getProductById(id,token);
    console.log("productById",response)
    setProduct(response);
  };

  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleModal = (id) => {
    setSelectedProductId(id);
    
    handleProductDetails(id)

  };
  
  const closeModal = () => {
 
    setIsModalOpen(false)
  };
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
 
  console.log(featureProducts);
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
      renderCell: (param) => <button className="btn btn-square btn-circle btn-info"  onClick={() => handleModal(param.row._id)}>View</button>,
    },
    {
        field: "feature",
        headerName: "Remove Feature Product",
        width: 250,
        renderCell: (param) => (
          <div className="btn btn-info btn-sm" onClick={() => handleFeature(param.row._id, false)}>
            Remove Feature Product
          </div>
        ),
      },
      
   
    
  ];

  return (
    <div className="">
      {selectedProductId && <ProductView id={selectedProductId} isModalOpen={isModalOpen} product={product}   closeModal={closeModal} />}
      <div className="w-full ">
        <div className="flex flex-row bg-gray-300 justify-between items-center p-4 py-5">
          <div className="w-full flex flex-row gap-3">
            <h2>Feature Product List</h2>
          </div>
        </div>
      </div>
      <div className='px-4 mt-5' style={{ height: 720, width: '100%' }} > 
        <DataGrid autoHeight 
          rows={featureProducts}
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


export default FeaturedProducts