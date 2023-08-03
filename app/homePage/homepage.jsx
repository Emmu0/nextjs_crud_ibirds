import TopicList from '@/components/TopicList'
import React from 'react'

const Homepage = () => {
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
                    <div
                        className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item
                        data-te-carousel-active>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                            className="block w-full"
                            alt="Wild Landscape" />
                    </div>
                    {/* <!--Second item--> */}
                    <div
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                            className="block w-full"
                            alt="Camera" />
                    </div>
                    {/* <!--Third item--> */}
                    <div
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                            className="block w-full"
                            alt="Exotic Fruits" />
                    </div>
                </div>
            </div>
            <TopicList />
        </div>
    )
}

export default Homepage