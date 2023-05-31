import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [formInfo, setFormInfo] = useState({
    humanName: "",
    dogName: "",
    dogAge: "",
    breed: "",
    crateTrained: "",
    bite: "",
    background: "",
  });

  function handleFormChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormInfo({ ...formInfo, [key]: value });
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w95ec4q",
        "template_mfem2cb",
        form.current,
        "fZAPiD238sWdJSnZx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="form-page">
      <h3>Contact Us</h3>
      <form ref={form} id="consult-form">
        <label>
          Your Name:
          <input type="text" name="humanName" onChange={handleFormChange} />
        </label>
        <label>
          Your dog's Name:
          <input type="text" name="dogName" onChange={handleFormChange} />
        </label>
        <label>
          {formInfo.dogName ? formInfo.dogName : "Your dog"}'s Age:
          <input type="text" name="dogAge" onChange={handleFormChange} />
        </label>
        <label>
          {formInfo.dogName ? formInfo.dogName : "Your dog"}'s Breed:
          <input type="text" name="breed" onChange={handleFormChange} />
        </label>
        <label>
          Is {formInfo.dogName ? formInfo.dogName : "your dog"} crate trained?:{" "}
          <select
            defaultValue={"default"}
            name="crateTrained"
            onChange={handleFormChange}
          >
            <option value="default" disabled></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label>
          Has {formInfo.dogName ? formInfo.dogName : "your dog"} ever bitten
          anyone? (it's okay if so!):{" "}
          <select
            defaultValue={"default"}
            name="bite"
            onChange={handleFormChange}
          >
            <option value="default" disabled></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        {formInfo.bite === "yes" ? (
          <label>
            Tell us a bit more about{" "}
            {formInfo.dogName ? formInfo.dogName : "your dog"}
            's bite history:
            <input type="text" name="biteDetails" onChange={handleFormChange} />
          </label>
        ) : null}
        <label>
          Any other details we should know?:
          <input type="text" name="background" onChange={handleFormChange} />
        </label>
        <button onClick={sendEmail}>Submit Form</button>
      </form>
    </div>
  );
};

export default Form;
