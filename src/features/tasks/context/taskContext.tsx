import { createContext, useContext, useState } from 'react';

// HOOKS
import { useSort } from 'src/shared/hooks/useSort';

const useTasks = () => {
	const [activeTask, setActiveTask] = useState<null | string>(null);
	const { sortBy, setSortBy } = useSort();

	return { activeTask, setActiveTask, sortBy, setSortBy };
};

const ContextData = createContext({} as ReturnType<typeof useTasks>);
export const useTaskContext = () => useContext(ContextData);

export const TaskContextProvider = ({ children }: { children: React.ReactNode }) => (
	<ContextData.Provider value={useTasks()}>{children}</ContextData.Provider>
);
