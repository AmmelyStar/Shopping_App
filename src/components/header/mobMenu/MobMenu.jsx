import '../header.css';

export default function MobMenu({ onClose }) {
    
     
  return (
    <div className="header_mobmenu">
      <nav className="header__nav_m">
        <ul>
          <li>
            <a onClick={onClose} href="#!">
              CATALOGUE
            </a>
          </li>
          <li>
            <a onClick={onClose} href="#!">
              FASHION
            </a>
          </li>
          <li>
            <a onClick={onClose} href="#!">
              FAVOURITE
            </a>
          </li>
          <li>
            <a onClick={onClose} href="#!">
              LIFESTYLE
            </a>
          </li>
          <li>
            <a onClick={onClose} href="#!" className="header__nav-btn_m">
              SIGN UP
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
