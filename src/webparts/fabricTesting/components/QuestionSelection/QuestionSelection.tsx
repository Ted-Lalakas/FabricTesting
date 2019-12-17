import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';

export const QuestionSelection: React.FunctionComponent<any> = props => {
  // console.log("Props:", props);
  // console.log("Questions: ", props.questionsAll);

  return (
    <ChoiceGroup
      className="defaultChoiceGroup"
      selectedKey={props.questionSelectedKey}
      options={[
        {
          key: 'A',
          text: 'Option A'
        },
        {
          key: 'B',
          text: 'Option B'
        },
        {
          key: 'C',
          text: 'Option C',
          disabled: true
        },
        {
          key: 'D',
          text: 'Option D'
        }
      ]}
      label="Pick one"
      required={true}
      onChange={(ev, option) => props.selectedHandler(option.key)}
    />
  );
};