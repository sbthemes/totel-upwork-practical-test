import { ReactNode, Ref, forwardRef, useImperativeHandle, useState } from 'react';
import * as ReactPopover from '@radix-ui/react-popover';

interface ModalProps {
    children: ReactNode;
    width?: string;
    button: ReactNode;
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
    alignOffset?: number;
}

export type PopoverHandle = {
    open: () => void;
    close: () => void;
};

const Popover = forwardRef(
    ({ children, width, button, align, sideOffset, alignOffset }: ModalProps, ref: Ref<PopoverHandle>) => {
        const [open, setOpen] = useState(false);

        const openPopover = () => {
            setOpen(true);
        };

        const closePopover = () => {
            setOpen(false);
        };

        useImperativeHandle(ref, () => ({
            open() {
                openPopover();
            },
            close() {
                closePopover();
            },
        }));

        return (
            <ReactPopover.Root open={open} onOpenChange={setOpen}>
                {button && <ReactPopover.Trigger asChild>{button}</ReactPopover.Trigger>}
                <ReactPopover.Portal>
                    <ReactPopover.Content
                        className="rounded border border-black/10 bg-white shadow"
                        style={{ width: width || '160px' }}
                        sideOffset={sideOffset || 5}
                        alignOffset={alignOffset || 0}
                        align={align || 'end'}
                    >
                        {children}
                    </ReactPopover.Content>
                </ReactPopover.Portal>
            </ReactPopover.Root>
        );
    }
);

Popover.displayName = 'Popover';
export default Popover;
