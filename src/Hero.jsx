import  Carousel  from 'react-bootstrap/Carousel'
import React from 'react'

function Hero() {
  return (
    <>

    <Carousel>
        <Carousel.Item>    
        <div className='text-center HeroArea'>
                <p className='mt-5 BrandColor'>Meet your new car</p>
                <h1 className='font-weight-bold'>Honda Civic Type R</h1>
               <div className='HeroButton'>
               <button className='btn btn-outline-secondary font-weight-bold me-3'>More Details</button>
               <button className='btn font-weight-bold testDrive'>Test Drive</button>
               </div>
            </div>
            <div className='HeroImg'>
                <img className='d-block w-100' src="img\Header Image.png" alt="" />
            </div>
        </Carousel.Item>

        <Carousel.Item>    
        <div className='text-center HeroArea'>
                <p className='mt-5 BrandColor'>Meet your new car</p>
                <h1 className='font-weight-bold'>Honda Civic Type R</h1>
               <div className='HeroButton'>
               <button className='btn btn-outline-secondary font-weight-bold me-3'>More Details</button>
               <button className='btn font-weight-bold testDrive'>Test Drive</button>
               </div>
            </div>
            <div className='HeroImg'>
                <img className='d-block' src="img\Header Image.png" alt="" />
            </div>
        </Carousel.Item>

        <Carousel.Item>    
        <div className='text-center HeroArea'>
                <p className='mt-5 BrandColor'>Meet your new car</p>
                <h1 className='font-weight-bold'>Honda Civic Type R</h1>
               <div className='HeroButton'>
               <button className='btn btn-outline-secondary font-weight-bold me-3'>More Details</button>
               <button className='btn font-weight-bold testDrive'>Test Drive</button>
               </div>
            </div>
            <div className='HeroImg'>
                <img className='d-block' src="img\Header Image.png" alt="" />
            </div>
        </Carousel.Item>
    </Carousel>
   
    
    </>
  )
}

export default Hero;