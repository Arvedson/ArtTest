import { createContext } from "react";


interface ButtonContextProps {
  mostrarGaleria: boolean;
  toggleGaleria: () => void;
}

const defaultValue: ButtonContextProps = {
  mostrarGaleria: true,
  toggleGaleria: () => {},
};

const ButtonContext = createContext<ButtonContextProps>(defaultValue);

export default ButtonContext;
