import React, {useState} from 'react';
import './UploadFiles.css'
import axios from "axios";
const UploadFiles = ({...props}) => {
    const [drag, setDrag] = useState(false)
    const [files, setFiles] = useState([])


    function dragStartHandler(e){
        e.preventDefault()
        setDrag(true)
    }
    function dragLeaveHandler(e){
        e.preventDefault()
        setDrag(false)
    }
    function onDropHandler(e){
        e.preventDefault();
        const newFiles = [...e.dataTransfer.files];
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        setDrag(false);
    }
    function handleFileInput(e) {
        e.preventDefault();
        const newFiles = [...e.target.files];
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }


    async function uploadFilesHandler() {
        const promises = files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append(props.nameId, props.id);
            return axios.post(`http://localhost:8080/api/file/upload/${props.type}`, formData);
        });
        await Promise.all(promises);
        setFiles([]);
        props.refreshFiles();
    }


    function handleFileRemove(index) {
        setFiles((prevFiles) => {
            const newFiles = [...prevFiles];
            newFiles.splice(index, 1);
            return newFiles;
        });
    }


    return (
        <div
            className={`drop-area ${drag ? 'active' : ''}`}
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            onDrop={(e) => onDropHandler(e)}
        >
            <div>
                {drag ? (
                    <div>Отпустите файлы, чтобы загрузить их</div>
                ) : (
                    <div>Перенесите файлы для загрузки</div>
                )}
            </div>
            или
            <label className='drag-area'>
                <input type='file' multiple
                       onChange={handleFileInput} />
                Выбрать файлы
            </label>
            <div className="files-list">
                {files.map((file, index) => (
                    <div className="file-item" key={index}>
                        <div className="file-name">{file.name}
                        <button className="delete-button" onClick={() => handleFileRemove(index)}></button>
                        </div>
                    </div>
                ))}
            </div>
            {files.length > 0 && (
                <button className="upload-button" onClick={uploadFilesHandler}>
                    Загрузить
                </button>
            )}
        </div>
    );
};

export default UploadFiles;