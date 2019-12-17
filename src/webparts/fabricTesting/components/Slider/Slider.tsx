import * as React from 'react';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';

export interface ISliderBasicExampleState {
  value: number;
}

// tslint:disable:jsx-no-lambda
export class SliderBasicExample extends React.Component<{}, ISliderBasicExampleState> {
  public state: ISliderBasicExampleState = { value: 0 };

  public render(): JSX.Element {
    const stackTokens: IStackTokens = { childrenGap: 20 };

    return (
      <Stack tokens={stackTokens} styles={{ root: { maxWidth: 300 } }}>
        <Slider
          label="Snapping slider example"
          min={0}
          max={50}
          step={10}
          defaultValue={20}
          showValue={true}
          onChange={(value: number) => console.log(value)}
        />
      </Stack>
    );
  }
}
