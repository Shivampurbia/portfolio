import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import sent from './sent.png';
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import EarthCanvas from './canvas/EarthCanvas';

const Contact = () => {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 
  const [submitClicked,setSubmitClicked] = useState(false);
  
  function mailer(e){
    e.preventDefault();
    console.log(e.target.name.value)

    emailjs.sendForm('service_pb6t28a','template_uz3kqid',e.target,'user_DjMFlTUloSX0TTmGpZaS9')
    .then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
    setSubmitClicked(true);
    setTimeout(()=>{
      setSubmitClicked(false)
    },3000)
    setName("");
    setEmail("");
    setMessage("");
    
    
  }
  

  return (
    <section className='my-28' id='contact'>
      <header className='px-5 text-2xl font-bold pt-10'>
        <h2>Contact Me</h2>
        <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
      </header>
      <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between'>
        <div className='md:w-6/12 md:px-0 p-5 my-5'>
          <div>
            <p className='font-bold'>Shivam purbia</p>
            <p className='font-thin'>Udaipur, rajasthan</p>
            <a href='mailto: shivam3265prb@gmail.com' className='border-b-2 mt-3 inline-block border-gray-500'>
              shivam3265prb@gmail.com
            </a>
          </div>
          <a className='border-b-2 mt-3 inline-block border-gray-500' href='./Shivam2022resume.pdf' target='_blank' rel='noreferrer'>
            Resume
          </a>
          <div className='flex flex-row flex-wrap mt-7'>
            <div className='mr-4'>
              <a href='https://www.linkedin.com/in/shivampurbia' target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/linkedin.svg' alt='' width='24px' height='24px' className='mr-1' />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className='mr-4'>
              <a href='https://github.com/shivampurbia' target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/github.svg' alt='' width='24px' height='24px' className='mr-1' />
                  GitHub
                </span>
              </a>
            </div>

          </div>
        </div>

        <div className='sm:-mt-14 bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg  justify-between w-full  md:w-6/12 '>
          <form onSubmit={mailer} className='flex flex-col space-y-3 m-auto w-full' name='contact'>
            <input type='hidden' name='form-name' value='contact' />
 
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' value={name} style={{
            }} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' id='name' className='gradient' required></input>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} id='email' placeholder='Enter your mail' className='gradient' required></input>
            <label htmlFor='message'>Message</label>
            <textarea name='message' onChange={(e) => setMessage(e.target.value)} value={message} id='message' cols='25' rows='5' className='gradient' required></textarea>
            <div style={{display:"flex"}}>
              <button type='submit' className='border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md'>
                Send Message
              </button>
              {submitClicked && <img alt="sent" src={sent} style={{height:"40px",width:"40px"}}></img>}
            </div>
            
          </form>
        </div>
      </div>
      {/* <div className='relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm' onClick={() => window.scroll(0, 0)}>
        <picture>
          <img src={'./images/rocket.gif'} width='200px' height='200px' loading='lazy' alt='red rocket flying' />
        </picture>
      </div> */}
      <motion.div
      onClick={() => window.scroll(0, 0)}
        variants={slideIn("right", "tween", 0.2, 1)}
        style={{
          height:'25rem',
        }}
      >
        <EarthCanvas/>
        {/* <text>dsfsd</text> */}
      </motion.div> 
   
    </section>
  );
};

export default Contact;
