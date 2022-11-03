import './App.css';
import React, {useState, useEffect} from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = `https://api.quotable.io/random`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setQuote(data.content);
      })
  }

  const handleClick = () => {
    getQuote();
  }

  return (
    <div className='card'>
      <div className='card-body'>
        <p className='quotatious text-wrap'>{quote}</p>
      </div>
      <button className='btn btn-light' onClick={handleClick}>New Quote</button>
    </div>
  )
}

export default Quotes;