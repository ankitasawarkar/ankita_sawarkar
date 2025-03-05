import React from 'react';
import styles from './SetList.module.css';
import { getImageUrl } from "../utils";
import { theme } from "../theme/theme"
import { ListItemsProps } from '../../interfaces/ListItems';
import SoftwareSkills from '../media/SoftwareSkills';

const SetList: React.FC<ListItemsProps> = ({ data }) => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                {/* Title */}
                <div  >
                    <h1 className={styles.title} style={{ color: theme.text }}>
                        What I Do?
                    </h1>
                </div>
                <div className={styles.subcontent}>
                    {/* Left side view */}
                    
                        <img
                            src={getImageUrl("aboutImage.png")}
                            alt="Me sitting with a laptop"
                            className={styles.image}
                        />
                    
                    {/* Right side view */}
                    <div className={styles.rightPanel}>
                        {/* List of elements */}
                        <div className={styles.items}>
                            {data.map((section, index) => (
                                <div key={index} >
                                    {/* Title */}
                                    <h3>{section.title}</h3>

                                    {/* Software Skills Icons 
                                    <div >

                                        <SoftwareSkills skills={section.skills} /> 
                                    </div>*/}

                                    {/* Skills List */}
                                    <ul>
                                        {section.description?.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default SetList
