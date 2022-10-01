import { Navbar, Sidebar } from '../../components';
import './new.scss';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

export const New=({ inputs, title })=>{
    const [file,setFile]=useState('');

    return(
        <div className="new">
            <Sidebar/>
            <div className="new__container">
                <Navbar/>
                <div className="new__top">
                    <h1 className='new__title'>{title}</h1>
                </div>
                <div className="new__bottom">
                    <div className="new__left">
                        <img
                            src={
                                file
                                ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                            className='new__img'
                        />
                    </div>
                    <div className="new__right">
                        <form className='new__form'>
                            <div className="new__form-input">
                                <label htmlFor="file" className='new__form-label'>
                                Image: <DriveFolderUploadOutlinedIcon className="new__icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>

                            {inputs.map((input)=>(
                                <div className="new__form-input" key={input.id}>
                                    <label className='new__form-label'>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <button className='new__btn'>Send</button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    )
}