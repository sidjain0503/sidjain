import React, { useEffect, useState } from 'react'
import Project from '../Project/Project'
import './Main.css'
import Typewriter from 'typewriter-effect';
import img3 from './img/sid.jpeg'
import img2 from './img/sid2.jpg'
import img1 from './img/sid3.jpg'
import { Link } from 'react-router-dom';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { Circles } from 'react-loader-spinner'
import { motion } from "framer-motion";
import Readme from './Readme';
import CLientReview from '../ClientReview/ClientReview';



function Main() {

    const [props, setprops] = useState("Intro")

    const selectProp = (value) => {
        setprops(value)
    }

    const scrolltotop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    const [Projects, setProjects] = useState([])
    const [Info, setInfo] = useState([])
    const [loader, setLoader] = useState(false)


    const loadProjects = async () => {
        const q = query(collection(db, "Projects"), limit(1));

        const querySnapshot = await getDocs(q);

        const Item = [];

        querySnapshot.forEach(element => {
            // console.log("MenteelistAlltime =>", element.data())
            const eid = { id: element.id }
            Item.push({ ...element.data(), ...eid })

        })
        setProjects(Item)


    }

    const loadAbout = async () => {
        const q = query(collection(db, "PersonalInfo"));

        const querySnapshot = await getDocs(q);

        const Item = [];

        querySnapshot.forEach(element => {
            console.log("MenteelistAlltime =>", element.data().Skills)
            const eid = { id: element.id }
            Item.push({ ...element.data(), ...eid })

        })
        setInfo(Item)
        setLoader(true)


    }

    useEffect(() => {
        loadProjects();
        loadAbout();
    }, [loader])


    const animationVariants = {
        hover: { scale: 1.1 }
    }

    return (<>
        {loader === true ? <>
            <div className='main'>


                <h1 style={{ textAlign: "center", margin: "50px 0px", color: "#ffd660" }}>
                    <Typewriter
                        options={{
                            strings: ['<WEB DEVELOPER', '<OPEN SOURCE', '<FULL-STACK', "<MERN STACK", '<FREELANCER'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <motion.h3
                    className='code'
                    initial={{ x: "150px" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}

                    style={{ color: "hsl(242deg 88% 66%)" ,fontFamily:"sans-serif"}}>Hi , I am Siddharth Chopda 👋 </motion.h3>

                <div className="intro" style={{ display: "flex", justifyContent: "space-between" }}>
                    <motion.div

                        initial={{ x: "-150px" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}

                        className="back-card-holder" style={{ width: "65%" }}>
                        <div class="card-padding-holder"><div class="front-card-header-holder black">
                            <div class="browser-menu" >
                                <div data-w-id="bf61b558-61fc-3548-0ece-d9bd814737b6" class="small-circle normal"
                                    onClick={() => selectProp("Intro")}>Who am I  😀</div>
                                <div data-w-id="bf61b558-61fc-3548-0ece-d9bd814737b7" class="small-circle yellow"
                                    onClick={() => selectProp("Education")}>Education🖋</div>
                                <div data-w-id="bf61b558-61fc-3548-0ece-d9bd814737b8" class="small-circle green"
                                    onClick={() => selectProp("Skills")}>Skills🏏</div>
                            </div></div><div class="code-holder"><div class="fade-in-move-on-scroll"><p class="_20px-paragraph"></p></div><div class="fade-in-move-on-scroll" ><p
                                class="_20px-paragraph yellow-text">
                                {Info.map((i) => {
                                    return <>


                                        {props === "Intro" ? <>
                                            <strong style={{ color: "white", fontSize: '28px'  , fontFamily:"'Playfair Display', serif",marginBottom:"20px"}}>About me  </strong>
                                            <p style={{ fontSize: "16px", fontWeight: "400", paddingTop:"20px" }}>
                                                {i.about_me.map((m) => {
                                                    return <>
                                                        {m}
                                                        <br /><br />
                                                    </>

                                                })}
                                            </p>
                                        </> : null}

                                        {props === "Education" ? <>
                                            <strong style={{ color: "white", fontSize: '28px' , fontFamily:"'Playfair Display', serif" }}>Education </strong>

                                            {i.education.map((ed) => {
                                                return <>
                                                    <p style={{ fontSize: "22px", fontWeight: "400", paddingTop:"20px" }} >
                                                        {ed}
                                                    </p>
                                                </>
                                            })}

                                        </> : null}

                                        {props === "Skills" ? <>



                                            <strong style={{ color: "white", fontSize: '28px' , fontFamily:"'Playfair Display', serif" }}>Skills </strong>
                                            <p>
                                                <strong style={{ color: "white", }}>Tech Skills ~ </strong>
                                                {i.Skills.Tech.map((t) => {
                                                    return <>
                                                        <p style={{ fontSize: "22px", fontWeight: "400", paddingTop:"20px" }}>
                                                            {t}</p>
                                                    </>
                                                })}
                                            </p>
                                            <p></p>
                                            <p>
                                                <strong style={{ color: "white" }}>Soft Skills ~ </strong>
                                                {i.Skills.Soft} </p>
                                            <p></p>

                                        </> : null}

                                    </>
                                })}
                            </p></div><div class="fade-in-move-on-scroll" ><p class="_20px-paragraph"></p></div></div></div>
                    </motion.div>
                   
                        <motion.img

                            initial={{ x: "150px" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover="hover"
                            variants={animationVariants}

                            src={img3} alt="" id='my-img' style={{ background: "black", width: "30%", height: "400px", objectFit: "cover", margin: "32px 0px", borderRadius: "15px" }} />

                  
                    {/* {props === "Education" ? <>
                        <motion.img
                            initial={{ x: "150px" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover="hover"
                            variants={animationVariants}

                            src={img2} alt="" id='my-img' style={{ background: "black", width: "30%", height: "400px", objectFit: "cover", margin: "32px 0px", borderRadius: "15px" }} />

                    </> : null}

                    {props === "Skills" ? <>
                        <motion.img

                            initial={{ x: "150px" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover="hover"
                            variants={animationVariants}
                            src={img1} alt="" id='my-img' style={{ background: "black", width: "30%", height: "400px", objectFit: "cover", margin: "32px 0px", borderRadius: "15px" }} />

                    </> : null} */}
                </div>


            <CLientReview/>

                {/* <Readme/> */}

                <h3 style={{fontFamily:"'Playfair Display', serif",fontSize:"36px"}}>Projects</h3>
                {/* <Project image={mind} /> */}
                {Projects.map((p) => {
                    return <>
                        <Project image={p.img} p1={p.para1} p2={p.para2} title={p.title} tech={p.Tech} link={p.link} code={p.code} />
                    </>
                })}



                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "30px", }}>
                    <button onClick={() => { scrolltotop() }} style={{ padding: "15px", fontSize: "calc(14px + 0.5vw)", borderRadius: "15px", color: "black", fontWeight: "600", display: "block" }}>
                        <Link to={"/projects"} id="project-link">See More</Link>

                    </button>

                </div>


            </div>

        </> : <>
            <div style={{ height: "90vh", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", flexDirection: "column" }}>

                <Circles
                    height="200"
                    width="200"
                    color="rgb(97, 92, 245)"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </>}

    </>

    )
}

export default Main