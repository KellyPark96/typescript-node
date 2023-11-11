import { Swiper, SwiperSlide } from 'swiper/react';
import { Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Global } from './style';
import { postImageProp } from '../PostImages';

interface Props {
  images: Array<postImageProp>;
  onClose(): void;
}

const ImagesZoom = ({ images, onClose }: Props) => {
  console.log(images);

  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose} />
      </Header>
      <SlickWrapper>
        <Swiper loop={true} slidesPerView={1}>
          <div style={{ display: 'flex' }}>
            {images.map((v) => (
              <SwiperSlide key={v.src}>
                <ImgWrapper>
                  <img src={v.src} alt={v.src} />
                </ImgWrapper>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </SlickWrapper>
    </Overlay>
  );
};

export default ImagesZoom;
