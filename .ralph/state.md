# Ralph Loop State

## Issue
**Title**: Review `@stdlib/ndarray/nans-like`  
**Source**: stdlib-js/todo#2771  
**Task**: Implement the `@stdlib/ndarray/nans-like` package in the stdlib-js/stdlib repository.

## Verbatim Issue Text
"Review `@stdlib/ndarray/nans-like`."

## Acceptance Criteria
- [ ] Package `@stdlib/ndarray/nans-like` exists at `lib/node_modules/@stdlib/ndarray/nans-like/`
- [ ] `lib/main.js` implements `nansLike(x[, options])` function
- [ ] Function uses `dtypes('floating_point_and_generic')` (not integer types, since NaN is undefined for integers)
- [ ] Function fills ndarray with `NaN`
- [ ] Options: dtype, shape, order, mode, submode, readonly (same as ones-like)
- [ ] `lib/index.js` module wrapper exists
- [ ] `package.json` correct
- [ ] `test/test.js` comprehensive (all dtypes, options, edge cases)
- [ ] `examples/index.js` working example
- [ ] `benchmark/benchmark.js` and per-dtype size benchmarks
- [ ] `docs/repl.txt` correct REPL documentation
- [ ] `docs/types/index.d.ts` TypeScript declarations (float types + generic only)
- [ ] `docs/types/test.ts` TypeScript test file
- [ ] `README.md` documentation
- [ ] `nansLike` added to `@stdlib/ndarray` namespace (`lib/index.js`)
- [ ] Tests pass
- [ ] Lint passes

## PR Template Sections
- Description
- Related Issues
- Questions
- Other
- Checklist (contributing guidelines, AI assistance disclosure)

## Make Commands
- Test: `make test TESTS_FILTER="*/ndarray/nans-like/*"`
- Lint JS: `make lint-javascript FILES="lib/node_modules/@stdlib/ndarray/nans-like/**/*.js"`
- Examples: `node lib/node_modules/@stdlib/ndarray/nans-like/examples/index.js`

## Branch
`claude/vibrant-brahmagupta-9A236`

## Key Design Decisions
1. NaN only valid for floating-point and generic types → use `dtypes('floating_point_and_generic')`
2. Complex types: `fill(out, NaN)` fills real=NaN, imag=0 (consistent with numpy behavior)
3. TypeScript overloads: float64, float32, complex128, complex64, generic (no integer overloads)
4. Fill mechanism: same as ones-like but with `NaN` instead of `1.0`

## Hypothesis
The package needs to be created from scratch following the pattern of `@stdlib/ndarray/ones-like`, with the key difference being the fill value (NaN) and the restricted set of supported dtypes (floating-point and generic only).

## Iteration 1 - Implement

### Primary Goal: Implement

### Plan
1. Create all package files for `@stdlib/ndarray/nans-like`
2. Add `nansLike` to `@stdlib/ndarray` namespace
3. Run tests and lint
4. Dispatch review agents

## Files Touched
- `lib/node_modules/@stdlib/ndarray/nans-like/` (new)
- `lib/node_modules/@stdlib/ndarray/lib/index.js` (modified - add nansLike)

## Decisions Log
- Using `floating_point_and_generic` dtype group (not `numeric_and_generic`) because NaN throws for integer dtypes in `ndarray/base/fill`
- NaN for complex128/complex64: real=NaN, imag=0 (verified via test)
- Pattern: follows `ones-like` exactly, substituting NaN fill and reduced dtype set

## Iteration 1 - Review Findings (5 parallel agents)

### Agent A: Correctness
- ✅ Complex dtype imaginary parts test — fixed (assert real=NaN, imag=0.0)
- ✅ `FloatingPointAndGenericDataType` import used in `docs/types/index.d.ts`
- Minor: `float16`/`complex32` in dtype list but `buffer()` not implemented — pre-existing issue

### Agent B: Test Quality
- ✅ `bool`/`binary` added to dtype rejection tests
- ✅ Column-major inferred test added
- ✅ Buffer non-sharing test added
- ✅ Isolated option override tests added (dtype, order, shape separately)
- All 316 tests pass

### Agent C: Convention
- ✅ Removed `"numpy.full_like"` keyword from `package.json`
- Naming, JSDoc, file structure all follow stdlib conventions

### Agent D: Security/Robustness
- No security concerns; proper validation mirrors ones-like pattern

### Agent E: Issue-Scope
- Implementation is complete; scope matches "Review `@stdlib/ndarray/nans-like`"

## Final Test Count: 316 tests, 316 pass
