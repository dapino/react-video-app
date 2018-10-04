import React from 'react'



const leftPath = number => {
    const path = '00'
    return path.substring(0, path.length - number.length) + number
}

const formattedTime = secs => {
    const minutes = parseInt(secs/60, 10)
    const seconds = parseInt(secs % 60, 10)
    return `${minutes}:${leftPath(seconds.toString())}`

}

export default formattedTime
