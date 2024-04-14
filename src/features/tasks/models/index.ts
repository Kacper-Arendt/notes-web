export interface ITaskList {
	listId: string;
	title: string;
	createdOn: string;
	updatedOn: string;
}

export interface ITaskListCreateRequest {
	title: string;
}

export interface ITaskListFull extends ITaskList {
	tasksList: ITask[];
}

export interface ITaskCreateRequest {
	name: string;
}

export interface ITask {
	taskId: string;
	name: string;
	dueDate: string;
	createdOn: string;
	updatedOn: string;
	priority?: typeof Priority;
	status?: typeof Status;
}

export const Status = {
	inProgress: 0,
	completed: 1,
	Pending: 2,
} as const;

export const Priority = {
	Low: 'Low',
	Medium: 'Medium',
	High: 'High',
} as const;
