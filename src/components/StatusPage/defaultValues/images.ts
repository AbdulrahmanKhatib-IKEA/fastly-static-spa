import image1 from '../dam/gc1.jpg';
import image2 from '../dam/gc2.jpg';
import image3 from '../dam/gc3.jpg';
import image4 from '../dam/gc4.jpg';

export interface ImageProps {
  uri: string;
  id: string;
}

export const images: ImageProps[] = [
  { uri: image1, id: '1' },
  { uri: image2, id: '2' },
  { uri: image3, id: '3' },
  { uri: image4, id: '4' },
];
