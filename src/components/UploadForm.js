import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const allowedTypes = ['image/png','image/jpeg'];
    const changeHandler = e =>{
        let selected = e.target.files[0];

        if (selected && allowedTypes.includes(selected.type)){
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please selected a valid image type (png / jpg)');
        }
    }
    return (
        <form>
            <label>
                <input type="file" name="image" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}
export default UploadForm;