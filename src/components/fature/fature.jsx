import style from "../fature/fature.module.css";
import Button from "../button/button";
import Macbook from "../../assets/img/mac.png";

const Fature = () => {
  return (
    <section className={style.Feture}>
      <div className={style.fetureWrraper}>
        <div>
          <img src={Macbook} alt="Macbook" />
        </div>
        <div className={style.fetureContent}>
          <h2>
            É hora de se juntar aos milhares de criadores, artistas e
            desenvolvedores que usam Nineseven.
          </h2>
          <Button link="/">Saiba mais</Button>
        </div>
      </div>
    </section>
  );
};

export default Fature;
