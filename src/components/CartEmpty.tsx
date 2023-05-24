import React from "react";
import { Link } from "react-router-dom";

import cartEmptyImg from "../assets/img/empty-cart.png";

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Кошик пустий <span>😕</span>
    </h2>
    <p>
      Скоріш за все, ви не зробили замовлення.
      <br />
      Для того, щоб зробити замовлення, перейдіть на головну сторінку.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Повернуться назад</span>
    </Link>
  </div>
);
