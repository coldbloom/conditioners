import { Logo } from '../Header/Header';
import s from './Footer.module.scss';

export const Footer = () => (
  <footer className={s.footer}>
    <div className={s.wrapper}>
      <Logo className={s.logoFooter}/>
      <div className={s.infoWrapper}>
        <span>Ледяной Партнер {new Date().getFullYear()}. © Все права защищены.</span>
        <a href="/documents/privacy-policy.pdf"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Открыть политику конфиденциальности в новом окне">
          Политика конфиденциальности
        </a>
        <div className="developer-credits">
          Разработано в <a href="https://t.me/konstankk" target="_blank" rel="noopener" aria-label="Ссылка на контакт разработчика (откроется в новой вкладке)">codeCake</a>
        </div>
      </div>
    </div>
  </footer>
);
