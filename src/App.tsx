import { useState } from 'react';

import { Collection } from './Collection';
import { data } from './data';

export default function App() {
	const [list, setList] = useState(data);

	function onFilter(phrase: string) {
		if (!phrase) {
			setList(data);
		} else {
			const filteredList = list.filter(({ name }) =>
				name.toLowerCase().includes(phrase),
			);
			setList(filteredList);
		}
	}

	return (
		<div className='max-w-xl mx-auto h-screen overflow-auto p-8 space-y-8'>
			<h1 className='text-3xl font-bold'>Collection</h1>
			<Collection items={list} onFilter={onFilter} />
		</div>
	);
}
