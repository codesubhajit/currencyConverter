import { useState } from 'react'

import viteLogo from '/vite.svg'

import useCurrenecyInfo from './hooks/useCurrenecyInfo';
import InputBox from './InputBox';

function App() {
  const [amount,setAmount]=useState(0)  ;
  const [from,setFrom]=useState('usd');
  const [to,setTo]=useState('inr');
  const[convertedAmount,setConvertedAmount]=useState(0)
  let currencyInfo=useCurrenecyInfo(from)
  let options=Object.keys(currencyInfo);
let swap=()=>{
  setFrom(to);
  setTo(from);
  setAmount(convertedAmount);
  setConvertedAmount(amount)
}
let convert=()=>{
  setConvertedAmount(currencyInfo[to]*amount)
}
  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('${viteLogo}')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              onAmountChange={(amount)=>{
                                    setAmount(amount)
                              }}
                              currencyType={from}
                              onCurrencyTypeChange={()=>{
                                setFrom(from)
                              }}
                              options={options}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              
                              currencyType={to}
                              onCurrencyTypeChange={(currency)=>{
                                setTo(currency)
                              }}
                              options={options}
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );

}

export default App
