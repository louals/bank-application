"use client"
import Countup from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'>
        <Countup 
        decimal=',' 
        prefix='$' 
        duration={1.25} 
        end={amount} 
        decimals={2}/>
    </div>
  )
}

export default AnimatedCounter