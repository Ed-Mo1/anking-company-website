import React from 'react'

const FaqCard = ({title,desc}) => {
  return (
    <div className='border-grey-15 border-[.5px] py-6 px-8 rounded-xl'>
      <h4 className='heading_4 pb-4 border-b-[.1px] border-b-grey-70'>{title}</h4>
      <p className='paragraph mt-5'>{desc}</p>
    </div>
  )
}

export default FaqCard