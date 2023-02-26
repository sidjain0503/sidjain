import React from 'react'
import './Project.css'

function Project({ image, tech, title, p1,p2,link,code}) {
  return (
    <div>
      <div className="back-card-holder">
        <div role="listitem" class="blog-item-container w-dyn-item" >
          <div class="blog-featured-image-holder w-inline-block"><div class="blog-device-holder"><img src="https://assets.website-files.com/6319f69c5ef0f35ae3db6df0/631efdcea6a75c0640f2a806_Apple%20iPad%20Pro%2013%20Space%20Gray.png" loading="lazy" sizes="100vw" srcset="https://assets.website-files.com/6319f69c5ef0f35ae3db6df0/631efdcea6a75c0640f2a806_Apple%20iPad%20Pro%2013%20Space%20Gray-p-500.png 500w, https://assets.website-files.com/6319f69c5ef0f35ae3db6df0/631efdcea6a75c0640f2a806_Apple%20iPad%20Pro%2013%20Space%20Gray-p-800.png 800w, https://assets.website-files.com/6319f69c5ef0f35ae3db6df0/631efdcea6a75c0640f2a806_Apple%20iPad%20Pro%2013%20Space%20Gray-p-1080.png 1080w, https://assets.website-files.com/6319f69c5ef0f35ae3db6df0/631efdcea6a75c0640f2a806_Apple%20iPad%20Pro%2013%20Space%20Gray.png 1300w" alt="" class="blog-device" />
            <div class="blog-image-holder"><img loading="lazy" src={image} alt="" sizes="100vw" class="blog-image" /></div></div></div>

          <div class="project-holder">

    
            <h4>{title}

              {tech.map((t) => {
                return <>
                  <button style={{ padding: "10px", fontSize: "calc(14px + 0.5vw)", borderRadius: "15px", color: "black", fontWeight: "600", display: "inline", margin: "0px 5px", backgroundColor: "#a77c1f" }}>
                    {t}
                  </button>
                </>
              })}

            </h4>

            <div className="pro-links">
              {link ? <>
                <a href={link} target='_blank'>Live Demo 👨‍💻</a>
              </> : null}

              {code ? <>
                <a href={code} target='_blank'>Code 👏</a>

              </> : null}
              

                </div>


                <p>{p1}</p>
                <p>{p2}</p>

               
          </div>

        </div>
      </div>
    </div>
  )
}

export default Project