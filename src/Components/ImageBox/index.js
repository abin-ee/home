import React, { Component } from 'react'
import { Image } from 'antd'
import PropTypes from 'prop-types';

export default class ImageBox extends Component {
    render() {
        return (
            <div>
                <Image
                    className='imageblock'
                    preview={this.props.preview}
                    src={this.props.imageUrl}
                />
            </div>
        )
    }
}

ImageBox.propTypes = {
    imageUrl: PropTypes.string,
    preview: PropTypes.bool
};