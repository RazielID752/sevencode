import style from "../footer/footer.module.css";
import LogoFooter from "../../assets/img/logo-footer.svg";

const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.footerWrapper}>
        <div className={style.contentFooter}>
          <img src={LogoFooter} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            aliquet justo.
          </p>
        </div>
        <div>
            <p className={style.pFooter}>
              Inscreva-se para saber de novidades do mundo uno. E receba
              atualizações direto no seu email!
            </p>
          <form action="post" className={style.formFooter}>
            <div className={style.inputContainer}>
              <input type="text" placeholder="Insira seu email" />
              <div className={style.buttonContainer}>
                <button>Cadastre-se</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={style.footerCopyright}>
        <div className={style.CopyFooter}>
          <span>© 2023 Sevencode. Todos os direitos reservados.</span>
        </div>
        <div className={style.footerPolyci}>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
