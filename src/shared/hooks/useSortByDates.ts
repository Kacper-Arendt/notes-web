import { useMemo } from 'react';

export const useSortByDates = <T extends { createdOn: string }>(data: T[], sortBy: 'asc' | 'desc'): T[] =>
	useMemo(
		() =>
			[...data].sort((a, b) => {
				const dateA = new Date(a.createdOn).getTime();
				const dateB = new Date(b.createdOn).getTime();

				if (sortBy === 'asc') return dateA - dateB;
				if (sortBy === 'desc') return dateB - dateA;
				return 0;
			}),
		[data, sortBy],
	);
