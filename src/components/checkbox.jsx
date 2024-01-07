const Checkbox = (props) => {

  const { isChecked, handleCheckboxChange } = props;

  return (
    <div className="requirements">
      <div
        className={`check ${isChecked ? "checked" : ""}`}
        onClick={() => handleCheckboxChange(handleCheckboxChange)}
      >
        {isChecked ? (
          <svg
            className="checkedimg"
            width="14"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="#18171F"
              strokeWidth="3"
              fill="none"
              d="M1 5.607 4.393 9l8-8"
            />
          </svg>
        ) : null}
      </div>
      <p className="same">{props.children}</p>
    </div>
  );
};

export default Checkbox;
