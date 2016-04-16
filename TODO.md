TODO
====

0. once `stdlib` is live (merged to `master` and published), make the default branch be `develop`
    -   all PRs, etc, should be made against `develop`
1. replace `jshint` with `eslint`
    -   add to test command
    -   support reformatting ala `go fmt`
2. ability to run tests from an arbitrary directory
    -   may need a separate module which walks the parent directory, finds the first `package.json` or `Makefile`, and runs the tests using the `cwd` as the root, rather than the top-level lib directory
3. determine how to handle internal `@stdlib` links in READMEs
    -   e.g., `@stdlib/math/constants/float64-two-pi`
    -   replace internal module references
4. more extensive tests for `ln`, `sqrt`, `cos`, `sin`, `cos`, etc
    -   test against Julia
5. determine a browser testing strategy
    -   could run into memory issues if all numeric tests are run for all functions, etc.
    -   one possibility is to loop through all files and run each individually (browserify, testling, and repeat)
    -   may have to punt browser testing to individual repos (!)
6. std polyfills?
    -   object-keys
    -   typed-array
    -   ...
7. how to handle modules with CLIs?
    -   will want some sort of CLI test framework to test `stdin`, `stdout`, args, etc.
8. how to handle browser tests for non-browser fcns
    -   e.g., `fs` functions like `fs/exists`
9. migrate JSDoc
    -   also, use one of
        -   [`dox`](https://github.com/tj/dox)
        -   [`mrdoc`](https://github.com/mr-doc/mr-doc) (aka `doxx`)
        -   [`docco`](https://github.com/jashkenas/docco)
        -   [`jsdoc`](https://github.com/jsdoc3/jsdoc)
        -   [`documentation.js`](http://documentation.js.org/)
            -   see [turf-www](https://github.com/Turfjs/turf-www) and [turf](https://github.com/Turfjs/turf)
        -   [`jsdoc-parse`](https://github.com/jsdoc2md/jsdoc-parse)
        -   [`dmd`](https://github.com/jsdoc2md/dmd)
        -   [`jsdox`](https://github.com/sutoiku/jsdox)
        -   [`dokker`](https://github.com/oceanhouse21/dokker)
        -   [`jsdoc-to-markdown`](https://github.com/jsdoc2md/jsdoc-to-markdown)
        -   [`yuidoc`](http://yui.github.io/yuidoc/syntax/index.html)
        -   [`groc`](https://github.com/nevir/groc)
        -   [`jsduck`](https://github.com/senchalabs/jsduck)
        -   [`esdoc`](https://github.com/esdoc/esdoc)
        -   [`docker.js`](https://github.com/jbt/docker)
        -   [`doctrine`](https://github.com/eslint/doctrine)
        -   ...
10. add a CLI to `fs/exists`
11. add CONTRIBUTING.md
    -   PR template should have link to this and the style guide
12. determine strategy for generic validation fcns
13. `roundn` should guard against underflow and overflow!
14. consider changing `isNumber` to `isNumeric`
15. export regexps?
16. `Makefile` target to run test fixtures
    -   detect script type; e.g., `R`, `python`, `Julia`, `Golang`, `C` or `JS`
        -   can be as simple as filename extension
        -   of course, may also want to use a shell script to run tests (`.sh`)
        -   for files without an extension, assume executable
    -   run the script
        -   may want to `chmod` the script, so do not need to know the system alias for the runner environment (e.g., Julia => `julia`) and can leverage internal shebang
17. should `utils/function-name` support generator functions?
    -   a separate function?
18. replace `require` statements of external compute modules
19. tests for top-level `tools`; e.g., JSDoc templates, etc
20. move style-guide to a `stdlib` repo
21. clean-up test runners
    -   `log1p` 
    -   `sinpi`
    -   etc.
22. `type-of` should check for `toStringTag` support
23. update `utils/tools`
24. generic `is-finite` util should include note about how differs from global `isFinite`
25. create better examples for constants
    -   e.g., how and why and in what contexts a constant may be used
26. Avogadro's number
27. project stats
    -   use [ndu](https://github.com/groupon/ndu) to visualize dependency size
    -   use [disc](https://github.com/hughsk/disc) to visualize browserify output
28. FIX: security vulnerability when using `rm -rf` in Makefile rules
    -   due to using environment variables. If one is improperly set, could be catastrophic. Safe delete?
        -   consider [trash](https://github.com/sindresorhus/trash) and [trash-cli](https://github.com/sindresorhus/trash-cli)
29. `Makefile` does not list top-level `examples`; is this intentional?
30. move test fixture runners into sub-directories based on language
    -   e.g., `./fixtures/julia/*`
31. add Saucelabs with zuul (?)
32. [gh-pages](https://github.com/tschaub/gh-pages)
33. 


---
## Ideas

1. when testing numeric code, would be interesting to test against multiple platforms (ala test fixtures); e.g., Julia, Python, R, Go, Boost, etc.
    -   ability to run against multiple versions of alternative platforms
    -   compare results for each alternative platform version
        -   would allow flagging regressions or improvements in the implementations of other platforms
    -   would be part of a comprehensive CI before publishing
        -   suppose could also be done at the individual module level during separation
    -   generate plots showing results across all platforms
2. a tool which reports which paths are __not__ imported by a file
    -   use case is ensuring that modules which should be exported by an aggregate file are exported
3.


---
## Automation

#### tools

Will need a `tools` directory to
*   house `Makefile` dependencies
*   include CI scripts
*   house doc tools
    -   JSDoc templates
    -   JSDoc typedefs


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
    -   [module-deps](https://github.com/substack/module-deps)
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
3. References on root `global`
    -   https://github.com/jashkenas/underscore/blob/master/underscore.js#L14
    -   https://github.com/lodash/lodash/blob/4.6.1/lodash.js#L369
    -   https://github.com/Raynos/global/blob/master/window.js
    -   http://stackoverflow.com/questions/7507638/is-there-a-standard-mechanism-for-detecting-if-a-javascript-is-executing-as-a-we
    -   https://github.com/substack/insert-module-globals/pull/48
    -   https://github.com/tc39/proposal-global
    -   https://github.com/ljharb/System.global
4. 


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
|---------dist
|-----------norm
|-------------cdf
|-------------pdf
|-----------poisson
|---------random
|-----------lcg
|---------special
|-----------erf
|-----------erfc
|-----------sin
|---------tools
|-----------evalpoly
|-----------evalrational
|---------utils
|-----------is-even
|-----------is-integer
|-----------is-number
|-----------is-odd
|-------constants
|---------e
|---------pi
|---------two-pi
|-------fastmath
|---------special
|-----------cos
|-----------sin
|-------generics
|---------core
|-----------add
|-----------mult
|-----------subtract
|-----------sum
|---------dist
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
|-----streams
|-------math
|---------mean
|---------stdev
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
