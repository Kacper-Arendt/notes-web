import { BsSortNumericDown, BsSortNumericDownAlt } from 'react-icons/bs';
import { FaRegStickyNote } from 'react-icons/fa';
import { t } from 'i18next';
import clsx from 'clsx';
import { ErrorBoundary } from 'react-error-boundary';

// MODELS
import { SortType } from 'src/shared/hooks/useSort';

// STYLES
import s from 'src/components/lists/styles.module.css';

interface IListHeader {
	onCreateNew: () => void;
	setSortBy: (sortBy: SortType) => void;
	sortBy: SortType;
	isCreateNewActive: boolean;
}

export const ListHeader = ({ onCreateNew, setSortBy, sortBy, isCreateNewActive }: IListHeader) => {
	const buttons = [
		{
			Icon: BsSortNumericDown,
			title: 'notes.sortByAscending',
			onClick: () => setSortBy('asc'),
			active: sortBy === 'asc',
		},
		{
			Icon: BsSortNumericDownAlt,
			title: 'notes.sortByDescending',
			onClick: () => setSortBy('desc'),
			active: sortBy === 'desc',
		},
		{
			Icon: FaRegStickyNote,
			title: 'general.addItem',
			onClick: () => onCreateNew(),
			active: isCreateNewActive,
		},
	];

	return (
		<ErrorBoundary FallbackComponent={() => null}>
			<div className={s.notesListHeader}>
				{buttons.map(({ title, onClick, Icon, active }) => (
					<button key={title} type="button" onClick={onClick} aria-label={t(title)} className="text-xl">
						<Icon className={clsx('ease-in duration-200 hover:fill-primary', { 'fill-primary': active })} />
					</button>
				))}
			</div>
		</ErrorBoundary>
	);
};
