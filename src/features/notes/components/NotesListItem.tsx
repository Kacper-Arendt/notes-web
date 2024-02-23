import { Link } from '@tanstack/react-router';

// MODELS
import { NotesListInterface } from 'src/features/notes/models';

// STYLES
import s from 'src/features/notes/components/styles.module.css';

export const NotesListItem = ({ id, name, content }: NotesListInterface) => (
	<div className={s.noteListItem}>
		<div>
			<Link to="/notes/$id" params={{ id }}>
				{name}
			</Link>
		</div>
		<span>{content}</span>
	</div>
);
