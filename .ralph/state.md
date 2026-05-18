# Ralph Loop State

## Issue
GitHub issue #2778 (stdlib-js/todo): Review `@stdlib/ndarray/falses`

The issue asks to implement the top-level `@stdlib/ndarray/falses` package.
The `@stdlib/ndarray/base/falses` already exists; the top-level package needs a user-friendly options API.

## Acceptance Criteria
- [ ] Package `@stdlib/ndarray/falses` created at `lib/node_modules/@stdlib/ndarray/falses/`
- [ ] `lib/main.js` implements `falses(shape[, options])` with option validation
- [ ] Default dtype is `bool`
- [ ] Supported dtypes: `bool` and `generic`
- [ ] Options: `dtype`, `order`, `mode`, `submode`, `readonly`
- [ ] Input validation: shape must be nonneg integer or array thereof
- [ ] Input validation: options must be object
- [ ] Input validation: dtype must be `bool` or `generic`
- [ ] Input validation: order, mode, submode, readonly validated through ndarray ctor
- [ ] `lib/index.js` re-exports main
- [ ] `docs/repl.txt` complete and accurate
- [ ] `docs/types/index.d.ts` with overloads for bool/generic/default dtypes
- [ ] `docs/types/test.ts` TypeScript tests
- [ ] `examples/index.js` example file
- [ ] `test/test.js` comprehensive tests
- [ ] `benchmark/benchmark.js` basic benchmark
- [ ] `benchmark/benchmark.size.bool.js` size benchmark for bool
- [ ] `benchmark/benchmark.size.generic.js` size benchmark for generic
- [ ] `package.json` correct
- [ ] `README.md` complete with all sections
- [ ] All tests pass
- [ ] Linting passes

## PR Template Checklist
- Description: What the PR does
- Related Issues: Closes #2778 (todo repo)
- Questions: None
- Other: None
- Contributing guidelines: read and followed
- AI Assistance: Yes, Claude Code
- Checklist items

## Make Commands
- Test: `NODE_PATH=/home/user/stdlib/lib/node_modules node /home/user/stdlib/lib/node_modules/@stdlib/ndarray/falses/test/test.js`
- Examples: `NODE_PATH=/home/user/stdlib/lib/node_modules node /home/user/stdlib/lib/node_modules/@stdlib/ndarray/falses/examples/index.js`
- Benchmarks: `NODE_PATH=/home/user/stdlib/lib/node_modules node /home/user/stdlib/lib/node_modules/@stdlib/ndarray/falses/benchmark/benchmark.js`
- Lint JS: `make lint-javascript`

## Hypothesis
The package `@stdlib/ndarray/falses` needs to be created following the same pattern as `@stdlib/ndarray/zeros` but:
1. Only supports `bool` and `generic` dtypes
2. Default dtype is `bool`
3. Fills buffer with `false` values (bool is already false-initialized, generic needs explicit fill)

## Files Touched
- lib/node_modules/@stdlib/ndarray/falses/ (new package, all files)

## Iteration 1 — Implement

### Goal: Implement

Plan: Create all package files for `@stdlib/ndarray/falses`.

## Review Findings

(none yet)

## Decision Log
- Using `dtypes('boolean_and_generic')` for validation
- For `bool` dtype: BooleanArray is zero-initialized which is `false`
- For `generic` dtype: need to explicitly fill buffer with `false` values
- Modeling API after `@stdlib/ndarray/zeros`
- Default dtype: `bool` (not `float64` like zeros)
