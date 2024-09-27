import React, { useState } from 'react';
import Modal from './Modal'; // Adjust path as necessary
import { covid_info } from '../data/covid-info';

const DashButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const openModal = (title, content) => {
        setModalContent({ title, content });
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="grid grid-cols-3 w-full gap-2 text-sm ">
            <button
                onClick={() => openModal('Precautions', covid_info.Precautions)}
                className="flex items-center px-4 py-4 bg-blue-950 text-white rounded hover:bg-blue-900"
            >
                <i className="ri-information-line mr-2"></i> Precautions
            </button>
            <button
                onClick={() => openModal('Symptoms', covid_info.Symptoms)}
                className="flex items-center px-4 py-4 bg-blue-950 text-white rounded hover:bg-blue-900"
            >
                <i className="ri-alarm-warning-line mr-2"></i> Symptoms
            </button>
            <button
                onClick={() => openModal('Safety Measures', covid_info.safetyMeasures)}
                className="flex items-center px-4 py-4 bg-blue-950 text-white rounded hover:bg-blue-900"
            >
                <i className="ri-shield-line mr-2"></i> Safety Measures
            </button>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={modalContent.title}
                content={modalContent.content}
            />
        </div>
    );
};

export default DashButton;
