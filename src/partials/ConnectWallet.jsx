import { useState } from 'react';

const ConnectWallet = () => {

    const [ errorMsg, setErrorMsg ] = useState(null)
    const [ defaultAccount, setDefaultAccount ] = useState(null)

    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChanged([result[0]])
            })
        } else {
            alert('Install Metamask Please')
        }
    }

    const accountChanged = (account) => {
        setDefaultAccount(account)
    }

  return (
    <button onClick={connectWallet} className="text-lg btn-sm text-gray-900 bg-blue-100 hover:bg-bg-200 hover:text-blue-100 hover:border-2 hover:border-blue-100 my-4 rounded-full transition duration-700">
        Connect wallet
    </button>
  )
}

export default ConnectWallet
