import style from "../buttonLine/buttonLine.module.css";

const ButtonLine = ({ Link, ...props }) => {
  return (
    <div className={style.ButtonLine}>
      <a href={Link} className={style.ButtonLineA}{...props}>
      </a>
    </div>
  );
};

export default ButtonLine;
