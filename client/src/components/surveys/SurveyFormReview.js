// show the user review for input
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formvalues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formvalues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow white-text darken-3 btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green white-text btn-flat right"
        onClick={() => submitSurvey(formvalues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formvalues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
