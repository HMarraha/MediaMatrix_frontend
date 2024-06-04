import React, { useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
const Faq = () => {
    const data = [
        {
            question : "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dignissimos?",
            answer : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum corporis facilis reprehenderit quod voluptate non veritatis omnis. Velit explicabo accusamus, nulla eligendi omnis odio consectetur aspernatur excepturi nesciunt dolorum facere iure itaque error neque vel exercitationem, perspiciatis voluptas recusandae, dolore quo ea tempora perferendis quasi! Tempore, rem! Veritatis, fugiat consectetur.'
        },
        {
            question : "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dignissimos?",
            answer : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum corporis facilis reprehenderit quod voluptate non veritatis omnis. Velit explicabo accusamus, nulla eligendi omnis odio consectetur aspernatur excepturi nesciunt dolorum facere iure itaque error neque vel exercitationem, perspiciatis voluptas recusandae, dolore quo ea tempora perferendis quasi! Tempore, rem! Veritatis, fugiat consectetur.'
        },
        {
            question : "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dignissimos?",
            answer : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum corporis facilis reprehenderit quod voluptate non veritatis omnis. Velit explicabo accusamus, nulla eligendi omnis odio consectetur aspernatur excepturi nesciunt dolorum facere iure itaque error neque vel exercitationem, perspiciatis voluptas recusandae, dolore quo ea tempora perferendis quasi! Tempore, rem! Veritatis, fugiat consectetur.'
        },
        {
            question : "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dignissimos?",
            answer : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum corporis facilis reprehenderit quod voluptate non veritatis omnis. Velit explicabo accusamus, nulla eligendi omnis odio consectetur aspernatur excepturi nesciunt dolorum facere iure itaque error neque vel exercitationem, perspiciatis voluptas recusandae, dolore quo ea tempora perferendis quasi! Tempore, rem! Veritatis, fugiat consectetur.'
        }
    ]
    const [showAnswer,setShowAnswer] = useState(false)
    const handleShowAnswer = (i) => {
        if (showAnswer === i) {
            setShowAnswer(false)
        } else {
            setShowAnswer(i)
        }
    }
  return (
    <>
        <div id="faqid" className="faq-container">
                <h1 style={{color: 'white'}}>FAQ</h1>
           {data.map((item,i) => (
            <div key={i} className="question-container">
            <div className="question">
                <h4>{item.question}</h4>
                <button onClick={() => handleShowAnswer(i)} style={{background: 'none', border: 'none',cursor: 'pointer'}}><i>{showAnswer === i ? <FaTimes size='1.5rem' color='#BE3144'/> : <FaPlus size='1.5rem' color='#BE3144'/>}</i></button>
            </div>
            <div className={showAnswer === i ? 'answer' : 'noanswer'}>
                {item.answer}
            </div>
        </div>
           ))}
        </div>
    </>
  )
}

export default Faq