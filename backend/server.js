const express = require("express");
const bodyParser = require("body-parser");
const zod = require("zod");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/full-stack-card");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    intro: { type: String, required: true },
    twitter: { type: String, required: true },
    linkedin: { type: String, required: true },
    github: { type: String, required: true },
    interests: { type: [String], required: true },
});
const User = mongoose.model("User", userSchema);

function validateInputs(req, res, next) {
    try {
        const { name, intro, twitter, linkedin, github, interests } = req.body;
        if (!name || !intro || !twitter || !linkedin || !github || !interests) {
            throw new Error("All the fields are required");
        }

        const schema = zod.object({
            name: zod.string(),
            intro: zod.string(),
            twitter: zod.string().url(),
            linkedin: zod.string().url(),
            github: zod.string().url(),
            interests: zod.array(zod.string()),
        });
        const validate = schema.safeParse({
            name,
            intro,
            twitter,
            linkedin,
            github,
            interests,
        });

        if (validate.success) {
            next();
        } else {
            throw new Error("Input validation failed");
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

app.post("/api/add-profile", validateInputs, async (req, res) => {
    try {
        let { name, intro, twitter, linkedin, github, interests } = req.body;

        name = name
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

        intro = intro.charAt(0).toUpperCase() + intro.slice(1);

        const user = await User.create({
            name,
            intro,
            twitter,
            linkedin,
            github,
            interests,
        });

        await user.save();

        res.status(200).json({ msg: "User saved" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/api/all-users", async (req, res) => {
    try {
        const allUsers = await User.find();

        res.status(200).json({ users: allUsers });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`App is running at ${PORT}`));

// {
//     "name": "yash pandey",
//     "intro": "Budding Full Stack Developer | Focusing on Web Dev, Cloud Computing & UI Design | Open source💚 | Find me in front of my💻 or with ⚽ on the ground.",
//     "github": "https://github.com/yashpandey002",
//     "twitter": "https://twitter.com/pandeyyash_",
//     "linkedin": "https://www.linkedin.com/in/pandeyyash/",
//     "interests": ["Javascript", "MERN", "UI design"]
// }
