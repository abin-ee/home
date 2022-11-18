import React, { Component } from 'react'
import '../../index.scss'

export default class SearchResultTextSection extends Component {
    render() {
        return (
            <div className='search-text-section'>
                <p>{`"search result for ${this.props.searchTextValue}"`}</p>
                {this.props.isGenreSelected && <p onClick={this.props.onSelectGenere} className='search-text-section__button'>clear</p>}
            </div>
        )
    }
}
