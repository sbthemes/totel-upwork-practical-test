'use client';

import { forwardRef, ReactNode, Ref, useImperativeHandle, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import IconClose from './Icon/IconClose';

interface ModalProps {
    children: ReactNode;
    width?: string;
    button?: ReactNode;
    showClose?: boolean;
}

export type ModalHandle = {
    open: () => void;
    close: () => void;
};

const Modal = forwardRef(({ children, width, button, showClose = true }: ModalProps, ref: Ref<ModalHandle>) => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    useImperativeHandle(ref, () => ({
        open() {
            openModal();
        },
        close() {
            closeModal();
        },
    }));

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            {button && <Dialog.Trigger asChild>{button}</Dialog.Trigger>}
            <Dialog.Portal>
                <Dialog.Overlay className="duration-400 fixed inset-0 z-20 grid place-items-center overflow-y-auto bg-[#343434]/60 p-4 transition-all data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in">
                    <Dialog.Content
                        className="relative w-full rounded-[20px] bg-white px-8 pb-8 pt-10 shadow-lg outline-none animate-in slide-in-from-bottom-2 data-[state=open]:fade-in-90"
                        style={{ maxWidth: width || '512px' }}
                    >
                        <div>{children}</div>
                        {showClose && (
                            <Dialog.Close asChild>
                                <button
                                    className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center outline-none"
                                    aria-label="Close"
                                >
                                    <IconClose className="h-5 w-5 text-black" />
                                </button>
                            </Dialog.Close>
                        )}
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    );
});

Modal.displayName = 'Modal';
export default Modal;
