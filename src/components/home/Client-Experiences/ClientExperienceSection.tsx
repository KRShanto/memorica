import dynamic from 'next/dynamic';
import {people} from '@/components/Dummy-Data/people'

const DynamicSwiper = dynamic(() => import('./DynamicSwiper'), {
  // ssr: false, // Disable SSR for this component
});

const ClientExperienceSection = () => {
  return (
    <div className="p-3 grid place-content-center place-items-center">
      <h1 className="text-center text-2xl font-semibold tracking-widest w-3/4 mb-8">Client Experience That Inspire Us To Keep Creating Excellence</h1>
      <DynamicSwiper people={people} />
    </div>
  );
};

export default ClientExperienceSection;
