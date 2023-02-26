import React from 'react'
import './Hire.css'
import video from './video.mp4'
import CallIcon from '@mui/icons-material/Call';


function Hire() {

    return (
        <div className='Hire'>
            <video style={{ width: "75%", borderRadius: "15px", height: "auto", margin: "auto" }} id="hire-video" autoPlay loop  >
                <source src={video} />
            </video>
            <h3>Hey ! Got an Idea? Want to have your own web application ⚡⚡!!
            </h3>

            <p style={{margin:"30px auto",width:"80%"}}>🚀If you want to take your business online , or have any already existing website that seems outdated ! I am here for making 100% responsive and user friendly websites for you ! </p>

                <p>
                        <span style={{fontSize:"28px",width:"80%",margin:"30px auto"}}> What I Do 👨‍💻👏? </span>
                        <span style={{display:"block",textAlign:"left",lineHeight:"30px",width:"80%",margin:"auto"}}>1.Fully responsive React js SPA [For mobile , desktop and other devices]</span>
                        <span style={{display:"block",textAlign:"left",lineHeight:"30px",width:"80%",margin:"auto"}}>2.Firebase Authentication [Via Phone number , email and more]</span>
                        <span style={{display:"block",textAlign:"left",lineHeight:"30px",width:"80%",margin:"auto"}}>3.API Integrations and Third party integrations</span>
                        <span style={{display:"block",textAlign:"left",lineHeight:"30px",width:"80%",margin:"auto"}}>4.Content Uploads , Dynamic CRUD and more.</span>
                        <span style={{display:"block",textAlign:"left",lineHeight:"30px",width:"80%",margin:"auto"}}>5. Payment integration.</span>
                </p>

            <div style={{display:"flex",justifyContent:"center",marginBottom:"30px",alignItems:"center"}}>
                <button   style={{ padding: "15px", fontSize: "calc(14px + 0.5vw)", borderRadius: "15px", color: "white", fontWeight: "600", display: "block" ,width:"200px",backgroundColor:"transparent"}}>
                        <a style={{color:"white"}} href="https://www.fiverr.com/share/NQry7G">Hire me</a>
                    </button>

                        <h5 style={{margin:"0px 20px"}}>OR</h5>

                  
                    <button   style={{ padding: "15px", fontSize: "calc(14px + 0.5vw)", borderRadius: "15px", color: "black", fontWeight: "600", display: "flex" ,width:"200px",backgroundColor:"transparent"}}>
                        <a href="tel:+916264537931" style={{display:"flex"}}><CallIcon/>+916264537931</a>
                    </button>

                        

                    </div>
            

        </div >
    )
}

export default Hire