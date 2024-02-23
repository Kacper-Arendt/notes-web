import { ReactNode } from 'react';

// STYLES
import s from './styles.module.css';

export const CreateNoteContainer = ({ children }: { children: ReactNode }) => {
	return <div className={s.createNoteContainer}>{children}</div>;
};
