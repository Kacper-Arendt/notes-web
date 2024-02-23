import { QueryConfig } from 'src/libs/reactQuery';

type AsyncFunction = (...arguments_: any[]) => Promise<unknown>;

export type AsyncReturnType<Target extends AsyncFunction> = Awaited<ReturnType<Target>>;

export interface ApiQueryOptionsInterface<QueryType extends (...args: any) => any, Params> {
	config?: QueryConfig<QueryType>;
	params: Omit<Params, 'signal'>;
}

export interface ApiConfigInterface {
	signal?: AbortSignal;
}
