import React, { useEffect, useState } from 'react'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import "./UrlMaker.css"

const UrlMaker = () => {
    const [uploadFail, setuploadFail] = useState(0);
    const [doneUpload, setdoneUpload] = useState(0);
    const [progress, setProgress] = useState(0);
    const [link, setlink] = useState("");

    const handleFileSubmit = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        // console.log(file);
        uploadFiles(file)
    }

    const uploadFiles = (file) => {
        if (!file) return;
        const sotrageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setlink(downloadURL)
                })
            },
        );
    };

    return (
        <>
            <div>
                <form
                    method="post"
                    onSubmit={(e) => handleFileSubmit(e)}
                    className="input-holder url-maker"
                >
                    <h2>Video To URL Convertor</h2>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        // accept="video/*"
                    />
                    <button type="submit" className="submit-btn">
                        Convert To URL
                    </button>
                </form>

                <div className="uploaderStatusDiv">
                    {progress === 0 || uploadFail == 1 ? <></> : (
                        <div className="upload_bar">
                            <div className="upload_bar_status">
                                <div className="upload_bar_status_2" style={{ width: `${progress}%` }}></div>
                            </div>
                            <h3>Upload Done: {progress}%</h3>
                            {link ? (<><h3 className='downloadUrl'>Link: {link}</h3> <p className="copyToClip" onClick={() => {navigator.clipboard.writeText(link)}}>Copy To Clipboard</p></>) : <></>}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default UrlMaker