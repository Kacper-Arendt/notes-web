import { api } from 'src/libs/api';

import { useMutation } from '@tanstack/react-query';
import { queryClient } from 'src/libs/reactQuery';

const taskListDelete = async (id: string): Promise<void> => api.delete(`api/TaskList/${id}`);

export const useDeleteTaskList = () =>
	useMutation({
		mutationFn: taskListDelete,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [],
			});
		},
	});
