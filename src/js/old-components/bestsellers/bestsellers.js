import { createElement, createTitle } from "../../utils";
import { createSwiper } from '../../carousel';
import { cardItems } from './card';

const bestSection = createElement("section", "bestsellers"),
  bestTitle = createTitle("хиты продаж", "bestsellers__title"),
  bestWrapper = createElement("div", "bestsellers__wrapper"),
  bestCarousel = createSwiper(cardItems, "swiper-bestsellers");

bestWrapper.append(bestCarousel);
bestSection.append(bestTitle, bestWrapper);

export {
  bestSection
}