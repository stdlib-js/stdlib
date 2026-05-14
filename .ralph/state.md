# Ralph Loop State

## Issue

**#2774**: Review `@stdlib/ndarray/nans`

**Issue text**: Review `@stdlib/ndarray/nans`.

## Branch

Working branch: `claude/vibrant-brahmagupta-xXAJI`
Base commit: `360877d13 feat: add 'ndarray/nans'` (the package was added in this commit)

## Make Commands

- Tests: `NODE_PATH=/home/user/stdlib/lib/node_modules node <test_file>` (tape not globally installed; must be run via make or with module resolution)
- Lint: `make lint` (project-level)
- Examples: `NODE_PATH=/home/user/stdlib/lib/node_modules node lib/node_modules/@stdlib/ndarray/nans/examples/index.js`
- Benchmarks: `NODE_PATH=/home/user/stdlib/lib/node_modules node lib/node_modules/@stdlib/ndarray/nans/benchmark/benchmark.js`

## Acceptance Criteria

The review is complete when:
- [ ] All implementation correctness issues are fixed
- [ ] All convention deviations vs comparable packages (ndarray/zeros, ndarray/ones) are resolved
- [ ] package.json keywords are accurate
- [ ] README.md `See Also` section is properly populated
- [ ] README.md links section references all related packages
- [ ] REPL docs are complete and accurate
- [ ] TypeScript declarations are complete and correct
- [ ] Tests cover all meaningful behaviors
- [ ] Benchmarks are present and correct
- [ ] Examples run correctly
- [ ] The package wires correctly into the ndarray namespace

## PR Template Sections

- Description: what this PR does
- Related Issues: #2774
- Questions: No
- Other: No
- Checklist: [ ] Contributing guidelines, AI usage disclosure

## Hypothesis / Root Cause

The `@stdlib/ndarray/nans` package is functionally correct and tested, but has the following issues identified in comparison with sibling packages (`ndarray/zeros`, `ndarray/ones`):

1. **package.json keyword `"numpy.nans"` is incorrect** — NumPy has no `nans()` function. The closest NumPy equivalents are `numpy.full(shape, numpy.nan)` or `numpy.empty` with fill. The keyword should be removed.

2. **README.md `See Also` section is empty** — The `zeros` package lists `@stdlib/ndarray/empty` and `@stdlib/ndarray/zeros-like` in its See Also section. Similarly, `nans` should reference `@stdlib/ndarray/nans-like` and `@stdlib/ndarray/empty`.

3. **README.md `links` section is missing references** for the related packages.

## Files Touched So Far

- `lib/node_modules/@stdlib/ndarray/nans/package.json`
- `lib/node_modules/@stdlib/ndarray/nans/README.md`

## Open Questions

- None

## Decision Log

- The TypeScript overload pattern (two fallback overloads: `Options` returning `float64ndarray` and `OptionsWithDType` returning `typedndarray<number>`) matches the `zeros` package exactly — NOT a bug.
- The "overrides the input array's inferred order" JSDoc note in TypeScript is inherited from the zeros template — same in both packages, not a deviation.
- The empty REPL `See Also` section is the same as in `zeros` and `ones` — auto-populated by tooling, not manually edited.
- The README `See Also` section IS populated in `zeros` but empty in `nans` — this is a gap to fix.

## Review Findings

(to be populated after review pass)

## Iteration 1

**Goal**: Implement — fix the identified issues.

**Plan**:
1. Fix `package.json`: remove `"numpy.nans"` keyword
2. Fix `README.md`: populate `See Also` section and links like `zeros` does
