import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  function handleNameChange(event) {
    setName(event.target.value);
  };

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  };

  function handleEmailChange(event) {
    setEmail(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input id="name" name="name" value={name} onChange={handleNameChange} type="text"/>
        <label for="phone">Phone number</label>
        <input id="phone" name="phone" value={phone} onChange={handlePhoneChange} type="text"/>
        <label for="email">Email</label>
        <input id="email" name="email" value={email} onChange={handleEmailChange} type="email"/>
        <input value="Submit" type="submit"/>
      </form>
    </>
  );
};

