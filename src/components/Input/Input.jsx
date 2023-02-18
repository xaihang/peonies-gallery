function Input({ name, value, setValue, placeHolder, type = "text" }) {
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <>
        {/* <label htmlFor={name}>{name}: </label> */}
        <input name={name} onChange={handleChange} type={type} value={value} placeholder={placeHolder}/>
      </>
    );
  }
  
  export default Input;
  