import * as React from 'react';
import styles from './FabricTesting.module.scss';
import { SharedColors  } from '@uifabric/fluent-theme';

import { IFabricTestingProps } from './IFabricTestingProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ButtonMain } from './ButtonMain/ButtonMain';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { QuestionSelection } from '../components/QuestionSelection/QuestionSelection';
import { DefaultButton, Stack } from 'office-ui-fabric-react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import InputNested from './TextField/InputNested';

export default class FabricTesting extends React.Component<any, any, any> {
  constructor(props) {
    super(props);

    // this._onChange = this._onChange.bind(this);
    // this._alertClicked = this._alertClicked.bind(this);

    this.state = {
      buttonPressed: false,
      buttonClicked: false,
      buttonSet: false,
      isDisabled: false,
      choiceVar: false,
      choiceSelected: "",
      sliderDisabled: false,
      sliderValue: 20,
      questionsAll: [
        { name: "Q1" },
        { name: "Q2" },
        { name: "Q3" }
      ],
      questionSelectedKey: "",
      inputValue: "",
      inputValue2: ""
    };
  }

  public _alertClicked(clicked:boolean) {
    const reverse = !clicked;
    this.setState({buttonPressed: reverse, isDisabled: !this.state.isDisabled});
  }

  public componentDidUpdate() {
    console.log("-------------------------------------------------------------------------");
    console.log('Did Update');
    console.dir(this.state);
    console.log("-------------------------------------------------------------------------");
  }

  public selectedChangeValue = ( valuePassed ) => {
    this.setState({ questionSelectedKey: valuePassed });
    console.log("ROOT Choice Group Value: ",valuePassed);
  }

  public changeInputHander = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  public changeNestedInputHander = (event) => {
    this.setState({ inputValue2: event.target.value });
  }



  public assignedClasses = [styles.button, styles.isDisabled];

  // Example formatting
  public stackTokens = { childrenGap: 40 };


  public render(): React.ReactElement<IFabricTestingProps> {
    return (
      <div className={ styles.fabricTesting }>

        <div className={ styles.container }>
          <div style={{ backgroundColor: SharedColors.green20 }} className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <SearchBox 
                placeholder="Search"
                onSearch={newValue => console.log('value is ' + newValue)}
                onFocus={() => console.log('onFocus called')}
                onBlur={() => console.log('onBlur called')}
                onChange={() => console.log('onChange called')}
              />
            </div>
          </div>
        </div>

        <div className={ styles.container }>
          <div style={{ backgroundColor: SharedColors.blueMagenta20 }} className={ styles.row }>
            <div className={ styles.column }>
              <h2>Slider Value: { this.state.sliderValue }</h2>
              <Slider
                className={styles.slider}
                label="Slider example: when > 50 will Disable"
                min={0}
                max={100}
                step={10}
                disabled={this.state.sliderDisabled}
                defaultValue={this.state.sliderValue}
                showValue={true}
                onChange={(value: number) => {
                    console.log("REFRESHED"); 
                    this.setState({ sliderValue: value });

                    if(value < 50) {
                      this.setState({ sliderDisabled: false });
                      this.assignedClasses = [styles.button, styles.isDisabled];
                    }

                    if(value >= 50) {
                      this.setState({ sliderDisabled: true });
                      this.assignedClasses = [styles.button];
                    }
                  }
                }
              />
              <a className={this.assignedClasses.join(' ')} onClick={ () => this.setState({ sliderDisabled: false }) }>
                <span className={ styles.label }>Enable the Slider</span>
              </a>
            </div>
          </div>
        </div>

        <div className={ styles.container }>
          <div style={{ backgroundColor: SharedColors.red20 }} className={ styles.row }>
            <div className={ styles.column }>
              <QuestionSelection 
                questionsAll={this.state.questionsAll} 
                selectedHandler={this.selectedChangeValue}
                />
            </div>
          </div>
        </div>
          
        <div className={ styles.container }>
          <div style={{ backgroundColor: SharedColors.gray20 }} className={ styles.row }>
            <div className={ styles.column }>
              <Stack horizontal tokens={this.stackTokens}>
                <ButtonMain 
                  disabled={this.state.isDisabled} 
                  teds={5} 
                  buttonIsPressed={this.state.buttonPressed} 
                  func={() => this._alertClicked(this.state.buttonClicked)} 
                />

                <DefaultButton 
                  text="Enable the left" 
                  onClick={(event) => this.setState({ isDisabled: !this.state.isDisabled })}  
                  disabled={!this.state.isDisabled}  
                />
              </Stack>
              </div>
          </div>
        </div>

        <div className={ styles.container }>
          <div style={{ backgroundColor: SharedColors.blue10 }} className={ styles.row }>
            <div className={ styles.column }>
              <Stack tokens={{ childrenGap: 15 }}>
                <TextField
                  label="Basic controlled TextField"
                  value={this.state.inputValue}
                  onChange={this.changeInputHander}
                  styles={{ fieldGroup: { width: 300 } }}
                />
                <h3 className={styles.inputTextHeader}>{this.state.inputValue}</h3>
              </Stack>
            </div>
          </div>
        </div>

        <div className={ styles.container }>
          <div style={{ backgroundColor: SharedColors.yellowGreen10 }} className={ styles.row }>
            <div className={ styles.column }>
              <Stack tokens={{ childrenGap: 15 }}>
                <InputNested nestedValue={this.state.inputValue2} changeHandler={this.changeNestedInputHander}  />
                <h3 className={styles.inputTextHeader}>{this.state.inputValue2}</h3>
              </Stack>
            </div>
          </div>
        </div>




      </div> //fabricTesting DIV END
    );
  }
}
