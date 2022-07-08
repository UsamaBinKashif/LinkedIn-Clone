import React from "react";

function InputOptions({ Title, Icon, color }) {
  return (
    <div className="input__options">
      {Icon && (
          <Icon className="input__options--icon" style={{ color: color }} />
          )}
          <p className="input__options--title">{Title}</p>
    </div>
  );
}

export default InputOptions;
