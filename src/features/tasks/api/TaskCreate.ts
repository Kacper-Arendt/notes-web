import { useMutation } from '@tanstack/react-query';

// LIBS
import { api } from 'src/libs/api';
import { queryClient } from 'src/libs/reactQuery';

// MODELS
import { ITaskCreateRequest } from 'src/features/tasks/models';

const taskCreate = async (data: ITaskCreateRequest): Promise<null> => api.post(`api/TaskItem`, data);

export const useCreateTask = () =>
	useMutation({
		mutationFn: taskCreate,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [],
			});
		},
	});
