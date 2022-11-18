import React, { Component } from 'react'
import Carousel from 'react-multi-carousel';
import PropTypes from 'prop-types';

export default class Curosel extends Component {

    render() {
        return (
            <div>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    onSwipe={this.props.onSwipe}
                    responsive={this.props.responsive}
                    showDots={false}
                    deviceType={this.props.deviceType}
                    removeArrowOnDeviceType={this.props.removeArrowDevices}
                >
                    {this.props.data.map((item, index) => {
                        return <div key={index}> {item}</div>
                    })}
                </Carousel>
            </div>
        )
    }
}

Curosel.propTypes = {
    slideToShow: PropTypes.number,
    data: PropTypes.array,
    onSwipe: PropTypes.func
};
