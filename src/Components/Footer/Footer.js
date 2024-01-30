import React, { useState } from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';


function Footer() {

    const scrolltotop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const formData = {
        message: "",
        name: "",
        email: ""
    }

    const [Contact, setContact] = useState(false)
    const [data, setdata] = useState(formData)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdata({ ...data, [name]: value });

    }
    const submitform = async (e) => {
        e.preventDefault();

        console.log(data)

        await addDoc(collection(db, "Form"), {
            ...data
        });

            setContact(true)
     
    }

   

    return (
        <div className="footer">
            <div className="footer_top">



                <div id='footer-box'>

                    <div className="Smedia_icons">
                        {/* Social media Handles Icons  */}
                        {/* <a href="https://www.instagram.com/siddharth.chopda_/" target="_blank"> <InstagramIcon  className="icons" /></a> */}
                        <a href="https://twitter.com/universalsid" target="_blank">  <TwitterIcon className="icons" /></a>
                        <a href="https://www.linkedin.com/in/siddharth-chopda-a15946201/" target="_blank"> <LinkedInIcon className="icons" /></a>
                        <a href="https://github.com/sidjain0503" target="_blank"> <GitHubIcon className="icons" /></a>
                        <a href="mailto:greatsid2003@email.com" target="_blank"> <EmailIcon className="icons" /></a>
                    </div>

                    <div className="nav_list">
                        <Link to="/" className="links" style={{fontFamily:"'Playfair Display', serif",fontWeight:"400"
                    }} onClick={scrolltotop}>Home</Link>
                        <Link to="/Projects" className="links" style={{fontFamily:"'Playfair Display', serif",fontWeight:"400"
                    }} id="projects" onClick={scrolltotop} >Projects</Link>
                        <Link to="/hire" className="links"  style={{fontFamily:"'Playfair Display', serif",fontWeight:"400"
                    }}onClick={scrolltotop}>Hire me</Link>
                        <Link to="/admin" className="links" style={{fontFamily:"'Playfair Display', serif",fontWeight:"400"
                    }} onClick={scrolltotop}>Admin</Link>
                        <div className="links" style={{fontFamily:"'Playfair Display', serif",fontWeight:"400"
                    }}><a href="https://siddharth-chopda.hashnode.dev/" target="_blank" style={{ fontWeight: "500" }}>Visit my blog</a></div>


                        {/* Side list Links to home,projects and contact  */}
                    </div>
                </div>

                <form action="" className="footer-form">
                    {Contact ===false ? <>
                        <h4 style={{textAlign:"center",fontFamily:"'Playfair Display', serif"}}>Contact me !  </h4>
                    <input type="text" name="name" id="" placeholder='Your Name' onChange={handleChange} />
                    <input type="email" name="email" id="" placeholder='Your Email' onChange={handleChange} />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message' onChange={handleChange} ></textarea>
                    <button onClick={submitform} style={{ padding: "15px", fontSize: "calc(14px + 0.5vw)", borderRadius: "15px", color: "black", fontWeight: "600", display: "block", width: "280px" }}>
                        Send
                    </button>
                    
                    </> : <>
                    
                                <h3>Thanks for contacting🙌!</h3>
                                        <p>Your response has been recorded !!</p>                                
                        
                    </>}
                  
                </form>

            </div>


            <div className="footer_bottom">
                <div >
                </div>

                <div>Copyright &copy; 2024
                    developed by Siddharth Chopda
                </div>
            </div>



        </div>
    )
}

export default Footer
