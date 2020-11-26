import React from "react";
import { connect } from "react-redux";
import { actionFunction } from "../../actions"; 
import { reduxForm, Form } from 'redux-form';
import validate from './validations';

import { 
  TextField,
  RadioButton,
  Button 
} from '../../components'
import './style.scss'

@reduxForm({ form: "activity-page", validate, enableReinitialize: true})
class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  componentDidMount = () => {
    const { reset } = this.props;
    reset();
  }

  onSubmit = (values) => {
    
  }

  render() {

    const { handleSubmit, valid } = this.props;
    
    return (
      <div className="container">
        <Form id="checkinForm" method="post" onSubmit={handleSubmit(this.onSubmit)} autoComplete="off">
        <div>
            Date Picker
        </div>
        <TextField 
          id="text_field"
          name="text_field"
          multiLine
        />
        <div className="theme-container">
          <RadioButton 
            id="first-theme"
            name="first-theme"
            labelText={'First Theme'}
            checked
            onChange={() => {}}
          />
          <RadioButton 
            id="second-theme"
            name="second-theme"
            labelText={'Second Theme'}
            checked
            onChange={() => {}}
          />
          <RadioButton 
            id="Third-theme"
            name="Third-theme"
            labelText={'Third Theme'}
            checked={true}
            onChange={() => {}}
    
          />
        </div>
        <Button
            id="footer-button"
            color="info"
            type="submit"
            disabled={!valid}
          >
            {'Submit :)'}
          </Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    storeProps: state
  };
}
const mapDispatchToProps = {
  actionFunction
};
export default connect(mapStateToProps, mapDispatchToProps)(Activity);
