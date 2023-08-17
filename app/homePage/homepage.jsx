"use client"
import TopicList from '@/components/TopicList'
import { image2, iamge3 } from '@/image';
import { carouselItem } from '@/utils/json';
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Homepage = () => {
  const { responseOk } = useSelector((state) => state.collections);
  console.log(responseOk, 'responseOk');

  useEffect(() => {
    if (responseOk) {
      console.log(responseOk, "responseOk !");
      toast.success(responseOk?.message)
    } else {
      toast.warn(responseOk?.message)
    }
  }, [responseOk])
 
  return (
    <div className='mt-8 container'>
      <h1 className="d-flex justify-content-center text-3xl font-bold">Welcome to HomePage</h1>
      <CCarousel controls indicators light interval={300}>
        {carouselItem?.items?.map((vl, ky) => (
          <CCarouselItem>
            <CImage className="d-block w-100 fixed-height-image" src={vl?.imageUrl?.src} alt="alt.img" />
            <CCarouselCaption className="d-none d-md-block text-white" >
              <h5 className=" fw-bold">{vl?.title}</h5>
              <p className="" style={{fontSize:" 2rem"}}>{vl?.body}</p>
            </CCarouselCaption>
          </CCarouselItem>
        ))}

      </CCarousel>
      <TopicList />
    </div>
  )
}

export default Homepage