import Header from '../partials/Header';
import Footer from '../partials/Footer';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


function Contact() {

    const form = useRef();
    const [ message, setMessage ] = useState('')

    const sendEmail = (e) => {
      e.preventDefault();
      setMessage('')
  
      emailjs.sendForm('service_ly4niqb', 'template_c319cfd', form.current, 'u7Mu7Crp6fZ6Sjhb4')
        .then((result) => {
            console.log(result.text);
            setMessage('Votre message a bien été envoyé')
        }, (error) => {
            console.log(error.text);
            setMessage(`Désolée, le message n'a pas pu etre envoyé`)
        });
    };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-bg-200">

      <Header />

      <main className="grow">

        <section className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="pt-32 pb-12 md:pt-44 md:pb-16">

              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h3 mb-4" data-aos="fade-up">Nous contacter</h1>
              </div>

              <form className="max-w-xl mx-auto" ref={form} onSubmit={sendEmail}>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3 mb-4 md:mb-0">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">Nom<span className="text-red-600">*</span></label>
                    <input 
                        type="text" 
                        name='user_name'
                        className="form-input w-full text-gray-300 focus:border-blue-100" 
                        required />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input 
                        type="email" 
                        name='user_email'
                        className="form-input w-full text-gray-300 focus:border-blue-100" 
                        required />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="subject">Object <span className="text-red-600">*</span></label>
                    <input 
                        type="text" 
                        name='topic'
                        className="form-input w-full text-gray-300 focus:border-blue-100" 
                        required />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="message">Message <span className="text-red-600">*</span></label>
                    <textarea 
                        name='message'
                        rows="4" 
                        className="form-textarea w-full text-gray-300 focus:border-blue-100" 
                        required></textarea>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button type='submit' className="btn text-bg-200 bg-blue-100 hover:bg-bg-200 hover:text-blue-100 w-full">Envoyer</button>
                  </div>
                </div>

                <div>
                    <p className='p-2 text-center text-xl'>{message}</p>
                </div>
              </form>

          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Contact;