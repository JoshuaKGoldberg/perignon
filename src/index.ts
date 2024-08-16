import { exec } from "node:child_process";

export function perignon() {
	console.log("🍾");
	exec('open "https://hi.joshuakgoldberg.com"');
	console.log("🍾");
}
