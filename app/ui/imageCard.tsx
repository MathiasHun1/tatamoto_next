import styles from '@/app/styles/components/imageCard.module.scss';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

function ImageCard({
  image,
  index,
  type,
  onClick,
}: {
  image: StaticImageData;
  index: number;
  type: 'garage' | 'references';
  onClick: (e: React.SyntheticEvent) => void;
}) {
  return (
    <div
      className={styles.card}
      data-index={index}
      data-type={type}
      onClick={onClick}
    >
      <Image src={image} alt="" width={450} className={styles.image} />
    </div>
  );
}

export default ImageCard;
