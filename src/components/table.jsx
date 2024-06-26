/** @format */

import React from 'react';

function TableComponet({ headers, data, type }) {
	console.log(data, 'table data');
	const Row = (item) => {
		switch (type) {
			case 'product':
				return (
					<tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
						<td class='w-4 p-4'>
							<div class='flex items-center'>
								<input
									id='checkbox-table-search-1'
									type='checkbox'
									class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								/>
								<label
									for='checkbox-table-search-1'
									class='sr-only'
								>
									checkbox
								</label>
							</div>
						</td>
						<th
							scope='row'
							class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
						>
							{item.productName}
						</th>
						<td class='px-6 py-4'>{item.imgColor}</td>
						<td class='px-6 py-4'>{item.varients?.length}</td>
						<td class='px-6 py-4'>{0}</td>
						<td class='px-6 py-4'>{item.category}</td>
						<td class='px-6 py-4'>{item.subCategory}</td>
						<td class='flex items-center px-6 py-4'>
							<a
								href='#'
								class='font-medium text-blue-600 dark:text-blue-500 hover:underline'
							>
								Edit
							</a>
							<a
								href='#'
								class='font-medium text-red-600 dark:text-red-500 hover:underline ms-3'
							>
								Remove
							</a>
						</td>
					</tr>
				);
				break;
			case 'category':
				return (
					<tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
						<td class='w-4 p-4'>
							<div class='flex items-center'>
								<input
									id='checkbox-table-search-1'
									type='checkbox'
									class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								/>
								<label
									for='checkbox-table-search-1'
									class='sr-only'
								>
									checkbox
								</label>
							</div>
						</td>
						<th
							scope='row'
							class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
						>
							{item?.name}
						</th>
						<td class='px-6 py-4'>{item?.slang}</td>
						<td class='px-6 py-4'>{item?._id}</td>
						<td class='px-6 py-4'>{item?.type}</td>
						<td class='flex items-center px-6 py-4'>
							<a
								href='#'
								class='font-medium text-blue-600 dark:text-blue-500 hover:underline'
							>
								Edit
							</a>
							<a
								href='#'
								class='font-medium text-red-600 dark:text-red-500 hover:underline ms-3'
							>
								Remove
							</a>
						</td>
					</tr>
				);
				break;
			case 'sub-category':
				return (
					<tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
						<td class='w-4 p-4'>
							<div class='flex items-center'>
								<input
									id='checkbox-table-search-1'
									type='checkbox'
									class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								/>
								<label
									for='checkbox-table-search-1'
									class='sr-only'
								>
									checkbox
								</label>
							</div>
						</td>
						<th
							scope='row'
							class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
						>
							{item?.name}
						</th>
						<th
							scope='row'
							class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
						>
							{item?.name}
						</th>
						<td class='px-6 py-4'>{item?.slang}</td>
						<td class='px-6 py-4'>{item?._id}</td>
						<td class='px-6 py-4'>{item?.type}</td>
						<td class='flex items-center px-6 py-4'>
							<a
								href='#'
								class='font-medium text-blue-600 dark:text-blue-500 hover:underline'
							>
								Edit
							</a>
							<a
								href='#'
								class='font-medium text-red-600 dark:text-red-500 hover:underline ms-3'
							>
								Remove
							</a>
						</td>
					</tr>
				);
				break;
			default:
				console.log('third');
		}
	};
	return (
		<div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
			<table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
				<thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr>
						<th
							scope='col'
							class='p-4'
						>
							<div class='flex items-center'>
								<input
									id='checkbox-all-search'
									type='checkbox'
									class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								/>
								<label
									for='checkbox-all-search'
									class='sr-only'
								>
									checkbox
								</label>
							</div>
						</th>
						{headers?.map((item) => (
							<th
								scope='col'
								class='px-6 py-3'
							>
								{item}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<>{Row(item)}</>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default TableComponet;
