import React from 'react'
import './Hire.css'
import video from './video.mp4'
import CallIcon from '@mui/icons-material/Call';
import ClientReview from '../ClientReview/ClientReview';

const Points =({text})=>{
    return(
        <span style={{display:"block",textAlign:"left",fontSize:'16px',width:"80%",margin:"auto",marginTop:"20px"}}>{text}</span>
    )
}

function Hire() {

    return (
        <div className='Hire'>
            <video style={{ width: "90%", borderRadius: "15px", height: "auto", margin: "auto" }} id="hire-video" autoPlay loop  >
                <source src={video} />
            </video>
            <h3 style={{fontSize:"30px",fontFamily:"'Playfair Display', serif" ,textAlign:'center'}}>Hey ! Got an Idea? Want to have your own web application ⚡⚡!!
            </h3>


                <p>
                    <Points text="I'm a fullstack developer proficient in Next.js, Docker, Tailwind CSS and MERN stack. In addition to my academic pursuits, I've been actively working as a freelance developer. It has been a rewarding journey, collaborating with startups to bring their Minimum Viable Products (MVPs) to life. This experience has taught me valuable lessons about turning ideas into functional software, working with diverse teams, and delivering results that align with the vision of entrepreneurs. " />
                </p>

            <div style={{display:"flex",justifyContent:"center",marginBottom:"30px",alignItems:"center"}}>
                <button   style={{ padding: "15px", fontSize: "calc(14px + 0.5vw)", borderRadius: "15px", color: "white", fontWeight: "600", display: "block" ,width:"200px",backgroundColor:"transparent"}}>
                        <a style={{color:"white"}} href="https://replit.com/@Siddharthchopd2">More about me !</a>
                    </button>

                        <h5 style={{margin:"0px 20px"}}>OR</h5>

                  
                    <button   style={{ padding: "15px", fontSize: "calc(14px + 0.5vw)", borderRadius: "15px", color: "black", fontWeight: "600", display: "flex" ,width:"200px",backgroundColor:"transparent"}}>
                        <a href="https://wa.me/qr/GERS6UOREAJDJ1" style={{display:"flex"}}><CallIcon/>+916264537931</a>
                    </button>

                        

                    </div>
            
            <ClientReview/>

        </div >
    )
}

export default Hire