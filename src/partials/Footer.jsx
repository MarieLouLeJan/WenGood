import { useState, useRef } from 'react';
import logo from '../images/wenGood/logo.png'
import { BsTwitter, BsDiscord } from 'react-icons/bs'
import { GrLinkedin, GrMail } from 'react-icons/gr'
import { Link } from 'react-router-dom';


function Footer() {


  const [soonDis, setSoonDis ] = useState(false)
  const [soonLin, setSoonLin ] = useState(false)

  const toggleSoonDis = () => {
	setSoonDis(!soonDis)
  }

  const toggleSoonLin = () => {
	setSoonLin(!soonLin)
  }

  const tabs = useRef(null);

  return (
	<section className='mb-8'>

	  <div className="max-w-8xl my-2 mx-2 md:mx-16 flex justify-around space-x-2 md:space-x-8 md:justify-between">

	  	<div className='hidden md:flex'>
			<img src={logo} className='w-14 h-16 my-auto' alt="wengood" />
          	<div className='text-center my-auto'>
				<h4 className='h4 text-sm tracking-widest'>WEN GOOD </h4>
				<h3 className='h4 text-xs tracking-widest'>PROJECT</h3>
			</div>
		</div>

		<div className='flex space-x-4 md:space-x-16 border-t border-blue-100 pt-2'>
			<div className='flex'>
				<div className='space-y-4 text-sm md:text-lg'>
					<a target='_blank' href='https://twitter.com/wengoodproject' className='flex space-x-4'>
						<BsTwitter size={25} className='text-blue-100'/>
						<p className='my-auto'>Twitter</p>
					</a>
					<div className='flex space-x-4' onMouseEnter={toggleSoonDis} onMouseLeave={toggleSoonDis}>
						<BsDiscord size={25} className='text-blue-100'/>
						{!soonDis ? (
							<p className='my-auto'>Discord</p>
						) : (
							<p className='text-blue-100 md:text-base'>Coming...</p>
						)}
					</div>
				</div>
			</div>

			<div className='flex'>
				<div className='space-y-4 text-sm md:text-lg'>
					<Link to='/contact' className='flex space-x-4'>
						<GrMail size={25} className='text-blue-100'/>
						<p>Contact</p>
					</Link>
					<div className='flex space-x-4' onMouseEnter={toggleSoonLin} onMouseLeave={toggleSoonLin}>
						<GrLinkedin size={23} className='text-blue-100'/>
						{!soonLin ? (
							<p>Linkedin</p>
						) : (
							<p className='text-blue-100 md:text-base'>Coming...</p>
						)}
					</div>
				</div>
			</div>
		</div>

		<div className='text-xs md:text-base flex-col text-center flex border-t border-blue-100 pt-2 space-y-1 md:space-y-2'>
			<p>
				Wen Good Project. 
			</p>
			<p>
				All rights reserved.
			</p>
			<p>
				&copy; 2023.
			</p>
		</div>



	  </div>
		
	</section>
  );
}

export default Footer;