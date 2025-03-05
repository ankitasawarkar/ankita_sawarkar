import React from 'react'
import { ListItemsProps } from '@/app/interfaces/ListItems'
import styles from './SetList.module.css';


const SetListItems: React.FC<ListItemsProps> = ({ data }) => {
  return (
    <>
    <div className={styles.items}>
                    {data.map((section, index) => (
                        <div key={index} >
                            {/* Title */}
                            <h3>{section.title}</h3>
                            <ul>
                                {section.description?.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
    </>
  )
}

export default SetListItems
