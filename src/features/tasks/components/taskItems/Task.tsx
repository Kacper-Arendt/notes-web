import { ITask } from 'src/features/tasks/models';
import { useUpdateTask } from 'src/features/tasks/api/TaskUpdate';

export const Task = (props: ITask) => {
	const { name } = props;
	const { mutate, isPending } = useUpdateTask();

	return (
		<div className="flex justify-between items-center p-4 border-b border-zinc-700 last:border-none">
			<div className="flex items-center gap-2">
				<input
					type="checkbox"
					className="checkbox checkbox-primary"
					onChange={(e) => mutate({ ...props, status: e.currentTarget.checked ? 1 : 0 })}
					disabled={isPending}
				/>
				<p>{name}</p>
			</div>
			<div className="flex items-center gap-2" />
		</div>
	);
};
