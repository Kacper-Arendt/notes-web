import { z } from 'zod';
import { t } from 'i18next';

// HOOKS
import { useAuth } from 'src/features/auth/context/authContext';

// COMPONENTS
import { Button } from '@karendt/ui';
import { Form, Input, useForm } from '@karendt/forms';
import { FormWrapper } from 'src/features/auth/components/FormWrapper';

// STYLES
import s from 'src/features/auth/components/styles.module.css';

const signInFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6).max(126),
});

type SignInFormInterface = z.infer<typeof signInFormSchema>;

export const LoginForm = ({ onSuccess }: { onSuccess?: () => void }) => {
	const form = useForm({
		schema: signInFormSchema,
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const { loginUser } = useAuth();

	return (
		<FormWrapper title={t('routes.login')}>
			{/* TODO FIX FORM RETURN TYPE */}
			{/* @ts-ignore */}
			<Form form={form} onSubmit={(data: SignInFormInterface) => loginUser(data, onSuccess)} className={s.form}>
				<Input name="email" type="email" control={form.control} label={t('general.email')} />
				<Input name="password" type="password" control={form.control} label={t('general.password')} />
				<Button type="submit" loading={false} variant="contained">
					{t('general.submit')}
				</Button>
			</Form>
		</FormWrapper>
	);
};
