import React, { useContext, useEffect, useState } from "react";
import DataContext from "../../context/DataContext";
import ListStyles from "./styles";
import Img from "../../assets/img/img.jpeg";
import { Button, Link, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default function ListCard({ item }) {
  const { favorites, editFavorite, viewType } = useContext(DataContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const classes = ListStyles({ viewType });

  useEffect(() => {
    if (favorites) {
      setIsFavorite(!!favorites.find((i) => i === item.book_details[0].title));
    }
  }, [favorites, item.book_details]);

  return (
    <div className={classes.listContainer}>
      <img
        alt={`Imagem do livro ${item.book_details[0].title}`}
        className={classes.itemImg}
        src={Img}
      />
      <div className={classes.descriptionContainer}>
        <div className={classes.titleContainer}>
          <Typography className={classes.bookTitle} variant="h6">
            {item.book_details[0].title}
          </Typography>
          <div className={classes.authorDescription}>
            <Typography variant="inherit" color="textSecondary">
              by {item.book_details[0].author}
            </Typography>
            {isFavorite ? (
              <StarIcon
                onClick={() =>
                  editFavorite(item.book_details[0].title, "remove")
                }
                color="primary"
                className={classes.starIcon}
              />
            ) : (
              <StarBorderIcon
                onClick={() =>
                  editFavorite(item.book_details[0].title, "create")
                }
                color="primary"
                className={classes.starIcon}
              />
            )}
          </div>
        </div>
        <div className={classes.bookDescription}>
          <Typography variant="inherit">
            {item.book_details[0].description}
          </Typography>
        </div>
        <div className={classes.descriptionFooter}>
          <Typography variant="inherit">
            {item.book_details[0].publisher}
          </Typography>
        </div>
        <div className={classes.descriptionFooter}>
          <Typography variant="inherit">{item.rank}º</Typography>
        </div>
        <Link
          className={classes.buttonLink}
          target="_blank"
          href={item.amazon_product_url}
        >
          <Button
            className={classes.buyButton}
            variant="contained"
            color="primary"
          >
            Compre por R${item.book_details[0].price}
          </Button>
        </Link>
      </div>
    </div>
  );
}
