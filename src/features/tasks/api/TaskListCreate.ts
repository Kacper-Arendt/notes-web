import { useMutation } from '@tanstack/react-query';

// LIBS
import { api } from 'src/libs/api';
import { queryClient } from 'src/libs/reactQuery';

// MODELS
import { ITaskList, ITaskListCreateRequest } from 'src/features/tasks/models';

const taskListCreate = async (data: ITaskListCreateRequest): Promise<ITaskList> => api.post(`api/TaskList`, data);

export const useCreateTaskList = () =>
	useMutation({
		mutationFn: taskListCreate,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['taskLists'],
			});
		},
	});
