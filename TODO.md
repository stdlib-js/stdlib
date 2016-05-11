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
26. 
27. project stats
    -   use [ndu](https://github.com/groupon/ndu) to visualize dependency size
    -   use [disc](https://github.com/hughsk/disc) to visualize browserify output
    -   later project stats can be displayed in a separate webpage
        -   see visualcinnamon.com for inspiration
28. FIX: security vulnerability when using `rm -rf` in Makefile rules
    -   due to using environment variables. If one is improperly set, could be catastrophic. Safe delete?
        -   consider [trash](https://github.com/sindresorhus/trash) and [trash-cli](https://github.com/sindresorhus/trash-cli)
            *   No, as Sindre does not provide backwards compatibility. Will need to roll our own.
29. `Makefile` does not list top-level `examples`; is this intentional?
30. move test fixture runners into sub-directories based on language
    -   e.g., `./fixtures/julia/*`
31. add Saucelabs with zuul (?)
32. [gh-pages](https://github.com/tschaub/gh-pages)
33. possible issue for [float64-set-high-word](https://ci.appveyor.com/project/kgryte/stdlib/build/job/3nseqtdxqey85wfk)
    -   attempted to debug, but was able to get the right return value; so not sure what happened and why
    -   NOTE: this seems to be a recurring bug; builds continue to occasionally fail on Windows
34. module to identify equations in README files
    -   parse
    -   generate svg
    -   generate html
    -   commit
    -   insert into readme (replace anything already existing)
    -   similar to Makefile test targets, include a target to filter and selectively update README equations
35. jsdoc HTML template
    -   needs a total refactor
    -   browserify pipeline
        -   [mathjax](https://github.com/mathjax/MathJax-node)
    -   see documentation.js and turf
36. tailor Mathjax [config](https://github.com/mathjax/MathJax/blob/master/config/default.js)
37. 
38. consider [standard-version](https://github.com/conventional-changelog/standard-version)
    -   [changelog-standard](https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md)
39. [add](https://github.com/vhf/v8-bailout-reasons) to contribution guidelines
40. in all tests (and examples), replace `Math.random` with a seeded `lcg`
    -   for tests, be sure to record the seed so that failed tests can be debugged
41. for datasets,
    -   include datapackage.json
    -   license under CC0
42. check if `codecov` will accept multiple coverage reports
    -   would like the ability to distinguish Linux, Windows, and browser coverage reports
    -   temporary `git` tags?
43. make Travis and Appveyor build badges the same dimensions
    -   currently, Appveyor includes a logo
    -   could use shields.io
44. consider using [svgo](https://github.com/svg/svgo) to minimize eqn svgs
45. `*.cpp` vs `*.cc` for C++ files?
    -   use `*.cpp` and `*.hpp`
46. find inspiration for the JS style guide from C++ core [guidelines](https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md)
    -   include ESLint rules for each (where applicable) guideline
47. add code climate badge
48. consider using things like [shellcheck](https://github.com/koalaman/shellcheck) for linting files other than JavaScript
    -   markdown linting
    -   js code in markdown linting
49. 


---
## Modules

1. is-finite (generic)
    -   may need to describe how different from built-in
2. is-infinite (generic)
3. is-nan (generic)
4. is-even
5. is-odd
6. incrspace
7. linspace, logspace, incrspace as generators (?)
8. is-browser
9. is-node
10. is-worker
11. blas routines
12. is-plain-object (?)
13. is-object
14. utils-copy
15. utils-merge
16. utils-deep-get
17. utils-deep-set
18. stream module (e.g., flow-split, flow-join, flow-mean) => /utils /math etc
19. [hdbscan](https://github.com/lmcinnes/hdbscan)
20. number theory fcns (see starred repo)
21. str manip [utils](https://github.com/dleitee/strman)
22. Avogadro's number
23. 


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
3. for JSDoc docs, ability to run benchmarks for any given method
    -   UI button to run benchmark
    -   per method/module/etc (similar to having a button to view source)
    -   would allow users to test the relatively speed of pathways within a function; e.g., for `erf`, how fast do particular input values compare to other input values?
        - note: naive benchmarks would only provide a single value => `erf(10)`; but this approach is flawed. Need to cover a range of values; otherwise, you could be testing a special case!
    -   would allow another avenue for crowdsourcing benchmarks
4. 


---
## Automation

#### tools

Will need a `tools` directory in individual repositories to
*   house `Makefile` dependencies
*   include CI scripts
*   house doc tools
    -   JSDoc templates
    -   JSDoc typedefs


#### package.json

1. Populate individual module contributors automatically by extracting author info from `git` commits?
    -   main author could be populated based on highest number of commits? most changes? responsible for most lines of code?
        -   most lines of code may be best heuristic as likely that the author is thus most knowledgeable/owns the most code
        -   over time the main author could change...is this a problem? => prob not, as the new author should be most familiar with the relevant code
2. populate scripts similarly for all modules
3. augment `keywords` with universal project `keywords`
4. can add `testling` config, if needed
5. populate git urls based on destination repo
6. should be able to scan module code to determine dev and main deps and add them to the `package.json` based on what is installed in the main repo
    -   [dependency-check](https://github.com/maxogden/dependency-check)
    -   if a dependency is already included in the `package.json`, keep that dependency, thus allowing local override of a dependency
        -   how will that work in terms of dep install within the context of the larger project?
    -   [module-deps](https://github.com/substack/module-deps)
7. can updating the version be automated?
8. 


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
|-------datasets
|---------anscombes-quartet
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
