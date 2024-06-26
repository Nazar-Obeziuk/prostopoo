import React, { useState } from "react";
import styles from "./InsolesNeeds.module.css";
import { homeInsolesNeeds } from "../../../../../utils/data/HomeInsoles.data";
import InsoleItem from "../../../../../components/insole-item/InsoleItem";

const InsolesNeeds: React.FC = () => {
  const [isOpenDetailsBlock, setIsOpenDetailsBlock] = useState(false);

  const handleInfoBlock = () => {
    setIsOpenDetailsBlock((prevState) => !prevState);
  };

  return (
    <div className={styles.home__insoles_inner}>
      <h2 className={styles.home__inner_title}>
        Кому необхідні{" "}
        <span className={styles.home__title_primary}>індивідуальні</span>{" "}
        ОРТОПЕДИЧНІ устілки?
      </h2>
      <div className={styles.home__inner_main}>
        {homeInsolesNeeds.map((insoleItem) => (
          <InsoleItem insoleItem={insoleItem} key={insoleItem.id} />
        ))}
      </div>
      <div onClick={handleInfoBlock} className={styles.home__inner_details}>
        <p className={styles.home__details_text}>
          {isOpenDetailsBlock ? "згорнути" : "детальніше"}
        </p>
        <svg
          className={`${styles.home__details_icon} ${
            isOpenDetailsBlock ? `${styles.active}` : ""
          }`}
          width="6"
          height="9"
          viewBox="0 0 6 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.47732 6.95899L5.25 5L6 5.75676L3 9L3.86753e-08 5.75676L0.7 5L2.52268 6.97046L2.52268 3.00826e-08L3.47732 4.14667e-08L3.47732 6.95899Z"
            fill="#FFED00"
          />
        </svg>
      </div>
      {isOpenDetailsBlock && (
        <div className={styles.home__inner_more}>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>
              Спортсменам і військовим
            </h3>
            <p className={styles.home__more_text}>
              Індивідуальна устілка покращить амортизацію під час фізичних
              навантажень, знизить травматизацію суглобів і структуру хребта.
              Особливо це важливо під час довготривалої активності, стрибків,
              бігу та під час підіймання важких предметів.
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>Людям літнього віку</h3>
            <p className={styles.home__more_text}>
              З віком незначні проблеми можуть перерости в хронічні
              захворювання, тому важливо підтримувати склепіння стоп і зупинити
              розвиток деформацій. Під час використання індивідуальних
              ортопедичних устілок болі в ногах, набряки більше не будуть
              перешкодою активному життю.
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>Дітям</h3>
            <p className={styles.home__more_text}>
              Дитячі індивідуальні ортопедичні устілки мають лікувальні
              властивості та сприяють зменшенню й повному виправленню деформацій
              стопи. Під час стрімкого росту дитину вкрай важливо зберегти
              дитячі ноги в правильному положенні, що вплине на структуру та
              роботу всього опорно-рухового апарату.
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>Вагітним</h3>
            <p className={styles.home__more_text}>
              Під час вагітності організм жінки зіштовхується з додатковим
              навантаженням на стопи та опорно-руховий апарат, тому важливо в
              період вагітності використовувати ортопедичну устілку, для
              правильного розподілу навантаження на точки опори стоп.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsolesNeeds;
