import { t } from 'i18next';
import { MdDeleteOutline } from 'react-icons/md';
import clsx from 'clsx';

// COMPONENTS
import { Loader } from 'src/components/loader';

export const RemoveIconButton = ({ loading, onClick }: { onClick: () => void; loading?: boolean }) => (
	<button type="button" onClick={onClick} aria-label={t('general.remove')} className="text-xl">
		{loading ? <Loader size="sm" /> : <MdDeleteOutline className={clsx('ease-in duration-200 hover:fill-primary')} />}
	</button>
);
