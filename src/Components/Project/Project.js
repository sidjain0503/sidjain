import React from 'react'
import './Project.css'
import { motion } from "framer-motion";

function Project({ image, tech, title, p1,p2,link,code,video}) {
  return (
    < motion.div
   
    whileHover={{ scale: 0.95 }}
    whileTap={{ scale: 0.9 }}
   >
      <div className="back-card-holder">
        <div role="listitem" class="blog-item-container w-dyn-item" >
          <div class="blog-featured-image-holder w-inline-block"><div class="blog-device-holder"><img src="https://assets.website-files.com/6319f69c5ef0f35ae3db6df0/631efdcea6a75c0640f2a806_Apple%20iPad%20Pro%2013%20Space%20Gray.png" loading="lazy" sizes="100vw" srcset="https://assets.website-files.com/6319f69c5ef0f35ae3db6df0/631efdcea6a75c0640f2a806_Apple%20iPad%20Pro%2013%20Space%20Gray-p-500.png 500w, https://assets.website-files.com/6319f69c5ef0f35ae3db6df0/631efdcea6a75c0640f2a806_Apple%20iPad%20Pro%2013%20Space%20Gray-p-800.png 800w, https://assets.website-files.com/6319f69c5ef0f35ae3db6df0/631efdcea6a75c0640f2a806_Apple%20iPad%20Pro%2013%20Space%20Gray-p-1080.png 1080w, https://assets.website-files.com/6319f69c5ef0f35ae3db6df0/631efdcea6a75c0640f2a806_Apple%20iPad%20Pro%2013%20Space%20Gray.png 1300w" alt="" class="blog-device" />
            <div class="blog-image-holder ">
             
                 <img loading="lazy" src={image} alt="" sizes="100vw" class="blog-image" />
                  {video ? <span > <a href={video} target='_blank'>Watch video</a></span>:<span style={{left:"12%"}} >Video Not available</span> }  
              </div></div></div>

          <div class="project-holder">

    
            <h4 style={{fontFamily:"'Playfair Display', serif",fontSize:"28px"}}>{title}

              {tech.map((t) => {
                return <>
                  <button style={{ padding: "7px", fontSize: "calc(10px + 0.5vw)", borderRadius: "15px", color: "black", fontWeight: "600", display: "inline", margin: " 5px", backgroundColor: "#a77c1f" ,fontFamily:"'Playfair Display', serif"}}>
                    {t}
                  </button>
                </>
              })}

            </h4>

            <div className="pro-links" style={{marginBottom:"20px"}}>
              {link ? <>
                <a href={link} target='_blank'>Live Demo 👨‍💻</a>
              </> : null}

              {code ? <>
                <a href={code} target='_blank'>Code 👏</a>

              </> : null}
              

                </div>


                <p style={{fontFamily:"sans-serif",fontSize:"14px"}}>{p1}</p>
                <p style={{fontFamily:"sans-serif",fontSize:"14px"}}>{p2}</p>

               
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Project