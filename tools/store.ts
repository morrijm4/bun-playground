async function getTitle(): Promise<string | undefined> {
	const title = Bun.argv.slice(2);

	if (title.length) {
		return title.join('-');
	}

	await Bun.write(Bun.stdout, 'Please enter a title (press ENTER to continue): ');
	for await (const line of console) {
		if (!line) {
			return;
		}
		return line.trim().split(' ').join('-');
	}
}

function getPath(title?: string): string {
	const date = new Date();

	const year = date.getFullYear();
	const month = date.getMonth() + 1; // (January gives 0)
	const day = date.getDate();
	
	if (title != null) {
		return `store/${year}-${month}-${day}-${title}.ts`;
	}

	return `store/${year}-${month}-${day}.ts`;
}

export async function store() {
	const title = await getTitle();
	const path = getPath(title);
	
	const file = Bun.file('index.ts');
	await Bun.write(path, file);

	console.log(`index.ts written to ${path}`);
}

store();
