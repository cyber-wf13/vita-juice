import {swiperCarousel} from './carousel';
import {createElement} from '../../utils';

const hero = createElement("div", "hero");

hero.append(swiperCarousel);

export {
  hero
}
