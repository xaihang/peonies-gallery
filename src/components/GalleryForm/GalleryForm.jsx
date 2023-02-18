import { useState } from "react";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton";
import "./GalleryForm.css";

function GalleryForm({ addImage }) {
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (url && description) {
            addImage({url,description});
            setUrl("");
            setDescription("");
        } else {
            alert("Do not leave input fields blank!");
        }
    };


    return (
            <form className="gallery-form">
                <div id="input-container">
                    <Input
                        name="url"
                        value={url}
                        setValue={setUrl}
                        placeHolder="image url"
                    />
                    <Input
                        name="description"
                        value={description}
                        setValue={setDescription}
                        placeHolder="image description"
                    />
                    <SubmitButton handleSubmit={handleSubmit} />
                </div>
            </form>
    );
}

export default GalleryForm;
