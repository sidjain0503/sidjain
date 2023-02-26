import React, { useEffect, useRef, useState } from 'react'
import "./Header.css"
import { Link, useLocation, useNavigate } from "react-router-dom"

function Header() {
    // header
    const [style, setStyle] = useState("close_sidenav");
    const [style2, setStyle2] = useState("none");
    const [style3, setStyle3] = useState("display");
    //   free resource

    let resourceref = useRef();


    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (!resourceref.current.contains(e.target)) {
                setStyle("close_sidenav");
                setStyle2("none");
                setStyle3("display");
            };

        })

        
    },[])




    // header

    const opensidenav = () => {
        setStyle("long_head");
        setStyle2("display");
        setStyle3("none");

        console.log('style open')
    }
    const closesidenav = () => {
        setStyle("close_sidenav");
        setStyle2("none");
        setStyle3("display");
    }


    const navigate = useNavigate();


    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const scrolltotop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>


            <div className={"header " + style} ref={resourceref}>

                <div className="new" >
                    <div onClick={() => { navigate("/"); scrolltotop(); closesidenav(); }} style={{ cursor: "pointer", fontSize: "28px", fontWeight: "bold", display: "flex", alignItems: "center" }}> 	&lt; SC /&gt;</div>
                    <div className="pages">
                        <Link onClick={() => { scrolltotop(); }} to="/projects" className={splitLocation[1] === "projects" ? " link active" : "link"}> &lt; Projects /&gt;</Link>
                        <Link onClick={() => { scrolltotop(); }} to="/courses" className={splitLocation[1] === "courses" ? " link active" : "link"}> &lt; Courses and Certifications /&gt;</Link>
                        <Link to={"/hire"} className={splitLocation[1] === "hire" ? " link active" : "link"} id="hire"> &lt; Hire me /&gt;</Link>
                        <div className='link'><a href='https://siddharth-chopda.hashnode.dev/'> &lt; Blog /&gt;</a></div>




                    </div>


                    <span id='b_menu' className={style3} onClick={opensidenav}>☰ </span>
                    <span id='cross' className={style2} onClick={closesidenav}>✖</span>
                </div>


                <div className={"h_links " + style2}>
                    <  Link onClick={() => { scrolltotop(); }} to="/projects" className='link'> &lt; Projects /&gt;</Link>
                    <Link onClick={() => { scrolltotop(); }} to="/courses" className={splitLocation[1] === "projects" ? " link active" : "link"}> &lt; Courses and Certifications /&gt;</Link>
                    <div className='link'><a href='https://siddharth-chopda.hashnode.dev/' > &lt; Blog /&gt;</a></div>
                    <Link to={"/hire"} id="hire" className='link'> &lt; Hire me /&gt;</Link>



                </div>

            </div>



        </>

    )
}

export default Header
