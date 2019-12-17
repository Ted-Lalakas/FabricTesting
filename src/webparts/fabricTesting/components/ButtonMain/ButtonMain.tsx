import * as React from 'react';
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';
import { ButtonMainProps } from './ButtonMainProps';

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

export const ButtonMain: React.FunctionComponent<ButtonMainProps> = props => {
  const { disabled, checked, func } = props;
  // console.log("TEST BOTTLE: "+props.teds);
  // console.log("TEST buttonIsPressed: "+props.buttonIsPressed);
  // console.log("TEST disabled: "+props.disabled);
  return (
    <Stack horizontal tokens={stackTokens}>
      <DefaultButton 
        text="Basic Button" 
        onClick={func} 
        allowDisabledFocus 
        disabled={disabled} 
        checked={checked}  
      />
    </Stack>
  );
};


