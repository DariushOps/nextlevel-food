"use client";

import { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const inputImage = useRef();

  function handleClick() {
    inputImage.current.click();
  }

  function handleImagePicker(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={label}>{name}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt="A selected image by user" fill />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputImage}
          onChange={handleImagePicker}
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
