import { connect } from 'react-redux';
import GenreSection from './GenreSection';
import { onSelectGenere } from '../../../../Redux/Action'

function mapStateToProps(state) {
    return {
        ...state.HomePageReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSelectGenere: (params, next) => {
            dispatch(onSelectGenere(params, next));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreSection);