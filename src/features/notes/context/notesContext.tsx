import { createContext, useContext, useState } from 'react';

const useNotes = () => {
	const [activeNote, setActiveNote] = useState<null | string>(null);

	return { activeNote, setActiveNote };
};

const ContextData = createContext({} as ReturnType<typeof useNotes>);
export const useNotesContext = () => useContext(ContextData);

export const NotesContextProvider = ({ children }: { children: React.ReactNode }) => (
	<ContextData.Provider value={useNotes()}>{children}</ContextData.Provider>
);
