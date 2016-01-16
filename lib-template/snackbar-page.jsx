import Radium from 'radium'
import React from 'react';
import Snackbar from 'material-ui/lib/snackbar';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetTitle } from 'reactivity'

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

@Radium
class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 0,
      message: 'Event added to your calendar',
      open: false,
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleActionTouchTap = () => {
    alert('We removed the event from your calendar.');
  };

  handleChangeDuration = (event) => {
    const value = event.target.value;
    this.setState({
      autoHideDuration: value.length > 0 ? parseInt(value) : 0,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Add to my calendar"
        />
        <br />
        <TextField
          floatingLabelText="Auto Hide Duration in ms"
          value={this.state.autoHideDuration}
          onChange={this.handleChangeDuration}
        />
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          action="undo"
          autoHideDuration={this.state.autoHideDuration}
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

class SnackbarExampleTwice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'Event added to your calendar',
      open: false,
    };
    this.timer = undefined;
  }

  componentWillUnMount() {
    clearTimeout(this.timer);
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });

    this.timer = setTimeout(() => {
      this.setState({
        message: 'Event ' + Math.round(Math.random() * 100) + ' added to your calendar',
      });
    }, 1500);
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Add to my calendar two times"
        />
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          action="undo"
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

class SnackbarPage extends React.Component {
   
    constructor() {
        super();
        
        this.styles = {
            buttonSimple: {
                margin: '10px'
            },
            buttonTwice: {
                margin: '50px 10px 10px 10px'
            }
        }
    }
     
    render() {
        return (
            <Dashboard>
            <Widget width={12}>
				<WidgetTitle title='Snackbar' />
                <WidgetText>
                    <div style={this.styles.buttonSimple}>
                        <SnackbarExampleSimple/>
                    </div>
                    <div style={this.styles.buttonTwice}>
                        <SnackbarExampleTwice/>
                    </div>    
                </WidgetText>
            </Widget>
            </Dashboard>
        )
    }
}

export default SnackbarPage