import { useDateTime } from 'src/components/dateTime/useDateTime';

export interface DateTimeFormatterInterface {
	value: string;
	showTime?: boolean;
	className?: string;
}

export const DateTime = ({ value, showTime = true, className }: DateTimeFormatterInterface) => {
	const { formatTime, formatDate } = useDateTime();
	const dateObject = new Date(value);
	const formattedDate = formatDate(dateObject);
	const formattedTime = formatTime(dateObject);

	return (
		<span className={className}>
			{showTime && `${formattedTime}, `}
			{formattedDate}
		</span>
	);
};
