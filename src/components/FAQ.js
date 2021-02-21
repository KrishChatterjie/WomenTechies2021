import React, { useEffect, useRef } from 'react'
import Accordion from 'accordion-js'
import 'accordion-js/dist/accordion.min.css'

const FAQ = React.forwardRef(({ setFAQ }, ref) => {
  const accRef = useRef(null)
  /* eslint-disable no-unused-vars */
  useEffect(() => {
    const Acc = new Accordion(accRef.current, {
      duration: 200
    })
  }, [])
  /* eslint-enable no-unused-vars */
  return (
    <div className='faq' id='faq' ref={ref}>
      <div className='faq-title'>FAQ's</div>
      <div class='accordion-container' ref={accRef}>

        <div className='ac yellow'>
          <h2 className='ac-header'>
            <button className='ac-trigger'>Do I need to pay any money to register for the Hackathon?</button>
          </h2>
          <div className='ac-panel'>
            <p className='ac-text'>No. You do not have to pay anything to anyone to register yourself for any Hackathon on HackerEarth</p>
          </div>
        </div>

        <div className='ac pink'>
          <h2 className='ac-header'>
            <button className='ac-trigger'>Do I need to have any specific qualifications to be a participant for the Hackathon?</button>
          </h2>
          <div className='ac-panel'>
            <p className='ac-text'>If you love to code, you are more than welcome to participate in the Hackathon.</p>
          </div>
        </div>

        <div className='ac purple'>
          <h2 className='ac-header'>
            <button className='ac-trigger'>Is it necessary for all participants to belong to the same university?</button>
          </h2>
          <div className='ac-panel'>
            <p className='ac-text'> No, there are no restrictions regarding universities. Your team can have members from different universities across the globe!</p>
          </div>
        </div>

        <div className='ac yellow'>
          <h2 className='ac-header'>
            <button className='ac-trigger'>I’m interested to participate but I am unable to find a team. What should I do?</button>
          </h2>
          <div className='ac-panel'>
            <p className='ac-text'>You can try finding like minded people on our discord server.</p>
          </div>
        </div>

        <div className='ac pink'>
          <h2 className='ac-header'>
            <button className='ac-trigger'>How do I submit what I have made for the Hackathon?</button>
          </h2>
          <div className='ac-panel'>
            <p className='ac-text'>You have to develop the application on your local system and add your code to a GitHub repository and submit its link. Update the ReadMe with all the details about your application and instructions to run the code.</p>
          </div>
        </div>

        <div className='ac purple'>
          <h2 className='ac-header'>
            <button className='ac-trigger'>Do we need to have the entire idea fully working?</button>
          </h2>
          <div className='ac-panel'>
            <p className='ac-text'>The entire idea need not be fully implemented however, the submission should be functional so that it can be reviewed by the judges.</p>
          </div>
        </div>

        <div className='ac yellow'>
          <h2 className='ac-header'>
            <button className='ac-trigger'>How is the environment? Will your environment support any language? Will you provide any IDE and DB for us to work on ideas?</button>
          </h2>
          <div className='ac-panel'>
            <p className='ac-text'>You have to develop the application on your local system and add your code to a GitHub repository and submit its link. Update the ReadMe with all the details about your application and instructions to run the code.</p>
          </div>
        </div>

        <div className='ac pink'>
          <h2 className='ac-header'>
            <button className='ac-trigger'>Does one have to be online and available for the entire duration of the Hackathon?</button>
          </h2>
          <div className='ac-panel'>
            <p className='ac-text'>No, one does not need to be logged in on HackerEarth or be online for the entire duration. You can develop the application on your local system based on the given themes and then submit it on HackerEarth, on the specific challenge page.</p>
          </div>
        </div>

        <div className='ac purple'>
          <h2 className='ac-header'>
            <button className='ac-trigger'>Since there is no specific technology mentioned, are there any restrictions on using several pre-built libraries?</button>
          </h2>
          <div className='ac-panel'>
            <p className='ac-text'>There is no restriction to use any language, technology stack, or libraries. You can use any of them to create a web/mobile application.</p>
          </div>
        </div>

        <div className='ac yellow'>
          <h2 className='ac-header'>
            <button className='ac-trigger'>Do I need to give a demo for the product that I have built?</button>
          </h2>
          <div className='ac-panel'>
            <p className='ac-text'>If you want you can submit a small presentation or video that demos your submission, however, it's not mandatory, and only good to have. In case you are one of the winners, you might be invited to demo your application details of which will be shared with sufficient advance notice.</p>
          </div>
        </div>

        <div className='ac pink'>
          <h2 className='ac-header'>
            <button className='ac-trigger'>A fully developed application needs to have a solid backend for data storage like SQL, SharePoint etc. since it's online, is it accepted to show only the prototype of it?</button>
          </h2>
          <div className='ac-panel'>
            <p className='ac-text'>Yes, it's absolutely fine to submit just the prototype. If you use any database like MySQL or PostgresSQL you can also submit a database dump along with your submission. However, you are allowed to submit just the prototype.</p>
          </div>
        </div>

        <div className='ac purple'>
          <h2 className='ac-header'>
            <button className='ac-trigger'>If it is a team submission, does that mean all team members will have access to work at the same time?</button>
          </h2>
          <div className='ac-panel'>
            <p className='ac-text'>Yes, all team members can log in from their account and do application submission on HackerEarth.</p>
          </div>
        </div>

        <div className='ac yellow'>
          <h2 className='ac-header'>
            <button className='ac-trigger'>Who will own the IP (Intellectual Property) Rights to the product that I have built?</button>
          </h2>
          <div className='ac-panel'>
            <p className='ac-text'>The developer/developers of the web/mobile application will have all rights and own the IP of the product. However, all code needs to be in the public domain (open source) so that it can be evaluated by the judges.</p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default FAQ