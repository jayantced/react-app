import React from 'react'

function Alert(props) {
    const capitalize = (word)=> {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-primary`} role="alert">
      {capitalize(props.alert.type)}! {props.alert.msg}
      </div>
    </div>
  )
}

export default Alert
