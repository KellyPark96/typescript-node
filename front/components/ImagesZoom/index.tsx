import React, { FC, useState } from 'react';
import Slick from 'react-slick';

import { Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator } from './style';
import { createGlobalStyle } from 'styled-components';

interface Props {
  images: [{ src: string }];

  onClose(): void;
}

const Global = createGlobalStyle`
  .slick-slide {
    display: inline-block;
  }
`;
const ImagesZoom: FC<Props> = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose} />
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentSlide(slide)}
            infinite={false}
            arrows
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((v, index) => (
              <ImgWrapper key={index}>
                <img src={v.src} alt={v.src} />
              </ImgWrapper>
            ))}
          </Slick>
          <Indicator>
            <div>
              {currentSlide + 1}
              {' '}
              /
              {images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

export default ImagesZoom;