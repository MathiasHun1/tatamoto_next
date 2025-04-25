import styles from '@/app/styles/components/imageCard.module.scss';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

function ImageCard({
  image,
  index,
  onClick,
}: {
  image: StaticImageData;
  index: number;
  onClick: (e: React.SyntheticEvent) => void;
}) {
  return (
    <div className={styles.card} data-index={index} onClick={onClick}>
      <Image src={image} alt="" width={80} className={styles.image} />
    </div>
  );
}

export default ImageCard;
