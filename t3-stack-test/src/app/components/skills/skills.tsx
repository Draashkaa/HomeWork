import React from "react";
import styles from'./skills.module.css'

export interface SkillsProps{
  SkillsArray: Array<string>;
}

export const Skills: React.FC<SkillsProps> = (props) => {
    const {SkillsArray} = {...props}
  return (
    <main>
        <h1 className={styles.TextHeading}>SKILLS</h1>
        <div className={styles.mainSkills}>
            {SkillsArray.map(function(data,acc) {
                return (
                    <div key = {acc} className={styles.skills}>
                        {data}
                    </div>
                )
            })}
        </div>
    </main>
  );
}