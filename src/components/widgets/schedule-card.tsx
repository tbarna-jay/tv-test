import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
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
      <a key={id}>
        <Card sx={{ width: 210, height: 295, mb: 2 }}>
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
                <img src="/placeholder.svg" alt="missing image" />
              </div>
            )}
          </CardActionArea>
        </Card>
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
