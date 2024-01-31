import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import UserCard from "../components/UserCard";

function AllUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/api/all-users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.users);
            });
    }, []);

    return (
        <>
            <NavBar linkTitle={"Add me"} linkRoute={"/add-profile"} />
            <div className="p-5 md:p-10 bg-zinc-100 min-h-[100vh] flex flex-col gap-4 md:gap-8">
                <div className="px-5 text-center sm:p-0">
                    <h1 className="text-3xl font-bold md:text-5xl text-zinc-950">
                        All users at Yash&apos;s server
                    </h1>
                </div>
                <div className="grid bg-zinc-100 gap-y-5 md:gap-x-5 md:grid-cols-2 lg:grid-cols-3">
                    {users.map((user) => (
                        <UserCard
                            name={user.name}
                            intro={user.intro}
                            github={user.github}
                            twitter={user.twitter}
                            linkedin={user.linkedin}
                            interests={user.interests}
                            key={user["_id"]}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default AllUsers;
