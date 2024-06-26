import React from "react";
import styles from "./CatalogProductItem.module.css";
import { ICatalogProductItem } from "../../services/catalog-products/catalog-products.interface";
import { useNavigate } from "react-router-dom";

interface Props {
  product: ICatalogProductItem;
}

const CatalogProductItem: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();

  const buyProduct = () => {
    navigate(`/catalog/orthopedic-insoles/${product.product_id}`);
  };

  return (
    <div className={styles.catalog__main_item}>
      <div className={styles.catalog__item_banner}>
        <img
          src={product.product_image_url}
          alt="product banner"
          className={styles.catalog__banner_image}
        />
      </div>
      <div className={styles.catalog__item_info}>
        <div className={styles.catalog__info_header}>
          <h3 className={styles.catalog__header_title}>
            {product.product_name_en}
          </h3>
          <div className={styles.catalog__info_reviews}>
            <div className={styles.catalog__reviews_stars}>
              <img
                src="../../images/review-star.svg"
                alt="reivews star icon"
                className={styles.catalog__stars_item}
              />
              <img
                src="../../images/review-star.svg"
                alt="reivews star icon"
                className={styles.catalog__stars_item}
              />
              <img
                src="../../images/review-star.svg"
                alt="reivews star icon"
                className={styles.catalog__stars_item}
              />
              <img
                src="../../images/review-star.svg"
                alt="reivews star icon"
                className={styles.catalog__stars_item}
              />
              <img
                src="../../images/review-star.svg"
                alt="reivews star icon"
                className={styles.catalog__stars_item}
              />
            </div>
            <span className={styles.catalog__reviews_count}>
              ({product.product_reviews_count})
            </span>
          </div>
          <div className={styles.catalog__header_left}>
            <p className={styles.catalog__left_review}>Залишити відгук</p>
          </div>
        </div>
        <div className={styles.catalog__info_main}>
          <p className={styles.catalog__main_description}>
            {product.product_description_en}
          </p>
        </div>
        <div className={styles.catalog__info_footer}>
          <h2 className={styles.catalog__footer_price}>
            {product.product_base_price} грн
          </h2>
          <button
            onClick={buyProduct}
            className={styles.catalog__footer_button}
            type="button"
          >
            Купити
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogProductItem;
