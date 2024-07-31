/** @format */

import React from 'react';
import OurCategoryCard from '@/components/ourCategoryCard';
import CategoryBanner from '@/components/categoryBanner';
import {
	bannerData,
	productCardItems,
} from '@/assets/constant/categoryConstant';
import FlashSaleBanner from '@/components/flashSaleBanner';
import ProductCard from '@/components/productCard';
import Slider from '@/components/slider';

function Page() {
	return (
		<>Dashboard</>
		// <div>
		//   <div style={{backgroundImage: "url(/hero-bg.png)"}}>
		//     <Slider />
		//   </div>
		//   <OurCategoryCard />

		//   <div className="flex flex-wrap justify-center w-[85%] mx-auto">
		//     {bannerData.map((item, index) => (
		//       <CategoryBanner {...item} />
		//     ))}
		//   </div>

		//   <div className="w-[80%] mx-auto">
		//     <FlashSaleBanner />
		//   </div>
		//   <div className="flex  justify-center gap-8">
		//     {productCardItems.map((item, index) => (
		//       <ProductCard {...item} />
		//     ))}
		//   </div>
		//   {/* <div>
		//     <Footer />
		//   </div> */}
		// </div>
	);
}

export default Page;
