import React, {useContext} from 'react';
import { TransactionContext } from '../context/TransactionContext';
import dummyData from '../utils/dummyData';
import { shortenAddress } from '../utils/shortenAddress';
import useFetch from '../hooks/useFetch';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {

    const gifUrl = useFetch({keyword});

    return (
        <div className='white-glassmorphism m-4 flex flex-1
                        2xl:min-w-[450px]
                        2xl:max-w-[500px]
                        sm:min-w-[270px]
                        sm:max-w-[300px]
                        flex-col p-3 rounded-md hover:shadow-2xl'>

            <div className='flex flex-col items-center w-full mt-3'>
                <div className='w-full mb-6 p-2'>
                    <a href={`https://goerli.etherscan.io/address/${addressFrom}`}
                        target= '_blank'
                        rel='noopener noreferrer'>
                            <p className='text-white text-base '>
                                From : {shortenAddress(addressFrom)}
                            </p>
                        </a>

                        <a href={`https://goerli.etherscan.io/address/${addressTo}`}
                        target= '_blank'
                        rel='noopener noreferrer'>
                            <p className='text-white text-base mt-3'>
                                To : {shortenAddress(addressTo)}
                            </p>
                        </a>

                        <p className='text-white text-base mt-3'>
                            Amount: {amount} Eth
                        </p>
                        {message && (
                            <>
                                <br />
                                <p className='text-white text-base mt-3'>
                                   Message: {message}
                                </p>
                            </>
                        )}
                </div>
                    <img
                            src = {gifUrl || url}
                            alt="gif"
                            className='w-full h-64 2xl:h-96 rounded-medium shadow-lg object-cover'
                    />

                    <div className='blue-glassmorphism p-3 px-5 w-max rounded-3xl mt-0.05 shadow-2xl'>
                        <p className='text-white font-bold'>
                            {timestamp}
                        </p>
                    </div>
            </div>
        </div>
    );

}

const Transactions =() => {

    const { currentAccount, transaction } = useContext(TransactionContext);

    return (
        <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
            <div className='flex flex-col md:p-12 py-12 px-4'>
                { currentAccount
                ? (
                    <h3 className='text-white text-3xl text-center my-2'>
                        Latest Transactions
                    </h3>
                )
                : (
                    <h3 className='text-white text-3xl text-center my-2'>
                        Connect your account to see the latest changes
                    </h3>
                )
                }

                <div className='flex flex-wrap justify-center items-center mt-10'>
                    {transaction.reverse().map((transaction, i) => (
                        <TransactionCard 
                            key={i}
                            {...transaction}
                        />
                    ))}
                </div>

            </div>
        </div>    
    );
}

export default Transactions