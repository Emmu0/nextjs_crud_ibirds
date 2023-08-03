"use client"
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RemoveBtn = ({ id }) => {
    const removeTopic = async (id) => {
        // const confirmed = window.confirm('Are you sure?');

        // if (id) {
        try {
            const response = await axios.delete(`/api/route/delete/?_id=${id}`);
            if (response.status === 200) {
                window.location.reload();
                return toast.success(response?.message);
            }
        } catch (error) {
            return toast.success(error);
        }
        // }
    };

    return (
        <button onClick={() => removeTopic(id)} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    );
};

export default RemoveBtn;
