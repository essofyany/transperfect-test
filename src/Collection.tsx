import { ChangeEvent, useState } from 'react';

interface ICollection {
	items: { name: string }[];
	onFilter: (phrase: string) => void;
}

export function Collection({ items, onFilter }: ICollection) {
	const [search, setSearch] = useState('');
	function onChange(e: ChangeEvent<HTMLInputElement>) {
		const value = e.target.value.toLowerCase();
		setSearch(value);
		onFilter(value);
	}

	return (
		<div className='space-y-4'>
			<input
				type='text'
				className='p-2 border w-full rounded-md'
				placeholder='Type something...'
				value={search}
				onChange={onChange}
			/>
			<ul className='flex flex-col gap-2 border rounded-md overflow-hidden p-2'>
				{items.length > 0 ? (
					items.map(({ name }) => (
						<li key={name} className='p-2 bg-slate-100 rounded-md'>
							{name}
						</li>
					))
				) : (
					<li className='p-8 text-center text-slate-300 text-lg'>No Results</li>
				)}
			</ul>
		</div>
	);
}
