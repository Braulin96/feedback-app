import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './Button'
import RatingSelect from './RatingSelect'


// componente para enviar o feedback
function FeedbackForm(handleAdd) {
    const [text, setText] =useState('')
    const [rating, setRating] =useState(10)
    const [btnDisabled, setBtnDisabled] =useState(true)
    const [message, setMessage] =useState('')

    const handleTextChange =(e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10){
            setMessage ('Text must be at least 10 characteres')
            setBtnDisabled(true)
        } else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
  const handleSubmit = (e) => {
    e.preventDefautl()
    if(text.trim().length > 10){
        const newFeedback = {
            text,
            rating,
            // we can also write "rating: rating," = "rating:rating,"
        }
        handleAdd(newFeedback)
        setText('')
    
    }
  }
  return (
    <div>
        <Card> 
            <form onSubmit={handleSubmit}>
                <h2>how would you rate your service with us</h2>
                <RatingSelect select={(rating) => setRating(rating)}   />
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='write a review' 
                    value={text}
                    />
                    <Button type='submit' isDisabled={btnDisabled}>send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card> 
    </div>
  )
}

export default FeedbackForm
