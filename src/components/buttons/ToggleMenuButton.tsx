import clsx from 'clsx';
import { t } from 'i18next';

// STYLES
import s from 'src/components/buttons/styles.module.css';

export const ToggleMenuButton = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: () => void }) => (
	<button type="button" onClick={setIsOpen} className={clsx(s.toggleNavButton)} aria-label={t('general.toggleMenu')}>
		<p className={clsx(s.line1, { [s.line1Active]: isOpen })} />
		<p className={clsx(s.line2, { [s.line2Active]: isOpen })} />
		<p className={clsx(s.line3, { [s.line3Active]: isOpen })} />
	</button>
);
