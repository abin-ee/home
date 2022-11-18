import React, { Component } from 'react'
import ButtonElement from '../../../../Components/ButtonElement'
import { CONSTANTS } from './constants'
import './index.scss'

export default class GenreSection extends Component {


    handleClick = (item) => {
        this.props.switchLoading(true)
        setTimeout(() => {
            this.props.onSelectGenere({ genre: item })
            this.props.switchLoading(false)
        }, 1200)
    }

    render() {
        return (
            <div className='genre-section'>
                {this.props.Genres.map((item, index) => {
                    return <ButtonElement
                        key={index}
                        type={CONSTANTS.BUTTON_TYPE}
                        onClick={(data) => { this.handleClick(item) }}
                        buttonName={item}
                    />
                })}
            </div>
        )
    }
}
