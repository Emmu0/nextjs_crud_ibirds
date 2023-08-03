
"use client"
import EditTopicForm from '@/components/EditTopicForm';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTopic = ({ params }) => {
    const { id } = params;
    const [topic, setTopic] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
            try {
                const response = await axios.get(`/api/route/getupdate/?id=${id}`);
                if (response.status === 200) {
                    setTopic(response.data.records);
                } else {
                    throw new Error('Failed to fetch topic');
                }
            } catch (error) {
                console.log(error);
                toast.error('Failed to fetch topic. Please try again.');
            } finally {
                setIsLoading(false);
            }
        }, [id]);
console.log(topic,'responce');


    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <EditTopicForm id={id} title={topic.title} description={topic.description} />
            )}
        </div>

    );
};

export default EditTopic;
