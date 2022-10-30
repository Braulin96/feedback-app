import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback,handleDelete}) {
    if (!feedback || feedback.length ===0){
        return <p> No feedback Yet</p>
    }
  return (
    <div className='feedback-list'>
        {feedback.map ((item) => (
            <div>
                <FeedbackItem 
                key={item.id} 
                item={item} 
                handleDelete={handleDelete}/>
            </div>
        ))}

    </div>
  )
}
FeedbackList.propTypes = {
    feedback: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    })
}
export default FeedbackList