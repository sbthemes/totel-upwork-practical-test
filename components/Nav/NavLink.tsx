import Link from 'next/link';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const NavLink = ({ href, children, className = '' }: NavLinkProps) => {
    return (
        <Link href={href} className={`${className} block py-2 transition-colors hover:text-primary lg:p-0`}>
            {children}
        </Link>
    );
};

export default NavLink;
