import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="flex flex-col items-center gap-3 px-10 pt-5 sm:px-0 md:gap-5 md:pt-7 lg:pt-10">
                <div>
                    <h1 className="text-2xl font-bold leading-6 text-center text-zinc-950 sm:text-4xl lg:text-6xl">
                        Add Yourself to Yash&apos;s Server
                    </h1>
                </div>
                <div className="flex gap-2">
                    <Link
                        to="/add-profile"
                        className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-900 text-zinc-100 md:text-sm md:px-4 md:py-2"
                    >
                        Add me
                    </Link>
                    <Link
                        to="/all-users"
                        className="px-3 py-1 text-xs font-medium border rounded-md border-zinc-400 text-zinc-950 md:text-sm md:px-4 md:py-2"
                    >
                        See others
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
