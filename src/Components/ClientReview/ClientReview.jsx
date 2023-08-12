import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import './CLientReview.css'
function CLientReview() {

        
    const [Courses, setCourses] = useState([])
    const [loader, setLoader] = useState(false)

    const loadCourses=async()=>{
        const q = query(collection(db, "Testimonials"));
        
        const querySnapshot = await getDocs(q);

        const Item = [];

        querySnapshot.forEach(element => {
            console.log("MenteelistAlltime =>", element.data())
            const eid = { id: element.id }
              Item.push({ ...element.data(), ...eid })

        })
        setCourses(Item)
        setLoader(true)


      }

    useEffect(()=>{
        loadCourses();
    },[loader])

    return (
        <div style={{ width: "100%", margin: "auto" }}>

            {loader ? <>
            
                <h3 style={{textAlign:"left",fontSize:"30px", fontFamily:"'Playfair Display', serif" }}>Testimonials</h3>
            <div className="">
               
               <div className="testimonial_container">

                    {Courses.map((c)=>{
                        return <>
                                <img src={c.img} alt="" style={{width:"500px"}} />
                            <h5>{c.title}</h5>

                        </>
                    })}
                
               </div>
              
            </div>
            
            </> : 
            <>
             
            
            <h3 style={{textAlign:"left",fontSize:"30px", fontFamily:"'Playfair Display', serif" }}>Testimonials</h3>
            <div className="courses">
                <div className="course" style={{backgroundColor:"#dddd",height:"350px"}}>
                </div>
                <div className="course" style={{backgroundColor:"#dddd",height:"350px"}}>
                </div>


            </div>
            </>}

        </div>


    )
}

export default CLientReview