# Ralph Loop State

## Issue

**GitHub Issue #1378** — Document prototype methods in `@stdlib/function/ctor`

> Document prototype methods in `@stdlib/function/ctor`.
> Reopening, as we also need to document in repl.txt, benchmarks, and unit tests. This is similar to how we documented typed arrays (e.g., `@stdlib/array/float32`).

## Acceptance Criteria

- [x] repl.txt documents all prototype methods (`apply`, `call`, `bind`, `toString`, `length`, `name`, `prototype`)
- [ ] Unit tests for `Function.prototype.apply`
- [ ] Unit tests for `Function.prototype.call`
- [ ] Unit tests for `Function.prototype.bind`
- [ ] Unit tests for `Function.prototype.toString`
- [ ] Unit tests for `Function.prototype.length`
- [ ] Unit tests for `Function.prototype.name`
- [ ] Unit tests for `Function.prototype.prototype`
- [ ] Benchmark for `Function.prototype.apply`
- [ ] Benchmark for `Function.prototype.call`
- [ ] Benchmark for `Function.prototype.bind`
- [ ] Benchmark for `Function.prototype.toString`
- [ ] Benchmarks for properties (`length`, `name`, `prototype`)

## PR Template Sections

- Description: What this PR does
- Related Issues: #1378
- Questions: None
- Other: None
- Checklist: contributing guidelines, AI assistance

## Make Commands

- Tests: `make test TESTS_FILTER=".*/function/ctor/.*"`
- Benchmarks: run directly with `node benchmark/benchmark.*.js`
- Lint JS: `make lint-javascript-pkg ROOT_DIR=lib/node_modules/@stdlib/function/ctor`

## Package Location

`lib/node_modules/@stdlib/function/ctor/`

## Files Touched

- `lib/node_modules/@stdlib/function/ctor/test/test.apply.js` (new)
- `lib/node_modules/@stdlib/function/ctor/test/test.call.js` (new)
- `lib/node_modules/@stdlib/function/ctor/test/test.bind.js` (new)
- `lib/node_modules/@stdlib/function/ctor/test/test.to_string.js` (new)
- `lib/node_modules/@stdlib/function/ctor/test/test.length.js` (new)
- `lib/node_modules/@stdlib/function/ctor/test/test.name.js` (new)
- `lib/node_modules/@stdlib/function/ctor/test/test.prototype.js` (new)
- `lib/node_modules/@stdlib/function/ctor/benchmark/benchmark.apply.js` (new)
- `lib/node_modules/@stdlib/function/ctor/benchmark/benchmark.call.js` (new)
- `lib/node_modules/@stdlib/function/ctor/benchmark/benchmark.bind.js` (new)
- `lib/node_modules/@stdlib/function/ctor/benchmark/benchmark.to_string.js` (new)
- `lib/node_modules/@stdlib/function/ctor/benchmark/benchmark.properties.js` (new)

## Hypothesis

The issue is clear: repl.txt already documents the prototype methods, but there are no unit tests or benchmarks for them. We need to follow the pattern from `@stdlib/array/float32` to add per-method tests and benchmarks.

## Iteration 1

### Goal: Implement

Create unit tests and benchmarks for all documented prototype methods.

### Decisions

- repl.txt is already complete; no changes needed there
- Tests follow the pattern from `@stdlib/array/float32/test/test.copy_within.js`
- Benchmarks follow the pattern from `@stdlib/array/float32/benchmark/benchmark.to_string.js` and `benchmark.properties.js`
- Properties (length, name, prototype) get individual test files and are grouped in benchmark.properties.js

## Review Findings

(to be filled in after review pass)

## Decision Log

(to be filled in after review pass)
