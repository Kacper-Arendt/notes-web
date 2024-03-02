// MODELS
import { NotesListInterface } from 'src/features/notes/models';

// STYLES
import s from 'src/features/notes/components/styles.module.css';
import clsx from 'clsx';
import { DateTime } from 'src/components/dateTime/DateTime';

export const NotesListItem = ({ name, content, active, createdOn, updatedOn }: NotesListInterface & { active: boolean }) => (
	<div className={clsx(s.noteListItem, 'ease-in duration-100 hover:border-primary-light', { 'border-primary': active })}>
		<p className="">{name}</p>
		<span>{content}</span>
		<DateTime value={updatedOn ?? createdOn} className="text-sm text-neutral-500" />
	</div>
);
