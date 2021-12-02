import React from 'react'

export const Paragraph = ({children, classes}) => {
    return (
        <>
            <p className={classes}>{children}</p>
        </>
    )
}
