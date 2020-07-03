import React from 'react'

export  function Mail() {

   const onClick = () => {
        window.location.href = `mailto:adi.ahronov@gmail.com`;
    }
    return (
        <div className="mail">
            <div onClick={onClick}>adi.ahronov@gmail.com</div>
        </div>
    )
}
