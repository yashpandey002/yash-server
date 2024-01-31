import { useState } from "react";
import NavBar from "../components/NavBar";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import AddedSuccess from "../components/AddedSuccess";
import Failed from "../components/Failed";

function AddProfile() {
    const [name, setName] = useState("");
    const [intro, setIntro] = useState("");
    const [github, setGithub] = useState("");
    const [twitter, setTwitter] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [interests, setInterests] = useState([]);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Format the data
        const data = {
            name: name,
            intro: intro,
            twitter: twitter,
            linkedin: linkedin,
            github: github,
            interests: interests.split(",").map((interest) => interest.trim()),
        };

        try {
            const response = await fetch("/api/add-profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmissionStatus("success");
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
                setTimeout(() => {
                    setSubmissionStatus(null);
                }, 5000);
            } else {
                setSubmissionStatus("failed");
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
                setTimeout(() => {
                    setSubmissionStatus(null);
                }, 5000);
            }
        } catch (error) {
            console.error("Error:", error);
            setSubmissionStatus("failed");
            setTimeout(() => {
                setSubmissionStatus(null);
            }, 5000);
        }

        setName("");
        setIntro("");
        setGithub("");
        setTwitter("");
        setLinkedin("");
        setInterests("");
    };

    return (
        <>
            <NavBar linkTitle={"See others"} linkRoute={"/all-users"} />
            {submissionStatus === "success" && <AddedSuccess />}
            {submissionStatus === "failed" && <Failed />}
            <div className="flex flex-col justify-center max-w-2xl gap-3 px-5 py-5 sm:py-10 sm:px-8 sm:gap-4 md:mx-auto lg:pt-15">
                <div>
                    <h2 className="text-2xl font-bold capitalize md:text-4xl">
                        Enter your details
                    </h2>
                </div>
                <div className="px-5 py-4 border rounded-md border-zinc-300 md:px-7 md:py-6">
                    <form
                        className="flex flex-col gap-4 sm:gap-5"
                        onSubmit={handleSubmit}
                    >
                        <Input
                            label={"Name"}
                            placeholder={"Yash Pandey"}
                            value={name}
                            onInput={(e) => {
                                setName(e.target.value);
                            }}
                            required={true}
                        />
                        <Textarea
                            label={"Small intro"}
                            placeholder={
                                "A budding full-stack developer, learning MERN stack"
                            }
                            value={intro}
                            onInput={(e) => {
                                setIntro(e.target.value);
                            }}
                            required={true}
                        />
                        <Input
                            label={"Github link"}
                            placeholder={"https://github.com/yashpandey002"}
                            value={github}
                            onInput={(e) => {
                                setGithub(e.target.value);
                            }}
                            required={true}
                        />
                        <Input
                            label={"Twitter link"}
                            placeholder={"https://twitter.com/pandeyyash_"}
                            value={twitter}
                            onInput={(e) => {
                                setTwitter(e.target.value);
                            }}
                            required={true}
                        />
                        <Input
                            label={"Linkedin link"}
                            placeholder={
                                "https://www.linkedin.com/in/pandeyyash/"
                            }
                            value={linkedin}
                            onInput={(e) => {
                                setLinkedin(e.target.value);
                            }}
                            required={true}
                        />
                        <Textarea
                            label={"Interests"}
                            placeholder={
                                "Your interests sperated by commas. Example: Open source, UI design, Web dev"
                            }
                            value={interests}
                            onInput={(e) => {
                                setInterests(e.target.value);
                            }}
                            required={true}
                        />
                        <button
                            type="submit"
                            className="py-2 mt-4 text-sm rounded-md md:text-base bg-zinc-900 text-zinc-200"
                        >
                            Add me
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddProfile;
