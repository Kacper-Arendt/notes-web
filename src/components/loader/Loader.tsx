import clsx from 'clsx';

// STYLES
import s from 'src/components/loader/styles.module.css';

export const Loader = ({ size = 'sm' }: { size?: 'sm' | 'md' | 'lg' }) => <p className={clsx(s.loader, [s[size]])} />;
