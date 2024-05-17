import colors from "colors";

export function createOutput(name: string) {
	return {
		warn: (message: string, log = true) => {
			console.log(`[${name}] ${message}`.yellow);
		},
		error: (message: string, log = true) => {
			console.log(`[${name}] ${message}`.red);
		},
		log: (message: string, log = true) => {
			console.log(`[${name}] ${message}`);
		},
	};
}
