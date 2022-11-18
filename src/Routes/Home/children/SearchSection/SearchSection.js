import React, { Component } from 'react'
import SearchBox from '../../../../Components/SearchBox'
import SearchResultTextSection from './children/SearchResultTextSection'
import { CONSTANTS } from './constants'

export default class SearchSection extends Component {

    onSearch = (item) => {
        this.props.switchLoading(true)
        setTimeout(() => {
            this.props.onSearch({ searchText: item })
            this.props.switchLoading(false)
        }, 1200)
    }

    render() {
        return (
            <div className='searchbox'>
                <SearchBox
                    placeholder={CONSTANTS.SEARCHBOX_PLACEHOLDER}
                    allowClear={true}
                    onSearch={(value) => { this.onSearch(value) }}
                />
                {this.props.searchTextValue && <SearchResultTextSection
                    onSelectGenere={() => { this.props.onSelectGenere({ genre: "" }) }}
                    searchTextValue={this.props.searchTextValue}
                    isGenreSelected = {this.props.isGenreSelected}
                />}
            </div>
        )
    }
}
