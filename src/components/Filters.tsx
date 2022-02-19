import { useEffect } from "react";
import { skill } from "./SkillsSection";

interface FilterProps {
    active: string
    skills: skill[] 
    sortMethod: string
    setFiltered: React.Dispatch<React.SetStateAction<skill[]>>
    setActive: React.Dispatch<React.SetStateAction<string>>
    setSortMethod: React.Dispatch<React.SetStateAction<string>>
}

export const Filters: React.FC<FilterProps> = ({ skills, active, setFiltered, setActive, sortMethod, setSortMethod }) => {

    useEffect(() => {
        if (active === 'All') {
            setFiltered(skills)
            return
        }
        let f = skills.filter((x) => x.use === active);
        setFiltered(f);
    }, [active])

    useEffect(() => {
        setFiltered(prev => {
            let n = sortMethod === "abc" ?
                prev.sort((a,b) => a.name === b.name ? 0 : a.name > b.name ? 1 : -1) :
                prev.sort((a,b) => b.level - a.level) 
            return [...n]
        });
    }, [sortMethod])

    return (
        <div className="filter-container">
            <h1 style={{ marginRight: 40 }}>Filter items</h1>
            <button className={`${active === "All" ? "active" : ""}`} onClick={() => { setActive("All") }}>All</button>
            <button className={`${active === "Language" ? "active" : ""}`} onClick={() => { setActive("Language") }}>Languages</button>
            <button className={`${active === "Framework" ? "active" : ""}`} onClick={() => { setActive("Framework") }}>Frameworks</button>
            <button className={`${active === "Database Technology" ? "active" : ""}`} onClick={() => { setActive("Database Technology") }}>Data Stores</button>
            <button className={`${active === "Cloud Technology" ? "active" : ""}`} onClick={() => { setActive("Cloud Technology") }}>Cloud Tech</button>
            <h1 style={{marginRight:40}}>Sort items</h1>
            <button className={`${sortMethod === "abc" ? "active" : ""}`} onClick={() => { setSortMethod("abc") }}>Alphabetical</button>
            <button className={`${sortMethod === "level" ? "active" : ""}`} onClick={() => { setSortMethod("level") }}>By skill level</button>
        </div>
    )
}