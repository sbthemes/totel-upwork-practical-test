import NavLink from './NavLink';
import IconChevronDown from '../Icon/IconChevronDown';
import IconClose from '../Icon/IconClose';
import IconLogo from '../Icon/IconLogo';

interface NavBarProps {
    isOpen: boolean;
    setMenuOpen: (isOpen: boolean) => void;
}

const NavBar = ({ isOpen, setMenuOpen }: NavBarProps) => {
    return (
        <nav
            className={`${
                !isOpen && 'hidden'
            } fixed inset-x-4 top-4 z-[21] ml-0 rounded-md bg-white p-4 lg:relative lg:inset-0 lg:ml-[90px] lg:block lg:p-0`}
        >
            <div className="flex items-center justify-between lg:hidden">
                <div>
                    <IconLogo />
                </div>
                <button
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F2F7]"
                    onClick={() => setMenuOpen(false)}
                >
                    <IconClose />
                </button>
            </div>
            <ul className="mt-4 items-center space-y-2 px-3 font-semibold lg:mt-0 lg:flex lg:space-x-11 lg:space-y-0 lg:px-0">
                <li>
                    <NavLink href="/">Room Stays</NavLink>
                </li>
                <li>
                    <NavLink href="/">Looking for Partner</NavLink>
                </li>
                <li>
                    <NavLink href="/" className="flex items-center">
                        <span>Company</span>
                        <span className="ml-1.5">
                            <IconChevronDown />
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink href="/">Help</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
