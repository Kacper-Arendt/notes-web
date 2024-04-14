import clsx from 'clsx';

// MODELS
import { ITaskList } from 'src/features/tasks/models';

// COMPONENTS
import { DateTime } from 'src/components/dateTime/DateTime';

export const TaskListItem = ({ title, createdOn, updatedOn, active }: ITaskList & { active?: boolean }) => (
	<div
		className={clsx(
			`flex flex-col items-start p-1 ease-in duration-100 border-2 border-transparent rounded-md hover:border-primary-light`,
			{
				'border-primary-dark': active,
			},
		)}
	>
		<p>{title}</p>
		<DateTime value={updatedOn ?? createdOn} className="text-xs text-neutral-500" />
	</div>
);
