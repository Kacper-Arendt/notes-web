import { useQuery } from '@tanstack/react-query';

// API
import { api } from 'src/libs/api';

// MODELS
import { ExtractFnReturnType } from 'src/libs/reactQuery';
import { NotesListInterface } from 'src/features/notes/models';
import { ApiConfigInterface, ApiQueryOptionsInterface } from 'src/shared/models/Api';

interface GetNoteInterface extends ApiConfigInterface {
	id: string;
}

export const getNote = async ({ signal, id }: GetNoteInterface): Promise<NotesListInterface | null> => {
	try {
		return await api.get(`api/Note/${id}`, { signal });
	} catch (e) {
		return null;
	}
};
type QueryFnType = typeof getNote;

export const useNoteQuery = ({ config, params: { id } }: ApiQueryOptionsInterface<QueryFnType, GetNoteInterface>) =>
	useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryFn: ({ signal }) => getNote({ signal, id }),
		queryKey: ['note', id],
	});
