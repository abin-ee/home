import React, { Component } from 'react'
import './index.scss'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <p className='header__heading'>Movie site</p>
                <p className='header__sub-heading'>by 7th pillar</p>
            </div>
        )
    }
}
