# Ralph Loop State

## Issue
GitHub issue #2777 (stdlib-js/todo): Review `@stdlib/ndarray/base/trues-like`

Issue text: "Review `@stdlib/ndarray/base/trues-like`."

This is a "review" issue meaning the package needs to be created (it does not exist yet).

## Acceptance Criteria
- [ ] Package `@stdlib/ndarray/base/trues-like` exists at `lib/node_modules/@stdlib/ndarray/base/trues-like/`
- [ ] `lib/index.js` — barrel export
- [ ] `lib/main.js` — implementation: `truesLike(x)` returns `fill(emptyLike(x), true)`
- [ ] `package.json` — correct metadata, name, keywords
- [ ] `examples/index.js` — runnable example
- [ ] `test/test.js` — comprehensive tests (invalid input, bool base/non-base, generic base/non-base, zero-dim, empty)
- [ ] `docs/repl.txt` — REPL documentation
- [ ] `docs/types/index.d.ts` — TypeScript declarations
- [ ] `docs/types/test.ts` — TypeScript tests
- [ ] `benchmark/benchmark.js` — base benchmark
- [ ] `benchmark/benchmark.size.bool.js` — size benchmark for bool
- [ ] `benchmark/benchmark.size.generic.js` — size benchmark for generic
- [ ] `README.md` — package documentation
- [ ] `@stdlib/ndarray/base` namespace index (`lib/node_modules/@stdlib/ndarray/base/lib/index.js`) registers `truesLike`
- [ ] All tests pass
- [ ] Examples run without error

## Make Commands
- Test a package: `NODE_PATH=/home/user/stdlib/lib/node_modules node /home/user/stdlib/lib/node_modules/@stdlib/ndarray/base/trues-like/test/test.js`
- Run examples: `NODE_PATH=/home/user/stdlib/lib/node_modules node /home/user/stdlib/lib/node_modules/@stdlib/ndarray/base/trues-like/examples/index.js`
- Run benchmark: `NODE_PATH=/home/user/stdlib/lib/node_modules node /home/user/stdlib/lib/node_modules/@stdlib/ndarray/base/trues-like/benchmark/benchmark.js`

## Hypothesis
The package needs to be created from scratch following the `falses-like` pattern exactly (since `falses-like` is the direct analogue of `trues-like`).

Key design decision: use `emptyLike(x)` + `fill(_, true)` (same as `falsesLike` uses `false`, same as `onesLike` uses `1.0`).

Supported dtypes: `bool` and `generic` only (same as `trues` and `falses`/`falses-like`).

TypeScript type: `T extends typedndarray<boolean>` (same as `falsesLike`).

## Files Touched
- lib/node_modules/@stdlib/ndarray/base/trues-like/ (new package, all files)
- lib/node_modules/@stdlib/ndarray/base/lib/index.js (add truesLike entry after trues)

## Open Questions
None.

## Review Findings
(pending first review)

## Decision Log
- Using `falses-like` as primary reference (not `ones-like`) because it supports the same boolean/generic dtype subset.
- `truesLike(x)` fills with `true`, `falsesLike(x)` fills with `false` — symmetric pattern.
- Index registration: insert `truesLike` after `trues` in `ndarray/base/lib/index.js` (alphabetically correct).

## Iteration 1
**Goal: Implement** — create all package files, register in namespace, run tests.
