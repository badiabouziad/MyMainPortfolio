import './Contact.css'
import 'animate.css';

function Contact() {
    const magnify5 = () => {
        const cursor = document.getElementById("cursor");
        cursor.classList.add("magnify-5");
      };
    
      const removeMagnify5 = () => {
        const cursor = document.getElementById("cursor");
        cursor.classList.remove("magnify-5");
      };
  return (
    <div className='container'>
        <h1 id='contact'>Contact me via my E-mail</h1>
        <img className='character'src="IMG/vecteezy_3d-male-character-happy-working-on-a-laptop_24387908.png"></img>
        <a href='https://web.facebook.com/?_rdc=1&_rdr' className='email' onMouseOver={magnify5}
            onMouseOut={removeMagnify5} target='blank'>web-developer@badiabouziad.com</a>

    </div>
  )
}

export default Contact