import React, { Component } from 'react'
import Curosel from '../../../../Components/Curosel'
import EmptyState from '../../../../Components/EmptyState'
import { CONSTANTS, MESSAGE } from './constants'
import { checkIfMainContetIsEmpty, getCurosalData } from './helper'
import './index.scss'

export default class MainContent extends Component {

    render() {
        return (
            <div className='curosal-section'>
                {checkIfMainContetIsEmpty(this.props.currentlyShowingMovie) ? <EmptyState message={MESSAGE} />
                    :
                    <>
                        <div className='curosal'>
                            <Curosel
                                data={getCurosalData(this.props.currentlyShowingMovie ? this.props.currentlyShowingMovie[0] : [])}
                                removeArrowDevices={CONSTANTS.REMOVE_ARROW_DEVICES}
                                onSwipe={(event, data) => { }}
                                responsive={CONSTANTS.RESPONSIVE}
                                deviceType={CONSTANTS.DEVICETYPE}
                            />
                        </div>
                        <div className='curosal'>
                            <Curosel
                                data={getCurosalData(this.props.currentlyShowingMovie ? this.props.currentlyShowingMovie[1] : [])}
                                removeArrowDevices={CONSTANTS.REMOVE_ARROW_DEVICES}
                                onSwipe={(event, data) => { }}
                                responsive={CONSTANTS.RESPONSIVE}
                                deviceType={CONSTANTS.DEVICETYPE}
                            />
                        </div>
                        <div className='curosal'>
                            <Curosel
                                data={getCurosalData(this.props.currentlyShowingMovie ? this.props.currentlyShowingMovie[2] : [])}
                                removeArrowDevices={CONSTANTS.REMOVE_ARROW_DEVICES}
                                onSwipe={(event, data) => { }}
                                responsive={CONSTANTS.RESPONSIVE}
                                deviceType={CONSTANTS.DEVICETYPE}
                            />
                        </div>
                    </>
                }
            </div>
        )
    }
}
