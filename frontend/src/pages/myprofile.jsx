import React, { useState, useEffect } from 'react';
import services from "../services";

function myprofile() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    // 從 session 中獲取用戶名稱
    const usernameFromSession = sessionStorage.getItem('username');
    setUsername(usernameFromSession);

    // 在組件加載時從後端加載用戶資料
    async function fetchUserData() {
      try {
        const userData = await services.user.getOne(usernameFromSession);
        setAvatar(userData.avatar);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    // 加載用戶資料
    fetchUserData();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const base64Image = event.target.result;
      try {
        await services.user.uploadImage({ username, avatar: base64Image });
        // Handle success
        console.log('Image uploaded successfully.');
        // 更新頭像
        setAvatar(base64Image);
      } catch (error) {
        // Handle error
        console.error('Error uploading image:', error);
      }
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="avatar" src={avatar} />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{username}</h1>
          <div className="flex justify-center">
            <form onSubmit={handleSubmit}>
              <input type="file" onChange={handleFileChange} accept="image/jpg, image/jpeg, image/png" />
              <button type="submit" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Upload</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default myprofile