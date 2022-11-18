export const getSearchText = (props) => {
    let value = props.selectedGenere ? props.selectedGenere : props.searchText ? props.searchText : ""
    return value
}