import { api } from 'src/libs/api';

import { useMutation } from '@tanstack/react-query';
import { queryClient } from 'src/libs/reactQuery';

const deleteNote = async (id: string): Promise<void> => api.delete(`api/Note/${id}`);

export const useDeleteNote = () =>
	useMutation({
		mutationFn: deleteNote,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['notes'],
			});
		},
	});
