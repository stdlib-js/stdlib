# Ralph Loop State

## Issue

**GitHub Issue #1377** — Document prototype methods in `@stdlib/object/ctor`

**Verbatim issue text:**

> Document prototype methods in `@stdlib/object/ctor`.
> Documentation includes README, repl help, benchmarks, and unit tests.
> Need to additionally figure out how we should document methods/properties which are not available in older engines (e.g., Object.assign).
> We could, e.g., include a note regarding version support (as in MDN). And we could also direct readers to use the standalone packages instead, for better backward compatibility.

**Package path:** `lib/node_modules/@stdlib/object/ctor`

---

## Acceptance Criteria

- [ ] README documents all `Object.prototype.*` methods with descriptions, parameters, return values, and examples
- [ ] `docs/repl.txt` documents all `Object.prototype.*` methods with correct examples
- [ ] Unit tests exist for all prototype methods: `constructor`, `hasOwnProperty`, `isPrototypeOf`, `propertyIsEnumerable`, `toLocaleString`, `toString`, `valueOf`
- [ ] Unit tests exist for key static methods not yet tested
- [ ] Benchmarks exist for prototype methods in `benchmark/benchmark.js`
- [ ] Version compatibility notes appear in README for methods not available in older engines
- [ ] Bug fixed: `repl.txt` `isPrototypeOf` example has caller/argument reversed (should be `p.isPrototypeOf(o)` where `o.__proto__ = p`, currently shows `o.isPrototypeOf(p)` returning `true` which is incorrect)
- [ ] All lint targets pass
- [ ] All tests pass

---

## PR Template Checklist

From `.github/PULL_REQUEST_TEMPLATE.md`:
- [ ] Issue linked with `Resolves #1377`
- [ ] Description filled
- [ ] Related Issues filled
- [ ] Questions filled
- [ ] Other filled
- [ ] Contributing guidelines checkbox
- [ ] AI Assistance disclosed

---

## Make Commands

- Test (scoped): `NODE_PATH=/home/user/stdlib/lib/node_modules node /home/user/stdlib/lib/node_modules/@stdlib/object/ctor/test/test.js`
- Test (via make): `make test TESTS_FILTER=.*object/ctor.*`
- Benchmark: `node /home/user/stdlib/lib/node_modules/@stdlib/object/ctor/benchmark/benchmark.js`
- Lint JS: `make lint-javascript FILES=/home/user/stdlib/lib/node_modules/@stdlib/object/ctor/test/test.js`

---

## Hypothesis

**Root cause / gap:** The `@stdlib/object/ctor` package already has README and REPL documentation for both static and prototype methods. However:
1. `test/test.js` only tests the constructor behavior — no tests for prototype methods or static methods
2. `benchmark/benchmark.js` only benchmarks the constructor — no benchmarks for prototype or static methods
3. There is a bug in `docs/repl.txt`: the `isPrototypeOf` example has the caller and argument swapped, making the expected output `true` incorrect
4. README lacks version compatibility notes for methods not available in older engines (assign, entries, getOwnPropertyDescriptors, getOwnPropertySymbols, hasOwn, is, setPrototypeOf, values)

---

## Files Touched

- `lib/node_modules/@stdlib/object/ctor/test/test.js` — add prototype method and static method tests
- `lib/node_modules/@stdlib/object/ctor/benchmark/benchmark.js` — add prototype method benchmarks
- `lib/node_modules/@stdlib/object/ctor/docs/repl.txt` — fix isPrototypeOf bug
- `lib/node_modules/@stdlib/object/ctor/README.md` — add version compatibility notes

---

## Open Questions

- Should we add tests for ALL static methods or just prototype methods? → Adding both for completeness since all are documented.
- Standalone package alternatives for version compat notes: `@stdlib/object/assign` (assign), `@stdlib/utils/keys` (keys), `@stdlib/utils/entries` (entries), `@stdlib/utils/values` (values), `@stdlib/utils/get-prototype-of` (getPrototypeOf), `@stdlib/utils/define-property` (defineProperty)

---

## Iteration 1

**Goal: Implement**

The issue is well-specified. Prototype methods are documented in README/REPL already. Need to:
1. Add unit tests for prototype methods and static methods
2. Add benchmarks for prototype methods
3. Fix isPrototypeOf bug in repl.txt
4. Add version compatibility notes to README

---

## Review Findings

(populated after review pass)

---

## Decision Log

- Choosing to add tests for both static and prototype methods since all are documented and tests should validate the documentation.
- Choosing to add version notes for ES6+ methods: assign (ES2015), is (ES2015), setPrototypeOf (ES2015), getOwnPropertySymbols (ES2015), entries (ES2017), values (ES2017), getOwnPropertyDescriptors (ES2017), hasOwn (ES2022).
- Standalone package alternatives noted in README for methods that may not be available in all environments.
