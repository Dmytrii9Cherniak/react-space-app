import { atom } from 'recoil';
import firstImage from '../media/firstCartImage.png';
import secondImage from '../media/secondImagePhoto.png'
import thirdImage from '../media/thirdImagePhoto.png'

export const imagesState = atom({
    key: 'arrayImages',
    default: [
        firstImage,
        secondImage,
        thirdImage
    ]
});
