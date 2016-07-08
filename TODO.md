TODO
====

1. once `stdlib` is live (merged to `master` and published), make the default branch be `develop`

   * all PRs, etc, should be made against `develop`

1. replace `jshint` with `eslint`

   * add to test command
   * support reformatting ala `go fmt`
   * move `eslint` config files/modules to this repo (will need to do audit to ensure up-to-date)

2. add NPM style [guide](https://github.com/voorhoede/npm-style-guide) with [versioning info](https://github.com/compute-io/contributing#versioning)

3. determine how to handle internal `@stdlib` links in READMEs

   * e.g., `@stdlib/math/constants/float64-two-pi`
   * replace internal module references

4. create an `docs/install.md` for developers

   * julia
   * R
   * python
   * golang
   * boost

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

   * [`doclets`](https://github.com/lipp/doclets)

   * [`mkdocs`](http://www.mkdocs.org/)

   * ...

10. debug [eval sources](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Debug_eval_sources)

    * [node-inspector](https://github.com/node-inspector/node-inspector)
    * [source maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)

11. add CONTRIBUTING.md

12. determine strategy for generic validation fcns

13. lint filenames

    * [eslint plugin](https://github.com/selaux/eslint-plugin-filenames)

14. consider changing `isNumber` to `isNumeric`

15. prngs

    * [pcg](http://www.pcg-random.org/)
    * [sfmt](http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/SFMT/#dSFMT)
    * [randamu](https://github.com/PhDP/randamu)
    * [gsl](https://github.com/ampl/gsl/tree/master/rng)
    * [collection of lcgs](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.53.3686&rep=rep1&type=pdf)
    * [Lehmer LCG](https://en.wikipedia.org/wiki/Lehmer_random_number_generator)
    * [lcgs](https://en.wikipedia.org/wiki/Linear_congruential_generator)
    * [better rngs for JavaScript](https://github.com/nquinlan/better-random-numbers-for-javascript-mirror)
    * [d3-random](https://github.com/d3/d3-random)
    * [gauss-random](https://github.com/scijs/gauss-random)
    * [lcg-random](https://github.com/remko/lcg-random)
    * [randy](https://github.com/deestan/randy)
    * [randgen](https://github.com/robbrit/randgen)
    * [random.js](https://github.com/ericzhang-cn/random.js)
    * [seed-random](https://github.com/ForbesLindesay/seed-random)
    * [random-js](https://github.com/ckknight/random-js)
    * [seedrandom](https://github.com/davidbau/seedrandom)
    * [modulo bias](http://stackoverflow.com/questions/10984974/why-do-people-say-there-is-modulo-bias-when-using-a-random-number-generator)
    * [diehard tests](https://github.com/reubenhwk/diehard)
    * [dieharder](https://github.com/seehuhn/dieharder)
    * [RNGTest.jl](https://github.com/andreasnoack/RNGTest.jl)
    * [ziggurat](http://www.doornik.com/research/ziggurat.pdf)
    * [Matlab's randn](https://arxiv.org/abs/math/0603058v1)
    * [Gaussian random number generators](http://www.doc.ic.ac.uk/~wl/papers/07/csur07dt.pdf)
    * [V8's previously poor implementation](http://v8project.blogspot.de/2015/12/theres-mathrandom-and-then-theres.html)
    * [xorshift+](http://vigna.di.unimi.it/ftp/papers/xorshiftplus.pdf)
    * [chrome thread](https://bugs.chromium.org/p/chromium/issues/detail?id=246054)
    * [thenextweb](http://thenextweb.com/google/2015/12/17/google-chromes-javascript-engine-finally-returns-actual-random-numbers/#gref)
    * [hackaday](http://hackaday.com/2015/12/28/v8-javascript-fixes-horrible-random-number-generator/)
    * [betable post](https://medium.com/@betable/tifu-by-using-math-random-f1c308c4fd9d#.l23p1a9om)
    * [estimating pi](https://gist.github.com/mmalone/796d959dcf5b780106f4)
    * [xorshift scratch](https://gist.github.com/mmalone/173e20becc755ebb2658)
    * [randint](https://gist.github.com/mmalone/d710793137ed0d6b8cb4)
    * [rc4 encryption](http://www.math.washington.edu/~nichifor/310_2008_Spring/Pres_RC4%20Encryption.pdf)

16. `Makefile` target to run test fixtures

    * detect script type; e.g., `R`, `python`, `Julia`, `Golang`, `C`, `C++`, or `JS`

      - can be as simple as filename extension
      - of course, may also want to use a shell script to run tests (`.sh`)
      - for files without an extension, assume executable

    * run the script

      - may want to `chmod` the script, so do not need to know the system alias for the runner environment (e.g., Julia => `julia`) and can leverage internal shebang

    * if part of CI, would allow continuous testing against an updated fixture space and would also allow continuous testing that fixture runners work

17. should `utils/function-name` support generator functions?

    * a separate function?

18. replace `require` statements of external compute modules

19. tests for top-level `tools`; e.g., JSDoc templates, etc

20. deploy `plato` complexity report to gh-pages

    * similar to JSDoc source docs

21. clean-up cpp test runners

    * `powm1`
    * `riemann-zeta`

22. `type-of` should check for `toStringTag` support

23. update `utils/tools`

24. generic `is-finite` util should include note about how differs from global `isFinite`

25. create better examples for constants

    * e.g., how and why and in what contexts a constant may be used
    * e.g., `float64-max-exponent` => useful for randomly generating numbers across the entire range of possible numbers (sort of, as only 16 decimals => logspace)

26. investigate [textlint](https://github.com/textlint/textlint)

27. project stats

    * use [ndu](https://github.com/groupon/ndu) to visualize dependency size

    * use [disc](https://github.com/hughsk/disc) to visualize browserify output

    * could do something akin to [issue stats](https://github.com/hstove/issue_stats) but locally and/or only including project modules/repos

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
    * [academic markdown and citations](http://www.chriskrycho.com/2015/academic-markdown-and-citations.html)
    * [scholdoc](https://github.com/timtylin/scholdoc)
    * [scholarly markdown](http://scholarlymarkdown.com/)
    * [scholarly markdown guide](http://scholarlymarkdown.com/Scholarly-Markdown-Guide.html)
    * [R markdown](http://rmarkdown.rstudio.com/authoring_bibliographies_and_citations.html)
    * [Citeproc JSON](http://blog.martinfenner.org/2013/08/08/csl-is-more-than-citation-styles/)
    * [citeproc-js](https://github.com/juris-m/citeproc-js)
    * [bibjson](http://okfnlabs.org/bibjson/)
    * [multimarkdown](https://github.com/fletcher/MultiMarkdown-5)
    * [tidying Markdown reference links](http://www.leancrew.com/all-this/2012/09/tidying-markdown-reference-links/)
    * ...
    * separate bib doc(s), which can be readily converted to JSON (e.g., TOML or YAML), thus allowing comments (or maybe even a JSDoc like syntax and something akin to typedefs)
    * in Markdown, use citation markup strategy similar to scholarly markdown
    * given a Markdown file, create a list of two things: the unique citation identifiers used throughout the text and any citations included in the `links` section
    * ignore internal links to other Markdown sections
    * if an id is found in bib docs, use that reference
    * will want canonical way to reference project modules, which may be tricky, as modules may move, etc; this is important for automating "see also" type sections
    * otherwise, leave the existing ref as is
    * as part of this, should be able to lint (although `remark` does this already)
    * once finished, save to disk
    * does require a separate build step, but can be automated `pre-push` or via `watch` 
    * how would we distinguish (in markup) between just wanting a link and wanting a full-blown reference citation? => maybe if within a `references` section, similar to `links`

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
    * could have seed be an environment variable, so could be set in CI environment
    * module to get a seed; one method used could be to check env var

41. investigate [nbind](https://github.com/charto/nbind)

    * could be useful for, say, Boost bindings

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

    * would allow a "preview" alongside current prod

50. investigate whether [bit operators](http://www.netlib.org/fdlibm/e_pow.c) would be better for `is-even` and `is-odd`

51. browserify transform to load all "man" pages (e.g., readmes or actual `man` pages)

    * allow help docs to be loaded into a browser for interactive environments
    * store in local storage (?) or in-memory

52. load modules into a REPL

    * man pages can be READMES (or not; may require separate `usage.txt` tailored to REPL env)

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
      - [bashplotlib](https://github.com/glamp/bashplotlib)
      - [node-cli-graph](https://github.com/IonicaBizau/node-cli-graph)
      - [ASCIIPlots.jl](https://github.com/johnmyleswhite/ASCIIPlots.jl)
      - [asciiplot](https://github.com/mfouesneau/asciiplot)
      - [node-clear](https://github.com/bahamas10/node-clear)
      - [ansi-escapes](https://github.com/sindresorhus/ansi-escapes)
      - [node-charm](https://github.com/substack/node-charm)
      - [gvz](https://github.com/chrisdickinson/gvz)

    * ASCII [tables](https://github.com/sorensen/ascii-table)

    * should be able to load a REPL context in a browser

      - meaning, should be able to fairly seamlessly have a session in a terminal which is "transferred" to a browser context, including shell history and, say, charts (ASCII to an SVG equivalent)

    * [black-screen](https://github.com/shockone/black-screen) terminal emulator

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

    * add to build step, but first requires some modification (e.g., JSDoc generated HTML files)

56. refactor module CLIs to match CLI snippet

57. add the `engines` field to module `package.json` files

58. consider adding a license prefix to each file

    * [julia](https://github.com/JuliaLang/julia/blob/master/contrib/add_license_to_files.jl)

59. intro how-tos

    * [gifs](https://github.com/chjj/ttystudio)

60. evaluate using [inch](https://github.com/rrrene/inch) for src code documentation evaluation

61. gitter

62. investigate [xonsh](https://github.com/scopatz/xonsh)

63. `list-modules` Makefile recipe

    * can be used in conjunction with dep analysis to see which modules are __not__ required by a file, etc.

64. should `etc` config files be placed in subdirectories?

    * would require updating Makefile targets

65. `list-required-modules` Makefile recipe

    * should analyze `require` graph (ala `browserify`) to determine dependencies
    * should work for a single file or a directory
    * for directory, may want to dedupe (flat array), a tree result which states which modules require which modules (similar to a node dependency graph), or, for every found module, the deps for that module (array of arrays)
    * see automation/package.json item below

66. investigate [npm-publish-please](https://github.com/inikulin/publish-please) and `np` (Sindre)

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

69. to browser (see tools/simple-http-server)

    * [bpipe](https://github.com/Marak/bpipe)
    * [bcat](https://github.com/kessler/node-bcat)
    * [hcat](https://github.com/kessler/node-hcat) => could be inspiration for piping data to a chart
    * [scat](https://github.com/hughsk/scat)
    * [browser-run](https://github.com/juliangruber/browser-run)
    * [budo](https://github.com/mattdesl/budo)
    * [simple-html-index](https://github.com/mattdesl/simple-html-index)
    * [http-server](https://github.com/indexzero/http-server)
    * [ecstatic](https://github.com/jfhbrook/node-ecstatic)
    * [glance](https://github.com/jarofghosts/glance)
    * [wzrd](https://github.com/maxogden/wzrd)
    * [serve-static](https://github.com/expressjs/serve-static)

70. cross-platform open browser

    * [biased-opener](https://github.com/jakub-g/biased-opener)
    * [opener](https://github.com/domenic/opener)
    * [browser-launcher](https://github.com/substack/browser-launcher)
    * [browser-launcher2](https://github.com/benderjs/browser-launcher2)
    * [opn](https://github.com/sindresorhus/opn) and [opn-cli](https://github.com/sindresorhus/opn-cli)
    * [node-open](https://github.com/pwnall/node-open)
    * [open-url](https://github.com/Jam3/open-url/blob/master/index.js)

71. ability to run examples in a browser => Makefile target `examples-browser`

    * can use `simple-http-server`
    * [packify](https://github.com/maxogden/packify)

72. build step which runs examples in browsers and catches any errors

    * could possibly listen on `window.onerror` to trap uncaught exceptions
    * setup similar to `testling`, but without needing `TAP` output; basically, do any errors occur or not
    * will probably need source maps, otherwise will be difficult to debug
    * as a half-way measure, could intercept `console` method calls, pipe back to server, and then keep a rolling log cache; when an error is received, could stop running examples and print the cache

73. drop `options` requirement for `tools/http-server`

    * make the function polymorphic where it may accept just an `options` arg, a `requestListener` arg, or both args

74. review CoC for more community oriented policies

    * add note about right to delete offending comments, etc; e.g., [Chakra core](https://github.com/Microsoft/ChakraCore/blob/master/CODE_OF_CONDUCT.md)

75. add JSDoc style guide to JavaScript style guide

    * include annotations

      ``` text
      // Strict equality:
      // returns 3.141592653589793

      // Approximate equality (use roundn(x) and then strict equal):
      // returns ~3.14

      // Deep equal:
      // returns {'a':[1,2,3]}

      // Deep equal (mutation):
      // x => [ 1, 2, 3, 4, 5 ]

      // Deep equal:
      /* returns
           {
             "a": [1,2,3],
             "b": {"beep":"boop"}
           }
      */

      // Deep approximately equal:
      /* returns
           {
             "a": [~1,~2,~3],
             "b": {"beep":"boop"}
           }
      */

      // Wild card continuation:
      /* returns
            [
              "beep",
              "boop",
              ...
            ]
      */

      // Deep equal (matrices):
      /* returns
           x[':'] = [ 0 0
                      0 0 ]
      */

      // Deep approximately equal (matrices):
      /* returns
           mat[':'] = [ ~3.14       0
                            0   ~3.14 ]
      */

      // Wildcard (matrices):
      /* returns
           A[':'] = [...]
      */

      // Deep equal (ndarrays):
      /* returns
           x[':,:,0'] = [ 0 0
                          0 0 ]

           x[':,0,:'] = [ 0 0
                          0 0 ]

           x['0,:,:'] = [ 0 0
                          0 0 ]
      */

      // Type equality:
      // returns <boolean>

      // Type equality:
      // returns <string[]>

      // Type equality (instanceof):
      // returns <RegExp>

      // Type equality (instanceof):
      // returns <RangeError>

      // Type equality instanceof):
      // returns <Foo>

      // Wildcard (string):
      // returns '...'

      // Wildcard (array):
      // returns [1,...,10]

      // Wildcard (object):
      // returns { "a": ... }

      // Options:
      // returns true || false

      // Options:
      // returns <Error> || null

      // Formatted (string) (?):
      // returns => printf('%f', ?)

      // Wildcard:
      // returns ...

      // Throws:
      // throws <TypeError>

      // Output to terminal:
      // => 'beep'

      // Insert figure:
      // => <figure data=?>

      // Insert figure:
      // => plot(x, y)
      ```

      ``` javascript
      var fs = require( 'fs' );
      fs.readFile( '/path/to/beep.js', onRead );
      function onRead( error, data ) {
        if ( error ) {
          throw error;
        }
        console.log( data.toString() );
        // returns '...'
      }
      ```

      ``` bash
      $ node ./bin/cli
      # => '...'
      # => '...'
      ```

      ``` bash
      $ node ./bin/cli
      # => e.g., 2016-05-24 08:42.34 Beep boop blah blah.
      ```

    * examples of modules, functions, constants, regexps, etc.

    * need a convention for client-side and server-side only examples

      - could use `@browseronly` and `@nodejsonly` special annotations, akin to `@private` and `@public`

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
    * [browser-sync-stream](https://github.com/mafintosh/browser-sync-stream)

78. Add Markdown style guide, including notes about comment annotations, equations, etc.

79. Add note about ES2015 features in JS style guide

    * Backwards compatibility is important
    * Only use if can polyfill
    * Must provide a polyfill
    * No compile steps

80. Function matrix across different environments (equivalents)

    * matlab
    * python
    * julia
    * go
    * r

81. Add type specs to `@stdlib/types/` folder

    * `abstract-ndarray`
    * `abstract-complex`
    * etc.

82. Add [git hooks](https://cbednarski.com/articles/makefiles-for-everyone/) to Makefile

    - on pull, check deps to see if any missing, removed, or out-of-date; if so, clear and reinstall (?)
    - will prob want a way to undo setting of hooks (i.e., a reset)
    - [intro to git hooks](https://www.sitepoint.com/introduction-git-hooks/)
    - [git pre-push](http://blog.ittybittyapps.com/blog/2013/09/03/git-pre-push/)

83. Python linting

    * [pylint](https://github.com/PyCQA/pylint)
    * [pycodestyle](https://github.com/PyCQA/pycodestyle)
    * [pyflakes](https://github.com/pyflakes/pyflakes)
    * prob combo of `pylint` and `pycodestyle`

84. R linting

    * [lintr](https://github.com/jimhester/lintr): no apparent CLI

85. Julia linting

    * [lint.jl](https://github.com/tonyhffong/Lint.jl): no apparent CLI

86. doc viewer

    * modify `SimpleHTTPServer` to only serve READMEs converted to HTML
    * for equations, instead of SVG, use MathJax
    * could also insert live figures (main, margin)
    * an extension would be to make the code samples interactive
    * gateway to running benchmarks, tests, and examples in-browser
    * how would we annotate for reactive documents? inline comments? spans?
    * how would we annotate asides/notes? maybe not necessary for standard module READMEs. Possibly via spans.

87. remark-insert-svg-equation plugin

88. remark-insert-svg-figure plugin

    * requires codifying a comment markup syntax, which can take inspiration from how equations are documented in Markdown

89. `make init` target

    * can setup `makie`
    * if have `make list-cli-modules`, can use `npm link` to install cli utils
    * setup git hooks
    * install deps
    * run tests, test-coverage, benchmarks, lint, etc

90. add a `run.sh` file in `test/fixtures`, which would provide a common entry point for running test fixture runners. Currently, need to know the lang to run. And while the name is the same `runner.*`, the procedure for running the scripts is not. A common entry point would abstract away the differences.

91. JS style guide

    * update rule re: parentheses in arithmetic ops
    * add note about ordering vars based on character length
    * declare functions using function declarations; also include another note about anon functions
    * use strict section should add notes re: node vs browser
    * use self section should include note about dynamic scoping of `this` variable
    * status code example has a bug (send should be status)
    * examples should use native built-ins, rather than implicitly rely on modules such as `request` and `express`
    * comments: "compared to multi-line"
    * all style guide code should be runnable
    * add note about module order (external before internal, etc)
    * add note about not using `/**` unless JSDoc
    * add note that module description should propose action (e.g., "Test ..."), while function descriptions should be in active tense (e.g., "Tests ...")
    * add note about file naming conventions (no uppercase, use of snake-case) => need to put in separate style-guide, as not JS specific
    * see #79
    * add rule to JavaScript style guide about not using built-in functions, especially math functions, linking to various accuracy issues and highlighting that browsers often sacrifice accuracy for speed
    * add rules about not using `Number`, `String`, and `Boolean` constructors
    * add rule about using source URL directives in eval'd code
    * add rule about including decimals when working with numbers; e.g., `3.0`
    * [principal of least abstraction](https://github.com/habitat-sh/habitat) => part of "The Stdlib Way" (inspired by The Unix Way)

92. README link to "live" (e.g., gh-pages) docs (badge)

    * may also apply in reverse, going from "live" to source

93. check that JSDoc annotations include `@throws`

94. include READMEs in namespace dirs

95. need a convention for defining README examples which are for illustration purposes only and not meant to be run

    * e.g., an example which is path dependent and cannot be known ahead of time, as it depends on user environment, etc.

96. proposal: add `stdlib` field to `package.json`

    - allowing setting whether a module is browser-only, nodejs-only, etc and whether a module is suitable for a REPL context, etc.

97. proposal: add `@sync` and `@async` JSDoc annotations to document synchronous and asynchronous functions, respectively

98. investigate [`bpkg`](https://github.com/bpkg/bpkg) as a package manager for `bash` scripts

    - could be useful for test runners, etc.

99. investigate [starscope](https://github.com/eapache/starscope)

100. review

     * [x] datasets
     * [x] math/base/blas
     * [x] math/base/random
     * [x] math/base/special
     * [x] math/base/tools
     * [x] math/base/utils
     * [ ] math/constants
     * [x] math/generics/statistics
     * [ ] math/generics/utils
     * [x] namespace
     * [ ] plot
     * [x] regexp
     * [x] repl
     * [x] streams
     * [x] tools
     * [ ] utils

101. [v8-profiler](https://github.com/node-inspector/v8-profiler) and [node-inspector](https://github.com/node-inspector/node-inspector)

102. [analyzing the dependency network](http://blog.graphcommons.com/analyzing-the-npm-dependency-network/) => should be able to perform a similar analysis internally

103. sine browser [example](http://www.thesoftwaresimpleton.com/blog/2016/05/25/sine-wave/)

     * could do something similar for other trigonometric functions

104. benchmarking

     * [chuhai](https://github.com/Hypercubed/chuhai)
     * benchmark.js
     * substack benchmark module
     * matcha

105. stability badges

     * may be good to have stability badges for methods / modules in order to indicate if a particular API is experimental, stable, locked, or otherwise

106. `makie` (and `make`) target to initialize a module (copy files from snippets to a destination directory)

107. Add a `FAQ.md` and link to it in the issues template

     * e.g., => Promise support? No.

108. rename `docs` directory to `doc`?

109. more [datasets](https://github.com/vega/vega-datasets) => some are not that interesting; others possibly

110. write own `deep-equal` algo

     * when complete, replace any use of `chai` for testing

111. evaluate [bithound](https://www.bithound.io/pricing)

112. utils/copy

     - should `preventExtensions`, `seal`, and `freeze` be extended to `objects` beyond `Object`, `Array`, and class instances?
     - `WeakMap` support (?) => not convinced this is viable due to weakly held references; i.e., getting a list of `keys` requires maintaining a separate list.
     - `WeakSet` support (?) => see `WeakMap` above
     - `Symbol` support => requires the ability to get [primitive value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
     - [structured-clone-algorithm](http://www.w3.org/html/wg/drafts/html/master/infrastructure.html#safe-passing-of-structured-data)
     - `ArrayBuffer` support
     - `Blob` support
     - `FileList` support
     - `ImageData` support
     - `ImageBitmap` support
     - `File` support

113. research [pull-streams](https://github.com/pull-stream/pull-stream-docs/blob/master/package.json)

114. see [makefile for the frontend](https://github.com/scriptype/Makefile-for-the-Front-End/blob/master/Makefile) for possible inspiration for frontend tasks

115. should `float64-signbit` return a `boolean` (like Julia) or a `1` or `0`?

116. `make` recipe for checking dep licenses

     - [read-package-tree](https://github.com/npm/read-package-tree)
     - [licensee.js](https://github.com/jslicense/licensee.js)
     - make part of `pre-push` git hook
     - as part of public docs, can generate a list of deps and their licenses; can do the same for `stdlib/lib/**` modules, so that all licenses for the individual mods/deps can be viewed together

117. investigate [test-all-versions](https://github.com/watson/test-all-versions)

118. [node-cpp](https://github.com/freezer333/nodecpp-demo)

119. [rr](https://github.com/mozilla/rr): record and replay framework

120. Investigate the concept of [markembed](https://github.com/dominictarr/markembed) for embedding content in Markdown files

121. Use cases for `remark` plugins:

     - reference management
     - conversion to RST
     - conversion to HTML
     - figure (static) insertion (similar to equations)
     - appending/removing sections en masse

122. [tangle](https://github.com/worrydream/Tangle)

123. GitHub issues as a [blog](https://github.com/0x00A/blog)

124. reviews

     - is-empty-array => should this just be a method off of `isArray`?

125. update the `test-istanbul` target to run each test individually, output `lcov.info` to a `reports` dir, concatenate all `lcov` results, and then generate a HTML report. See [istanbul](https://github.com/gotwarlost/istanbul).

     - for CI, push concatenated `lcov` to coverage service

126. [regex-adventure](https://github.com/substack/regex-adventure): useful for inspiration

127. build script which reruns the latest commit on `develop` each day => helps ensure, even in the absence of fresh commits, that we are testing the environment, etc. Would need to be a cron job triggered from a remotely hosted service.

128. plot svg components should have factory methods

129. [readme-tester](https://github.com/orangemug/readme-tester)

130. Annotations overlay, 

     - `x` values with text

131. Evaluate [check-build](https://github.com/FGRibreau/check-build)

132. Evaluate [rewind](https://github.com/gilesbowkett/rewind)

133. [iterables](https://github.com/leebyron/iterall)

134. [vmd](https://github.com/yoshuawuyts/vmd)

135. when browserifying `@stdlib/plot` should _ignore_ `electron-prebuilt`!!!!

     - may want to have a separate `view` method entirely; one that is catered to browser context

136. [function-plot](https://github.com/maurizzzio/function-plot)

137. see [webtorrent-desktop](https://github.com/feross/webtorrent-desktop) for electron inspiration

138. constant function? similar to identity function but as a factory?

139. svg components: move `methods/render.js` to `render/index.js`

140. sparkline rug plot

141. review steam and leaf unicode plot

142. add unicode sparklines to namespace => requires abstract interface

143. refactor plot electron renderer

144. ability to "plot" [tables](http://metricsgraphicsjs.org/examples.htm#experimental)?



---

## Immediate

1. randn

2. abstract-ndarray

3. terminal sparklines

   * toJSON => needs chart spec
   * colors

     - [ansi-256-colors](https://github.com/jbnicolai/ansi-256-colors)
     - would require escaping to work in the browser
     - [ansi_up](https://github.com/drudru/ansi_up)
     - [ansi-to-html](https://github.com/rburns/ansi-to-html)
     - but could also detect env and use ansi escape when in terminal mode and use HTML elsewhere (?) => no, too brittle.
     - maybe this should just be a user concern

   * support ndarrays

     - dimension, only 1d?

4. basic stream utilities

   - make `utils/debug` a standard stream (cli `name` option; does this module need split and join?)
   - split
   - join => example
   - map!!!!!!
   - cat
   - rand
   - from-array
   - [duplex-json-stream](https://github.com/mafintosh/duplex-json-stream/blob/master/index.js)
   - related => [into-stream](https://github.com/sindresorhus/into-stream)
   - [concat-stream](https://github.com/maxogden/concat-stream) => this is essentially an end sink stream
   - [pump](https://github.com/mafintosh/pump) (?)
   - [end-of-stream](https://github.com/mafintosh/end-of-stream)
   - something akin to [stream-combiner2](https://github.com/substack/stream-combiner2/blob/master/index.js)
   - [duplexer2](https://github.com/deoxxa/duplexer2)
   - [mississippi](https://github.com/maxogden/mississippi)
   - `to-console` or maybe `to-log` (provide own logger, with default being console using util-inspect) => write stream which writes each chunk to console (either normal or object mode); if object mode, use util-inspect and allow setting of depth
   - `debug` as a transform stream => could provide name and then toggle debugging based on name!
   - [tap-stream](https://github.com/thlorenz/tap-stream) and [inspect-stream](https://github.com/thlorenz/inspect-stream/blob/master/inspect-stream.js); see also [sculpt#tap](https://github.com/Medium/sculpt#tap)
   - [guide](https://gist.github.com/joyrexus/10026630) to node streams
   - [vstream](https://github.com/joyent/node-vstream) => instrumented streams
   - [through2-concurrent](https://github.com/almost/through2-concurrent)
   - log
   - [ndjson](https://github.com/maxogden/ndjson)

5. kmeans/dbscan

6. blas routines

7. all built-in `Math` methods

8. kde

   - [scipy](https://github.com/scipy/scipy/blob/v0.17.1/scipy/stats/kde.py#L41-L537)
   - [smith](https://github.com/Daniel-B-Smith/KDE-for-SciPy)
   - [kde in python](https://jakevdp.github.io/blog/2013/12/01/kernel-density-estimation/)
   - [fast computation of kernel estimators](http://www-stat.wharton.upenn.edu/~lzhao/papers/MyPublication/Fast_jcgs.2010.pdf)
   - [lecture](http://research.cs.tamu.edu/prism/lectures/pr/pr_l7.pdf)
   - [scikit-learn](http://scikit-learn.org/stable/modules/density.html)
   - [wikipedia](https://en.wikipedia.org/wiki/Kernel_density_estimation)

9. hist

   * [Matlab deprecates hist and histc](http://www.mathworks.com/help/matlab/creating_plots/replace-discouraged-instances-of-hist-and-histc.html)
   * [histogram](http://www.mathworks.com/help/matlab/ref/histogram.html)
   * [histcounts](http://www.mathworks.com/help/matlab/ref/histcounts.html)

10. csv/tsv/dsv

    * [d3-dsv](https://github.com/d3/d3-dsv)
    * [node-csv](https://github.com/wdavidw/node-csv)
    * [csv-parse](https://github.com/wdavidw/node-csv-parse)
    * [csv-spectrum](https://github.com/maxogden/csv-spectrum)
    * [csv-parser](https://github.com/mafintosh/csv-parser)
    * [paratext](https://github.com/wiseio/paratext/blob/master/src/csv/rowbased_worker.hpp)
    * read-csv (file) vs from-csv (stream) vs parse-csv (string or buffer) => some overlap between these

11. simple server


---

## Plot

1. plot cli (requires `split`)
2. rects
   - x
   - y
   - orientation: vert, horz
   - width calc'd via `x[i+1]-x[i]`
3. xAxis, yAxis -> true/false; whether to create or not
4. 
5. validation; instead of a sep validator folder, when providing an object, just set the props to validate; also allows moving etc files to prop folders
6. line -> area
7. readme
8. xExtendedTicks?


1. trig benchmarks
2. stream from list
3. map stream which loads an (accuracy) benchmark and runs (requires, say, Julia serving as standard)
4. map stream which receives results and outputs a plot
5. concat stream which buffers all plots
6. map stream which takes list of plots and injects into HTML template
7. launch a disposable server

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

   - should support option to return data of a specified type; e.g., `float32`, etc.
   - returned value should be compliant with `abstract-ndarray`

8. is-browser

9. is-node

10. is-worker

11. blas routines

12. is-plain-object (?)

13. is-object

14. [svg2png](https://github.com/domenic/svg2png) without promises and cleaner

     - [svgexport](https://github.com/shakiba/svgexport)

15. 

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

24. testing for

    * `sin`
    * `ln`
    * `exp`
    * `sqrt`
    * `tan` 

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

34. pipe viewer

    * [node-pv](https://github.com/juliangruber/node-pv/blob/master/index.js)
    * [blog](http://www.catonmat.net/blog/unix-utilities-pipe-viewer/)

35. [downloads-folder](https://github.com/juliangruber/downloads-folder) along with `tmpdir`, `homedir`, etc

36. next-tick

    * [polyfill](https://github.com/defunctzombie/node-process/blob/master/browser.js)

37. linux utility equivalents

    * cat, mv, rm, ls, touch, etc.
    * allow for swapping out when using browser virtual filesystem, allowing isomorphic apps (although, filesystem data would prob not be copied to browser)

38. [file-type](https://github.com/sindresorhus/file-type)

    * break into separate mods `is-pdf-file`, etc.

39. move `is-uri` main regex to separate module? Would allow for capturing parts of the scheme. Needs evaluating.

40. `kmeans` as an `EventEmitter`

41. bring `debug` in-house

42. [colorscales](https://github.com/bpostlethwaite/colormap)

43. [datasets](https://github.com/fivethirtyeight/data)

44. utility to convert R `DESCRIPTION` files to JSON => would streamline getting test fixture R dependencies

    * [R docs](https://cran.r-project.org/doc/manuals/r-release/R-exts.html#The-DESCRIPTION-file)
    * [debian control files](https://www.debian.org/doc/debian-policy/ch-controlfields.html)
    * [debian-control-parser](https://github.com/samcday/node-debian-control-parser)
    * [readcontrol](https://github.com/evanlucas/node-readcontrol)

45. accumulators
    
    * [boost src](https://github.com/boostorg/accumulators/blob/develop/include/boost/accumulators/statistics/mean.hpp)
    * [boost docs](http://www.boost.org/doc/libs/1_61_0/doc/html/accumulators/user_s_guide.html#accumulators.user_s_guide.the_statistical_accumulators_library)
    * [handystats](http://handystats.readthedocs.io/en/latest/incremental-statistics.html)

46. [discretize](http://www.mathworks.com/help/matlab/ref/discretize.html)

47. [gmm](https://github.com/rreusser/gaussian-mixture-estimator)

48. incrmkurtosis (windowed)

49. incrmskewness (windowed)

50. [buffer-indexof](https://github.com/soldair/node-buffer-indexof) and [buffer-split](https://github.com/soldair/node-buffer-split/blob/master/index.js) => see issues

51. base math `swap` (assume array-like) and generics `swap` (check for array-like)

52. [online stats](https://github.com/joshday/OnlineStats.jl)

53. `escape-regexp`

54. hex to ascii

55. arc4 cipher as a stream

56. `float64-to-hex`

    * [double-hex](https://github.com/mikolalysenko/double-hex)
    * [raw fields of float](http://www.exploringbinary.com/displaying-the-raw-fields-of-a-floating-point-number/)
    * [binary scientific notation](http://www.exploringbinary.com/displaying-ieee-doubles-in-binary-scientific-notation/)
    * [converting floats](http://www.exploringbinary.com/converting-floating-point-numbers-to-binary-strings-in-c/)
    * [Python float.hex](https://docs.python.org/3/library/stdtypes.html#float.hex)
    * [hex floating-point constants](http://www.exploringbinary.com/hexadecimal-floating-point-constants/)

57. [object inspector](https://github.com/substack/object-inspect); also, Node.js `utils.inspect`

58. [object diffing](https://github.com/substack/difflet)

59. `random/uuid`; various versions

60. [custom](https://github.com/Raynos/error) error classes

61. [S&amp;P 500 dataset](https://github.com/datasets/s-and-p-500)


---

## Other

1. units

   * [unit-parser](https://github.com/antimatter15/unit-parser)
   * [boost](http://www.boost.org/doc/libs/1_61_0/doc/html/boost_units.html)

2. Interesting mod => [potrace](https://github.com/tooolbox/node-potrace)

3. Bugs in the built-in `Math` object:

   * [V8 sin/cos](https://bugs.chromium.org/p/v8/issues/detail?id=3006)
   * [V8 trig fcns](https://bugs.chromium.org/p/chromium/issues/detail?id=320097)
   * [V8 not obeying IEEE 754-2008](https://bugs.chromium.org/p/v8/issues/detail?id=3089)
   * [Mozilla discussion on V8 sin/cos](https://bugzilla.mozilla.org/show_bug.cgi?id=967709#c33)
   * [V8 replaced a trig lookup table and then computes `tan` as `sin/cos`](https://github.com/v8/v8/commit/33b5db090258c2a2dc825659c3ad109bd02110c1)
   * [Browser math accuracy issues](https://github.com/kangax/compat-table/issues/392)
   * [ES6 accuracy of special functions](https://esdiscuss.org/topic/es6-accuracy-of-special-functions)
   * [V8 `exp` accuracy](https://bugs.chromium.org/p/v8/issues/detail?id=3468)
   * [spreadsheet showing trig results across browsers](https://docs.google.com/spreadsheets/d/1t2jrptAvaQetDIYPD8GKc90Dni2dT3FuHgKKFF-eJHw/edit#gid=0)
   * [V8 `pow` accuracy](https://bugs.chromium.org/p/v8/issues/detail?id=3599)
   * [Mozilla `pow` accumulation of errors](https://bugzilla.mozilla.org/show_bug.cgi?id=618251)
   * [V8 hyperbolic trig accuracy](https://github.com/paulmillr/es6-shim/issues/334)
   * [TC39 testing of Math built-ins](https://github.com/tc39/test262/pull/269)
   * [ES6 shim accuracy issues](https://github.com/paulmillr/es6-shim/issues/314)



---

## References

* [Square root without division](http://people.eecs.berkeley.edu/~wkahan/ieee754status/reciprt.pdf)
* [Reciproot Algorithm: correctly rounded?](http://www.eecs.berkeley.edu/Pubs/TechRpts/1994/CSD-94-850.pdf)
* [reciproot implementation](http://ipa.ece.illinois.edu/mif/pubs/web-only/Frank-RawMemo11-1999.html)
* [glibc sqrt](https://sourceware.org/git/?p=glibc.git;a=blob;f=sysdeps/ieee754/dbl-64/e_sqrt.c;h=8304a2bb6324acc6be7a9c20b6521aed84193c64;hb=HEAD)
* [IPython: A System for Interactive Scientific Computing](http://fperez.org/papers/ipython07_pe-gr_cise.pdf)
* [IPython: Sloan Grant](https://ipython.org/_static/sloangrant/sloan-grant.pdf)




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

5. for modules like generic stats functions which may accept a variety of inputs requiring tailored implementations, instead of dynamic code generation, another possibility is to dynamically compile static code and write to disk

   * would allow static analysis
   * easier debugging, as can set breakpoints, etc. => some inspectors support using a pragma to allow debugging `eval`'d code, thus debugging is possible as is; nevertheless, visual inspection is easier if non-compiled
   * would allow for the use of JSDoc annotations, not possible when using dynamic code generation => can, but akin to documenting a "virtual" function
   * would lead, however, to a much larger codebase
   * in `make init`, could configure to "watch" and dynamically recompile generated files
   * to discover and identify compile targets, could add a "stdlib" field to a module's `package.json` with a configuration setting relevant to the type of compilation to perform (could lead to a proliferation of tailored settings, which is not necessarily a good thing)




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
|-----datasets
|-------anscombes-quartet
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
|-----namespace
|-----regexp
|-------eol
|-------regexp
|-----repl
|-----streams
|-------math
|---------mean
|---------stdev
|-------utils
|---------split
|---------join
|-----tools
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
