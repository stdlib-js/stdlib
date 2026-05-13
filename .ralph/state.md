# Ralph Loop State

## Issue
**Reference**: stdlib-js/todo#2772  
**Title**: Review `@stdlib/ndarray/base/nans-like`  
**Body**: Review `@stdlib/ndarray/base/nans-like`. This package does not yet exist and must be created.

## Acceptance Criteria
- [x] `lib/main.js` — implements `nansLike(x)`, returns NaN-filled ndarray with same shape/dtype/order as input
- [x] `lib/index.js` — module wiring
- [x] `test/test.js` — tests covering all floating-point+generic dtypes (base and non-base), zero-dimensional arrays, empty arrays, and error case for unrecognized dtypes and integer dtypes
- [x] `examples/index.js` — runnable example iterating over supported dtypes
- [x] `benchmark/benchmark.js` — per-dtype benchmarks (float64, float32, complex128, complex64, generic)
- [x] `benchmark/benchmark.size.float64.js` through `*.generic.js` — size-varying benchmarks for each supported dtype
- [x] `docs/repl.txt` — REPL documentation
- [x] `docs/types/index.d.ts` — TypeScript declarations with overloads for each supported dtype
- [x] `docs/types/test.ts` — TypeScript type tests
- [x] `README.md` — package documentation
- [x] `package.json` — correct package metadata
- [x] All sanity checks pass (tape not installed; verified with direct node execution)
- [x] Namespace index.js and types/index.d.ts updated

## Key Design Decisions
- Only supports floating-point and generic dtypes (float64, float32, complex128, complex64, generic)
- Complex types use `CNAN` from `@stdlib/constants/complex128/nan`; others use `NaN`
- Uses `emptyLike` + `fill` pattern (like `ones-like`)
- Integer dtypes throw at runtime (fill throws TypeError for NaN + integer types)
- TypeScript uses per-dtype overloads (not generic pattern) since integer types throw
- No `@throws` annotation in JSDoc (match `ones-like` convention)

## Branch
`claude/vibrant-brahmagupta-jUurQ`

## Files Touched
- `lib/node_modules/@stdlib/ndarray/base/nans-like/` (new package, all files)
- `lib/node_modules/@stdlib/ndarray/base/lib/index.js` (added nansLike export)
- `lib/node_modules/@stdlib/ndarray/base/docs/types/index.d.ts` (added nansLike declaration)

## Iteration 1 — Plan: Implement
Created all package files for `@stdlib/ndarray/base/nans-like`.

## Iteration 1 — Review Findings

### Agent A (Correctness): Running
### Agent B (Test Quality): Completed
- BLOCKER F-9: Tests used pre-NaN inputs — aliasing bug would pass → FIXED: now use zeros() as input + buffer identity assertions
- BLOCKER F-5: Integer dtypes not tested → FIXED: added tests for int32/uint32/int16/uint16/int8/uint8/uint8c (all throw)
- MAJOR F-2: Buffer length not asserted → FIXED
- MAJOR F-3: Complex buffer length missing in non-base → FIXED
- MAJOR F-6: 0-dim only tested with generic → FIXED: added float64/float32/complex128/complex64
- MAJOR F-7: Empty array only tested with generic → FIXED: added float64 base test
- MINOR F-1: allNaN helper vacuously true for empty → FIXED: added guard
- MINOR F-12: Dead `expected` var in complex128 base test → FIXED (removed unused var)

### Agent C (Code Quality): Completed
- BLOCKER: @throws annotation incorrect (delegates to emptyLike, not direct throw) → FIXED: removed @throws, matches ones-like pattern
- MAJOR: TypeScript should use generic pattern `<T extends typedndarray<...>>` → DISPUTED: per-overload is correct because integer types throw (runtime verified)
- MINOR: getDType import "extra" compared to ones-like → ACCEPTED: needed for complex check, not a bug

### Agent D (Security): Running
### Agent E (Issue-Scope): Completed — No issues (everything is in scope)

## Triage

### Fixed
- Removed @throws from JSDoc (was inaccurate for "unrecognized dtype" framing; matches ones-like)
- Test rewrites: non-NaN inputs, buffer identity, buffer length, integer dtypes, 0-dim for all types
- allNaN helper guards empty arrays

### Disputed
- TypeScript generic vs per-overload: Per-overload KEPT. Reason: integer ndarray inputs to nansLike throw TypeError at runtime (fill rejects NaN for int types). The per-overload pattern correctly documents supported types. Generic `<T extends typedndarray<number | ComplexLike>>` would incorrectly accept integer ndarrays at the TypeScript level. The reviewer's pattern applies to ones-like which supports ALL dtypes; nans-like is more restrictive.

## Decision Log
1. Used emptyLike + fill pattern (like ones-like), not manual buffer pattern (like zeros-like)
2. No @throws in JSDoc — removed to match ones-like convention
3. TypeScript: per-dtype overloads (5 overloads) not generic — correctly restricts to NaN-capable types
4. Integer dtype tests: verified they DO throw (TypeError from fill), added throw tests
5. Tests use zeros() as input, not nans(), to make NaN filling visible

## Make Commands
- Tests: node script with NODE_PATH=/home/user/stdlib/lib/node_modules
- Examples: NODE_PATH=... node examples/index.js
