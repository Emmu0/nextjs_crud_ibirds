"use client";
import React, { useEffect, useState } from 'react';
import RemoveBtn from './RemoveBtn';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';
import axios from 'axios';

const TopicList = () => {
    const [topics, setTopics] = useState([]);

    console.log(topics,"topics")

    useEffect( async () => {
            try {
                const response = await axios.get(`/api/route/all`);
                setTopics(response.data.records);
            } catch (error) {
                console.log('Error loading topics:', error);
            }
        }, []);

    return (
        <>
        
            {topics.map((data) => (
                <div
                    key={data._id}
                    className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
                >
                    <div className=" d-flex">
                        <div>
                        <h2 className="font-bold text-2xl">{data.title}</h2>
                        <span>{data.description}</span>
                        </div>
                        
                        <img src={data.imgurl} className="ml-2" alt="topic" width={100} height={100} />
                    </div>

                    <div className="flex gap-2">
                        <RemoveBtn id={data._id} />
                        <a href={`/editTopic/${data._id}`}>
                            <HiPencilAlt size={24} />
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TopicList;
