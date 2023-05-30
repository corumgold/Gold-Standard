import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    humanName: "",
    dogName: "",
    dogAge: 0,
    breed: "",
    background: "",
    crateTrained: "",
    bite: "",
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
      <h2>Submit Your Form</h2>
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
          Background:
          <input
            value={form.background}
            type="text-box"
            name="background"
            onChange={handleFormChange}
          />
        </label>
        <label>
          Is {form.dogName ? form.dogName : "your dog"} crate trained?:
          <select name="crateTrained" onChange={handleFormChange}>
            <option selected disabled>
              Please Choose
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label>
          Has {form.dogName ? form.dogName : "your dog"} ever bitten anyone?:
          <select name="bite" onChange={handleFormChange}>
            <option selected disabled>
              Please Choose
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </form>
      <button onClick={handleFormSubmit}>Submit Form</button>
      <div>Image Preview</div>
      <img src={form.image} alt={form.name} />
    </div>
  );
};

export default Form;
