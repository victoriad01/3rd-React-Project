import React from 'react'
import Review from './Review'
import {
  BiChevronLeftCircle,
  BiChevronRightCircle,
  FaQuoteRight,
} from 'react-icons/fa'

function App() {
  return (
    <main>
      <section className='contianer'>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  )
}

export default App
