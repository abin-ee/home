import { connect } from 'react-redux';
import MainContent from './MainContent';

function mapStateToProps(state) {
    return {
        ...state.HomePageReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);