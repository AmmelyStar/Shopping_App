import fb from '../../img/socials/fb.svg';
import linkedin from '../../img/socials/in.svg';
import insta from '../../img/socials/inst.svg';
import tw from '../../img/socials/tw.svg';
import './footer.css'

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer__social">
          <h3 className="footer__title">FASHION</h3>
          <div className="footer__desc">
            Complete your style with <span>awesome</span> <br /> clothes from
            us.
          </div>
          <div className="wrap_svg">
            <img src={fb} alt="fb" width={52} height={52} />
            <img src={linkedin} alt="linkedin" />
            <img src={insta} alt="instagram" />
            <img src={tw} alt="twitter" />
          </div>
        </div>
        <div className="footer_nav">
          <ul className="footer_nav-title">
            Company
            <li className="footer_nav-item">About</li>
            <li className="footer_nav-item">Contact us</li>
            <li className="footer_nav-item">Support</li>
            <li className="footer_nav-item">Careers</li>
          </ul>
          <ul className="footer_nav-title">
            Quick Link
            <li className="footer_nav-item">Share Location</li>
            <li className="footer_nav-item">Orders Tracking</li>
            <li className="footer_nav-item">Size Guide</li>
            <li className="footer_nav-item">FAQs</li>
          </ul>
          <ul className="footer_nav-title">
            Legal
            <li className="footer_nav-item">Terms & conditions</li>
            <li className="footer_nav-item">Privacy Policy</li>
          </ul>
        </div>
      </section>
    </>
  );
}






// import fb from '../../img/socials/fb.svg';
// import linkedin from '../../img/socials/in.svg';
// import insta from '../../img/socials/inst.svg';
// import tw from '../../img/socials/tw.svg';
// import './footer.css';

// export default function Footer() {
//   return (
//     <>
//       <section className="footer">
//         <div className="footer__social">
//           <h3 className="footer__title">U.CLOTHES</h3>
//           <div className="footer__desc">
//             Complete your style with <span>awesome</span> <br /> clothes from
//             us.
//           </div>
//           <div className="wrap_svg">
//             <a href="/" className="wrap_soc">
//               <img src={fb} alt="fb" width={52} height={52} />
//             </a>
//             <a href="/" className="wrap_soc">
//               <img src={linkedin} alt="linkedin" />
//             </a>
//             <a href="/" className="wrap_soc">
//               <img src={insta} alt="instagram" />
//             </a>
//             <a href="/" className="wrap_soc">
//               <img src={tw} alt="twitter" />
//             </a>
//           </div>
//         </div>
//         <div className="footer_nav">
//           <ul className="footer_nav-title">
//             Company
//             <li className="footer_nav-item">
//               <a href="/">About</a>
//             </li>
//             <li className="footer_nav-item">
//               <a href="/">Contact us</a>
//             </li>
//             <li className="footer_nav-item">
//               <a href="/">Support</a>
//             </li>
//             <li className="footer_nav-item">
//               <a href="/">Careers</a>
//             </li>
//           </ul>
//           {/* <ul className="footer_nav-title">
//             Quick Link
//             <li>Share Location</li>
//             <li>Orders Tracking</li>
//             <li>Size Guide</li>
//             <li>FAQs</li>
//           </ul>
//           <ul className="footer_nav-title">
//             Legal
//             <li>Terms & conditions</li>
//             <li>Privacy Policy</li>
//           </ul> */}
//         </div>
//       </section>
//     </>
//   );
// }