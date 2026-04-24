import Label from "../atoms/Label";
import Input from "../atoms/Input";

const InputField = ({ label, type, name, value, onChange, id }) => {
  return (
    <div>
      <Label text={label} />
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
      />
    </div>
  );
};

export default InputField;
