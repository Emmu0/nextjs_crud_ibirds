"use client";
import React, { useEffect, useState } from 'react';
import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';
import axios from 'axios';
import { ShimmerContentBlock, ShimmerSimpleGallery } from 'react-shimmer-effects';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTopic } from '@/redux/action/api';
import { CCard, CCardBody, CCardHeader, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import { Row, Col } from 'reactstrap'; // Import the necessary components
import { GiSemiClosedEye } from "react-icons/gi";

const TopicList = ({ modalHandler }) => {
    const { responseOk, alltopics_Response } = useSelector((state) => state.collections);
    const [blogs, setblogs] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        if(!alltopics_Response){
            dispatch(getAllTopic())
        }
    }, [responseOk]);
    useEffect(() => {
        if(alltopics_Response){
            setblogs(alltopics_Response?.records)
        }
    }, [alltopics_Response]);

    const blogHandler = (data) => {
        let arr = [];
        alltopics_Response?.records?.map((bData,bKey) =>{
            if (data == "all" ) {
                arr.push(bData)
                
            } else if ( data ==  bData?.type) {
                console.log("food");
                arr.push(bData)
            } 
        })
        setblogs(arr)
    }
    return (
        <>
            <h3 className="d-flex justify-content-center text-3xl font-bold mt-3">All Topics</h3>
            <Row >
                <div>
                    <button className="badge bg-light text-dark mx-1 shadow pe-auto"  onClick={() =>blogs && blogHandler("all")}>All</button>
                    <button className="badge bg-dark mx-1 shadow pe-auto" onClick={() =>blogs && blogHandler("Food")}>Food</button>
                    <button className="badge bg-primary mx-1 shadow pe-auto" onClick={() =>blogs && blogHandler("Fruits")}>Fruit</button>
                    <button className="badge bg-info text-dark mx-1 shadow pe-auto" onClick={() =>blogs && blogHandler("Vegitable")}>Vagitable</button>
                    <button className="badge bg-warning text-dark mx-1 shadow pe-auto" onClick={() =>blogs && blogHandler("City")}>City</button>
                </div>
                {blogs ?
                    blogs?.map((data) => (
                        <Col xs={12} md={4} key={data._id} className='my-3 d-flex justify-content-center'>
                            <CCard style={{ width: '22rem', height: "25rem" }}>
                                <CCardImage orientation="top h-50" src={data.imgurl} />
                                <CCardBody>
                                    <CCardTitle>{data.title}</CCardTitle>
                                    <CCardText>
                                        {data.description}
                                    </CCardText>
                                    <div className="flex gap-2">
                                        <button type="button" className="btn btn-outline-primary m-1"><RemoveBtn id={data._id} /></button>
                                        <button type="button" className="btn btn-outline-primary m-1"> <a href={`hubRoot/editTopic/${data._id}`}>
                                            <HiPencilAlt size={24} />
                                        </a></button>
                                        <button type="button" className="btn btn-outline-primary m-1" onClick={() => modalHandler(data)}><GiSemiClosedEye /></button>
                                    </div>
                                </CCardBody>
                            </CCard>
                        </Col>
                    ))
                    : <Col xs={12} key={Math.random()} className='my-5 d-flex justify-content-center'>
                        <ShimmerSimpleGallery row={1} card imageHeight={300} caption />
                    </Col>
                }

            </Row>

        </>
    );
};

export default TopicList;
