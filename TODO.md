TODO
====

1. once `stdlib` is live (merged to `master` and published), make the default branch be `develop`

   * all PRs, etc, should be made against `develop`

1. replace `jshint` with `eslint`

   * add to test command
   * support reformatting ala `go fmt`
   * move `eslint` config files/modules to this repo (will need to do audit to ensure up-to-date)

2. add NPM style [guide](https://github.com/voorhoede/npm-style-guide)

3. determine how to handle internal `@stdlib` links in READMEs

   * e.g., `@stdlib/math/constants/float64-two-pi`
   * replace internal module references

4. more extensive tests for `ln`, `sqrt`, `cos`, `sin`, `cos`, etc
  
   * test against Julia

5. determine a browser testing strategy

   * could run into memory issues if all numeric tests are run for all functions, etc.
   * one possibility is to loop through all files and run each individually (browserify, testling, and repeat)
   * may have to punt browser testing to individual repos (!)

6. std polyfills?

   * object-keys
   * typed-array
   * ...

7. how to handle modules with CLIs?

   * will want some sort of CLI test framework to test `stdin`, `stdout`, args, etc.

8. how to handle browser tests for non-browser fcns

   * e.g., `fs` functions like `fs/exists`, or `cwd`

9. migrate JSDoc; use one of

   * [`dox`](https://github.com/tj/dox)

   * [`mrdoc`](https://github.com/mr-doc/mr-doc) (aka `doxx`)

   * [`docco`](https://github.com/jashkenas/docco)

   * [`jsdoc`](https://github.com/jsdoc3/jsdoc)

   * [`documentation.js`](http://documentation.js.org/)

     - see [turf-www](https://github.com/Turfjs/turf-www) and [turf](https://github.com/Turfjs/turf)

   * [`jsdoc-parse`](https://github.com/jsdoc2md/jsdoc-parse)

   * [`dmd`](https://github.com/jsdoc2md/dmd)

   * [`jsdox`](https://github.com/sutoiku/jsdox)

   * [`dokker`](https://github.com/oceanhouse21/dokker)

   * [`jsdoc-to-markdown`](https://github.com/jsdoc2md/jsdoc-to-markdown)

   * [`yuidoc`](http://yui.github.io/yuidoc/syntax/index.html)

   * [`groc`](https://github.com/nevir/groc)

   * [`jsduck`](https://github.com/senchalabs/jsduck)

   * [`esdoc`](https://github.com/esdoc/esdoc)

   * [`docker.js`](https://github.com/jbt/docker)

   * [`doctrine`](https://github.com/eslint/doctrine)

   * ...

10. 

11. add CONTRIBUTING.md

12. determine strategy for generic validation fcns

13. lint filenames
  
    * [eslint plugin](https://github.com/selaux/eslint-plugin-filenames)

14. consider changing `isNumber` to `isNumeric`

15. export regexps?

    * can they be exported as constants or are they mutable?

16. `Makefile` target to run test fixtures

    * detect script type; e.g., `R`, `python`, `Julia`, `Golang`, `C` or `JS`

      - can be as simple as filename extension
      - of course, may also want to use a shell script to run tests (`.sh`)
      - for files without an extension, assume executable

    * run the script
    
      - may want to `chmod` the script, so do not need to know the system alias for the runner environment (e.g., Julia => `julia`) and can leverage internal shebang

17. should `utils/function-name` support generator functions?

    * a separate function?

18. replace `require` statements of external compute modules

19. tests for top-level `tools`; e.g., JSDoc templates, etc

20. add rule to JavaScript style guide about not using built-in functions, especially math functions

    * link to various accuracy issues
    * highlight that browsers often sacrifice accuracy for speed

21. clean-up test runners

    * `log1p` 
    * `sinpi`
    * etc.

22. `type-of` should check for `toStringTag` support

23. update `utils/tools`

24. generic `is-finite` util should include note about how differs from global `isFinite`

25. create better examples for constants

    * e.g., how and why and in what contexts a constant may be used

26. investigate [textlint](https://github.com/textlint/textlint)

27. project stats

    * use [ndu](https://github.com/groupon/ndu) to visualize dependency size

    * use [disc](https://github.com/hughsk/disc) to visualize browserify output

    * later project stats can be displayed in a separate webpage

      - see visualcinnamon.com for inspiration

28. FIX: security vulnerability when using `rm -rf` in Makefile rules

    * due to using environment variables. If one is improperly set, could be catastrophic. Safe delete?

      - consider [trash](https://github.com/sindresorhus/trash) and [trash-cli](https://github.com/sindresorhus/trash-cli)

        * No, as Sindre does not provide backwards compatibility. Will need to roll our own.

29. `Makefile` does not list top-level `examples`; is this intentional?

30. move test fixture runners into sub-directories based on language

    * e.g., `./fixtures/julia/*`

31. add Saucelabs with zuul (?)

32. [gh-pages](https://github.com/tschaub/gh-pages)

33. possible issue for [float64-set-high-word](https://ci.appveyor.com/project/kgryte/stdlib/build/job/3nseqtdxqey85wfk)

    * attempted to debug, but was able to get the right return value; so not sure what happened and why
    * NOTE: this seems to be a recurring bug; builds continue to occasionally fail on Windows
    * may be useful: [browser-repl](https://github.com/Automattic/browser-repl)

34. module to identify equations in README files

    * parse
    * generate svg
    * generate html
    * commit
    * insert into readme (replace anything already existing)
    * similar to Makefile test targets, include a target to filter and selectively update README equations

35. jsdoc HTML template

    * needs a total refactor

    * browserify pipeline

      - [mathjax](https://github.com/mathjax/MathJax-node)

    * see documentation.js and turf

36. tailor Mathjax [config](https://github.com/mathjax/MathJax/blob/master/config/default.js)

37. a project reference manager?

    * something akin to bibtex; i.e., a centralized list of references which can be globally referenced (e.g., IEEE754, as the Wikipedia reference, etc)
    * an individual module, when created, would get the global link included in the README
    * an individual module could override a reference by including a different link, but having the same "tag" in its README

38. consider [standard-version](https://github.com/conventional-changelog/standard-version)

    * [changelog-standard](https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md)

39. [add](https://github.com/vhf/v8-bailout-reasons) to contribution guidelines

    * [bluebird](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers)
    * [optimization killers](https://github.com/zhangchiqing/OptimizationKillers)
    * [HTML5 Rocks](http://www.html5rocks.com/en/tutorials/speed/v8/)
    * [v8-perf](https://github.com/thlorenz/v8-perf)
    * [chrome devtools](https://github.com/GoogleChrome/devtools-docs/issues/53)

40. in all tests (and examples), replace `Math.random` with a seeded `lcg`

    * for tests, be sure to record the seed so that failed tests can be debugged

41. for datasets,

    * include datapackage.json
    * license under CC0

42. check if `codecov` will accept multiple coverage reports

    * would like the ability to distinguish Linux, Windows, and browser coverage reports
    * temporary `git` tags?

43. make Travis and Appveyor build badges the same dimensions

    * currently, Appveyor includes a logo
    * could use shields.io

44. consider using [svgo](https://github.com/svg/svgo) to minimize eqn svgs

45. `*.cpp` vs `*.cc` for C++ files?

    * use `*.cpp` and `*.hpp`

46. find inspiration for the JS style guide from C++ core [guidelines](https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md)

    * include ESLint rules for each (where applicable) guideline
    * include references (e.g., perf, fast elements, etc)

47. add code climate badge

48. consider using things like [shellcheck](https://github.com/koalaman/shellcheck) for linting files other than JavaScript

    * markdown linting

      - [alex](https://github.com/wooorm/alex)

      - [retext-readability](https://github.com/wooorm/retext-readability)

      - [retext-lint-code](https://github.com/Qard/remark-lint-code)

        - uses eslint

    * js code in markdown linting

49. on src doc build for `gh-pages`, also do the same for `develop`; e.g., `/docs/src/develop`, which could map to `http://a.b.c/docs/src/develop`

    * allow a "preview" alongside current prod

50. investigate whether [bit operators](http://www.netlib.org/fdlibm/e_pow.c) would be better for `is-even` and `is-odd`

51. browserify transform to load all "man" pages (e.g., readmes)

    * allow help docs to be loaded into a browser for interactive environments
    * store in local storage (?) or in-memory

52. load modules into a REPL

    * man pages can be READMES

      - can these be dynamically compiled/transformed at runtime, or will startup time be too slow

        - dynamic would be nice, as then would not need to maintain a separate collection of `man` docs

          - need some way of determining which modules are exposed in the REPL (could possibly parse the context files a la browserify, find `require` statements, and build), finding their READMEs, transforming, and then building a hash table for printing in the REPL

    * `help(blas.copy)` (or `help("blas.dcopy")` or `? blas.dcopy` (like Julia))

      - with `maps`, should be able to use function reference (symbol) as key

    * refs

      - [docs](https://nodejs.org/api/repl.html)
      - [ultra-repl](https://github.com/Benvie/Node.js-Ultra-REPL)
      - [repl-start](http://www.2ality.com/2011/11/node-repl-start.html)
      - [node-repl](http://maxogden.com/node-repl.html)
      - [app-specific-repl](http://derickbailey.com/2014/07/02/build-your-own-app-specific-repl-for-your-nodejs-app/)
      - [repl over tcp](https://gist.github.com/TooTallNate/2209310)
      - [repl using curl](https://gist.github.com/TooTallNate/2053342)

    * ASCII charts

      - should be able to create an isomorphic API with browser charts
      - ability to open chart in browser
      - [sparkly](https://github.com/sindresorhus/sparkly)
      - [jstrace/chart](https://github.com/jstrace/chart)

    * ASCII [tables](https://github.com/sorensen/ascii-table)

    * should be able to load a REPL context in a browser

      - meaning, should be able to fairly seamlessly have a session in a terminal which is "transferred" to a browser context, including shell history and, say, charts (ASCII to an SVG equivalent)

53. README to man doc (see above)

    * cannot directly print a raw README, as will contain markup
    * will need to transform into plain text
    * [writing manual pages](http://liw.fi/manpages/)
    * [formatted man page](http://www.tldp.org/HOWTO/Man-Page/q3.html)
    * [ubuntu](http://manpages.ubuntu.com/manpages/wily/man7/man-pages.7.html)
    * [linux](http://man7.org/linux/man-pages/man7/man-pages.7.html)
    * [man-n](https://github.com/man-n/man-n)

54. utility which scans the project for `package.json` files and validates the file using a defined schema

    * can be used as part of a build step to ensure `package.json` files are properly formatted, valid, and have requisite information

55. build utility to scan all project dirs for camelcase file names

    * could be part of a lint step

56. refactor module CLIs to match CLI snippet

57. add the `engines` field to module `package.json` files

58. consider adding a license prefix to each file

    * [julia](https://github.com/JuliaLang/julia/blob/master/contrib/add_license_to_files.jl)

59. intro how-tos

    * [gifs](https://github.com/chjj/ttystudio)

60. evaluate using [inch](https://github.com/rrrene/inch) for src code documentation evaluation

61. gitter

62. add ability to lint from subdirectories to `makie`

    * for `lint-javascript`, requires setting multiple environment variables (the key value of hash could be an array of env variables which must be set)

63. `list-modules` Makefile recipe

    * can be used in conjunction with dep analysis to see which modules are __not__ required by a file, etc.

64. should `etc` config files be placed in subdirectories?

    * would require updating Makefile targets

65. `list-required-modules` Makefile recipe

    * should analyze `require` graph (ala `browserify`) to determine dependencies
    * should work for a single file or a directory
    * for directory, may want to dedupe (flat array), a tree result which states which modules require which modules (similar to a node dependency graph), or, for every found module, the deps for that module (array of arrays)
    * see automation/package.json item below

66. investigate [npm-publish-please](https://github.com/inikulin/publish-please)

    * not sure a separate tool is necessary, but may find inspiration

67. REPL startup file, similar to `startup.m`

    * either command-line option or via a REPL config file
    * could possibly use `configstore`, or something similar, to cache the config

68. [doctest](https://docs.python.org/2/library/doctest.html)

    * [jsdoctest](https://github.com/yamadapc/jsdoctest)
    * [jsdoced.js](https://github.com/jeromeetienne/jsdoced.js)
    * [markdown-doctest](https://github.com/Widdershin/markdown-doctest)
    * [mocha-doctest](https://github.com/andreypopp/mocha-doctest)
    * [comment-to-assert](https://github.com/azu/comment-to-assert)
    * [doctestjs](https://github.com/ianb/doctestjs)

69. to browser

    * [bpipe](https://github.com/Marak/bpipe)
    * [bcat](https://github.com/kessler/node-bcat)
    * [hcat](https://github.com/kessler/node-hcat) => could be inspiration for piping data to a chart
    * [scat](https://github.com/hughsk/scat)
    * [browser-run](https://github.com/juliangruber/browser-run)
    * [budo](https://github.com/mattdesl/budo)
    * [simple-html-index](https://github.com/mattdesl/simple-html-index)

70. cross-platform open browser

    * [biased-opener](https://github.com/jakub-g/biased-opener)
    * [opener](https://github.com/domenic/opener)
    * [browser-launcher](https://github.com/substack/browser-launcher)
    * [browser-launcher2](https://github.com/benderjs/browser-launcher2)

71. ability to run examples in a browser => Makefile target `examples-browser`

72. build step which runs examples in browsers and catches any errors

    * could possibly listen on `window.onerror` to trap uncaught exceptions
    * setup similar to `testling`, but without needing `TAP` output; basically, do any errors occur or not
    * will probably need source maps, otherwise will be difficult to debug
    * as a half-way measure, could intercept `console` method calls, pipe back to server, and then keep a rolling log cache; when an error is received, could stop running examples and print the cache

73. drop `options` requirement for `tools/http-server`

    * make the function polymorphic where it may accept just an `options` arg, a `requestListener` arg, or both args

74. 

75. Should `@stdlib/utils/is-window` and `@stdlib/utils/platform` be functions rather than constants?

76. `@stdlib/regexp/extname`, `*/dirname` export circular references; prob best to clone the regexp and bind to exported object

    * requires porting `utils-copy`

77. for browser REPL, use a virtual filesystem

    * `fs` and other filesystem methods should remain the same
    * difference is that files are not written to disk, but to, say, IndexedDB
    * would allow for an "isomorphic" REPL and the ability to run all tests and examples on both the server and client
    * [filer](https://github.com/filerjs/filer)
    * [os.js](https://github.com/os-js/OS.js)
    * [filesystem API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Introduction)
    * [emscripten](https://github.com/kripken/emscripten/blob/incoming/src/library_fs.js)
    * [idb.filesystem.js](https://github.com/ebidel/idb.filesystem.js/)
    * [filer.js](https://github.com/ebidel/filer.js)
    * [browserFS](https://github.com/jvilk/BrowserFS)


---

## Modules

1. is-finite (generic)

   - may need to describe how different from built-in

2. is-infinite (generic)

3. is-nan (generic)

4. is-even (generic)

5. is-odd (generic)

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

23. round to number of [sig figs](http://stackoverflow.com/questions/202302/rounding-to-an-arbitrary-number-of-significant-digits)

    - see [MFX](http://www.mathworks.com/matlabcentral/fileexchange/26212-round-with-significant-digits)
    - see [Julia](https://github.com/JuliaLang/julia/blob/master/base/floatfuncs.jl#L112)

24. double decimal exponents

    - max
    - min subnormal
    - etc.

25. [fibo](https://medium.com/javascript-scene/7-surprising-things-i-learned-writing-a-fibonacci-generator-4886a5c87710#.62tfusajl)

    - lookup

26. [scalbn](https://github.com/freebsd/freebsd/blob/master/lib/msun/src/s_scalbn.c)

    - [cppreference](http://en.cppreference.com/w/c/numeric/math/scalbn)
    - how would the `FLOAT_RADIX` be supplied?

27. int32-to-uint32

28. [fast](https://golang.org/src/math/pow.go) pow

    - may need to research

29. port `upsearch` to `fs`

    - requires `is-*` modules

30. is-electron

    - [renderer](https://github.com/jprichardson/is-electron-renderer)
    - [electron-is](https://github.com/delvedor/electron-is)

31. global var detection

32. feature detection [utils](https://github.com/williamkapke/node-compat-table/blob/gh-pages/testers.json)

33. port `https-server`


---

## Ideas

1. when testing numeric code, would be interesting to test against multiple platforms (ala test fixtures); e.g., Julia, Python, R, Go, Boost, etc.

   * ability to run against multiple versions of alternative platforms

   * compare results for each alternative platform version

     - would allow flagging regressions or improvements in the implementations of other platforms

   * would be part of a comprehensive CI before publishing

     - suppose could also be done at the individual module level during separation

   * generate plots showing results across all platforms

2. a tool which reports which paths are __not__ imported by a file

   * use case is ensuring that modules which should be exported by an aggregate file are exported

3. for JSDoc docs, ability to run benchmarks for any given method

   * UI button to run benchmark

   * per method/module/etc (similar to having a button to view source)

   * would allow users to test the relatively speed of pathways within a function; e.g., for `erf`, how fast do particular input values compare to other input values?

     - note: naive benchmarks would only provide a single value => `erf(10)`; but this approach is flawed. Need to cover a range of values; otherwise, you could be testing a special case!
     - would allow another avenue for crowdsourcing benchmarks

4. if every module wrapped as a stream, then, via linking, terminal becomes a REPL

   * ability to invoke with arg

        ``` bash
        $ erf 5
        # => <number>
        $ erf 5 19 13 1
        # => <number>\n<number>\n... (could have option to specify delimiter)
        ```

   * ability to pipe

        ``` bash
        $ cat x.txt | erf
        # => ...
        ```

   * may want to prefix with `stdlib-<fcn>` to avoid conflicts with built-ins

     - tools script could crawl the project and auto create aliases and links




---

## Automation

#### tools

Will need a `tools` directory in individual repositories to

* house `Makefile` dependencies

* include CI scripts

* house doc tools

  - JSDoc templates
  - JSDoc typedefs


#### package.json

1. Populate individual module contributors automatically by extracting author info from `git` commits?

   * main author could be populated based on highest number of commits? most changes? responsible for most lines of code?

     - most lines of code may be best heuristic as likely that the author is thus most knowledgeable/owns the most code
     - over time the main author could change...is this a problem? => prob not, as the new author should be most familiar with the relevant code

2. populate scripts similarly for all modules

3. augment `keywords` with universal project `keywords`

4. can add `testling` config, if needed

5. populate git urls based on destination repo

6. should be able to scan module code to determine dev and main deps and add them to the `package.json` based on what is installed in the main repo

   * [dependency-check](https://github.com/maxogden/dependency-check)

     - uses `node-detective`

   * [node-detective](https://github.com/substack/node-detective)

     - apparently relies on outdated mods, but may still work

   * [node-source-walk](https://github.com/mrjoelkemp/node-source-walk)

     - uses more recent `acorn` version

   * if a dependency is already included in the `package.json`, keep that dependency, thus allowing local override of a dependency

     - how will that work in terms of dep install within the context of the larger project?
     - [module-deps](https://github.com/substack/module-deps)

7. can updating the version be automated?
 


#### LICENSE

1. Read `license` field in `package.json` and generate the appropriate license



---

## Notes

1. Ideal vs reality

   * @stdmath/base/special/erf

     - @stdmath/base-special-erf

   * @stdmath/generics/special/erf

     - @stdmath/generics-special-erf

2. Under the @stdlib scope...

   * @stdlib/math-base-special-erf
   * @stdlib/math-base-core-float64-to-binary-string

3. References on root `global`

   * [underscore](https://github.com/jashkenas/underscore/blob/master/underscore.js#L14)
   * [lodash](https://github.com/lodash/lodash/blob/4.6.1/lodash.js#L369)
   * [window.js](https://github.com/Raynos/global/blob/master/window.js)
   * [stackoverflow](http://stackoverflow.com/questions/7507638/is-there-a-standard-mechanism-for-detecting-if-a-javascript-is-executing-as-a-we)
   * [insert-module-globals](https://github.com/substack/insert-module-globals/pull/48)
   * [TC39](https://github.com/tc39/proposal-global)
   * [symstem.global](https://github.com/ljharb/System.global)


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
