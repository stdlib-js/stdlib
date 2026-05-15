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

## Iteration 1 — Review Findings

### Sub-agent E (Issue-scope auditor): NO ISSUES
The diff does exactly what the issue asked — nothing more, nothing less.

### Sub-agent C (Code quality & convention): 4 MINOR issues — ALL FIXED
1. ~~`package.json` description missing backticks around `true`~~ → FIXED
2. ~~`package.json` missing `booleans` keyword, wrong order of `bool`/`boolean`~~ → FIXED
3. ~~Size benchmarks used `@stdlib/ndarray/base/trues` instead of `@stdlib/ndarray/empty`~~ → FIXED
4. ~~Test titles missing "and" word~~ → FIXED

### Sub-agent D (Security & Robustness): NO BLOCKERS — All advisory
1. Misleading error when numeric dtype passed → DISPUTED: `falses-like` has identical behavior; no dtype guard exists there either. Consistent with codebase pattern.
2. No test coverage for numeric-dtype rejection → DISPUTED: `falses-like` tests also don't cover this. Consistent.
3. TypeScript type vs runtime guard gap → DISPUTED: Same in `falses-like`.
4. Error propagation message quality → DISPUTED: Same as `falses-like`.
5. Prototype pollution: None found.
6. Shared state: None found.

### Sub-agent A (Correctness): NO BLOCKERS / NO MAJOR — 3 minor, all disputed
1. Missing `@throws` JSDoc in `lib/main.js` → DISPUTED: `falses-like` and `ones-like` "like" packages don't have `@throws` either. The "like" packages delegate validation to `emptyLike`; only the non-like packages (trues, zeros) have `@throws` because they accept an explicit dtype string argument.
2. No aliasing check (`arr !== x`) in tests → DISPUTED: `falses-like` tests also lack this. Pre-existing pattern.
3. No stride verification → DISPUTED: `falses-like` tests also lack this. Pre-existing pattern.

All acceptance criteria 1–7 confirmed functionally satisfied.

### Sub-agent B (Test quality): pending

## Decision Log
- Using `falses-like` as primary reference (not `ones-like`) because it supports the same boolean/generic dtype subset.
- `truesLike(x)` fills with `true`, `falsesLike(x)` fills with `false` — symmetric pattern.
- Index registration: insert `truesLike` after `trues` in `ndarray/base/lib/index.js` (alphabetically correct).

## Iteration 1
**Goal: Implement** — create all package files, register in namespace, run tests.
