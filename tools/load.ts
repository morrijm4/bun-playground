/**
 * Replaces `index.ts` with a "kit". A "kit" is a file from the
 * `kits/` directory. It should be some kind of boilerplate.
 *
 * @param {string} [kit=default] - The name of the kit you want to load.
 */
export async function load(kit?: string = 'default') {
	const path = `kits/${kit}.ts`;
	const file = Bun.file(path);

	await Bun.write('index.ts', file);
}

load();
