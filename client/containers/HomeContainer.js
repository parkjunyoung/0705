import Home from '../routes/Home';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    isLogin : state.authentication.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
    requestStatus : ( useranme , password ) => dispatch( actions.requestStatus() )
});

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;