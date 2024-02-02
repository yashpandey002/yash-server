import { Link } from "react-router-dom";

function NavBar({ linkTitle, linkRoute }) {
    return (
        <div className="max-w-2xl px-5 py-3 mx-auto">
            <ul className="flex justify-between">
                <li>
                    <Link
                        className="inline-block px-2 py-1 text-sm border rounded text-zinc-500 border-zinc-300 md:text-base"
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className="inline-block px-2 py-1 text-sm border rounded text-zinc-500 border-zinc-300 md:text-base"
                        to={linkRoute}
                    >
                        {linkTitle}
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
