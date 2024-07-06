import React from "react";



const UserRepoCard = ( {name ,description, language, visibility, html_url}) => {

    const emoji = (lang) =>{
        console.log(lang)
        lang = lang?.language;
        if(lang == "JavaScript") return "🟡"; 
        else if(lang == "CSS") return "🟣";
        else if(lang == "HTML") return "🟠"
        else return "⚪";
    }
    return <div className="repo-card">
            <div className="name-visible">
                <div className="repo-name"><a href={html_url} target="_blank">{name}</a></div>
                <span className="repo-visibility">{visibility && visibility.charAt(0).toUpperCase() + visibility.slice(1)}</span>
            </div>
            <div className="repo-description">{description}</div>
            <div className="repo-language">{emoji({language})}{language}</div>
    </div>
}

export default UserRepoCard;