"use client"
import TopicList from '@/components/TopicList'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Homepage = () => {
  const { responseOk } = useSelector((state) => state.collections);
  console.log(responseOk,'responseOk');

  useEffect(() => {
    if (responseOk) {
      console.log(responseOk,"responseOk !");
      toast.success(responseOk?.message)
    } else {
      toast.warn(responseOk?.message)
    }
  }, [responseOk])
    return (
        <div>
            <h1 className="d-flex justify-content-center text-3xl font-bold">Welcome to HomePage</h1>
            <div
                id="carouselExampleSlidesOnly"
                className="relative"
                data-te-carousel-init
                data-te-carousel-slide>
                {/* <!--Carousel items--> */}
                <div
                    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    {/* <!--First item--> */}
                   
                    {/* <!--Third item--> */}
                    <div
                        className="relative float-left -mr-[100%] hidden  transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                            className="w-25"
                            alt="Exotic Fruits" />
                    </div>
                </div>
            </div>
            <TopicList />
        </div>
    )
}

export default Homepage