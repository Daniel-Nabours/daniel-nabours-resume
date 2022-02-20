import '../scss/style.scss'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Filters } from './Filters'
import { Bar } from '../util/ProgressBarBuilder'
//skill has a name, a use, and a skill level
export type skill = {
    name: string;
    use: string;
    level: number;
}

const mySkills: skill[] = [
    { name: 'React/Next/CRA', use: 'Framework', level: 1 },
    { name: 'Svelte/Sveltekit', use: 'Framework', level: 0.415 },
    { name: 'Vue', use: 'Framework', level: 0.120 },
    { name: 'C#', use: 'Language', level: 0.724 },
    { name: 'Typescript', use: 'Language', level: 1 },
    { name: 'Java', use: 'Language', level: 0.450 },
    { name: 'GoLang', use: 'Language', level: 0.618 },
    { name: 'C++', use: 'Language', level: 0.127 },
    { name: 'VBA', use: 'Language', level: 1 },
    { name: 'HTML5', use: 'Language', level: 1 },
    { name: 'CSS/SCSS/SASS', use: 'Language', level: 0.796 },
    { name: 'Python', use: 'Language', level: 0.410 },
    { name: 'NGinX', use: 'Cloud Technology', level: 0.208 },
    { name: 'Docker', use: 'Cloud Technology', level: 0.25 },
    { name: 'Kubernetes', use: 'Cloud Technology', level: 0.546 },
    { name: 'Helm', use: 'Cloud Technology', level: 0.186 },
    { name: 'Redis', use: 'Database Technology', level: 0.148 },
    { name: 'PostgreSQL', use: 'Database Technology', level: 1 },
    { name: 'MongoDB', use: 'Database Technology', level: 0.440 },
    { name: 'MySQL', use: 'Database Technology', level: 0.220 },
    { name: 'MS SQL server', use: 'Database Technology', level: 0.520 },
]



export const SkillsSection: React.FC = () => {

    const [skills] = useState<skill[]>(mySkills)
    const [filtered, setFiltered] = useState<skill[]>(mySkills)
    const [active, setActive] = useState("All")
    const [sortMethod, setSortMethod] = useState("")

    return (
        <> 
            <div className='skills-section'>
                <Filters setFiltered={setFiltered} active={active} setActive={setActive} skills={skills} sortMethod={sortMethod} setSortMethod={setSortMethod} />
                <motion.div layout className='card-container'>
                    <AnimatePresence>
                        {filtered.map(s => (
                            <motion.div
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                exit={{ opacity: 0 }}
                                layout
                                key={`${s.name}${s.level}`}
                                className='card'>
                                <h1 style={{fontSize:'0.7rem'}}>{s.name}</h1>
                                <Bar percent={s.level} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </>
    )
}