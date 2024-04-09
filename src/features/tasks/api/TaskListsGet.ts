import { useQuery } from '@tanstack/react-query';

// API
import { api } from 'src/libs/api';

// MODELS
import { ExtractFnReturnType } from 'src/libs/reactQuery';
import { ApiConfigInterface, ApiQueryOptionsInterface } from 'src/shared/models/Api';
import { ITaskList } from 'src/features/tasks/models';

interface GetNotesInterface extends ApiConfigInterface {}

export const taskListsGet = async ({ signal }: GetNotesInterface): Promise<ITaskList[] | null> => {
	try {
		return await api.get(`api/TaskList`, { signal });
	} catch (e) {
		return null;
	}
};
type QueryFnType = typeof taskListsGet;

export const useTaskListQuery = ({ config }: ApiQueryOptionsInterface<QueryFnType, GetNotesInterface>) =>
	useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryFn: ({ signal }) => taskListsGet({ signal }),
		queryKey: ['taskLists'],
	});
