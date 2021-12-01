import React from 'react'

export const Title = ({children, classes}) => {
    return (
        <>
            <h3 className={classes}>{children}</h3>
        </>
    )
}
