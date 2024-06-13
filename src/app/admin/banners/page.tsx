'use client'
import  { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import { useSelector } from 'react-redux';
import { bannerAdd, bannerGet, bannerRemove } from 'Actions/banner';

function Banners() {
  const [banners, setBanners] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [bannerTitle, setBannerTitle] = useState('');
  const [bannerSubtitle, setBannerSubtitle] = useState('');
  const [bannerBody, setBannerBody] = useState('');


  const token = 2346;

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const response = await bannerGet(token); // Assuming bannerGet is defined
      setBanners(response);
    } catch (error) {
      console.error('Error fetching banners: ', error);
    }
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImageFile(selectedImage);
    }
  };


  const handleBannerSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      if (!imageFile) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please select an image to upload.',
        });
        return;
      }

      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('title', bannerTitle);
      formData.append('subTitle', bannerSubtitle);
      formData.append('body', bannerBody);

      const response = await bannerAdd(formData,token);

      if (response.status === 201) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Banner successfully added!',
          showConfirmButton: false,
          timer: 1500,
        });

        setImageFile(null);
        setBannerTitle('');
        setBannerSubtitle('');
        setBannerBody('');
        fetchBanners();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Failed to upload banner.',
      });
    }
  };

  const removeBanner = async (bannerId) => {
    try {
      const response = await bannerRemove(bannerId);

      if (response.status === 200) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Banner successfully deleted!',
          showConfirmButton: false,
          timer: 1500,
        });

        fetchBanners();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Failed to remove banner.',
      });
    }
  };
console.log(banners)

  return (
    <div className=' min-h-screen px-2  flex flex-col gap-2'>
      <h2 className='text-2xl font-bold mb-10 text-center mt-3'>Add a Banner</h2>
      
      <form onSubmit={handleBannerSubmit}> {/* Add onSubmit to the form */}
        <div className='flex flex-col justify-between gap-2 max-w-7xl mx-auto'>
          <label htmlFor="upload" className='btn btn-outline w-[25vh]'>Add Banner Image</label>
          <input 
            id="upload"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <div className='flex flex-row justify-between '>
            <div className='flex flex-col w-full'>
              <label className='text-lg'>Banner Title:</label>
              <input
                type="text"
                value={bannerTitle}
                onChange={(e) => setBannerTitle(e.target.value)}
                className='input-field w-full'
              />
            </div>
            <div className='flex flex-col w-full ml-2 rounded-lg'>
              <label className='text-lg'>Banner Subtitle:</label>
              <input
                type="text"
                value={bannerSubtitle}
                onChange={(e) => setBannerSubtitle(e.target.value)}
                className='input-field w-full'
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-lg'>Banner Body:</label>
            <textarea
              value={bannerBody}
              onChange={(e) => setBannerBody(e.target.value)}
              className='input-field'
            />
          </div>
          {imageFile && (
            <img
              src={URL.createObjectURL(imageFile)}
              alt="Uploaded"
              className="max-w-screen max-h-[55vh]"
            />
          )}
          
            <button type="submit" className="btn btn-info w-full">Submit</button>
       
        </div>
      </form>
     <div className='mt-16'>
     {banners.length > 0 && (
     <div className="max-w-screen overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Title</th>
        <th>Sub-Title</th>
        <th>Image</th>
        <th>Action</th>
        <img src="" alt="" />
      </tr>
    </thead>
    <tbody>
    {banners.map((banner) => (
              <tr key={banner._id}>
                <td>{banner.title}</td>
                <td>{banner.subTitle}</td>
                <td >
                 
                  <img
                    src={banner.image}
                    alt={`Uploaded ${banner._id}`}
                    className="w-40 h-auto"
                  />
                </td>
                <td className=''>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeBanner(banner._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
    
    </tbody>
  </table>
</div>
    
     )}  
     </div>


    </div>
  );
}

export default Banners;
