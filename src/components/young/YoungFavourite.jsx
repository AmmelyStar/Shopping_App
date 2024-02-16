import favImg from './../../img/images/promo-01.jpg';
import fav1Img from './../../img/images/promo-02.jpg';
import Card from 'components/card/Card';
import './young.css'

export default function YoungFavourite() {
  return (
    <>
      <section className="young">
        <h3 className="title-2">Young’s Favourite</h3>
        <div className="container">
          <Card title="Trending on instagram" img={favImg} />
          <Card title="All Under $40" img={fav1Img} />
        </div>
      </section>
    </>
  );
}
