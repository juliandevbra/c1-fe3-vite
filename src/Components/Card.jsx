import Button from "./Button";

const Card = ({ nombre, email }) => {
  // console.log(props);
  // const { nombre, email } = props;

  return (
    <div className="navbar">
      <img
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png"
        width={100}
        alt=""
      />
      <h3>Nombre: {nombre}</h3>
      <h4>Email: {email}</h4>
      <Button text="Ver detalle">Ver detalle</Button>
    </div>
  );
};

export default Card;
