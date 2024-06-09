import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import RadioButtons from "./RadioButtons";
import CheckBoxButtons from "./CheckBoxButtons";
import DatePicker from "./DatePicker";

function FormControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
        return <TextArea {...rest}/>
    case 'select':
        return <Select {...rest}/>
    case 'radio':
        return <RadioButtons {...rest}/>
    case 'checkbox':
        return <CheckBoxButtons {...rest}/>
    case 'date':
        return <DatePicker {...rest}/>
    default:
      return null;
  }
}

export default FormControl;
