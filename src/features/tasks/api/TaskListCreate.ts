import { useMutation } from '@tanstack/react-query';

// LIBS
import { api } from 'src/libs/api';
import { queryClient } from 'src/libs/reactQuery';

// MODELS
import { ITaskCreateRequest } from 'src/features/tasks/models';

const taskListCreate = async (data: ITaskCreateRequest): Promise<null> => api.post(`api/TaskList`, data);

export const useCreateTaskList = () =>
	useMutation({
		queryKey: ['taskLists'],
		mutationFn: taskListCreate,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [],
			});
		},
	});
