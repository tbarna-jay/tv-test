import { Card, CardActionArea, CardMedia, Rating } from "@mui/material";
import React, { ReactElement } from "react";
import { Schedule } from "../../../model/api";
import styles from "../../../styles/ScheduleCard.module.css";

type Props = {
  schedule: Schedule;
};

const ScheduleCard = ({
  schedule: {
    id,
    show: { name, image, rating },
  },
}: Props): ReactElement => {
  const ratingNumber = (rating?.average || 0) / 2;
  return (
    <div key={id}>
      <Card sx={{ width: 210, height: 295 }}>
        <CardActionArea>
          {image?.medium ? (
            <CardMedia
              component="img"
              height="295"
              width="210"
              image={image?.medium}
              alt={name}
            />
          ) : (
            <div className={styles.defaultImage}>
              <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36 32V4c0-2.21-1.79-4-4-4H4C1.79 0 0 1.79 0 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4ZM11 21l5 6.01L23 18l9 12H4l7-9Z"
                  fill="#FFF"
                  fillRule="nonzero"
                />
              </svg>
            </div>
          )}
        </CardActionArea>
      </Card>
      <Rating
        name="half-rating"
        defaultValue={ratingNumber}
        precision={0.1}
        readOnly
      />
      <h4>{name}</h4>
    </div>
  );
};

export default ScheduleCard;
