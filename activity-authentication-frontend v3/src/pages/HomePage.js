import { useNavigate } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';

function HomePage() {
  const navigate = useNavigate();
  const [ file, setFile ] = useState(null);
  const [ uploadedFilename, setUploadedFilename ] = useState("");
  axios.defaults.withCredentials = true;
  function goToLoginPage() {
    navigate('/');
  }
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const sendData = async () => {
    const formData =  new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:3000/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });
      console.log("Uploaded filename:", res.data.filename);
      setUploadedFilename(res.data.filename);
  };

  const handleDownload = async () => {
    if (!uploadedFilename) {
      alert("No file uploaded yet.");
      return;
    }
      const res = await axios.get(
        `http://localhost:3000/api/uploads?filename=${uploadedFilename}`,
        {
          responseType: "blob",
          withCredentials: true,
        }
      );
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = uploadedFilename;
      document.body.appendChild(a);
      a.click();
      a.remove();
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-50">
      {/* <div className="text-3xl font-bold text-slate-500 text-center">Welcome to this generic app!</div> */}
      <input type="file" onChange={handleFileChange}/>
      <button onClick={sendData}>Upload</button>
      <button onClick={handleDownload}>Download File</button>
    </div>
  );
}
export default HomePage;