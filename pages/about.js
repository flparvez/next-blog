import Link from "next/link";

const About = () => {
    return (
        <div>
            <h2>This is about page</h2>
            <h2 className="text-red-700"> <Link href='/'> Go TO Home</Link> </h2>
        </div>
    );
};

export default About;