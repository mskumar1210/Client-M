import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function Coursedetils() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const[loading,setLoading]=useState(false);

  // ✅ Check login status from "user" in localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user;

  // 📦 Fetch course details
  const fetchCourse = async () => {
    try {
      const res = await API.get(`/courseview/${id}`, { withCredentials: true });
      setCourse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [id]);

  // 🎯 Book Now handler
  const handleBookNow = async() => {
    if(!isLoggedIn){
      navigate("/login");
      return;
    }
    try{
      setLoading(true);
      const res= await API.post(
        `/booking/create/${id}`,
        {},
        {
          // headers:{
          //   Authorization:`Bearer ${ user,token}`,
          // },
        }
      );
      if(res.data.booking){
        alert("Booking successful!");
        navigate("/mybooking");
      }else{
        alert(res.data.message || "Booking Failed");
      }
    }catch(err){
      console.error(err);
      alert(err.response?.data?.message || "something went wrong");
    }finally{
      setLoading(false);
    }
  
  };

  if (!course) {
    return <div className="text-center my-5">Loading...</div>;
  }

  return (
    <>
      <img
        src="https://pninfosys.org/bannerFinal.jpg"
        alt=""
        className="w-100"
        style={{ height: "200px" }}
      />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-5">
            <img
              src={course?.image?.url}
              alt={course?.title}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-7">
            <h2>{course?.title}</h2>
            <p>{course?.description}</p>
            <p>
              <strong>Price:</strong> ₹{course?.price}
            </p>

            <button
             className="btn btn-success"
              onClick={handleBookNow}
              disabled={loading}
            >
              {loading ? "Booking...":isLoggedIn ?"Book Now": "Login to Book"}

             
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coursedetils