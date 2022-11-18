import { Button } from 'antd'
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.scss'

export default class ButtonElement extends Component {
    render() {
        return (
            <div>
                <Button onClick={() => this.props.onClick()} type={this.props.type}>
                    {this.props.buttonName}
                </Button>
            </div>
        )
    }
}

ButtonElement.propTypes = {
    onClick: PropTypes.func,
    buttonName: PropTypes.string,
    type: PropTypes.string
};
