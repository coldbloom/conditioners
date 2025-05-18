"use client"

import s from './PhoneForm.module.scss';
import React, {ChangeEvent, FormEvent} from "react";
import cn from "classnames";

export const PhoneForm = () => {
  const [value, setValue] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [error, setError] = React.useState(false);

  // Регулярное выражение для проверки формата номера
  const phoneRegex = /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;

  const validatePhone = (phone: string) => {
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validatePhone(value)) {
      setError(true);
      return;
    }

    //@TODO добавить запрос в crm или бот тг или серверную часть
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    let formatted = '+7 ';

    if (input.length > 1) {
      formatted += input.substring(1, 4);
    }
    if (input.length > 4) {
      formatted += ' ' + input.substring(4, 7);
    }
    if (input.length > 7) {
      formatted += ' ' + input.substring(7, 9);
    }
    if (input.length > 9) {
      formatted += ' ' + input.substring(9, 11);
    }

    setValue(formatted);

    // Сбрасываем ошибку при изменении
    if (error) {
      setError(false);
    }
  };

  // Проверяем валидность при потере фокуса
  const handleBlur = () => {
    if (value && !validatePhone(value)) {
      setError(true);
    }
  };

  return (
    <form
      action=""
      method="POST"
      className={s.form}
      onSubmit={handleSubmit}
    >
      <div className={s.inputWrapper}>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Ваш номер телефона"
          className={cn(s.input, {
            [s.error]: error
          })}
          // Используем HTML-атрибуты для валидации
          minLength={16}
          maxLength={16}
          // Добавляем маску через inputmode
          inputMode="numeric"
          value={value}
          onChange={handlePhoneChange}
          onBlur={handleBlur}
        />
        {error && (
          <span className={s.errorText}>
            Введите корректный номер телефона
          </span>
        )}
      </div>

      <button
        type="submit"
        className={cn(s.submitButton, {
          [s.disabled]: error // Можно добавить другие условия
        })}
        disabled={error} // Блокируем при ошибке или пустом поле
      >
        Вызвать мастера
      </button>

      <div className={s.checkboxWrapper}>
        <input
          type="checkbox"
          name="privacy"
          id="privacy"
          required
          className={s.checkbox}
        />
        <label htmlFor="privacy" className={s.privacyLabel}>
          Я согласен с{' '}
          <a href="/documents/privacy-policy.pdf" target="_blank" rel="noopener noreferrer">
            политикой конфиденциальности
          </a>
        </label>
      </div>
    </form>
  )
}