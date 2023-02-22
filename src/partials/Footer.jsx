import { useState, useRef } from 'react';
import logo from '../images/wenGood/logo.png'
import { BsTwitter, BsDiscord } from 'react-icons/bs'
import { GrLinkedin, GrMail } from 'react-icons/gr'
import { Link } from 'react-router-dom';


function Footer() {


  const [soonDis, setSoonDis ] = useState(true)
  const [soonLin, setSoonLin ] = useState(true)

  const toggleSoonDis = () => {
	setSoonDis(!soonDis)
  }

  const toggleSoonLin = () => {
	setSoonLin(!soonLin)
  }

  const tabs = useRef(null);

  return (
	<section className='mb-8' >

	  <div className="max-w-8xl my-8 mx-16 flex justify-around space-x-8 md:justify-between">

	  	<div className='hidden md:flex'>
			<img src={logo} className='w-14 h-16 my-auto' alt="wengood" />
          	<div className='text-center my-auto'>
				<h4 className='h4 text-sm tracking-widest'>WEN GOOD </h4>
				<h3 className='h4 text-xs tracking-widest'>PROJECT</h3>
			</div>
		</div>

		<div className='flex space-x-8 md:space-x-16 border-t border-blue-100 pt-6'>
			<div className='flex'>
				<div className='space-y-4'>
					<div className='flex space-x-4 text-lg' onMouseEnter={toggleSoonDis} onMouseLeave={toggleSoonDis}>
						<BsDiscord size={28} className='text-blue-100'/>
						{soonDis ? (
							<p>Discord</p>
						) : (
							<p className='text-blue-100'>Coming Soon</p>
						)}
					</div>
					<a target='_blank' href='https://twitter.com/wengoodproject' className='flex space-x-4 text-lg'>
						<BsTwitter size={28} className='text-blue-100'/>
						<p>Twitter</p>
					</a>
				</div>
			</div>

			<div className='flex'>
				<div className='space-y-4'>
				<div className='flex space-x-4 text-lg' onMouseEnter={toggleSoonLin} onMouseLeave={toggleSoonLin}>
						<GrLinkedin size={28} className='text-blue-100'/>
						{soonLin ? (
							<p>Linkedin</p>
						) : (
							<p className='text-blue-100'>Coming Soon</p>
						)}
					</div>
					<Link to='/contact' className='flex space-x-4 text-lg'>
						<GrMail size={30} className='text-blue-100'/>
						<p>Contact</p>
					</Link>
				</div>
			</div>
		</div>

		<div className='flex-col md:flex-row flex border-t border-blue-100 pt-6 md:space-x-2'>
			<p>
				&copy; 2023.
			</p>
			<p>
				Wen Good Project. 
			</p>
			<p>
				All rights reserved
			</p>
		</div>



	  </div>
		
	</section>
  );
}

export default Footer;