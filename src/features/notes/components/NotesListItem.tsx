// MODELS
import { NotesListInterface } from 'src/features/notes/models';

// STYLES
import s from 'src/features/notes/components/styles.module.css';
import clsx from 'clsx';

export const NotesListItem = ({ name, content, active }: NotesListInterface & { active: boolean }) => (
	<div className={clsx(s.noteListItem, 'ease-in duration-100 hover:border-primary-light', { 'border-primary': active })}>
		<p className="">{name}</p>
		<span>{content}</span>
	</div>
);
