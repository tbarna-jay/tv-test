import Rating from "@mui/material/Rating";
import Link from "next/link";
import React, { ReactElement } from "react";
import { Schedule } from "../../model/api";
import styles from "../../styles/ScheduleCard.module.css";

type Props = {
  schedule: Schedule;
};

const ScheduleCard = ({
  schedule: {
    id,
    show: { name, image, rating, id: showId },
  },
}: Props): ReactElement => {
  const ratingNumber = (rating?.average || 0) / 2;
  return (
    <Link href={`/show/${showId}`}>
      <a key={id} className={styles.card}>
        <div className={styles.image}>
          {image?.medium ? (
            <picture className="picture">
              <source
                srcSet={`${image?.original} 1x`}
                media="(min-width: 600px) and (max-width: 1800px)"
                type="image/"
              />
              <source
                srcSet={`${image?.medium} 1x`}
                media="(min-width: 0px) and (max-width: 599px)"
              />
              <img
                height="428"
                width="305"
                loading="lazy"
                src={image?.medium}
                alt={name}
              />
            </picture>
          ) : (
            <div className={styles.defaultImage}>
              <img
                width="50"
                height="50"
                src="/placeholder.svg"
                alt="missing image"
              />
            </div>
          )}
        </div>
        <Rating
          name="half-rating"
          defaultValue={ratingNumber}
          precision={0.1}
          sx={{ mb: 2 }}
          readOnly
        />
        <h4>{name}</h4>
      </a>
    </Link>
  );
};

export default ScheduleCard;
