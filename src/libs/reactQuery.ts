import { AxiosError } from 'axios';
import { QueryClient, UseQueryOptions, UseMutationOptions, DefaultOptions } from '@tanstack/react-query';
import { AsyncReturnType } from 'src/shared/models/Api';

const queryConfig: DefaultOptions = {
	queries: {
		throwOnError: true,
		refetchOnWindowFocus: false,
		retry: false,
	},
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type ExtractFnReturnType<FnType extends (...args: any) => any> = AsyncReturnType<FnType>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
	UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
	'queryKey' | 'queryFn'
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> = UseMutationOptions<
	ExtractFnReturnType<MutationFnType>,
	AxiosError,
	Parameters<MutationFnType>[0]
>;
