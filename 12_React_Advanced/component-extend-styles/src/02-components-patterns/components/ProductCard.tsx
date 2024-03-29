/**
 * Compound component Pattern
 */

import { createContext, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { Product, ProductContextProps } from "../interfaces/interfaces";
import { CSSProperties } from "react";

export interface Props {
  className?: string;
  children?: ReactElement | ReactElement[];
  product: Product;
  style?: CSSProperties;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
