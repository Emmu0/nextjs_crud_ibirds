
"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const AddTopic = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [base64Image, setBase64Image] = useState('');

    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState(null);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const base64String = e.target.result;
                setBase64Image(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        console.log(URL.createObjectURL(selectedImage), 'base64Image');

        e.preventDefault();
        if (!title || !description || !base64Image) {
            return toast.error('Title and description are required.');
        }
        try {
            const response = await axios.post(`/api/route/create`, {
                title,
                description,
                imgurl: base64Image
            });

            if (response.status === 200) {
                const timestamp = new Date().toLocaleTimeString();
                toast.success(`Topic created successfully at ${timestamp}!`);
                router.push('/');
            } else {
                throw new Error('Failed to create a topic');
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to create a topic. Please try again.');
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 container">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="border border-indigo-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    type="text"
                    placeholder="Topic Title"
                />

                <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="border border-indigo-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    type="text"
                    placeholder="Topic Description"
                />
                <div className="custom-input d-flex justify-content-between border border-slate-500 px-4">
                    <input
                        onChange={(e) => handleImageChange(e)}
                        className="custom-input"
                        height={100}
                        width={100}
                        type="file"
                        accept="image/*"
                    />
                    {selectedImage && (
                        <div>
                            <small>Selected Image:</small>
                            <img src={URL.createObjectURL(selectedImage)} height={100}
                                width={100} alt="img.png" />
                        </div>
                    )}
                </div>


                <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                    Add Topic
                </button>
            </form>
        </>
    );
};

export default AddTopic;
