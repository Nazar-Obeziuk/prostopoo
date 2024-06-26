import React from "react";
import styles from "./AboutWarranty.module.css";
import { NavLink } from "react-router-dom";

const AboutWarranty: React.FC = () => {
  return (
    <>
      <section
        className={`${styles.about__warranty_section} ${styles.about__warranty_first}`}
      >
        <div className={styles.container}>
          <div className={styles.about__warranty_wrapper}>
            <div className={styles.about__warranty_route}>
              <NavLink to={"/"}>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  className={styles.about__router_icon}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9412 9.69951C15.61 9.92767 15.2538 9.98393 14.8538 9.96518C14.8507 11.6123 14.8663 13.2251 14.8444 14.866C14.8288 15.7411 14.0819 16.4756 13.207 16.4912C12.332 16.5069 11.454 16.4975 10.5759 16.4944C10.2946 16.4944 10.1071 16.2912 10.1071 15.9911C10.104 15.2504 10.1071 14.5097 10.104 13.7689C10.104 13.2813 10.104 12.7906 10.104 12.3031C10.1009 11.7998 9.78529 11.4779 9.27594 11.4717C8.79783 11.4654 8.31973 11.4654 7.84163 11.4717C7.34478 11.4779 7.02605 11.803 7.02605 12.2999C7.02292 13.5095 7.02292 14.7159 7.02292 15.9255C7.02292 16.3287 6.85418 16.4975 6.44795 16.4975C5.65424 16.4975 4.86053 16.4975 4.06682 16.4975C3.02 16.4944 2.27629 15.763 2.27004 14.7128C2.26379 13.1313 2.26691 11.5467 2.26691 9.96518C0.816983 10.1027 -0.0267248 8.47119 1.01072 7.41789C3.15437 5.2738 5.29801 3.1297 7.44478 0.988734C7.57915 0.848087 7.73539 0.732443 7.90725 0.638678C8.40723 0.388638 9.18532 0.466776 9.66029 0.954354C10.8634 2.18893 12.0914 3.3985 13.3101 4.61744C14.2444 5.55509 15.1725 6.49899 16.1225 7.42414C16.7474 8.03362 16.6881 9.20255 15.9412 9.69951Z"
                    stroke="white"
                    strokeOpacity="0.8"
                  />
                </svg>
              </NavLink>
              <img
                src="../../images/navigation-arrow.svg"
                alt="router arrow"
                className={styles.about__router_arrow}
              />
              <NavLink to={"/home/prostopoo/about"}>
                <p className={styles.about__router_name}>ПРО PROSTOPOO</p>
              </NavLink>
              <img
                src="../../images/navigation-arrow.svg"
                alt="router arrow"
                className={styles.about__router_arrow}
              />
              <p
                className={`${styles.about__router_name} ${styles.about__router_active}`}
              >
                Гарантія та обмін
              </p>
            </div>
            <div className={styles.about__warranty_name}>
              <h2 className={styles.about__name_title}>Гарантія та обмін</h2>
            </div>
            <div className={styles.about__warranty_header}>
              <h2 className={styles.about__header_title}>Гарантії</h2>
              <p className={styles.about__warranty_text}>
                Устілки{" "}
                <span className={styles.about__text_bold}>PROSTOPOO</span>{" "}
                <a
                  href="../../images/declaration-1.pdf"
                  target="_blank"
                  className={styles.about__header_link}
                >
                  сертифіковано
                </a>{" "}
                та забезпечено фірмовою гарантією, строк якої встановлено
                фірмою-виробником.
              </p>
              <div className={styles.about__header_term}>
                <p className={styles.about__primary_text}>
                  Строк, до якого гарантоване безпечне застосування:{" "}
                  <span className={styles.about__text_bold}>
                    2 роки з дати виготовлення.
                  </span>
                </p>
                <p className={styles.about__primary_text}>
                  Гарантійний термін використання виробу (при дотриманні умов
                  зберігання та використання):{" "}
                  <span className={styles.about__text_bold}>30 днів.</span>
                </p>
              </div>
            </div>
            <div className={styles.about__warranty_main}>
              <h2 className={styles.about__main_title}>Обмін</h2>
              <div className={styles.about__main_info}>
                <p className={styles.about__warranty_text}>
                  Виріб незадовільної якості підлягає заміні або
                  перевиготовленню.
                </p>
                <span className={styles.about__text_bold}>
                  Окрім випадків зазначених далі:
                </span>
                <ul className={styles.about__warranty_list}>
                  <li className={styles.about__list_item}>
                    недотримання покупцем вимог виробника;
                  </li>
                  <li className={styles.about__list_item}>
                    ремонту не уповноваженими на це особами;
                  </li>
                  <li className={styles.about__list_item}>
                    розбирання виробу, зміни конструкції та інших втручань;
                  </li>
                  <li className={styles.about__list_item}>
                    пошкоджень, викликаних екстремальними умовами та дією
                    непереборної сили (пожежа, стихійні лиха тощо);
                  </li>
                  <li className={styles.about__list_item}>
                    недбалого зберігання та/або недбалого транспортування
                    власником;
                  </li>
                  <li className={styles.about__list_item}>
                    ушкоджень викликаних тваринами або комахами;
                  </li>
                  <li className={styles.about__list_item}>
                    використання виробу з метою, для яких воно не призначене.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${styles.about__warranty_section} ${styles.about__section_second}`}
      >
        <div className={styles.container}>
          <div className={styles.about__warranty_wrapper}>
            <div className={styles.about__wrapper_exchange}>
              <p className={styles.about__text_bold}>
                Щоб здійснити обмін товару вам необхідно:
              </p>
              <ol className={styles.about__exchange_list}>
                <li className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.</span> Написати
                  повідомлення або зателефонувати на один із номерів телефону,
                  які вказані на сайті, назвати менеджеру Ваші ПІБ або номер
                  телефону, на який було оформлено замовлення.
                </li>
                <li className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>2.</span> Після —
                  варто вказати, який товар ви замовляли, причину
                  обміну/повернення. Для повернення також варто зазначити
                  реквізити вашої карти, на яку необхідно повернути гроші.
                </li>
                <li className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.</span>{" "}
                  Відправити товар на адресу: с. Ходосівка (Київська обл.), Нова
                  пошта № 1, отримувач:….
                </li>
                <li className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.</span> Якщо
                  повернення/обмін здійснюється через нашу помилку – послуги
                  доставки сплачує компанія, у разі повернення з причин, що від
                  нас не залежать, послуги доставки оплачує відправник.
                </li>
                <li className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.</span> Повідомте
                  менеджеру номер декларації відправленої посилки.
                </li>
                <li className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>6.</span> Після
                  отримання вашої посилки протягом трьох робочих днів ми
                  повернемо вам кошти або надішлемо інший товар.
                </li>
              </ol>
            </div>
            <div className={styles.about__wrapper_important}>
              <p className={styles.about__warranty_text}>
                <span className={styles.about__primary_text}>Важливо:</span> у
                разі обміну, відправку нового товару здійснюємо лише після
                отримання й огляду товару, що повернувся.
              </p>
              <p className={styles.about__warranty_text}>
                При наявності можливих протипоказань проконсультуйтесь з
                фахівцем.
              </p>
              <p className={styles.about__warranty_text}>
                Виготовлено згідно з технічними умовами ТУ У
                15.2-37560237-001:2023 «Устілки ортопедичні. Технічні умови».
                Висновок державної санітарно-епідеміологічної експертизи
                №12.2-18-2/5516 від 16.05.2023 року
              </p>
            </div>
            <div className={styles.about__wrapper_consumers}>
              <h2 className={styles.about__consumers_title}>
                Права споживачів
              </h2>
              <div className={styles.about__consumers_main}>
                <p className={styles.about__text_bold}>
                  СТАТТІ ІЗ ЗАКОНУ ПРО ЗАХИСТ ПРАВ СПОЖИВАЧІВ ЩОДО ПРОДАЖУ,
                  ОБМІНУ ТА РЕМОНТУ ТОВАРІВ ПОБУТОВОГО ПРИЗНАЧЕННЯ
                </p>
                <p className={styles.about__warranty_text}>
                  Цей Закон регулює відносини між споживачами товарів, робіт і
                  послуг та виробниками і продавцями товарів, виконавцями робіт
                  і надавачами послуг різних форм власності, встановлює права
                  споживачів, а також визначає механізм їх захисту та основи
                  реалізації державної політики у сфері захисту прав споживачів.
                </p>
              </div>
            </div>
            <div className={styles.about__wrapper_position}>
              <p className={styles.about__position_title}>ЗАГАЛЬНІ ПОЛОЖЕННЯ</p>
              <div className={styles.about__position_main}>
                <p className={styles.about__primary_text}>
                  Стаття 1. Визначення термінів
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>5)</span>{" "}
                  гарантійний строк — строк, протягом якого виробник (продавець,
                  виконавець або будь-яка третя особа) бере на себе зобов'язання
                  про здійснення безоплатного ремонту або заміни відповідної
                  продукції у зв'язку з введенням її в обіг;
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>12)</span>{" "}
                  істотний недолік — недолік, який робить неможливим чи
                  недопустимим використання товару відповідно до його цільового
                  призначення, виник з вини виробника (продавця, виконавця),
                  після його усунення проявляється знову з незалежних від
                  споживача причин і при цьому наділений хоча б однією з
                  нижченаведених ознак:
                </p>
                <div className={styles.about__position_list}>
                  <p className={styles.about__warranty_text}>
                    a) він взагалі не може бути усунутий;
                  </p>
                  <p className={styles.about__warranty_text}>
                    б) його усунення потребує понад чотирнадцять календарних
                    днів;
                  </p>
                  <p className={styles.about__warranty_text}>
                    в) він робить товар суттєво іншим, ніж передбачено
                    договором;
                  </p>
                </div>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>13)</span>{" "}
                  належна якість товару, роботи або послуги — властивість
                  продукції, яка відповідає вимогам, встановленим для цієї
                  категорії продукції у нормативно-правових актах і нормативних
                  документах, та умовам договору із споживачем;
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>15)</span>{" "}
                  недолік — будь-яка невідповідність продукції вимогам
                  нормативно-правових актів і нормативних документів, умовам
                  договорів або вимогам, що пред'являються до неї, а також
                  інформації про продукцію, наданій виробником (виконавцем,
                  продавцем);
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>18)</span>{" "}
                  продавець — суб'єкт господарювання, який згідно з договором
                  реалізує споживачеві товари або пропонує їх до реалізації;
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>22)</span>{" "}
                  споживач — фізична особа, яка придбаває, замовляє,
                  використовує або має намір придбати чи замовити продукцію для
                  особистих потреб, безпосередньо не пов'язаних з
                  підприємницькою діяльністю або виконанням обов'язків найманого
                  працівника;
                </p>
              </div>
              <div className={styles.about__position_protect}>
                <p className={styles.about__position_title}>
                  Стаття 2. Законодавство про захист прав споживачів
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>5)</span>{" "}
                  Законодавство про захист прав споживачів складається з цього
                  Закону, Цивільного кодексу України ( 435-15 ), Господарського
                  кодексу України ( 436-15 ) та інших нормативно-правових актів,
                  що містять положення про захист прав споживачів.
                </p>
              </div>
            </div>
            <div className={styles.about__wrapper_second}>
              <p className={styles.about__position_title}>РОЗДІЛ II</p>
              <p className={styles.about__position_title}>
                Права споживачів та їх захист
              </p>
              <div className={styles.about__second_main}>
                <p className={styles.about__position_title}>
                  Стаття 4. Права та обов'язки споживачів
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>1.</span>{" "}
                  Споживачі під час придбання, замовлення або використання
                  продукції, яка реалізується на території України, для
                  задоволення своїх особистих потреб мають право на:
                </p>
                <ul className={styles.about__warranty_list}>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>1)</span>{" "}
                    захист своїх прав державою;
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>2)</span>{" "}
                    належну якість продукції та обслуговування;
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>3)</span>{" "}
                    безпеку продукції;
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>4)</span>{" "}
                    необхідну, доступну, достовірну та своєчасну інформацію про
                    продукцію, її кількість, якість, асортимент, а також про її
                    виробника (виконавця, продавця);
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>5)</span>{" "}
                    відшкодування шкоди (збитків), завданих дефектною чи
                    фальсифікованою продукцією або продукцією неналежної якості,
                    а також майнової та моральної (немайнової) шкоди, заподіяної
                    небезпечною для життя і здоров'я людей продукцією у
                    випадках, передбачених законодавством;
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>6)</span>{" "}
                    звернення до суду та інших уповноважених органів державної
                    влади за захистом порушених прав;
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>7)</span>{" "}
                    об'єднання в громадські організації споживачів (об'єднання
                    споживачів).
                  </li>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>2.</span>{" "}
                  Споживачі також мають інші права, встановлені законодавством
                  про захист прав споживачів.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>3.</span>{" "}
                  Споживачі зобов'язані:
                </p>
                <ul className={styles.about__warranty_list}>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>1)</span>{" "}
                    перед початком експлуатації товару уважно ознайомитися з
                    правилами експлуатації, викладеними в наданій виробником
                    (продавцем, виконавцем) документації на товар;
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>2)</span> в
                    разі необхідності роз'яснення умов та правил використання
                    товару — до початку використання товару звернутися за
                    роз'ясненнями до продавця (виробника, виконавця) або до
                    іншої вказаної в експлуатаційній документації особи, що
                    виконує їх функції;
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>3)</span>{" "}
                    користуватися товаром згідно з його цільовим призначенням та
                    дотримуватися умов (вимог, норм, правил), встановлених
                    виробником товару (виконавцем) в експлуатаційній
                    документації;
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>4)</span> з
                    метою запобігання негативним для споживача наслідкам
                    використання товару - застосовувати передбачені виробником в
                    товарі засоби безпеки з дотриманням передбачених
                    експлуатаційною документацією спеціальних правил, а в разі
                    відсутності таких правил в документації - дотримуватися
                    звичайних розумних заходів безпеки, встановлених для товарів
                    такого роду.
                  </li>
                </ul>
              </div>
              <div className={styles.about__second_main}>
                <p className={styles.about__position_title}>
                  Стаття 5. Захист прав споживачів
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>1.</span>{" "}
                  Держава забезпечує споживачам захист їх прав, надає можливість
                  вільного вибору продукції, здобуття знань і кваліфікації,
                  необхідних для прийняття самостійних рішень під час придбання
                  та використання продукції відповідно до їх потреб, і гарантує
                  придбання або одержання продукції іншими законними способами в
                  обсязі, що забезпечує рівень споживання, достатній для
                  підтримання здоров'я і життєдіяльності.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>2.</span>{" "}
                  Держава створює умови для здобуття споживачами потрібних знань
                  з питань реалізації їх прав.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>3.</span> Захист
                  прав споживачів здійснюють спеціально уповноважений
                  центральний орган виконавчої влади у сфері захисту прав
                  споживачів та його територіальні органи, Рада міністрів
                  Автономної Республіки Крим, місцеві державні адміністрації,
                  органи і установи, що здійснюють державний
                  санітарно-епідеміологічний нагляд, інші органи виконавчої
                  влади, органи місцевого самоврядування згідно із
                  законодавством, а також суди.
                </p>
              </div>
              <div className={styles.about__second_main}>
                <p className={styles.about__position_title}>
                  Стаття 6. Право споживача на належну якість продукції
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>1.</span>{" "}
                  Продавець (виробник, виконавець) зобов'язаний передати
                  споживачеві продукцію належної якості, а також надати
                  інформацію про цю продукцію.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>2.</span>{" "}
                  Продавець (виробник, виконавець) на вимогу споживача
                  зобов'язаний надати йому документи, які підтверджують належну
                  якість продукції.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>3.</span> Вимоги
                  до продукції щодо її безпеки для життя, здоров'я і майна
                  споживачів, а також навколишнього природного середовища
                  встановлюються нормативними документами. Щодо окремих груп
                  продукції зазначені вимоги встановлюються законами та іншими
                  нормативно-правовими актами.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>6.</span>{" "}
                  Реалізація інтересів споживачів у встановленні вимог до
                  належної якості продукції забезпечується правом участі
                  споживачів та їх об'єднань у розробленні нормативних
                  документів згідно із законодавством.
                </p>
              </div>
              <div className={styles.about__second_main}>
                <p className={styles.about__position_title}>
                  Стаття 7. Гарантійні зобов'язання
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>1.</span>{" "}
                  Виробник (виконавець) забезпечує належну роботу (застосування,
                  використання) продукції, в тому числі комплектуючих виробів,
                  протягом гарантійного строку, встановленого
                  нормативно-правовими актами, нормативними документами чи
                  договором. Гарантійний строк на комплектуючі вироби повинен
                  бути не менший, ніж гарантійний строк на основний виріб, якщо
                  інше не передбачено нормативно-правовими актами, нормативними
                  документами чи договором.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>2.</span>{" "}
                  Гарантійний строк зазначається в паспорті на продукцію або на
                  етикетці чи в будь-якому іншому документі, що додається до
                  продукції.
                </p>
                <p className={styles.about__warranty_text}>
                  Гарантійні зобов'язання у будь-якому випадку включають також
                  будь-які зобов'язання виробника (виконавця) або продавця,
                  передбачені рекламою.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>6.</span> Вимоги
                  При виконанні гарантійного ремонту гарантійний строк
                  збільшується на час перебування продукції в ремонті.
                  Зазначений час обчислюється від дня, коли споживач звернувся з
                  вимогою про усунення недоліків.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>7.</span> При
                  обміні товару його гарантійний строк обчислюється заново від
                  дня обміну.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>8.</span>{" "}
                  Гарантійне зобов'язання припиняється на загальних підставах
                  передбачених Цивільним кодексом України ( 435-15 ).
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>9.</span>{" "}
                  Гарантійне зобов'язання не припиняється у разі неможливості
                  виконання такого зобов'язання з причини відсутності необхідних
                  для його виконання матеріалів, комплектуючих або запасних
                  частин.
                </p>
              </div>
              <div className={styles.about__second_main}>
                <p className={styles.about__position_title}>
                  Стаття 8. Права споживача у разі придбання ним товару
                  неналежної якості
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>1.</span> У разі
                  виявлення протягом встановленого гарантійного строку недоліків
                  споживач, в порядку та у строки, що встановлені
                  законодавством, має право вимагати:
                </p>
                <ul className={styles.about__warranty_list}>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>1)</span>{" "}
                    пропорційного зменшення ціни;
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>2)</span>{" "}
                    безоплатного усунення недоліків товару в розумний строк;
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>3)</span>{" "}
                    відшкодування витрат на усунення недоліків товару.
                  </li>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span
                    className={`${styles.about__warranty_text} ${styles.about__text_hidden}`}
                  >
                    5.
                  </span>
                  У разі виявлення протягом встановленого гарантійного строку
                  істотних недоліків, які виникли з вини виробника товару
                  (продавця, виконавця), або фальсифікації товару, підтверджених
                  за необхідності висновком експертизи , споживач, в порядку та
                  у строки, що встановлені законодавством і на підставі
                  обов'язкових для сторін правил чи договору, має право за своїм
                  вибором вимагати від продавця або виробника:
                </p>
                <ul className={styles.about__warranty_list}>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>1)</span>{" "}
                    розірвання договору та повернення сплаченої за товар
                    грошової суми;
                  </li>
                  <li className={styles.about__item_sublist}>
                    <span className={styles.about__warranty_text}>2)</span>{" "}
                    вимагати заміни товару на такий же товар або на аналогічний,
                    з числа наявних у продавця (виробника), товар.
                  </li>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>2.</span> Вимоги
                  Стосовно непродовольчих товарів, що перебували у використанні
                  та були реалізовані через роздрібні комісійні торговельні
                  підприємства, вимоги споживача, зазначені у частині першій
                  цієї статті, задовольняються за згодою продавця. Згідно з цією
                  частиною задовольняються вимоги споживача щодо товарів,
                  гарантійний строк на які не закінчився.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>3.</span> При
                  Вимоги споживача, встановлені частиною першою цієї статті,
                  пред'являються на вибір споживача продавцеві за місцем купівлі
                  товару, виробникові або підприємству, що задовольняє ці вимоги
                  за місцезнаходженням споживача. Споживач має право пред'явити
                  одну з вимог, передбачених частиною першою цієї статті, а в
                  разі її невиконання заявити іншу вимогу, передбачену частиною
                  першою цієї статті. Зазначені вимоги за місцезнаходженням
                  споживача задовольняють також створені власником продавця
                  торговельні підприємства та філії, що здійснюють продаж
                  аналогічних придбаним споживачем товарів, або підприємства, на
                  які ці функції покладено на підставі договору. Функції
                  представників підприємств-виробників виконують їх
                  представництва та філії, створені виробниками для цієї мети,
                  або підприємства, які задовольняють зазначені вимоги на
                  підставі договору з виробником.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>4.</span>{" "}
                  Продавець і виробник під час продажу (реалізації) товару
                  зобов'язані інформувати споживача про підприємства, що
                  задовольняють вимоги, встановлені частинами першою і третьою
                  цієї статті. За ненадання такої інформації встановлюється
                  відповідальність згідно із статтями 15 і 23 цього Закону.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>5.</span>{" "}
                  Продавець, виробник (підприємство, що задовольняє вимоги
                  споживача, встановлені частиною першою цієї статті)
                  зобов'язані прийняти товар неналежної якості у споживача і
                  задовольнити його вимоги.
                </p>
                <p className={styles.about__list_numeric}>
                  <span
                    className={`${styles.about__warranty_text} ${styles.about__text_hidden}`}
                  >
                    5.
                  </span>
                  Доставка великогабаритних товарів і товарів вагою понад п'ять
                  кілограмів продавцю, виробнику (підприємству, що задовольняє
                  вимоги споживача, встановлені частиною першою цієї статті) та
                  їх повернення споживачеві здійснюються за рахунок продавця,
                  виробника (підприємства, що задовольняє вимоги споживача,
                  встановлені частиною першою цієї статті).
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>6.</span> За
                  наявності товару вимога споживача про його заміну підлягає
                  негайному задоволенню, а в разі виникнення потреби в перевірці
                  якості — протягом чотирнадцяти днів або за домовленістю
                  сторін. У разі відсутності товару вимога споживача про його
                  заміну підлягає задоволенню у двомісячний строк з моменту
                  подання відповідної заяви. Якщо задовольнити вимогу споживача
                  про заміну товару в установлений строк неможливо, споживач
                  вправі на свій вибір пред'явити продавцю, виробнику
                  (підприємству, що виконує їх функції) інші вимоги, передбачені
                  пунктами 1, 3, 4, 5 частини першої цієї статті.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>7.</span> Під
                  час заміни товару з недоліками на товар аналогічної марки
                  (моделі, артикулу, модифікації) належної якості, ціна на який
                  змінилася, перерахунок вартості не провадиться. Під час заміни
                  товару з недоліками на такий же товар іншої марки (моделі,
                  артикулу, модифікації) належної якості перерахунок вартості
                  товару з недоліками у разі підвищення ціни провадиться
                  виходячи з його вартості на час обміну, а в разі зниження ціни
                  — виходячи з вартості на час купівлі. При розірванні договору
                  розрахунки із споживачем у разі підвищення ціни на товар
                  провадяться виходячи з його вартості на час пред'явлення
                  відповідної вимоги, а в разі зниження ціни — виходячи з
                  вартості товару на час купівлі. Гроші, сплачені за товар,
                  повертаються споживачеві у день розірвання договору, а в разі
                  неможливості повернути гроші у день розірвання договору — в
                  інший строк за домовленістю сторін, але не пізніше ніж
                  протягом семи днів.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>9.</span> При
                  пред'явленні споживачем вимоги про безоплатне усунення
                  недоліків товару вони повинні бути усунуті протягом
                  чотирнадцяти днів з дати його пред'явлення або за згодою
                  сторін в інший строк. При усуненні недоліків шляхом заміни
                  комплектуючого виробу або складової частини товару, на які
                  встановлено гарантійні строки, гарантійний строк на новий
                  комплектуючий виріб і складову частину обчислюється починаючи
                  від дня видачі споживачеві товару після ремонту.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>11.</span>{" "}
                  Вимоги споживача розглядаються після пред'явлення споживачем
                  розрахункового документа, а щодо товарів, на які встановлено
                  гарантійний строк, — технічного паспорта чи іншого документа,
                  що його замінює, з позначкою про дату продажу. Під час продажу
                  товару продавець зобов'язаний видати споживачеві розрахунковий
                  документ встановленої форми, що засвідчує факт купівлі, з
                  позначкою про дату продажу. У разі втрати споживачем
                  технічного паспорта чи іншого документа, що його замінює, їх
                  відновлення здійснюється у порядку, визначеному
                  законодавством.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>14.</span>{" "}
                  Вимоги споживача, передбачені цією статтею, не підлягають
                  задоволенню, якщо продавець, виробник (підприємство, що
                  задовольняє вимоги споживача, встановлені частиною першою цієї
                  статті) доведуть , що недоліки товару виникли внаслідок
                  порушення споживачем правил користування товаром або його
                  зберігання. Споживач має право брати участь у перевірці якості
                  товару особисто або через свого представника.
                </p>
              </div>
              <div className={styles.about__second_main}>
                <p className={styles.about__position_title}>
                  Стаття 9. Права споживача при придбанні товару належної якості
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>1.</span>{" "}
                  Споживач має право обміняти непродовольчий товар належної
                  якості на аналогічний у продавця, в якого він був придбаний,
                  якщо товар не задовольнив його за формою, габаритами, фасоном,
                  кольором, розміром або з інших причин не може бути ним
                  використаний за призначенням. Споживач має право на обмін
                  товару належної якості протягом чотирнадцяти днів, не рахуючи
                  дня купівлі. Обмін товару належної якості провадиться, якщо
                  він не використовувався і якщо збережено його товарний вигляд,
                  споживчі властивості, пломби, ярлики, а також розрахунковий
                  документ, виданий споживачеві разом з проданим товаром.
                  Перелік товарів, що не підлягають обміну (поверненню) з
                  підстав, зазначених у цій статті, затверджується Кабінетом
                  Міністрів України.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>2.</span> Якщо
                  на момент обміну аналогічного товару немає у продажу, споживач
                  має право або придбати будь-які інші товари з наявного
                  асортименту з відповідним перерахуванням вартості, або
                  розірвати договір та одержати назад гроші у розмірі вартості
                  повернутого товару, або здійснити обмін товару на аналогічний
                  при першому ж надходженні відповідного товару в продаж.
                  Продавець зобов'язаний у день надходження товару в продаж
                  повідомити про це споживача, який вимагає обміну товару.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__warranty_text}>3.</span> Вимоги
                  При розірванні договору купівлі-продажу розрахунки із
                  споживачем провадяться виходячи з вартості товару на час його
                  купівлі. Гроші, сплачені за товар, повертаються споживачеві у
                  день розірвання договору, а в разі неможливості повернути
                  гроші у день розірвання договору — в інший строк за
                  домовленістю сторін, але не пізніше ніж протягом семи днів.
                </p>
              </div>
            </div>
            <div className={styles.about__wrapper_second}>
              <p className={styles.about__position_title}>РОЗДІЛ V</p>
              <div className={styles.about__position_five}>
                <p className={styles.about__position_title}>
                  Прикінцеві положення
                </p>
                <div className={styles.about__second_main}>
                  <p className={styles.about__list_numeric}>
                    <span className={styles.about__warranty_text}>1.</span> Цей
                    Закон набирає чинності з дня його опублікування. Положення
                    першого речення пункту 3 частини першої статті 26 у частині
                    оплати вартості зразків і проведених досліджень (експертизи)
                    за рахунок коштів державного бюджету набирає чинності з 1
                    січня 2007 року. До цієї дати зазначена оплата здійснюється
                    за рахунок суб'єктів господарювання, що перевіряються.
                  </p>
                  <p className={styles.about__list_numeric}>
                    <span className={styles.about__warranty_text}>2.</span>
                    До приведення у відповідність із цим Законом інші
                    нормативно-правові акти застосовуються в частині, що не
                    суперечить цьому Закону.
                  </p>
                  <p className={styles.about__list_numeric}>
                    <span className={styles.about__warranty_text}>3.</span>{" "}
                    Кабінету Міністрів України у шестимісячний строк з дня
                    набрання чинності цим Законом:
                  </p>
                  <ul className={styles.about__warranty_list}>
                    <li className={styles.about__item_sublist}>
                      <span className={styles.about__warranty_text}>1)</span>{" "}
                      підготувати та подати на розгляд Верховної Ради України
                      пропозиції щодо приведення інших законів у відповідність
                      із цим Законом;
                    </li>
                    <li className={styles.about__item_sublist}>
                      <span className={styles.about__warranty_text}>2)</span>{" "}
                      відповідно до своєї компетенції забезпечити прийняття
                      нормативно-правових актів, передбачених цим Законом;
                    </li>
                    <li className={styles.about__item_sublist}>
                      <span className={styles.about__warranty_text}>3)</span>{" "}
                      привести власні нормативно-правові акти у відповідність із
                      цим Законом;
                    </li>
                    <li className={styles.about__item_sublist}>
                      <span className={styles.about__warranty_text}>4)</span>{" "}
                      забезпечити перегляд і скасування міністерствами та іншими
                      центральними органами виконавчої влади їх
                      нормативно-правових актів, що суперечать цьому Закону.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutWarranty;
