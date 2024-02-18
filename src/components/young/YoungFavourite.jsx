import favImg from './../../img/images/promo-01.jpg';
import fav1Img from './../../img/images/promo-02.jpg';
import Card from 'components/card/Card';
import './young.css'

const Favorite = () => {
  return (
    <section className="favorite">
      <div className="container">
        <div className="favorite__header">
          <h2 className="favorite__title">Young’s Favourite</h2>
        </div>
        <div className="favorite__cards">
          <Card title="Trending on instagram" img={favImg} />
          <Card title="All Under $40" img={fav1Img} />
        </div>
      </div>
    </section>
  );
};

export default Favorite;
