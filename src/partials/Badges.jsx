import React from 'react'

const Badges = ({type}) => {

    const badgeType = () => {
        switch (type) {
            case 'play2earn':
                return (            
                    <li className="m-1">
                        <a className="text-base inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-100 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">
                            Play2Earn
                        </a>
                    </li>
                )
            case 'JcJ':
                return (
                    <li className="m-1">
                        <a className="text-base inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-200 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">
                            JcJ
                        </a>
                    </li>
                )
            default:
                return null
        }
    }

  return (
    badgeType()
  )
}

export default Badges
