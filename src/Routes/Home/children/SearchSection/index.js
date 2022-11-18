import { connect } from 'react-redux';
import SearchSection from './SearchSection';
import { onSearch, onSelectGenere } from '../../../../Redux/Action'

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSearch: (params, next) => {
            dispatch(onSearch(params, next))
        },
        onSelectGenere: (params, next) => {
            dispatch(onSelectGenere(params, next));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);