import { useQuery } from '@tanstack/react-query';

// API
import { api } from 'src/libs/api';

// MODELS
import { ExtractFnReturnType } from 'src/libs/reactQuery';
import { NotesListInterface } from 'src/features/notes/models';
import { ApiConfigInterface, ApiOptionsInterface } from 'src/shared/models/Api';

interface GetNotesInterface extends ApiConfigInterface {}

export const getNotes = async ({ signal }: GetNotesInterface): Promise<NotesListInterface[] | null> => {
	try {
		return await api.get(`api/Note`, { signal });
	} catch (e) {
		return null;
	}
};
type QueryFnType = typeof getNotes;

export const useNotesQuery = ({ config }: ApiOptionsInterface<QueryFnType, GetNotesInterface>) =>
	useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryFn: ({ signal }) => getNotes({ signal }),
		queryKey: ['notes'],
	});
