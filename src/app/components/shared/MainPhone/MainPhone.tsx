import React from 'react';
import s from './MainPhone.module.scss';

const phone = '+79499620894';
const prettyPhone = '+7 (949) 962-08-94';
export const MainPhone = () => {
  return (
    <a
      href={`tel:${phone}`}
      className={s.phoneLink}
      itemProp="telephone"
      content={phone}
      aria-label="Позвонить нам для заказа ремонта кондиционера"
    >
      <div className={s.gradientWrapper}>
        <div className={s.spanWrapper}>
          <img src="/phone.svg" alt="позвоните сейчас" width={16} height={16} />
          <span className={s.phoneText}>{prettyPhone}</span>
        </div>
      </div>
    </a>
  );
};