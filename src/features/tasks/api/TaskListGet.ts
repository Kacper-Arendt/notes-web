import { useQuery } from '@tanstack/react-query';

// API
import { api } from 'src/libs/api';

// MODELS
import { ExtractFnReturnType } from 'src/libs/reactQuery';
import { ApiConfigInterface, ApiQueryOptionsInterface } from 'src/shared/models/Api';
import { ITaskListFull } from 'src/features/tasks/models';

interface GetNotesInterface extends ApiConfigInterface {
	id: string;
}

export const taskListGet = async ({ signal, id }: GetNotesInterface): Promise<ITaskListFull | null> => {
	try {
		return await api.get(`api/TaskList/${id}`, { signal });
	} catch (e) {
		return null;
	}
};
type QueryFnType = typeof taskListGet;

export const useTaskItemsQuery = ({ config, params }: ApiQueryOptionsInterface<QueryFnType, GetNotesInterface>) =>
	useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryFn: ({ signal }) => taskListGet({ signal, id: params.id }),
		queryKey: ['taskLists', params.id],
	});
