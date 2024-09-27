import React from 'react';

const Modal = ({ isOpen, onClose, title, content }) => {
    return (
        <div className={`fixed z-[9999] inset-0  flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'} ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            <div className={`bg-white rounded-lg shadow-lg w-2/3 transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}>
                <div className="p-4  ">
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <hr />
                    <div className="mt-2 overflow-y-scroll max-w-full list-disc py-5" dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
                <div className="flex justify-end p-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
