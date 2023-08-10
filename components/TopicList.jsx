"use client";
import React, { useEffect, useState } from 'react';
import RemoveBtn from './RemoveBtn';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';
import axios from 'axios';
import { ShimmerContentBlock } from 'react-shimmer-effects';

const TopicList = () => {
    const [topics, setTopics] = useState([]);

    console.log(topics, "topics")

    useEffect(async () => {
        try {
            const response = await axios.get(`/api/route/all`);
            setTopics(response.data.records);
        } catch (error) {
            console.log('Error loading topics:', error);
        }
    }, []);

    return (
        <>
            <h3 className="d-flex justify-content-center text-3xl font-bold mt-3">All Topics</h3>
            {topics?.length > 0 ?
                topics.map((data) => (
                    <div
                        key={data._id}
                        className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
                    >
                        <div className=" d-flex">
                            <div>
                                <h2 className="font-bold text-2xl" style={{ width: "300px" }}>{data.title}</h2>
                                <span>{data.description}</span>
                            </div>

                            <img src={data.imgurl} className="ml-2" alt="topic" width={110} height={110} />
                        </div>

                        <div className="flex gap-2">
                            <RemoveBtn id={data._id} />
                            <a href={`hubRoot/editTopic/${data._id}`}>
                                <HiPencilAlt size={24} />
                            </a>
                        </div>
                    </div>
                ))
                : <ShimmerContentBlock
                    title
                    text
                    cta
                    thumbnailWidth={370}
                    thumbnailHeight={370}
                />}

        </>
    );
};

export default TopicList;
