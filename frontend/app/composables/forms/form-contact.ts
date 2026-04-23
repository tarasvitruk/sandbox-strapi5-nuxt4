import * as v from 'valibot';

export type ContactFormModel = {
	name: string;
	email: string;
	message: string;
};

export const useFormContact = () => {
	const formData = ref<ContactFormModel>({
		name: '',
		email: '',
		message: '',
	});

	const schema = v.objectAsync({
		name: v.pipeAsync(
			v.string(),
			v.trim(),
			v.nonEmpty('Enter a name.'),
		),
		email: v.pipeAsync(
			v.string(),
			v.trim(),
			v.nonEmpty('Enter a e-mail.'),
			v.email('Enter a valid email.'),
		),
		message: v.pipeAsync(
			v.string(),
			v.trim(),
			v.nonEmpty('Enter a message.'),
		),
	});

	const { errors, makeFieldDirty, handleSubmit } = useValidation(schema, formData);

	return {
		formData,
		errors,
		makeFieldDirty,
		handleSubmit,
	};
};
