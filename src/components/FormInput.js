import React, { useState } from "react";

function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { id, onChange, errorMsg, ...inputprops } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <input
        {...inputprops}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputprops.name === "confirmPassword" && setFocused("true")
        }
        focused={focused.toString()}
      />
      <span className="errorMsg">{errorMsg}</span>
    </div>
  );
}

export default FormInput;
