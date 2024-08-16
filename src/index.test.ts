import { beforeEach, describe, expect, it, vi } from "vitest";

import { perignon } from "./index.js";

const mockExec = vi.fn();

vi.mock("node:child_process", () => ({
	get exec() {
		return mockExec;
	},
}));

const mockLog = vi.fn();

describe("perignon", () => {
	beforeEach(() => {
		console.log = mockLog;
	});

	it("opens the website 🍾", () => {
		perignon();

		expect(mockExec.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    "open "https://hi.joshuakgoldberg.com"",
			  ],
			]
		`);
		expect(mockLog.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    "🍾",
			  ],
			  [
			    "🍾",
			  ],
			]
		`);
	});
});
