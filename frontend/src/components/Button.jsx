import React from 'react'

export const Button = ({children, classes}) => {
    return (
        <div>
            <button className={classes}>{children}</button>
        </div>
    )
}
