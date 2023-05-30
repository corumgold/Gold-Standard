import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
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
    setForm({ ...form, [key]: value });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div id="form-page">
      <h3>Contact Us</h3>
      <form id="consult-form">
        <label>
          Your Name:
          <input
            value={form.humanName}
            type="text"
            name="humanName"
            onChange={handleFormChange}
          />
        </label>
        <label>
          Your dog's Name:
          <input
            value={form.dogName}
            type="text"
            name="dogName"
            onChange={handleFormChange}
          />
        </label>
        <label>
          {form.dogName ? form.dogName : "Your dog"}'s Age:
          <input
            value={form.dogAge}
            type="text"
            name="dogAge"
            onChange={handleFormChange}
          />
        </label>
        <label>
          {form.dogName ? form.dogName : "Your dog"}'s Breed:
          <input
            value={form.breed}
            type="text"
            name="breed"
            onChange={handleFormChange}
          />
        </label>
        <label>
          Is {form.dogName ? form.dogName : "your dog"} crate trained?:{" "}
          <select name="crateTrained" onChange={handleFormChange}>
            <option selected disabled></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label>
          Has {form.dogName ? form.dogName : "your dog"} ever bitten anyone?
          (it's okay if so!):{" "}
          <select name="bite" onChange={handleFormChange}>
            <option selected disabled></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        {form.bite === "yes" ? (
          <label>
            Tell us a bit more about {form.dogName ? form.dogName : "your dog"}
            's bite history:
            <input
              value={form.background}
              type="text-box"
              name="background"
              onChange={handleFormChange}
            />
          </label>
        ) : null}
        <label>
          Any other details we should know?:
          <input
            value={form.background}
            type="text-box"
            name="background"
            onChange={handleFormChange}
          />
        </label>
        <button onClick={handleFormSubmit}>Submit Form</button>
      </form>
    </div>
  );
};

export default Form;
