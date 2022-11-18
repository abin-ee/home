import { Spin } from 'antd'
import React, { Suspense } from 'react'

const ImageBlock = React.lazy(() => import('../../../../Components/ImageBox'))
export const getCurosalData = (data) => {
    let updatedData = []
    updatedData = data.map((item, index) => {
        return (
            <Suspense fallback={<div><Spin spinning={true} /></div>}>
                <div key={index} className='card-section'>
                    <ImageBlock preview={false} imageUrl={item.Poster} />
                    <p className="card-section__title">{item.Title}</p>
                </div>
            </Suspense>
        )
    })
    return updatedData
}

export const checkIfMainContetIsEmpty = (data) => {
    let empty = true
    data.forEach(item => {
        if (item.length && empty) {
            empty = false
        }
    })
    return empty
}