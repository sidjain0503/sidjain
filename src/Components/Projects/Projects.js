import React, { useEffect, useState } from 'react'
import Project from '../Project/Project'
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';
function Projects() {



  const [Projects, setProjects] = useState([])
  const [loader, setLoader] = useState(false)


  const loadProjects = async () => {
    const q = query(collection(db, "Projects"));

    const querySnapshot = await getDocs(q);

    const Item = [];

    querySnapshot.forEach(element => {
      console.log("MenteelistAlltime =>", element.data())
      const eid = { id: element.id }
      Item.push({ ...element.data(), ...eid })

    })
    setProjects(Item)
    setLoader(true)


  }

  useEffect(() => {
    loadProjects();
  }, [loader])

  return (
    <div style={{ width: "90%", margin: "auto" }}>

      <h3 style={{fontFamily:"'Playfair Display', serif",fontSize:"36px",textAlign:'center'}}>Projects 👨‍💻</h3>
      <p style={{fontSize:"16px",textAlign:"center",marginBottom:"40px"}}>I believe Project based learning is the best way to learn programming . <br />

        Here are my projects I made and will be adding some more interesting projects soon...🚀🚀.</p>

      {loader === true ? <>
        {Projects.map((p) => {
          return <>
            <Project image={p.img} p1={p.para1} p2={p.para2} title={p.title} tech={p.Tech} link={p.link} code={p.code} video={p.video} />
          </>
        })}
      </> :

        <>

          <div style={{ height: "300px", width: "90%", background: "#dddd", borderRadius: "20px", opacity: "0.75", margin: "50px auto" }}></div>
          <div style={{ height: "300px", width: "90%", background: "#dddd", borderRadius: "20px", opacity: "0.75", margin: "50px auto" }}></div>
          <div style={{ height: "300px", width: "90%", background: "#dddd", borderRadius: "20px", opacity: "0.75", margin: "50px auto" }}></div>
        </>

      }



    </div>
  )
}

export default Projects