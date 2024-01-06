import './title.css';
import { useState } from 'react';

const Title = () => {
  const [hovered, setHovered] = useState(false);
  const colors = [
    '#FF5733',
    '#33FF57',
    '#5733FF',
    '#FFFF33',
    '#33FFFF',
    '#FF33FF',
    '#FF3333',
    '#33FF33',
    '#3333FF',
    '#999999',
  ];

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const randomColor = getRandomColor();

  return (
    <div className="bg">
      <div
        className={`title ${hovered ? 'hovered' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        style={{ '--hover-color': randomColor }} // Set CSS variable with random color
      >
        <svg
          id="logo"
          width="588"
          height="212"
          viewBox="0 0 588 212"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M570.036 210.96C574.921 210.96 578.98 209.455 581.831 206.911C584.687 204.364 586.276 200.821 586.276 196.88C586.276 192.885 584.692 189.284 581.838 186.69C578.988 184.099 574.927 182.56 570.036 182.56C565.088 182.56 560.997 184.097 558.13 186.688C555.26 189.283 553.676 192.885 553.676 196.88C553.676 200.821 555.265 204.365 558.137 206.913C561.004 209.456 565.093 210.96 570.036 210.96Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M479.196 180.76H478.131L478.198 181.823C478.816 191.648 483.067 198.947 489.709 203.765C496.319 208.559 505.216 210.84 515.076 210.84C525.519 210.84 533.871 207.907 539.628 202.884C545.396 197.851 548.476 190.789 548.476 182.72C548.476 168.965 538.023 162.641 528.124 158.473C525.931 157.55 523.738 156.722 521.671 155.941C521.392 155.836 521.116 155.731 520.842 155.627C518.525 154.75 516.401 153.929 514.59 153.077C512.771 152.221 511.344 151.367 510.38 150.454C509.436 149.558 508.996 148.664 508.996 147.68C508.996 146.435 509.355 145.625 509.828 145.132C510.299 144.64 510.981 144.36 511.836 144.36C513.101 144.36 514.233 144.701 515.074 145.507C515.914 146.312 516.605 147.715 516.717 150.127L516.761 151.08H517.716H546.396H547.437L547.395 150.039C547.024 140.956 543.426 133.801 537.217 128.938C531.035 124.095 522.363 121.6 511.956 121.6C502.748 121.6 494.389 123.855 488.305 128.367C482.19 132.902 478.438 139.676 478.436 148.512C478.313 156.03 480.827 161.464 484.699 165.523C488.54 169.549 493.668 172.171 498.697 174.198C501.007 175.128 503.319 175.942 505.49 176.707C505.687 176.776 505.882 176.845 506.076 176.913C508.428 177.742 510.583 178.515 512.424 179.336C514.273 180.161 515.725 181 516.709 181.929C517.666 182.833 518.143 183.781 518.156 184.885C518.154 186.057 517.683 186.8 516.991 187.287C516.252 187.807 515.185 188.08 513.996 188.08C512.798 188.08 511.572 187.833 510.595 187C509.63 186.176 508.74 184.634 508.513 181.683L508.442 180.76H507.516H479.196Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M472.796 124.04V123.04H471.796H415.156H414.156V124.04V209V210H415.156H471.796H472.796V209V187.76V186.76H471.796H442.796V176.76H468.196H469.196V175.76V155.72V154.72H468.196H442.796V146.28H471.796H472.796V145.28V124.04Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M375.53 209V210H376.53H403.17H404.17V209V124.04V123.04H403.17H376.53H375.53V124.04V153.64H352.21V124.04V123.04H351.21H324.57H323.57V124.04V209V210H324.57H351.21H352.21V209V176.88H375.53V209Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M244.825 145.16V146.16H245.825H267.145V209V210H268.145H294.785H295.785V209V146.16H317.345H318.345V145.16V124.04V123.04H317.345H245.825H244.825V124.04V145.16Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M197.455 210.84C221.987 210.84 242.015 192.292 242.015 166.16C242.015 140.028 222.227 121.6 197.455 121.6C172.812 121.6 152.655 140.019 152.655 166.16C152.655 192.298 172.808 210.84 197.455 210.84ZM197.455 184C192.242 184 188.369 182.206 185.782 179.162C183.175 176.096 181.775 171.642 181.775 166.16C181.775 160.554 183.177 156.072 185.782 153.008C188.366 149.967 192.238 148.2 197.455 148.2C202.546 148.2 206.39 149.963 208.978 153.008C211.585 156.075 213.015 160.559 213.015 166.16C213.015 171.637 211.587 176.093 208.978 179.162C206.387 182.21 202.541 184 197.455 184Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M95.3516 123.04H94.3516V124.04V209V210H95.3516H147.672H148.672V209V188.84V187.84H147.672H122.992V124.04V123.04H121.992H95.3516Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M85.7601 157.68H86.9487L86.7454 156.509C84.9689 146.279 80.18 137.688 72.9296 131.656C65.6788 125.624 56.0246 122.2 44.6001 122.2C31.3414 122.2 20.5667 126.758 13.1097 134.617C5.65893 142.468 1.6001 153.53 1.6001 166.4C1.6001 179.27 5.65893 190.331 13.1097 198.183C20.5667 206.042 31.3414 210.6 44.6001 210.6C56.0246 210.6 65.6788 207.176 72.9296 201.144C80.18 195.112 84.9689 186.521 86.7454 176.291L86.9487 175.12H85.7601H57.6801H57.0316L56.7671 175.712C54.4066 180.995 49.7221 184 44.1201 184C39.921 184 36.5866 182.307 34.2762 179.318C31.9445 176.302 30.6001 171.89 30.6001 166.4C30.6001 160.91 31.9445 156.498 34.2762 153.482C36.5866 150.493 39.921 148.8 44.1201 148.8C49.7221 148.8 54.4066 151.805 56.7671 157.088L57.0316 157.68H57.6801H85.7601Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M461.898 4.04004V3.04004H460.898H404.258H403.258V4.04004V89V90H404.258H460.898H461.898V89V67.76V66.76H460.898H431.898V56.76H457.298H458.298V55.76V35.72V34.72H457.298H431.898V26.28H460.898H461.898V25.28V4.04004Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M317.528 3.04004H316.528V4.04004V51.92C316.528 64.673 320.5 74.4334 327.287 81.0036C334.068 87.5673 343.549 90.84 354.368 90.84C365.184 90.84 375.042 87.5698 382.207 81.0233C389.387 74.4641 393.768 64.702 393.768 51.92V4.04004V3.04004H392.768H366.248H365.248V4.04004V51.92C365.248 55.4532 364.463 58.3772 362.842 60.3997C361.252 62.3844 358.745 63.64 354.968 63.64C351.193 63.64 348.787 62.3873 347.288 60.4192C345.752 58.4014 345.048 55.4754 345.048 51.92V4.04004V3.04004H344.048H317.528Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M310.798 103.8H312.785L311.601 102.204L294.871 79.6654C303.806 71.6834 309.398 60.0102 309.398 46.1601C309.398 20.0279 289.61 1.6001 264.838 1.6001C240.194 1.6001 220.038 20.0191 220.038 46.1601C220.038 72.2975 240.191 90.8401 264.838 90.8401C266.798 90.8401 268.782 90.743 270.693 90.4556L278.503 103.319L278.795 103.8H279.358H310.798ZM264.838 64.0001C259.625 64.0001 255.752 62.2063 253.165 59.1624C250.558 56.0955 249.158 51.6418 249.158 46.1601C249.158 40.5539 250.56 36.0722 253.165 33.0077C255.749 29.9671 259.62 28.2001 264.838 28.2001C269.929 28.2001 273.773 29.963 276.361 33.0077C278.968 36.0749 280.398 40.5587 280.398 46.1601C280.398 51.637 278.97 56.0927 276.361 59.1624C273.77 62.2105 269.924 64.0001 264.838 64.0001Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M183.766 89V90H184.766H211.406H212.406V89V4.04004V3.04004H211.406H184.766H183.766V4.04004V89Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M146.09 3.04004H145.09V4.04004V44.1031L118.729 3.49554L118.433 3.04004H117.89H91.25H90.25V4.04004V89V90H91.25H117.89H118.89V89V49.6101L145.255 89.5509L145.552 90H146.09H172.73H173.73V89V4.04004V3.04004H172.73H146.09Z"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M4.52002 3.04004H3.52002V4.04004V51.92C3.52002 64.673 7.49186 74.4334 14.2795 81.0036C21.0605 87.5673 30.5412 90.84 41.36 90.84C52.1758 90.84 62.034 87.5698 69.1995 81.0233C76.379 74.4641 80.76 64.702 80.76 51.92V4.04004V3.04004H79.76H53.24H52.24V4.04004V51.92C52.24 55.4532 51.4553 58.3772 49.8347 60.3997C48.2443 62.3844 45.737 63.64 41.96 63.64C38.1857 63.64 35.7795 62.3873 34.2806 60.4192C32.7438 58.4014 32.04 55.4754 32.04 51.92V4.04004V3.04004H31.04H4.52002Z"
            stroke="black"
            stroke-width="2"
          />
        </svg>
      </div>

      {/* <h1 className="title">
        <span>unique</span>
        <span>clothes.</span>
      </h1> */}
    </div>
  );
};

export default Title;