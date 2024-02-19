// REDUX

// HOOKS

// MODELS
import { NotesListInterface } from 'src/features/notes/models';

// COMPONENTS

// STYLES
import s from 'src/features/notes/components/styles.module.css';

export const NotesListItem = ({ name, content }: NotesListInterface) => (
	<div className={s.noteListItem}>
		<p>{name}</p>
		<span>{content}</span>
	</div>
);
