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
import { RedirectLink } from 'src/features/auth/components/RedirectLink';

const signUpFormSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(6).max(126),
		passwordConfirm: z.string().min(6).max(126),
	})
	.refine((data) => data.password === data.passwordConfirm, {
		message: t('errors.passwordDoNotMatch'),
		path: ['passwordConfirm'],
	});

type SignUpFormInterface = z.infer<typeof signUpFormSchema>;

export const RegisterForm = () => {
	const form = useForm({
		schema: signUpFormSchema,
		defaultValues: {
			email: '',
			password: '',
			passwordConfirm: '',
		},
	});
	const { registerUser } = useAuth();

	return (
		<FormWrapper title={t('routes.register')}>
			{/* TODO FIX FORM RETURN TYPE */}
			{/* @ts-ignore */}
			<Form form={form} onSubmit={(data: SignUpFormInterface) => registerUser(data)} className={s.form}>
				<Input name="email" type="email" control={form.control} label={t('general.email')} />
				<Input name="password" type="password" control={form.control} label={t('general.password')} />
				<Input name="passwordConfirm" type="password" control={form.control} label={t('general.confirmPassword')} />
				<Button type="submit" loading={false} intent="primary">
					{t('general.submit')}
				</Button>
			</Form>
			<RedirectLink to="/login" text={t('general.haveAccount')} />
		</FormWrapper>
	);
};
