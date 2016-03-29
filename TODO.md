TODO
====

0. Once `stdlib` is live (merged to `master` and published), make the default branch be `develop`
    -   all PRs, etc, should be made against `develop`
    -   create `issue` and `PR` templates (`.github`)
1. Replace `jshint` with `eslint`
    -   add to test command
    -   support reformatting ala `go fmt`
2. ability to run tests in an arbitrary directory
    -   will prob want the ability to run tests both from the top-level lib directory, as well as if the `cwd` is otherwise
        -   may be tricky to do if in some mid-level directory
        -   may need a separate module which walks the parent directory, finds the first `package.json` or `Makefile`, and runs the tests using the `cwd` as the root, rather than the top-level lib directory
3. determine how to handle internal `@stdlib` links in READMEs
    -   e.g., `@stdlib/math/base/constants/float64-two-pi`
4. more extensive tests for `ln`
    -   test against Julia
5. determine a browser testing strategy
    -   could run into memory issues if all numeric tests are run for all functions, etc.
    -   one possibility is to loop through all files and run each individually (browserify, testling, and repeat)
6. std polyfills?
    -   object-keys
    -   typed-array
    -   ...
7. how to handle modules with CLIs?
8. how to handle browser tests for non-browser fcns
    -   e.g., `fs` functions like `fs/exists`
9. migrate JSDoc
    -   also, use `dox` or `mrdocs` or...
10. add a CLI to `fs/exists`
11. Replace `compute-roundn` reference in `linspace`.
12. determine strategy for generic validation fcns
13. `roundn` should guard against underflow and overflow!
14. 


---
## Ideas

1. when testing numeric code, would be interesting to test against multiple platforms (ala test fixtures); e.g., Julia, Python, R, Go, Boost, etc.
    -   ability to run against multiple versions of alternative platforms
    -   compare results for each alternative platform version
        -   would allow flagging regressions or improvements in the implementations of other platforms
    -   would be part of a comprehensive CI before publishing
        -   suppose could also be done at the individual module level during separation
    -   generate plots showing results across all platforms
2. 


---
## Automation

#### package.json

1. Populate individual module contributors automatically by extracting author info from `git` commits?
    -   main author could be populated based on highest number of commits? most changes? responsible for most lines of code?
        -   most lines of code may be best heuristic as likely that the author is thus most knowledgeable/owns the most code
        -   over time the main author could change...is this a problem?
2. populate scripts similarly for all modules
3. augment `keywords` with universal project `keywords`
4. can add `testling` config, if needed
5. populate git urls based on destination repo
6. should be able to scan module code to determine dev and main deps and add them to the `package.json` based on what is installed in the main repo
    -   [dependency-check](https://github.com/maxogden/dependency-check)
    -   if a dependency is already included in the `package.json`, keep that dependency, thus allowing local override of a dependency
        -   how will that work in terms of dep install within the context of the larger project?
7. 


#### LICENSE

1. Read `license` field in `package.json` and generate the appropriate license
2. 



---
## Notes

1. Ideal vs reality
    - @stdmath/base/special/erf
        -   @stdmath/base-special-erf
    - @stdmath/generics/special/erf
        -   @stdmath/generics-special-erf
2. Under the @stdlib scope...
    -   @stdlib/math-base-special-erf
    -   @stdlib/math-base-core-float64-to-binary-string


---
## Project Structure
> Sample project structure.

|-stdlib
|---lib
|-----math
|-------base
|---------blas
|-----------scal
|---------complex
|-----------acos
|-----------sin
|---------constants
|-----------e
|-----------pi
|-----------two-pi
|---------random
|-----------lcg
|---------special
|-----------erf
|-----------erfc
|-----------sin
|---------utils
|-----------is-even
|-----------is-integer
|-----------is-number
|-----------is-odd
|-------generics
|---------core
|-----------add
|-----------mult
|-----------subtract
|-----------sum
|---------distributions
|-----------norm
|-----------poisson
|---------linalg
|---------random
|-----------lcg
|---------special
|-----------erf
|-----------erfc
|---------statistics
|-----------mean
|-----------stdev
|-----------variance
|-----types
|-------array
|-------complex
|-------dataframe
|-------matrix
|-------ndarray
|-----utils
|-------copy
|-------deep-get
|-------deep-set
|-------error-reviver
|-------error-to-json
|-------is-array-like
|-------is-function
|-------left-pad-string
|-------merge
|-------pad-string
|-------pluck
|-------repeat-string
|-------right-pad-string
