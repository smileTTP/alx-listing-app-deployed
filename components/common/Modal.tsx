import React, { ReactNode } from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({isOpen, onClose, children})  => {
        if (!isOpen) return null;

        return (
        <div className="w-20 h-20" onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>
            {children}
            </div>
        </div>
        );
};

export default Modal;
