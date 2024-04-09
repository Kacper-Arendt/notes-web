import clsx from 'clsx';
import { t } from 'i18next';
import { FaRegStickyNote } from 'react-icons/fa';
import { BsSortNumericDown, BsSortNumericDownAlt } from 'react-icons/bs';

// CONTEXT
import { useNotesContext } from 'src/features/notes/context/notesContext';

// STYLES
import s from 'src/features/notes/components/styles.module.css';

export const NotesListHeader = () => {
	const { setActiveNote, activeNote, sortBy, setSortBy } = useNotesContext();

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
			title: 'general.addNote',
			onClick: () => setActiveNote(null),
			active: !activeNote,
		},
	];

	return (
		<div className={s.notesListHeader}>
			{buttons.map(({ title, onClick, Icon, active }) => (
				<button key={title} type="button" onClick={onClick} aria-label={t(title)} className="text-xl">
					<Icon className={clsx('ease-in duration-200 hover:fill-primary', { 'fill-primary': active })} />
				</button>
			))}
		</div>
	);
};
