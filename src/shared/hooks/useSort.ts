import { useState } from 'react';

export type SortType = 'asc' | 'desc';

export const useSort = () => {
	const [sortBy, setSortBy] = useState<SortType>('desc');

	return { sortBy, setSortBy };
};
