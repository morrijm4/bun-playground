import { handler } from './src/module.ts'
import { is_even } from './src/is_even.ts'

async function main() {
	console.log(handler());

	console.log('true: ', is_even(4));
}

main();
