import React from 'react'
import Icon from './Icon'

const BenefitCard = ({title,desc,icon}) => {
  return (
    <div className='py-4 px-6 bg-grey-11 rounded'>
        <div className='flex items-center gap-3 justify-start'>
            <Icon icon={icon} />
            <h4 className='heading_3'>{title}</h4>
        </div>
        <p className='paragraph pt-5'>{desc}</p>
    </div>
  )
}

export default BenefitCard