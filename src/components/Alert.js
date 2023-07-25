import React from 'react'

function Alert(props) {
    const capitalise=(msg)=>{
            let st=msg.toLowerCase();
           return st.charAt(0).toUpperCase()+st.slice(1)
    }
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalise(props.alert.type)}</strong>:{props.alert.msg}
      
    </div>}
    </div>
  )
}

export default Alert
