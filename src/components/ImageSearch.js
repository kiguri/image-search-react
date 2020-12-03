import {useState} from 'react'
const ImageSearch = ({ setTerm }) => {
    const [text, setText] = useState('')
    const handleSumbit = e => {
        e.preventDefault()
        setTerm(text)
        setText('')
    }
    return ( 
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <form onSubmit={handleSumbit} className='w-full max-w-sm'>
                <div className='flex items-center border-b-2 border-green-300 py-2'>
                    <input 
                        onChange={(e) => setText(e.target.value) }
                        value={text}
                        className='appearance-none bg-transparent border-none w-full
                        text-gray-700 mr-3 px-2 leading-tight focus:outline-none'
                        type='text' placeholder='Search image'/>
                    <button 
                        className='flex-shrink-0 bg-green-300 hover:bg-green-700 border-green-500
                        hover:border-green-sm hover:text-white border-2 py-1 px-2 rounded'
                        type='submit'>Search</button>
                </div>
            </form>
        </div>
     );
}
 
export default ImageSearch;