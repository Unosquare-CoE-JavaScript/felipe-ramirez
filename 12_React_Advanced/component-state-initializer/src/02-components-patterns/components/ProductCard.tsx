/**
 * Compound component Pattern
 */

import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import {
  Product,
  ProductContextProps,
  onChangeArgs,
  InitialValues,
} from "../interfaces/interfaces";
import { CSSProperties } from "react";
import { ProductCardHandlers } from "../interfaces/interfaces";

export interface Props {
  className?: string;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  initialValues?: InitialValues;
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  style?: CSSProperties;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  initialValues,
  onChange,
  style,
  value,
}: Props) => {
  const { counter, maxCount, increaseBy, isMaxCountReached, reset } =
    useProduct({
      product,
      initialValues,
      onChange,
      value,
    });
  return (
    <Provider
      value={{
        counter,
        maxCount,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
