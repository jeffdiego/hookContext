const Input = ({ type, name, value, onChange, id, }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
    />
  );
};

export default Input;
