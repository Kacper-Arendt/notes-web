import { api } from 'src/libs/api';

import { useMutation } from '@tanstack/react-query';
import { CreateNoteResponseInterface, NoteCreateRequestInterface } from 'src/features/notes/models';
import { queryClient } from 'src/libs/reactQuery';

const addNote = async (data: NoteCreateRequestInterface): Promise<CreateNoteResponseInterface> => api.post(`api/Note`, data);

export const useAddNote = () =>
	useMutation({
		mutationFn: addNote,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['notes'],
			});
		},
	});
