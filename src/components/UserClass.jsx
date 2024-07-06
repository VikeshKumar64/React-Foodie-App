import React, { useState, useEffect } from "react";
import UserRepoCard from "./UserRepoCard";
import ShimmerUI from "./ShimmerUI";

const UserClass = () => {
    const [userInfo, setUserInfo] = useState({
        name: "Loading...",
        login: "...",
        avatar_url: "img-notFound"
    });
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            // Fetch user info
            const userResponse = await fetch("https://api.github.com/users/VikeshKumar64");
            const userData = await userResponse.json();

            const repoResponse = await fetch("https://api.github.com/users/VikeshKumar64/repos");
            const repoData = await repoResponse.json();

            setUserInfo(userData);
            setRepos(repoData);

            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <ShimmerUI />;
    }

    const { avatar_url, name, login } = userInfo;

    return (
        <div className="user-class">
            <div className="img-name-container">
                <img src={avatar_url} alt="User Avatar" className="avatar" />
                <h2>{name}</h2>
                <h3>{login}</h3>
            </div>

            <div className="popular-repo">
                <h2>GitHub</h2>
                <h2>Popular repositories</h2>
                <div className="card-box">
                    {repos.map((repo) => (
                        <UserRepoCard
                            key={repo.id}
                            name={repo.name}
                            description={repo.description}
                            language={repo.language}
                            visibility={repo.visibility}
                            html_url={repo.html_url}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserClass;
