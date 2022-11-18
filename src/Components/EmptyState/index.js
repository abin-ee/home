import React, { Component } from 'react'
import './index.scss'

export default class EmptyState extends Component {
    render() {
        return (
            <div className='empty-state'>
                {this.props.message}
            </div>
        )
    }
}
