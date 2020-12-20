import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ altText, imageSrc, blurSize, shadowTop, shadowLeft }) => {

  return (
    <div className={styles.imgContainer}>
      <div style={{position: 'absolute', backgroundSize: 'cover', filter: 'blur(' + blurSize +'px)', zIndex: '-1', top: shadowTop + 'px', left: shadowLeft + 'px', width: '100%', height: '100%', backgroundImage: 'url(' + imageSrc + ')'}} />
      <img src={imageSrc} alt={altText} />
    </div>
  )
}
