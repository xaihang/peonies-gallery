import { useState } from "react";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton";

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
                <h3>Add a new image</h3>
                <div id="input-container">
                    <Input
                        name="url"
                        value={url}
                        setValue={setUrl}
                        placeHolder="enter the url"
                    />
                    <Input
                        name="description"
                        value={description}
                        setValue={setDescription}
                        placeHolder="enter image description"
                    />
                    <SubmitButton handleSubmit={handleSubmit} />
                </div>
            </form>
    );
}

export default GalleryForm;
