export interface NotesListInterface {
	content: string;
	createdOn: string;
	id: string;
	name: string;
	updatedOn: string;
	userId: string;
}

export interface NoteCreateRequestInterface {
	name: string;
	content: string;
}

export interface CreateNoteResponseInterface {
	id: string;
}

export interface NoteInterface extends NoteCreateRequestInterface {
	id: string;
}
