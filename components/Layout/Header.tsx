'use client';

import Link from 'next/link';
import IconLogo from '../Icon/IconLogo';
import NavBar from '../Nav/NavBar';
import Image from 'next/image';
import IconMenu from '../Icon/IconMenu';
import { useRef, useState } from 'react';
import Popover, { PopoverHandle } from '../Popover';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const popover = useRef<PopoverHandle>(null);

    const closePopover = () => {
        popover?.current?.close();
    };

    return (
        <header className="sticky top-0 z-10 bg-white py-4">
            <div className="container flex items-center">
                <div>
                    <Link href="/">
                        <IconLogo />
                    </Link>
                </div>
                {menuOpen && (
                    <button
                        className="fixed inset-0 z-20 bg-black/60 lg:hidden"
                        onClick={() => setMenuOpen(false)}
                    ></button>
                )}
                <NavBar isOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div className="ml-auto flex items-center space-x-4">
                    <div className="hidden shrink-0 md:block">
                        <a href="/" className="btn">
                            Manage Listings
                        </a>
                    </div>

                    <Popover
                        ref={popover}
                        button={
                            <button className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-neutral-700">
                                <Image width={48} height={48} src="/img/avatar.jpg" alt="avatar" />
                            </button>
                        }
                    >
                        <button
                            type="button"
                            className="block w-full px-4 py-2 text-left hover:bg-primary/5"
                            onClick={closePopover}
                        >
                            Profile
                        </button>
                        <button
                            type="button"
                            className="block w-full px-4 py-2 text-left hover:bg-primary/5"
                            onClick={closePopover}
                        >
                            Settings
                        </button>
                        <button
                            type="button"
                            className="block w-full px-4 py-2 text-left hover:bg-primary/5"
                            onClick={closePopover}
                        >
                            Logout
                        </button>
                    </Popover>

                    <button
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F2F7] lg:hidden"
                        onClick={() => setMenuOpen(true)}
                    >
                        <IconMenu />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
