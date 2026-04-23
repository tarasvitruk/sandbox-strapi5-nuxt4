import * as v from 'valibot';
import { FetchError } from 'ofetch';
import type { NuxtError } from '#app';

export function assert<TSchema extends v.GenericSchema> (
	schema: TSchema,
	value: unknown,
	config?: v.Config<v.InferIssue<TSchema>> | undefined,
): asserts value is v.InferInput<TSchema> {
	v.parse(schema, value, config);
}

export const assertFatally = <T>(
	value: unknown,
	assertion: (value: unknown) => asserts value is T,
	options: Partial<Omit<NuxtError, 'statusMessage'>> = {},
): asserts value is T => {
	try {
		assertion(value);
	}
	catch (error) {
		throw createError({
			...options,
			statusCode: options.statusCode ?? 500,
			message: options.message ?? HTTP_ERRORS[options.statusCode ?? 500]?.name,
			fatal: options.fatal ?? true,
			cause: options.cause ?? (error instanceof Error ? error.message : 'Assertion failed'),
		});
	}
};

export const assertInteger = (value: unknown, name = 'Value'): asserts value is number => {
	const NumberSchema = v.pipe(
		v.number(),
		v.integer(),
	);
	assert(NumberSchema, value, {
		message: `${ name } is not an integer.`,
	});
};

export const assertString = (value: unknown, name = 'Value'): asserts value is string => {
	assert(v.string(), value, {
		message: `${ name } is not a string.`,
	});
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const assertNonNullish = <T extends {}>(
	value: T | undefined | null,
	name = 'Value',
): asserts value is T => {
	if (value == null) {
		throw new Error(`${ name } is ${ value }`);
	}
};

export const assertFetchError = (error: unknown): asserts error is FetchError => {
	if (!(error instanceof FetchError)) {
		throw error;
	}
};
