import { api } from 'src/libs/api';

import { useMutation } from '@tanstack/react-query';
import { CreateNoteResponseInterface, NoteInterface } from 'src/features/notes/models';
import { queryClient } from 'src/libs/reactQuery';

const updateNote = async (data: NoteInterface): Promise<CreateNoteResponseInterface> => api.put(`api/Note/${data.id}`, data);

export const useUpdateNote = () =>
	useMutation({
		mutationFn: updateNote,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['notes'],
			});
		},
	});
