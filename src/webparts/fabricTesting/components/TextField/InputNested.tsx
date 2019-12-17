import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';


const InputNested = (props) => {
  return (
    <React.Fragment>
      <TextField
        label="Nested Controlled TextField"
        value={props.nestedValue}
        onChange={props.changeHandler}
        styles={{ fieldGroup: { width: 300 } }}
      />
    </React.Fragment>
  );
};

export default InputNested;

