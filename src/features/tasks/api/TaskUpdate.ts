import { useMutation } from '@tanstack/react-query';

// LIBS
import { api } from 'src/libs/api';
import { queryClient } from 'src/libs/reactQuery';

// MODELS
import { ITask } from 'src/features/tasks/models';

const taskUpdate = async (data: ITask): Promise<null> => api.put(`api/TaskItem/${data.taskId}`, data);

export const useUpdateTask = () =>
	useMutation({
		mutationFn: taskUpdate,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [],
			});
		},
	});
