import 'swiper/css';
import classNames from 'classnames';
import './SliderWithThumbs.scss';

const SliderWithThumbs = ({
  children,
  className,
  sliderParams = {},
  thumbsTarget = '',
  ...props
}) => {
    return (
        <div
            className={classNames('slider-with-thumbs', className)}
            data-js-thumbs-slider={JSON.stringify(sliderParams)}
            data-js-thumbs-slider-target={thumbsTarget}
            {...props}
        >
            <div className="swiper" data-js-thumbs-swiper=''>
                <div className="swiper-wrapper">
                    {children.map((child, index) => (
                        <div className="swiper-slide" key={index}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SliderWithThumbs;
