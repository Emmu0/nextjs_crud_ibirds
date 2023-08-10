"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTopicForm = ({ id, title, description,imgUrl }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    
    const [selectedImage, setSelectedImage] = useState(imgUrl);
    const [base64Image, setBase64Image] = useState(imgUrl);
const csshandle = "border border-indigo-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
    const router = useRouter();


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
        e.preventDefault();
        try {
            const response = await axios.put(`/api/route/update?id=${id}`, {
                title: newTitle,
                description: newDescription,
                imgurl: base64Image
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
                className={csshandle}
                type="text"
                placeholder="Topic Title"
            />

            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                className={csshandle}
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
                            <img src={base64Image} height={100}
                                width={100} alt="img.png" />
                        </div>
                    )}
                </div>

            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit" type="submit">
                Update Topic
            </button>
        </form>
    );
};

export default EditTopicForm;
