import React, { useState } from 'react'
import Modal from 'react-modal';
import { addDoc, collection, doc, getDocs, query, setDoc, Timestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '../../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import './NewProject.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "300px",
        height: "max-content",
        boxShadow: " 0px 4px 30px rgba(0, 0, 0, 0.12)",
        borderRadius: "8px",
        zIndex:"100"

    },
};

const element = document.getElementsByClassName("main")

Modal.setAppElement(element);


function NewProject() {


    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal(e) {
        // references are now sync'd and can be accessed.
        e.preventDefault()
        console.log("modal open")
    }

    function closeModal() {
        setIsOpen(false);
    }


        
    const [newTech , setnewTech] = useState("")
    const [Tech,setTech] = useState([])

    const addtech = (e)=>{

        e.preventDefault();
         setTech([...Tech,newTech])
        setnewTech("")

    }

    const [data, setData] = useState([]);
    const [img, setImg] = useState(null);


        const handleChange =(e)=>{
            const name = e.target.name;
            const value = e.target.value;
            setData({...data , [name]:value})
        }

        const createNewProjectTrail = (e)=>{
            e.preventDefault();
                console.log(data)
        }

    const createNewProject = async (e) => {
        e.preventDefault();
        // console.log(msg)


        if (img) {
        console.log("image")

            const cover = new Date().getTime() + img.name;
            const storageRef = ref(storage, `images/${cover}`);

            const uploadTask = uploadBytesResumable(storageRef, img).then(
                () => {

                    getDownloadURL(storageRef).then(async (downloadURL) => {
                        console.log("downloadurl", downloadURL)

                        await addDoc(collection(db, "Projects"), {
                            img: downloadURL,
                            Tech: Tech,
                            ...data
                        });

                        console.log(downloadURL,"data uploaded")

                    });
                }
            );

            setImg(null)
        }
    }

    return (
        <div style={{ display: "flex" }}>

            <button style={{ color: "black", padding: "20px", borderRadius: "10px", width: "300px", margin: 'auto', fontSize: "22px", fontWeight: "600" }} onClick={openModal}>
                <span>New Project</span>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <button onClick={closeModal} className='modal-close-btn'>✖</button>
                <div className='modal-top'>


                    <form action="" style={{width:"100%",margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",color:"black"}}>
                        <div className="modal-input">
                            <label htmlFor="file" className="label">Image</label>
                            <input
                                type="file"
                                id="file"
                                onChange={(e) => setImg(e.target.files[0])}
                            />
                        </div>

                        <div className="modal-input">
                            <label htmlFor="title" className="label">Title </label>
                            <input type="text" id='title' name="title" style={{borderRadius:"5px",margin:"5px 0px",padding:"5px",border:"1px solid #dddd"}}  onChange={handleChange}/>
                        </div>

                        <div className="modal-input">
                            <label htmlFor="technologies" className="label">Technologies</label>
                            <div className="techs">
                                {Tech.map((t)=>{return <><button style={{ color: "black", padding: "10px", borderRadius: "10px", margin: 'auto 5px', fontSize: "12px", fontWeight: "600" }} >{t}</button></>})}
                                <input type="text" style={{borderRadius:"15px",margin:"15px 0px",padding:"5px",border:"1px solid #dddd"}} value={newTech} onChange={(e)=>{setnewTech(e.target.value)}} />
                                <button onClick={addtech} style={{ color: "black", padding: "10px", borderRadius: "50%", margin: 'auto 5px', fontSize: "12px", fontWeight: "600" }} >+</button>



                            </div>
                        </div>

                        <div className="modal-input">
                            <label htmlFor="link" className="label">Live Link </label>
                            <input type="text" name="link" id="link" onChange={handleChange} />

                        </div>

                        <div className="modal-input">
                            <label htmlFor="code" className="label">Code</label>
                            <input type="text" name="code" id="code" onChange={handleChange} />

                        </div>

                        <div className="modal-input">
                            <label htmlFor="para1" className="label">Paragraph 1 </label>
                            <textarea name="para1" id="para1" cols="25" rows="3" onChange={handleChange} ></textarea>

                        </div>
                        <div className="modal-input">
                            <label htmlFor="para2" className="labe2">Paragraph 2</label>
                            <textarea name="para2" id="" cols="25" rows="3" onChange={handleChange}></textarea>
                        </div>

                        <button onClick={createNewProject} style={{color:"black",padding:"20px",borderRadius:"15px",fontSize:'18px',fontWeight:"600"}}>Add New</button>

                    </form>


                </div>

            </Modal>


        </div>
    )
}

export default NewProject


// input string 
// button onbutton click --> push string to array ! 
// array 

// input value = this.state , 

