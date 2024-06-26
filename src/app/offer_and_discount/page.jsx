/** @format */
'use client';
import React from 'react';
import Table from '@/components/table';
import Pagination from '@/components/pagination';
import Button from '@/components/commonComponents/button';
import SearchField from '@/components/commonComponents/searchField';
import { useRouter } from 'next/navigation';

function OfferAndDiscount() {
	const route = useRouter();
	return (
		<div className='flex flex-col gap-5'>
			<div className='flex justify-between'>
				<SearchField />{' '}
				<div className='text-blue-600 text-lg font-bold'>
					OFFER AND DISCOUNT
				</div>
				<Button
					handleClick={() => route.push('/addOfferAndDiscount')}
					btn_name='ADD OFFER AND DISCOUNT'
				/>
			</div>

			<div className='flex flex-col gap-2'>
				<Table />
				<div className='w-full flex flex-col items-center'>
					<Pagination />
				</div>
			</div>
		</div>
	);
}

export default OfferAndDiscount;
