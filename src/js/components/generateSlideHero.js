import { ConstructDOM } from "../core/DOM/ConstructDOM";

export function generateSlideHero(
  images,
  wrapperClassNames = [],
  imageClassNames = [],
) {
  return images.map((imageSrc) => {
    const wrapper = new ConstructDOM("div", wrapperClassNames);
    const image = new ConstructDOM("img", imageClassNames);
    image.setAttr({
      "src": imageSrc,
    });

    wrapper.insertItems([image]);
    return wrapper;
  });
}
