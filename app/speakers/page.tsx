import CategoryHeader from '@/components/CategoryHeader/CategoryHeader';
import CategoryLinks from '@/components/CategoryLinks/CategoryLinks';
import About from '@/components/About/About';
import CategorySKUS from '@/components/CategorySKUS/CategorySKUS';

export const metadata = {
  title: 'Headphones',
  description: 'Generated by create next app',
};

export default function HeadphonesPage() {
  return (
    <div>
      <CategoryHeader name={'SPEAKERS'} />
      <CategorySKUS category="speakers" />
      <CategoryLinks />
      <About />
    </div>
  );
}
