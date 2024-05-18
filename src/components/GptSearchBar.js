import React from 'react'
import language from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
const languageKey = useSelector(store => store.config.lang)

    const handleGptSearchClick =()=>{
        
    }
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
    <form
      className="w-full md:w-1/2 bg-black grid grid-cols-12"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
     
        type="text"
        className=" p-4 m-4 col-span-9"
        placeholder={language[languageKey].gptSearchPlaceholder}
      />
      <button
        className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        onClick={handleGptSearchClick}
      >
      {language[languageKey].search}
      </button>
    </form>
  </div>

  )
}

export default GptSearchBar