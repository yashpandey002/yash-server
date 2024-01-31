let id = 0;

function UserCard({ name, intro, github, twitter, linkedin, interests }) {
    return (
        <div className="flex flex-col gap-3 p-5 border rounded-md border-zinc-200 bg-zinc-50 md:p-8 md:gap-5">
            <div>
                <h2 className="text-xl font-medium text-zinc-900 md:text-2xl">
                    {name}
                </h2>
                <p className="text-base text-zinc-800 md:text-lg">{intro}</p>
            </div>
            <div>
                <h3 className="mb-2 text-base font-medium text-zinc-900">
                    Interests
                </h3>
                <div>
                    <ul className="flex flex-wrap gap-2">
                        {interests.map((interest) => (
                            <li
                                className="px-2 py-1 text-xs rounded md:text-base text-zinc-800 bg-zinc-300"
                                key={id++}
                            >
                                {interest}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex gap-2">
                <a href={github} target="_blanck">
                    <img
                        src="./logo-github.svg"
                        alt="Github logo"
                        className="h-6 md:h-8"
                    />
                </a>
                <a href={twitter} target="_blanck">
                    <img
                        src="./logo-twitter.svg"
                        alt="Twitter logo"
                        className="h-6 md:h-8"
                    />
                </a>
                <a href={linkedin} target="_blanck">
                    <img
                        src="./logo-linkedin.svg"
                        alt="Linkedin logo"
                        className="h-6 md:h-8"
                    />
                </a>
            </div>
        </div>
    );
}

export default UserCard;
