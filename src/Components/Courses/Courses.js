import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import './Courses.css'
function Courses() {

        
    const [Courses, setCourses] = useState([])
    const [loader, setLoader] = useState(false)

    const loadCourses=async()=>{
        const q = query(collection(db, "CoursesandCertificates"));
        
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
        <div style={{ width: "80%", margin: "auto" }}>

            {loader ? <>
            
            <h3 style={{textAlign:"left",fontSize:"30px", fontFamily:"'Playfair Display', serif" }}>Certificates</h3 >
            <div className="certificates">
               
               <div className="certificate">

                    {Courses.map((c)=>{
                        return <>
                        {c.type === "Certificate" ? <>
                                <img src={c.img} alt="" />
                            <h5>{c.title}</h5>

                        </>:null}
                        </>
                    })}
                
               </div>
              
            </div>
            <h3 style={{textAlign:"left",fontSize:"30px", fontFamily:"'Playfair Display', serif" }}>Courses</h3>
            <div className="courses">
                <div className="course">

                {Courses.map((c)=>{
                        return <>
                        {c.type === "Course" ? <>
        
                         <iframe src={c.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            <h5>{c.title}</h5>

                        </>:null}
                        </>
                    })}
                </div>


            </div>
            </> : 
            <>
             
             <h3 style={{textAlign:"left",fontSize:"30px", fontFamily:"'Playfair Display', serif" }}>Certificates</h3>
            <div className="certificates">
               
               <div className="certificate" style={{backgroundColor:"#dddd",height:"350px"}}>
               </div>
               <div className="certificate" style={{backgroundColor:"#dddd",height:"350px"}}>
               </div>

            </div>
            <h3 style={{textAlign:"left",fontSize:"30px", fontFamily:"'Playfair Display', serif" }}>Courses</h3>
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

export default Courses