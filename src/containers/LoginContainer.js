import { connect } from 'react-redux';
import { logIn } from '../actions/SessionActions';
import Login from '../pages/login';

const mapStateToProps = state => ({
  errorMsg: state.session.errorMsg,
});

const mapDispatchToProps = dispatch => ({
  logIn: (params, cb) => dispatch(logIn(params, cb)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
