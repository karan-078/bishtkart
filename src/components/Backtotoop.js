import React from 'react'
import { useState } from 'react'

const Backtotop = () => {


    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };

      window.addEventListener('scroll', toggleVisible);
  
  return (
    <div>
      <button id='scroal_btn' onClick={scrollToTop}> back to top </button>
    </div>
  )
}

export default Backtotop