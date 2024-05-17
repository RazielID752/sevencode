import style from "../calltoaction/calltoaction.module.css";
import Globo from "../../assets/img/globo.png";

const CalltoAction = () => {
  return (
    <section className={style.callTo}>
      <div className={style.CalltoAction}>
        <div className={style.calltoWrapper}>
          <div className={style.calltoContainer}>
            <div className={style.calltoContent}>
              <h2>Sistemas feito de Devs para Devs.</h2>
              <p>
                Conheça nossos novos recursos, novos commits, novas propostas e
                muito mais.
              </p>
            </div>
            <div>
              <img src={Globo} alt="Globo imagem" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalltoAction;
