import Image from 'next/image';
import IconLogo from '../Icon/IconLogo';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="mt-20">
            <div className="border-t-2 border-neutral-700 py-10 text-base font-medium text-[#5F6D7E]">
                <div className="container">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-0">
                        <div>
                            <h3 className="text-base font-semibold text-[#272D37]">Products</h3>
                            <div className="mt-6 space-y-3 [&_a:hover]:text-primary">
                                <p>
                                    <a href="/">Features</a>
                                </p>
                                <p>
                                    <a href="/" className="">
                                        Integrations
                                    </a>
                                </p>
                                <p>
                                    <a href="/" className="">
                                        Enterprise
                                    </a>
                                </p>
                                <p>
                                    <a href="/" className="">
                                        Solutions
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-[#272D37]">Products</h3>
                            <div className="mt-6 space-y-3 [&_a:hover]:text-primary">
                                <p>
                                    <a href="/">Features</a>
                                </p>
                                <p>
                                    <a href="/" className="">
                                        Integrations
                                    </a>
                                </p>
                                <p>
                                    <a href="/" className="">
                                        Enterprise
                                    </a>
                                </p>
                                <p>
                                    <a href="/" className="">
                                        Solutions
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-[#272D37]">Resources</h3>
                            <div className="mt-6 space-y-3 [&_a:hover]:text-primary">
                                <p>
                                    <a href="/">Partners</a>
                                </p>
                                <p>
                                    <a href="/" className="">
                                        Developers
                                    </a>
                                </p>
                                <p>
                                    <a href="/" className="">
                                        Community
                                    </a>
                                </p>
                                <p>
                                    <a href="/" className="">
                                        Apps
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-[#272D37]">Company</h3>
                            <div className="mt-6 space-y-3 [&_a:hover]:text-primary">
                                <p>
                                    <a href="/">About Us</a>
                                </p>
                                <p>
                                    <a href="/" className="">
                                        Careers
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-[#272D37]">Mobile app</h3>
                            <div className="mt-6 space-y-3">
                                <p>
                                    <a target="_blank" href="https://www.apple.com/in/store">
                                        <Image width={121} height={41} src="/img/app-store.svg" alt="App store" />
                                    </a>
                                </p>
                                <p>
                                    <a target="_blank" href="https://play.google.com/" className="">
                                        <Image width={136} height={41} src="/img/play-store.svg" alt="Play store" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 flex flex-col space-y-8 md:flex-row md:items-center md:space-y-0">
                        <div className="shrink-0 md:w-44">
                            <Link href="/">
                                <IconLogo />
                            </Link>
                        </div>
                        <p className="grow font-normal md:text-center">© 2023 Totel. All Rights Reserved.</p>
                        <div className="flex w-44 shrink-0 space-x-6">
                            <a target="_blank" href="">
                                <Image width={24} height={24} src="/img/fb.svg" alt="Facebook" />
                            </a>
                            <a target="_blank" href="">
                                <Image width={24} height={24} src="/img/google.svg" alt="Google" />
                            </a>
                            <a target="_blank" href="">
                                <Image width={24} height={24} src="/img/apple.svg" alt="Apple" />
                            </a>
                            <a target="_blank" href="">
                                <Image width={24} height={24} src="/img/insta.svg" alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
