"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTopicForm = ({ id, title, description }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`/api/route/update?id=${id}`, {
                title: newTitle,
                description: newDescription,
            });

            if (response.status === 200) {
                toast.success('Topic updated successfully!');
                router.push('/');
            } else {
                throw new Error('Failed to update topic');
            }
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Title"
            />

            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Description"
            />

            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit" type="submit">
                Update Topic
            </button>
        </form>
    );
};

export default EditTopicForm;
