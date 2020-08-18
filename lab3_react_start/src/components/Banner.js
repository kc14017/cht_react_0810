import React from 'react'

const Banner = props => {
    return (
        <div>
            <input type="text" onChange={props.clickCallback} value={props.name} />
        </div>
    )
}

export default Banner