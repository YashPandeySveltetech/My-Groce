/** @format */

/** @format */
'use client';

import React, { useEffect, useState } from 'react';
import Table from '@/components/table';
import Pagination from '@/components/pagination';
import Button from '@/components/commonComponents/button';
import SearchField from '@/components/commonComponents/searchField';
import { useRouter } from 'next/navigation';
import { subCategoryHeader } from '@/assets/constant/table';
import { getSubCotegoryList } from '@/services/categoryServices';
import { apiHandler } from '@/services/axios';
function SubCategory() {
	const route = useRouter();
	const [subCategoryList, setsubCategoryList] = useState([]);
	const getcategory = async () => {
		apiHandler(() => getSubCotegoryList(''), {
			onSuccess: (data) => {
				setsubCategoryList(data?.data);
				// setcategoryList(data?.data);
				// deleteCookie('access_token');
				// setIsDropDownOpen(false);
				// router.push('/login');
			},
			onError: (e) => {
				// Your error handling logic here
			},
			final: () => {
				// Your final logic here
			},
		});
	};
	useEffect(() => {
		getcategory();
	}, []);
	return (
		<div className='flex flex-col gap-5'>
			<div className='flex justify-between'>
				<SearchField />
				<div className='text-blue-500 text-lg font-bold'> SUB CATEGORY</div>
				<Button
					handleClick={() => route.push('/addSubCategory')}
					btn_name='ADD SUB CATEGORY'
				/>
			</div>

			<div className='flex flex-col gap-2'>
				<Table
					data={subCategoryList}
					headers={subCategoryHeader}
					type={'sub-category'}
				/>
				<div className='w-full flex flex-col items-center'>
					<Pagination />
				</div>
			</div>
		</div>
	);
}

export default SubCategory;
