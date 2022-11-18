import { connect } from 'react-redux';
import Home from './Home';

function mapStateToProps(state) {
    return {
        ...state.HomePageReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);