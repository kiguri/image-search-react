import { useState, useEffect } from 'react';
import ImageCard from './components/imageCard'
import ImageSearch from './components/ImageSearch'

function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
            setImages(data.hits);
            setLoading(false);
        })
        .catch(err => console.log(err));
    }, [term]);

    return (
       <div className='container mx-auto pb-10'>
           <ImageSearch setTerm={setTerm}/>
           {!loading && images.length === 0 && <h1 className='text-5xl text-center mx-auto mt-64'>Not found.</h1> }
           {loading ? <h1 className='text-6xl text-center mx-auto mt-64'>Loading...</h1> :
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-4 justify-items-center'>
                    {images.map(image => (
                        <ImageCard key={image.id} image={image} />
                    ))}
                </div>
            }
       </div>
    );
}

export default App;
