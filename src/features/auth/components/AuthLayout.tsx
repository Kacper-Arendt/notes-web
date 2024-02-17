import { ReactNode } from 'react';

// STYLES
import s from 'src/features/auth/components/styles.module.css';

export const AuthLayout = ({ children }: { children: ReactNode }) => <div className={s.authLayout}>{children}</div>;
