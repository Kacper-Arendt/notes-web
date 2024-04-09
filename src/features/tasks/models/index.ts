export interface ITaskList {
	listId: string;
	title: string;
	createdOn: string;
	updatedOn: string;
}

export interface ITaskListCreateRequest {
	title: string;
}
