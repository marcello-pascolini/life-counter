// import "./Button.module.scss";


interface ButtonInterface {
    type?: string,
    label: string,
    onClick?: (value: any) => void;
}

const Button = ({ label, onClick}: ButtonInterface) => {

   
    

  return (
    <>
       <button className="custom-button" onClick={onClick}>
        {label}
       </button>
    </>

  );
}

export default Button;
