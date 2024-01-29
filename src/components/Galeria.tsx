import React from 'react';

    interface ImageStyle {
        height: string;
        width: string;
        objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
        borderRadius: string;
        boxShadow: string;
    }
    const Galeria: React.FC = () => {
        const imageStyle: ImageStyle = {
            height: "300px",
            width: "100%",
            objectFit: "cover",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        };
  
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2 bg-gray-900 relative">
            <div className=' brightness-[0.8]'>
                <img
                style={imageStyle}
                className='hover:cursor-pointer'
                src="https://i.blogs.es/b58013/1366_2000---2022-06-09t162740.648/450_1000.webp"
                alt="bicep"
                />
            <div className='absolute bottom-0 px-4 py-3 w-full hover:cursor-pointer'>
            <h1 className="text-white font-semibold text-4xl">Biceps</h1>
            </div>
            </div>
            <div className=' brightness-[0.8]'>
                <img
                style={imageStyle}
                className='hover:cursor-pointer'
                src="https://i.blogs.es/5f213d/1366_2000/450_1000.jpg"
                alt="tricep"
                />
            <div className='absolute bottom-0 px-4 py-3 w-full hover:cursor-pointer'>
            <h1 className="text-white font-semibold text-4xl">Triceps</h1>
            </div>
            </div>
            <div className=' brightness-[0.8]'>
                <img
                style={imageStyle}
                className='hover:cursor-pointer'
                src="https://www.cambiatufisico.com/wp-content/uploads/entrenamiento-hombro-1.jpg"
                alt="hombro"
                />
            <div className='absolute bottom-0 px-4 py-3 w-full hover:cursor-pointer'>
                <h1 className="text-white font-semibold text-4xl">Hombro</h1>
            </div>
            </div>
            <div className='brightness-[0.8]'>
                <img
                style={imageStyle}
                className='hover:cursor-pointer'
                src="https://i.blogs.es/bd6928/istock-526806837/1366_2000.jpeg"
                alt="pecho"
                />
            <div className='absolute bottom-0 px-4 py-3 w-full hover:cursor-pointer'>
                <h1 className="text-white font-semibold text-4xl">Pecho</h1>
            </div>
            </div>
            <div className='brightness-[0.8]'>
                <img
                style={imageStyle}
                className='hover:cursor-pointer'
                src="https://media.glamour.mx/photos/644059493edc840ed9c5cfeb/16:9/w_2560%2Cc_limit/sentadilla_atg.jpg"
                alt="pierna"
                />
            <div className='absolute bottom-0 px-4 py-3 w-full hover:cursor-pointer'>
                <h1 className="text-white font-semibold text-4xl">Pierna</h1>
            </div>
            </div>
            <div className='brightness-[0.8]'>
                <img
                style={imageStyle}
                className='hover:cursor-pointer'
                src="https://www.cambiatufisico.com/wp-content/uploads/rutinas-abdominales.jpg"
                alt="abdominal"
                />
            <div className='absolute bottom-0 px-4 py-3 w-full hover:cursor-pointer'>
                <h1 className="text-white font-semibold text-4xl">Abdominal</h1>
            </div>
            </div>
            <div className='brightness-[0.8]'>
                <img
                style={imageStyle}
                className='hover:cursor-pointer'
                src="https://hips.hearstapps.com/hmg-prod/images/dumbbell-1649167008.jpg"
                 alt="antebrazo"
                />
            <div className='absolute bottom-0 px-4 py-3 w-full hover:cursor-pointer'>
                <h1 className="text-white font-semibold text-4xl">Antebrazo</h1>
            </div>
            </div>
            <div className='brightness-[0.8]'>
                <img
                style={imageStyle}
                className='hover:cursor-pointer'
                src="https://cdn.shopify.com/s/files/1/0425/7667/4983/files/3_b14557b5-9a37-48c5-b22d-8fc64e53f993.png?v=1700570981"
                alt="espalda"
                />
            <div className='absolute bottom-0 px-4 py-3 w-full hover:cursor-pointer'>
                <h1 className="text-white font-semibold text-4xl">Espalda</h1>
            </div>
            </div>
            <div className='hover:blur-[1px] brightness-[0.8]'>
                <img
                style={imageStyle}
                className='hover:cursor-pointer'
                src="https://hips.hearstapps.com/hmg-prod/images/315297042-1090491751659559-9137196433167665724-n-1-1669279063.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
                alt="gluteo"
                />
            <div className='absolute bottom-0 px-4 py-3 w-full hover:cursor-pointer'>
                <h1 className="text-white font-semibold text-4xl">Gluteo</h1>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Galeria;