import { api } from 'src/libs/api';

import { useMutation } from '@tanstack/react-query';
import { CreateNoteResponseInterface, NoteCreateRequestInterface } from 'src/features/notes/models';
import { queryClient } from 'src/libs/reactQuery';

const createNote = async (data: NoteCreateRequestInterface): Promise<CreateNoteResponseInterface> => api.post(`api/Note`, data);

export const useCreateNote = () =>
	useMutation({
		mutationFn: createNote,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['notes'],
			});
		},
	});
