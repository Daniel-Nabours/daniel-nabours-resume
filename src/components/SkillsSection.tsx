import React from 'react'
import '../scss/style.scss'

//skill has a name, a use, and a skill level
type skill = {
    name:  string;
    use:   string;
    level: number;
}

const mySkills:skill[] = [
    {name : 'React/Next/CRA', use: 'Framework', level:1},
    {name : 'Svelte/Sveltekit', use: 'Framework', level:0.5},
    {name : 'Vue', use: 'Framework', level:0.3},
    {name : 'C#', use: 'Language', level:0.7},
    {name : 'Javascript', use: 'Language', level:1},
    {name : 'Java', use: 'Language', level:1},
    {name : 'GoLang', use: 'Language', level:0.6},
    {name : 'C++', use: 'Language', level:0.7},
    {name : 'VBA', use: 'Language', level:1},
    {name : 'HTML5', use: 'Language', level:1},
    {name : 'CSS/SCSS/SASS', use: 'Language', level:0.7},
    {name : 'Python', use: 'Language', level:0.4},
    {name : 'NGinX', use: 'Cloud Technology', level:0.3},
    {name : 'Docker', use: 'Cloud Technology', level:0.8},
    {name : 'Kubernetes', use: 'Cloud Technology', level:0.5},
    {name : 'Helm', use: 'Cloud Technology', level:0.4},
    {name : 'Redis', use: 'Database Technology', level:0.6},
    {name : 'PostgreSQL', use: 'Database Technology', level:1},
    {name : 'MongoDB', use: 'Database Technology', level:0.4},
] 

export const SkillsSection:React.FC = () => {
    


    return ( 
        <div className='skills'>
            {mySkills.map(s=>(
                <div className='card'>{s.name}</div> 
            ))}
        </div> 
    )
}