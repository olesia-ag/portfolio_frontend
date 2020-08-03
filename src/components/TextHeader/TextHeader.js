import React from 'react'
import classes from './TextHeader.module.css'

const textHeader = (props) => {
  return (
    <p className={classes.aboutMeHeader}>{props.children}</p>
  )

}

export default textHeader
