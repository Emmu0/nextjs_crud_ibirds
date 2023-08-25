import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FaDeviantart } from 'react-icons/fa6'
import { image2 } from '@/image'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllFeedBack } from '@/redux/action/api'

const TimeLine = () => {
    const { allFeedback } = useSelector((state) => state.collections);
    const dispatch = useDispatch()
    const limitedData = allFeedback?.records?.slice(0, 4);
    useEffect(() => {
        dispatch(GetAllFeedBack())
    }, []);

    return (
        <div>
            <div className="section-title mt-8 " data-aos="fade-up">
                <h2>Your Feedback</h2>
            </div>
            {/* <!-- End of Title --> */}
            <div className="row mt-4 " data-aos="fade-up">
                {/* <!-- Timeline --> */}
                <div className="vertical-timeline">
                    {/* <!-- Timeline Item 1 --> */}
                    {limitedData?.map((vl, ky) => (
                        <>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-2  bottom">
                                    <img src={image2?.src} height={80} width={150} alt="..." className="rounded" />
                                </div>
                                <div className="col-md-6">
                                    <h6 className=" fw-bold">{vl?.name}</h6>
                                    <p>{vl?.subject}</p>
                                    <small>Create Data -{vl?.createdAt}</small>
                                    <br />
                                    <small>Update Data -{vl?.updatedAt}</small>
                                </div>
                            </div>
                            <div className="row timeline-inner">
                                <div className="col-md-2">
                                    <div className="corner top-right"></div>
                                </div>
                                <div className="col-md-8">
                                    <hr />
                                </div>
                                <div className="col-md-2">
                                    <div className="corner left-bottom"></div>
                                </div>
                            </div>
                        </>
                    ))
                    }
                </div>
                {/* <!-- End of Timeline --> */}
            </div>
        </div>
    )
}

export default TimeLine
