import { Skelet } from "../../classSkelet";

export class Hero extends Skelet {
  createSliderImg(imgPaths, prefix = "hero__slide") {
    const SliderContentItems = [];

    imgPaths.forEach((path) => {
      let slideContentWrapper = new Skelet("div", `${prefix}-content`),
        slideContentImg = new Skelet("img", `${prefix}-img`);

      slideContentImg.setAttr("src", path)
      slideContentWrapper.insertItems(slideContentImg);

      SliderContentItems.push(slideContentWrapper);
    });

    return SliderContentItems;
  }
}