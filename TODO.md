# TODO

1. switch to `eslint` as main JS linter

   * add to CI
   * support reformatting ala `go fmt` => `--fix`

2. add NPM style [guide](https://github.com/voorhoede/npm-style-guide) with [versioning info](https://github.com/compute-io/contributing#versioning)

3. determine how to handle internal `@stdlib` links in READMEs

4. create an `docs/install.md` for developers

   * julia
   * R
   * python
   * golang
   * boost

5. determine a browser testing strategy

   * could run into memory issues if all numeric tests are run for all functions, etc.
   * one possibility is to loop through all files and run each individually (browserify, testling, and repeat)
   * may have to punt browser testing to individual repos (!) => that is too late, as module would already be deployed

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

   * [`docpress`](https://github.com/docpress/docpress)

   * [`getdocs`](https://github.com/marijnh/getdocs)

   * [`flow-jsdoc`](https://github.com/Kegsay/flow-jsdoc)

   * [`catharsis`](https://github.com/hegemonic/catharsis)

   * [`doctor`](https://github.com/jdeal/doctor)

   * [`docsify`](https://github.com/QingWei-Li/docsify)

   * [`docute`](https://github.com/egoist/docute)

   * ...

10. debug [eval sources](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Debug_eval_sources)

    * [node-inspector](https://github.com/node-inspector/node-inspector)
    * [source maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)

11. [livegrep](https://github.com/livegrep/livegrep) for `stdlib`? Maybe have sthg hosted? Would be an advance over GitHub search as GitHub search often shows results which happened far back in commit history, when what you want is results from the current state of the repo.

12. See [tinycolor](https://github.com/bgrins/TinyColor/blob/master/tinycolor.js)

13. lint filenames

    * [eslint plugin](https://github.com/selaux/eslint-plugin-filenames)

14. consider changing `isNumber` to `isNumeric`

15. prngs

    * [pcg](http://www.pcg-random.org/)
    * [random123](http://www.deshawresearch.com/downloads/download_random123.cgi/)
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
    * [xorshift-add](https://github.com/MersenneTwister-Lab/XSadd/blob/master/xsadd.c)
    * [tinyMT32](https://github.com/MersenneTwister-Lab/TinyMT/blob/master/tinymt/tinymt32.c)

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

    * use [disc](https://github.com/hughsk/disc) to visualize browserify output (see also [browserify-size](https://github.com/bendrucker/browserify-size))

    * [cost-of-modules](https://github.com/siddharthkp/cost-of-modules)

    * [get-nps](https://github.com/xtoolkit/get-nps)

    * could do something akin to [issue stats](https://github.com/hstove/issue_stats) but locally and/or only including project modules/repos

    * later project stats can be displayed in a separate webpage

      - see visualcinnamon.com for inspiration

28. FIX: security vulnerability when using `rm -rf` in Makefile rules

    * due to using environment variables. If one is improperly set, could be catastrophic. Safe delete?

      - consider [trash](https://github.com/sindresorhus/trash) and [trash-cli](https://github.com/sindresorhus/trash-cli)

        * No, as Sindre does not provide backward compatibility. Will need to roll our own.

29. `Makefile` does not list top-level `examples`; is this intentional?

30. move test fixture runners into sub-directories based on language

    * e.g., `./fixtures/julia/*`

31. add Saucelabs with zuul (?)

32. [gh-pages](https://github.com/tschaub/gh-pages)

33. may be useful: [browser-repl](https://github.com/Automattic/browser-repl)

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
    * [monomorphist](https://github.com/vhf/monomorphist)
    * constant propagation
    * loop invariant code motion
    * dead code elimination
    * inlining
    * loop unrolling
    * verify results
    * <http://mrale.ph/blog/2013/08/14/hidden-classes-vs-jsperf.html>
    * <http://mrale.ph/blog/2012/06/03/explaining-js-vms-in-js-inline-caches.html>
    * <http://mrale.ph/blog/2012/09/23/grokking-v8-closures-for-fun.html>
    * <https://www.youtube.com/watch?v=65-RbBwZQdU>
    * <http://mrale.ph/blog/2012/12/15/microbenchmarks-fairy-tale.html>
    * <http://mrale.ph/blog/2014/02/23/the-black-cat-of-microbenchmarks.html>
    * <http://mrale.ph/blog/2013/04/29/performance-tuning-as-weather-forecast.html>
    * <https://floitsch.blogspot.de/search/label/V8-optimizations>
    * <https://floitsch.blogspot.com/2012/03/optimizing-for-v8-inlining.html>
    * <https://mathiasbynens.be/notes/javascript-benchmarking>
    * <https://github.com/sq/JSIL/wiki/JavaScript-Performance-For-Madmen>
    * <http://mp.binaervarianz.de/JS_perf_study_TR_Oct2015.pdf>

40. in all tests (and examples), replace `Math.random` with a seeded `lcg`

    * for tests, be sure to record the seed so that failed tests can be debugged
    * could have seed be an environment variable, so could be set in CI environment
    * module to get a seed; one method used could be to check env var

41. investigate [nbind](https://github.com/charto/nbind)

    * could be useful for, say, Boost bindings

42. Deploy a webhook server to aggregate 3rd party tools notifications (?)

    * Travis CI
    * AppVeyor
    * Codecov
    * Code Climate
    * Circle CI
    * GitHub

43. make Travis and Appveyor build badges the same dimensions

    * currently, Appveyor includes a logo
    * could use shields.io

44. consider using [svgo](https://github.com/svg/svgo) to minimize eqn svgs

45. C++ style guide => use `*.cpp` and `*.hpp`

46. find inspiration for the JS style guide from C++ core [guidelines](https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md)

    * include ESLint rules for each (where applicable) guideline
    * include references (e.g., perf, fast elements, etc)

47. add code climate badge

48. consider using things like [shellcheck](https://github.com/koalaman/shellcheck) for linting files other than JavaScript

    * markdown linting

      - [alex](https://github.com/wooorm/alex)

      - [retext-readability](https://github.com/wooorm/retext-readability)

      - [standard-markdown](https://github.com/zeke/standard-markdown)

      - [retext-lint-code](https://github.com/Qard/remark-lint-code)

        - uses eslint

    * js code in markdown linting

    * [css linting](https://github.com/stylelint/stylelint) and [stylefmt](https://github.com/morishitter/stylefmt)

    * [list](https://github.com/SalGnt/cscs) of style guidelines

    * Pep8 for Python, [pycodestyle](https://github.com/PyCQA/pycodestyle), and see [autopep8](https://github.com/hhatto/autopep8) for automatic formatting

49. on src doc build for `gh-pages`, also do the same for `develop`; e.g., `/docs/src/develop`, which could map to `http://a.b.c/docs/src/develop`

    * would allow a "preview" alongside current prod
    * will also want src docs for each version

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
      - [UnicodePlots.jl](https://github.com/Evizero/UnicodePlots.jl)
      - [TextPlots.jl](https://github.com/sunetos/TextPlots.jl)

    * ASCII [tables](https://github.com/sorensen/ascii-table)

    * should be able to load a REPL context in a browser

      - meaning, should be able to fairly seamlessly have a session in a terminal which is "transferred" to a browser context, including shell history and, say, charts (ASCII to an SVG equivalent)
      - would allow "sharing" a REPL sequence (work in the terminal; load session to browser; generate page; send link/page; recipient load and can start where sender left off)

    * [black-screen](https://github.com/shockone/black-screen) terminal emulator

    * see hyperterm

53. README to man doc (see above)

    * cannot directly print a raw README, as will contain markup
    * will need to transform into plain text
    * [writing manual pages](http://liw.fi/manpages/)
    * [formatted man page](http://www.tldp.org/HOWTO/Man-Page/q3.html)
    * [ubuntu](http://manpages.ubuntu.com/manpages/wily/man7/man-pages.7.html)
    * [linux](http://man7.org/linux/man-pages/man7/man-pages.7.html)
    * [man-n](https://github.com/man-n/man-n)

54. interactive JSON [editor](https://github.com/tidwall/jd)

55. [flatson](https://github.com/brycebaril/flatson)

56. REPL incremental [json](https://github.com/simeji/jid)

57. `engines` field

    - have a script which mines the individual `package.json` engine fields and determines, in aggregate, the supported engine range for all pkgs and assign as the engine range for the "aggregate"
    - can also lint (search pkg deps, check engine field, and see if compatible)

58. consider adding a license prefix to each file

    * [julia](https://github.com/JuliaLang/julia/blob/master/contrib/add_license_to_files.jl)
    * [license-check](https://github.com/magemello/license-check)

59. intro how-tos

    * [gifs](https://github.com/chjj/ttystudio)

60. evaluate using [inch](https://github.com/rrrene/inch) for src code documentation evaluation

61. link gitter to slack (prob requires a hook server)

62. investigate [xonsh](https://github.com/scopatz/xonsh)

63. `list-modules` Makefile recipe

    * can be used in conjunction with dep analysis to see which modules are __not__ required by a file, etc; e.g., which modules are not included in a namespace.

64. investigate async but [awaitful](https://github.com/ramitos/apr)

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
    * [evalmd](https://github.com/reggi/evalmd)
    * [readme-tester](https://github.com/orangemug/readme-tester)
    * [jsmd](https://github.com/vesln/jsmd)
    * [doctap](https://github.com/vweevers/doctap)

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
    * [st](https://github.com/isaacs/st)
    * [chart-stream](https://github.com/watson/chart-stream)

70. cross-platform open browser

    * [biased-opener](https://github.com/jakub-g/biased-opener)
    * [opener](https://github.com/domenic/opener)
    * [browser-launcher](https://github.com/substack/browser-launcher)
    * [browser-launcher2](https://github.com/benderjs/browser-launcher2)
    * [opn](https://github.com/sindresorhus/opn) and [opn-cli](https://github.com/sindresorhus/opn-cli)
    * [node-open](https://github.com/pwnall/node-open)
    * [open-url](https://github.com/Jam3/open-url/blob/master/index.js)
    * [broser](https://github.com/juliangruber/broser)

71. ability to run examples in a browser => Makefile target `examples-browser`

    * can use `simple-http-server` (or even `disposable-http-server`)
    * [packify](https://github.com/maxogden/packify)
    * option to stream to multiple browsers (tabs) in parallel (akin to parallel builds)

72. build step which runs examples in browsers and catches any errors

    * could possibly listen on `window.onerror` to trap uncaught exceptions
    * setup similar to `testling`, but without needing `TAP` output; basically, do any errors occur or not
    * will probably need source maps, otherwise will be difficult to debug
    * as a half-way measure, could intercept `console` method calls, pipe back to server, and then keep a rolling log cache; when an error is received, could stop running examples and print the cache

73. bring [`glob`](https://github.com/isaacs/node-glob) in-house

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
      // beep

      // Output to terminal:
      // ...

      // Output to terminal:
      // {"beep":"boop"}

      // Output to terminal:
      // <error_message>

      // Output to terminal:
      // <boolean>

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
      ...
      ...
      ```

      ``` bash
      $ node ./bin/cli
      e.g., 2016-05-24 08:42.34 Beep boop blah blah.
      ```

    * examples of modules, functions, constants, regexps, etc.

    * need a convention for client-side and server-side only examples

      - could use `@browseronly` and `@nodejsonly` special annotations, akin to `@private` and `@public`

76. electron ui for creating a `stdlib` bundle (could support rollup, webpack, browserify)

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

    * Backward compatibility is important
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

    * modified `SimpleHTTPServer` which serves READMEs converted to HTML
    * for equations, instead of SVG, use MathJax
    * could also insert live figures (main, as margin notes)
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

90. add a `run.sh` (`build.sh` ?) file in `test/fixtures`, which would provide a common entry point for running test fixture runners. Currently, need to know the lang to run. And while the name is the same `runner.*`, the procedure for running the scripts is not. A common entry point would abstract away the differences.

91. JS style guide

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
    * add note about `if(){return;}else{return;}` being unnecessary indentation

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

     * [ ] crypto
     * [x] datasets (~bib)
     * [x] fs
     * [x] math/base/blas
     * [ ] math/base/dist
     * [x] math/base/random
     * [ ] math/base/special
     * [ ] math/base/tools
     * [ ] math/base/utils
     * [x] math/constants
     * [ ] math/statistics
     * [ ] math/utils
     * [ ] ml
     * [ ] namespace
     * [x] net
     * [ ] plot
     * [x] regexp
     * [x] repl
     * [ ] streams (~)
     * [ ] string (~)
     * [ ] tools (~)
     * [ ] utils

101. profiling

     * [v8-profiler](https://github.com/node-inspector/v8-profiler)
     * [node-inspector](https://github.com/node-inspector/node-inspector)
     * [node-webkit-agent](https://github.com/c4milo/node-webkit-agent)
     * [node-stackvis](https://github.com/joyent/node-stackvis)
     * [devtool](https://github.com/Jam3/devtool) ([blog post](https://mattdesl.svbtle.com/debugging-nodejs-in-chrome-devtools))
     * [--prof-process](https://nodejs.org/en/docs/guides/simple-profiling/)
     * [v8-profiling](http://thlorenz.com/v8-profiling/)
     * [chrome://tracing/](https://rjzaworski.com/2014/12/profiling-node-js-on-linux)
     * [v8 profiler docs](https://developers.google.com/v8/profiler_example)
     * [v8 perf](https://github.com/thlorenz/v8-perf/issues/4)
     * [v8 performance profiling](https://github.com/thlorenz/v8-perf/blob/master/performance-profiling.md#v8-performance-profiling)
     * [node-tick](https://github.com/sidorares/node-tick)
     * [node-tick-processor](https://github.com/drewfish/node-tick-processor)
     * [v8 profiling](https://github.com/thlorenz/v8-profiling)
     * `make` recipe
     * bring the V8 log processor in-house ([tools](https://github.com/v8/v8/tree/master/tools), [wiki](https://github.com/v8/v8/wiki/V8%20Profiler), [outfile](https://bugs.chromium.org/p/chromium/issues/detail?id=432457), [node-tick](https://github.com/sidorares/node-tick))
     * [heatline](https://github.com/indutny/heatline)

102. [analyzing the dependency network](http://blog.graphcommons.com/analyzing-the-npm-dependency-network/) => should be able to perform a similar analysis internally

103. sine browser [example](http://www.thesoftwaresimpleton.com/blog/2016/05/25/sine-wave/)

     * could do something similar for other trigonometric functions

104. benchmarking

     * [chuhai](https://github.com/Hypercubed/chuhai)
     * benchmark.js
     * substack benchmark module (ben)
     * matcha
     * [nanobench](https://github.com/mafintosh/nanobench)
     * [benchtap](https://github.com/waylonflinn/benchtap/blob/master/benchtap.js)

105. stability badges

     * may be good to have stability badges for methods / modules in order to indicate if a particular API is experimental, stable, locked, or otherwise
     * `package.json` field => `"stdlib":{"stability":"experimental"}`

106. `makie` (and `make`) target to initialize a module (copy files from snippets to a destination directory)

107. use [signed commits](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work)

108. string [similarity](https://github.com/tdebatty/java-string-similarity) measures?

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

116. licenses utilities

     - [licensee.js](https://github.com/jslicense/licensee.js)
     - [license-checker](https://github.com/davglass/license-checker)
     - [.licenserc](https://github.com/licenserc/licenserc-specification/blob/master/licenserc.md)
     - [licenserc.js](https://github.com/licenserc/licenserc.js)
     - [licensing](https://github.com/3rd-Eden/licensing)
     - [licenses](https://github.com/3rd-Eden/licenses)
     - [licensecheck](https://github.com/marcello3d/node-licensecheck)
     - [nlf](https://github.com/iandotkelly/nlf)
     - [license-to-fail](https://github.com/behance/license-to-fail)
     - [license-list](https://www.gnu.org/licenses/license-list.en.html)
     - as part of public docs, can generate a list of deps and their licenses; can do the same for `stdlib/lib/**` modules, so that all licenses for the individual mods/deps can be viewed together
     - recipe to plot license distribution as a bar plot (?) => could be part of public facing docs

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

124. [sync-request](https://github.com/ForbesLindesay/sync-request) => useful for REPL

125. include a [creditcard](https://github.com/bendrucker/creditcards) validation module?

126. adventures / workshoppers

     - [regex-adventure](https://github.com/substack/regex-adventure)
     - [workshopper-adventure](https://github.com/workshopper/workshopper-adventure)
     - [demo-workshopper](https://github.com/linclark/demo-workshopper)
     - [adventure](https://github.com/substack/adventure)
     - [learnyounode](https://github.com/workshopper/learnyounode)
     - [workshopper-exercise](https://github.com/workshopper/workshopper-exercise)
     - [stream-adventure](https://github.com/substack/stream-adventure)
     - [functional-javascript](https://github.com/timoxley/functional-javascript-workshop/issues/7)
     - [p2p-workshop](https://github.com/mafintosh/p2p-workshop)
     - [webgl-workshop](https://github.com/stackgl/webgl-workshop)

127. build script which reruns the latest commit on `develop` each day => helps ensure, even in the absence of fresh commits, that we are testing the environment, etc. Would need to be a cron job triggered from a remotely hosted service. (note: this means that the `master` branch should never run the dep check to ensure up-to-date dependencies; otherwise, `master` could fail for non-test related reasons)

     - for dep check, build script which acts similar to greenkeeper => creates/updates branch, if check deps fails, auto-installs, runs full build (tests, examples, etc), and checks if fails.

128. plot svg components should have factory methods

129. investigate [nfty](https://github.com/dschep/ntfy) for sending desktop notifications for long-running commands (e.g., `Makefile` recipes => would need to check if CI environment)

130. Annotations overlay, 

     - `x` values with text

131. Evaluate [check-build](https://github.com/FGRibreau/check-build)

132. Evaluate [rewind](https://github.com/gilesbowkett/rewind)

133. [iterables](https://github.com/leebyron/iterall)

134. [vmd](https://github.com/yoshuawuyts/vmd)

135. when browserifying `@stdlib/plot` should *ignore* `electron`!!!!

     - may want to have a separate `view` method entirely; one that is catered to browser context

136. [function-plot](https://github.com/maurizzzio/function-plot)

137. see [webtorrent-desktop](https://github.com/feross/webtorrent-desktop) for electron inspiration

138. [30-day challenge](https://github.com/wesbos/JavaScript30) => should be able to do sthg akin using stdlib

139. svg components: move `methods/render.js` to `render/index.js`

140. sparkline rug plot

141. review stem and leaf unicode plot

142. add unicode sparklines to namespace => requires abstract interface

143. refactor plot electron renderer

144. ability to "plot" [tables](http://metricsgraphicsjs.org/examples.htm#experimental)?

145. [heatmap](https://github.com/substack/node-heatmap)

146. Should plot `autoRender` be "opt-in", rather than "opt-out"?

147. [remarkjs](https://github.com/gnab/remark) for Markdown slide shows for workshop slides?

     - [markdown-to-slides](https://github.com/partageit/markdown-to-slides)
     - [cleaver](https://github.com/jdan/cleaver)

148. Visual intro to [machine learning](http://www.r2d3.us/visual-intro-to-machine-learning-part-1/)

149. Refactor `make` workshops recipes

150. [mbtaviz](http://mbtaviz.github.io/) and [Github org](https://github.com/mbtaviz)

151. create separate discrete and continuous distribution namespaces (at same level as general `dist` namespace)

152. Investigate [hyperterm](https://github.com/zeit/hyperterm)

153. For AI inspiration, see [here](https://github.com/umgupta/aima-javascript) and [here](https://github.com/aimacode/aima-javascript)

154. [trymodule](https://github.com/VictorBjelkholm/trymodule)

155. [testron](https://github.com/shama/testron)

156. [cssstats](https://github.com/cssstats/cssstats)

157. [math-input](https://github.com/Khan/math-input) and [mathquill](https://github.com/mathquill/mathquill)

158. For Nightingale's rose dataset, generate an SVG figure with code, rather than use a static image

159. [bats](https://github.com/sstephenson/bats): bash automated testing; could also be useful for testing CLI scripts or [urchin](https://github.com/tlevine/urchin): shell tests

160. investigate using [now](https://zeit.co/now) for deploying demos requiring a Node.js server

161. Google trends [data](https://github.com/GoogleTrends/data) => note, this needs to be under an appropriate license before being used (currently unlicensed)

162. investigate [iron-node](https://github.com/s-a/iron-node)

163. [Sieve of Eratosthenes](http://www.mahabal.io/eras)

164. files containing `new Buffer` should `var Buffer = require( 'buffer' ).Buffer`. Note that this will prob require overruling a lint rule against redefining globals.

165. See [casual](https://github.com/boo1ean/casual) for dataset inspiration

166. GitHub issues [Gantt diagrams](https://github.com/neyric/gh-issues-gantt)

167. [gh-board](https://github.com/philschatz/gh-board) - kaban board using GitHub issues

168. investigate [docstrings](https://github.com/noffle/docstrings): useful or not?

169. For running electron tests, see [atom-test-runner](https://github.com/wooorm/atom-tap-test-runner)

170. Add dev guide for developing on windows

171. add a Makefile (and `makie`) recipe to show [disk usage](https://github.com/amio/flaming-disk-usage) for a given directory

172. see ava.js for supporting docs (e.g., github templates, build scripts, etc) inspiration

173. create a bot which tails NPM for math related modules

174. bot which tails RSS feeds of select math repos and each day retrieves

     - number of stars/watchers
     - number of issues (total, open, closed)
     - number of commits
     - number of contributors

175. investigate [pkgfiles](https://github.com/timoxley/pkgfiles) as a dev tool to determine which files will be published to npm

176. investigate [slow-deps](https://github.com/nolanlawson/slow-deps) as a dev tool to analyze dependency install times

177. consider including [governance](https://github.com/PowerShell/PowerShell/blob/master/docs/community/governance.md) docs

178. investigate [jailed](https://github.com/asvd/jailed) for running JS code in sandbox (and also vm2)

179. Non-node [platform](https://github.com/bestiejs/platform.js) detection?

180. may be worth investigating [klipse](https://github.com/viebel/klipse) for live code editing

181. See if anything good from [here](https://github.com/panzerdp/voca)

182. [disk](https://www.backblaze.com/blog/hard-drive-reliability-stats-q1-2016/) [drive](https://www.backblaze.com/b2/hard-drive-test-data.html) [data](https://github.com/poofyleek/tensorblaze)

183. ability to create a [gist](https://github.com/defunkt/gist) from the repl

     - part of tools
     - auto browserify scripts? Or create `package.json` which installs individual pkgs

184. `process` as a `stdlib` util (or some other namespaced) module (or maybe, like `cwd`, the individual props as mods)

185. Add tool to detect whether a function can be [optimized](https://github.com/node-modules/optimized) => note that this is Node.js specific

186. [GNU parallel](https://www.gnu.org/software/parallel/man.html) for distributed tasks

187. [stdout-stream](https://github.com/mafintosh/stdout-stream)

188. investigate [vm2](https://github.com/patriksimek/vm2) for sandboxing

189. For `master`, `develop`, and PRs into `master` and `develop`, run full build sequence; for all other branches, is it necessary to run full sequence or just, say, tests? or maybe for other branches, only run tests, examples, benchmarks for files which changed (similar to `git` push hook)?

190. Linter for dirnames (akin to filenames)?

191. convert filename linter to use plugin architecture?

192. generate random strings based on a [regular expression](https://github.com/fent/randexp.js)

193. timed [tape](https://github.com/diasdavid/timed-tape) tests...useful?

     - once `tape` is brought in-house, could make part of the lib

194. [match-case](https://github.com/wooorm/match-casing)

195. Consider setting up [jenkins](https://jenkins.io/) for CI (notably Windows)

196. investigate [mancy](https://github.com/princejwesley/Mancy)

197. semver regex

198. Could this [tutorial](https://medium.com/@ageitgey/machine-learning-is-fun-part-3-deep-learning-and-convolutional-neural-networks-f40359318721#.zc3kqdimf) (and associated tutorials) be made interactive?

199. [fuzzy search](https://github.com/krisk/Fuse)

200. Image datasets

     - [birds](http://www.vision.caltech.edu/visipedia/CUB-200-2011.html)
     - [tiny images](https://www.cs.toronto.edu/~kriz/cifar.html)

201. [dependencyci](https://dependencyci.com/)

202. Consider replacing `testling` with [tape-run](https://github.com/juliangruber/tape-run)

203. [ccount](https://www.npmjs.com/package/ccount) but generalized to array-like objects

204. [tree](http://linux.die.net/man/1/tree)

205. [print-object-as-tree](https://github.com/notatestuser/treeify) utility

206. Consider something like [credits](https://github.com/stefanjudis/credits-cli)

207. NLP [data](https://confluence.cornell.edu/display/NLP/Data/) (note: ambiguous licensing)

208. Fix SOTU raw text where `\&mash;` was converted to a single hyphen `-`

209. [ASTExplorer](https://github.com/fkling/astexplorer)

210. Consider using [shrinkpack](https://github.com/JamieMason/shrinkpack) to create reproducible, more reliable, and faster builds in CI environments

211. pkg which can generate an Anscombe quartet

212. [authors-certificate](https://github.com/berneout/authors-certificate)

213. FAQ: what is decomposable software?

214. Electoral college [box scores](https://www.archives.gov/federal-register/electoral-college/scores.html#1789)

215. Electoral college votes [by state](https://www.archives.gov/federal-register/electoral-college/votes/votes_by_state.html)

216. `datapackage.json` [schemas](https://github.com/frictionlessdata/schemas)

217. Does `is-typed-array` need to address symbol [toStringTag](https://github.com/ljharb/is-typed-array/blob/master/index.js)? Ditto for [which-typed-array](https://github.com/ljharb/which-typed-array)?

218. single-line-stream

219. [snippet-stream](https://github.com/mafintosh/snippet-stream)

220. [gcc-explorer](https://github.com/mattgodbolt/gcc-explorer)

221. password datasets [1](https://github.com/skyzyx/bad-passwords) and [2](https://github.com/danielmiessler/SecLists)

222. [is-utf8](https://github.com/wayfind/is-utf8/blob/master/is-utf8.js), [is-valid-utf8](http://stackoverflow.com/questions/28270310/how-to-easily-detect-utf8-encoding-in-the-string), [strip-bom-buf](https://github.com/sindresorhus/strip-bom-buf/blob/master/index.js), [strip-bom-stream](https://github.com/sindresorhus/strip-bom-stream/blob/master/index.js), [has-bom](https://github.com/jonschlinkert/has-bom/blob/master/index.js)

223. [read-glob](https://github.com/shinnn/node-read-glob)

224. bring `minimist` in-house

225. bring `JSON.parse` in-house to provide better error messages. Can default to native and, on error, re-parse with userland implementation to provide more extensive error messaging.

226. see [static-eval](https://github.com/substack/static-eval)

227. [farmers market geo data](https://catalog.data.gov/dataset/farmers-markets-geographic-data)

228. [perf](https://github.com/nodejs/node/blob/master/lib/path.js) improvements for `dirname` and `extname`.

229. A constrained RegExp [implementation](https://swtch.com/~rsc/regexp/regexp1.html)?

230. [noderify](https://github.com/dominictarr/noderify) and [depject](https://github.com/dominictarr/depject) -> static linking for JavaScript

231. [`fs-walk`](https://github.com/coolaj86/node-walk) (see also [`os.walk`](https://docs.python.org/3/library/os.html#os.walk)); [`fs-walk-folder-tree`](https://github.com/overlookmotel/walk-folder-tree); [`module-walker`](https://github.com/kaelzhang/module-walker)

232. [readdirp](https://github.com/thlorenz/readdirp), mkdirp, rmdirp, etc.

233. dependency docs (static site; use simple server)

234. mk recipe to read a dep readme and launch in an electron window/browser

235. nlp levi dist (see also [damlev](https://github.com/WatchBeam/damlev) and [leven](https://github.com/sindresorhus/leven/blob/master/index.js))

236. [travis-deploy-example](https://github.com/bcoe/travis-deploy-example)

237. [reserved words](http://www.javascripter.net/faq/reserved.htm) and [reserved words](https://mathiasbynens.be/notes/reserved-keywords) and [keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)

238. a branch (based on `master`) which every month is run against every single Node version since `0.10.0` (may want a separate Jenkins server for this)

239. Given an import-require tree, should be able to statically detect cyclic deps and flag

240. pkg keyword force/network diagram where edges are pkgs and nodes are keywords

241. Anything [worthwhile](http://documentcloud.github.io/underscore-contrib)?

242. [working remotely](https://github.com/lenazun/working-remotely) adapted for project communication

243. [node-help](https://github.com/foundling/node-help): repl docs

244. [RFCs docs](https://github.com/yarnpkg/rfcs)

245. [envify](https://github.com/hughsk/envify) => when browserifying environment dependent tests to be run in the browser, can use to inline env vars

246. [naming conventions](https://github.com/JuliaPraxis/Naming)

247. [Tyche](https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf) prng

248. typed array [binary string](https://github.com/AndreasMadsen/binary-view/blob/master/binary-view.js)

249. [JS interpreter](https://github.com/NeilFraser/JS-Interpreter) and [hotswapping interpreter](https://github.com/thomasballinger/hotswapping-js-interp)

250. [chunkify](https://github.com/compute-io/chunkify), [buffer](https://www.mathworks.com/help/signal/ref/buffer.html), [split](http://docs.scipy.org/doc/numpy-1.10.0/reference/generated/numpy.split.html), [splitVec](https://www.mathworks.com/matlabcentral/fileexchange/24255-consecutive-vector-spliter/content/SplitVec.m)

251. should http/s-server support graceful shutdown? If so, should update some of the tests which had to manually close connections

252. [parseBibTeX](https://github.com/mikolalysenko/bibtex-parser)

253. [more images](https://github.com/heyalexej/awesome-images): good photos of cats, interesting features for training models, etc

254. git stats

     - [churn](https://gist.github.com/coreyhaines/829932)
     - [churn](https://github.com/danmayer/churn)
     - [code-maat](https://github.com/adamtornhill/code-maat)
     - [GitHub analysis](https://github.com/StephenOTT/GitHub-Analytics)
     - [git-quick-stats](https://github.com/arzzen/git-quick-stats/blob/master/git-quick-stats)

255. link [checking](https://github.com/golang/go/blob/master/misc/linkcheck/linkcheck.go)

256. [lru](https://github.com/rsms/js-lru) and [node-lru](https://github.com/isaacs/node-lru-cache)

257. [commitizen](https://github.com/commitizen/cz-cli): in place of `git commit`

     - See also [lint](https://github.com/marionebl/conventional-changelog-lint)
     - [angular convention](https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/convention.md)

258. [mem](https://github.com/sindresorhus/mem)

259. [once](https://github.com/sindresorhus/onetime/blob/master/index.js)

260. [json-depth-stream](https://github.com/indutny/json-depth-stream)

261. [is-iso-8601](https://github.com/ankane/chartkick.js/blob/master/chartkick.js#L59)

262. Generate a [diff](https://github.com/FormidableLabs/publish-diff) before publishing to `npm`

263. loc per language over time (requires investigating repo at each commit; `git log`, extract commit hash, checkout each hash, run script, move to next hash, etc) => use Node to manage async

264. classifying commits based on commit message [keywords](http://www.inf.usi.ch/faculty/lanza/Downloads/Hatt2008a.pdf)

265. Determine a means to distinguish source code, comments, and empty lines when computing SLOC

     - use to derive a [comment-to-source ratio](https://pdfs.semanticscholar.org/b576/916388512085f74065dd42aa0ffe3690b8f3.pdf)
     - can extend to source-to-test ratio

266. AWK hist fcn

267. [colormap](https://github.com/bpostlethwaite/colormap)

268. bring `tape` in-house

269. lint bib for duplicate ids. If identified, need to search for all references using duplicate ids and disambiguate/update

     - tool to allow searching for author name and return list of refs with identifier so an author can easily find an identifier without needing to search the raw bib file.
     - requires bib parser

270. [power-divergence](https://github.com/scipy/scipy/blob/master/scipy/stats/stats.py) and other associated tests

271. for each push, run an analysis to determine if any SLOC changed. If only comments and/or docs, don't run unit tests.

272. batch generation of exponential [RVs](http://www.nrbook.com/devroye/Devroye_files/chapter_five.pdf)?

273. [lowercase](https://github.com/blakeembrey/lower-case/blob/master/lower-case.js), [no-case](https://github.com/blakeembrey/no-case/blob/master/no-case.js), [param-case](https://github.com/blakeembrey/param-case)

274. life expectancy by [country](https://gist.github.com/ivanku/00d2520ba6d92daf97e50d9ebc6eb4cd)

275. robust [arithmetic](https://github.com/mikolalysenko/robust-arithmetic-notes)?

276. stable JSON [stringify](https://github.com/substack/json-stable-stringify)

277. [fuzzyset](https://github.com/Glench/fuzzyset.js)

278. [async-memoize](http://caolan.github.io/async/memoize.js.html#line11)

279. [Sieve of Erastothenes](https://rosettacode.org/wiki/Sieve_of_Eratosthenes#JavaScript), [stack overflow](http://stackoverflow.com/questions/15471291/sieve-of-eratosthenes-algorithm-in-javascript-running-endless-for-large-number), [Sieve of Atkin](https://en.wikipedia.org/wiki/Sieve_of_Atkin), [Sieve of Sundaram](https://en.wikipedia.org/wiki/Sieve_of_Sundaram)

280. [prime decomposition](https://en.wikipedia.org/wiki/Integer_factorization#Prime_decomposition)

281. fast [algos](http://www.machinedlearnings.com/2011/06/fast-approximate-logarithm-exponential.html), [fastpow](http://fulla.fnal.gov/acml/html/pow.html), [CORDIC](https://en.wikipedia.org/wiki/CORDIC), [trig](http://stackoverflow.com/questions/345085/how-do-trigonometric-functions-work/394512#394512), [math-prims](https://github.com/jhjourdan/SIMD-math-prims), [ACML](http://fulla.fnal.gov/acml/html/Simple.html#Simple), [l2approx](http://krisgarrett.net/papers/l2approx.pdf), [fast approx](http://onlinelibrary.wiley.com/doi/10.1002/spe.4380070212/abstract), [fast and accurate sine and cosine](http://forum.devmaster.net/t/fast-and-accurate-sine-cosine/9648/104), [rosetta commons](https://www.rosettacommons.org/manuals/archive/rosetta_2015.02.57538_user_guide/utilities/d0/da4/fast__math_8hh.html#aa94354bb29c4c2b9d0daacffbcb2990d), [jmonkeyengine](https://github.com/jMonkeyEngine/jmonkeyengine/blob/master/jme3-core/src/main/java/com/jme3/math/FastMath.java), [fmath](https://github.com/herumi/fmath/), [fastermath](https://github.com/akohlmey/fastermath), [SkipCTS](https://github.com/mgbellemare/SkipCTS/tree/master/src), see also Julia fastmath

282. [mobius-function](https://en.wikipedia.org/wiki/M%C3%B6bius_function)

283. [phi function](http://stackoverflow.com/questions/1024640/calculating-phik-for-1kn)

284. [chart-csv](https://github.com/watson/chart-csv)

285. Consider more specialized folders for `base/special` packages (see MATLAB's [functionlist](https://www.mathworks.com/help/matlab/functionlist.html))

286. [geometric brownian motion](https://en.wikipedia.org/wiki/Geometric_Brownian_motion)

287. [allong.es](https://github.com/raganwald/allong.es) and [ramda](http://ramdajs.com/) for functional inspiration

288. as part of the repo dashboard, a plot of build volatility per branch (pull data from various CI)

289. [deep-freeze](https://github.com/substack/deep-freeze)

290. [to-source](https://github.com/lodash/lodash/blob/4.1.1-npm-packages/lodash.curry/index.js#L887)

291. data [structures](https://github.com/LukeLin/js-stl)

292. during decomposition, each pkg has own gh-pages branch and each README HTML should have a tree menu linking to other pkg repo docs. Requires tree menu tool to support a tree having links, rather than inferring from dirs.

293. [inspect-code](https://github.com/derhuerst/inspect-code) and [vm2](https://github.com/patriksimek/vm2) and [browser-module-sandbox](https://github.com/maxogden/browser-module-sandbox/blob/master/index.js)

294. compute [bus factor](https://arxiv.org/pdf/1604.06766v1.pdf) over time 

295. compute [degree-of-authorship](https://arxiv.org/pdf/1604.06766v1.pdf)

296. Integrate [IRHydra](https://github.com/mraleph/irhydra) as part of dev toolset

297. Jaccard [similarity](https://github.com/anvaka/git-also/blob/master/lib/computeSimilarities.js ) for git commits

298. [ulp](https://en.wikipedia.org/wiki/Unit_in_the_last_place), [ulp](https://www.mathworks.com/matlabcentral/answers/135291-can-i-compare-two-numbers-using-unit-in-the-last-place-ulps-in-matlab), [ulp](https://gist.github.com/jfalcou/5154861), [ulp](http://stackoverflow.com/questions/21371063/ulps-calculation-in-goldberg-paper), [float-distance](https://github.com/boostorg/math/blob/develop/include/boost/math/special_functions/next.hpp)

299. PRNG [test](https://github.com/dartino/sdk/blob/master/src/shared/random_test.cc) to check for bit correlation

300. [styledoc](https://github.com/documentationjs/styledoc) for documenting CSS

301. explore [wasm](http://webassembly.org/getting-started/developers-guide/) for a single pkg

302. chakra node build

303. See [float-hacks](https://github.com/leegao/float-hacks) for possible "fast" and/or approximate math algos

304. [treemap](https://bl.ocks.org/mbostock/8fe6fa6ed1fa976e5dd76cfa4d816fec) to visualize source

305. [configuration store](https://github.com/sethvincent/configuration-store/blob/master/index.js)

306. [binary-extract](https://github.com/juliangruber/binary-extract/blob/master/index.js)

307. test [images](https://github.com/image-js/test)

308. [is-online](https://github.com/sindresorhus/is-online/blob/master/index.js)

309. Compute the [half-life](https://erikbern.com/2016/12/05/the-half-life-of-code.html) of code (months) (see [Julia](https://discourse.julialang.org/t/run-the-half-life-of-code-analysis-on-julia/763)) => interesting extension would be per author

310. evaluate [fastapprox](https://github.com/whackashoe/fastapprox/tree/master/fastapprox) (see also node [bindings](https://github.com/monkey2000/node-fastapprox/blob/master/src/approx.cc))

311. See [gitql](https://github.com/cloudson/gitql) and [textql](https://github.com/dinedal/textql)

312. Another way of determining number of pkgs/tools over time is to clone repo, checkout each commit, and run analysis

313. use git blame to determine loc per auth per pkg

314. [fast inverse square root](https://en.wikipedia.org/wiki/Fast_inverse_square_root)

315. approx [cbrt](http://www.hackersdelight.org/hdcodetxt/acbrt.c.txt) and fast cbrt

316. crypto non-crypto hash function [djb2](http://www.cse.yorku.ca/~oz/hash.html) and [here](https://github.com/darkskyapp/string-hash) (may also be interesting to implement others)

317. Investigate [vintage-streams](https://github.com/mafintosh/vintage-streams)

318. regular expression [generation](https://github.com/devongovett/regexgen)

319. ability to search for issues from [CLI](https://github.com/seanzarrin/npm-issues) for deps/pkgs

320. WYSIWYG Markdown editor for internal rendered Markdown files

     - different rendering modes (GitHub, www, etc)
     - save to disk
     - load from pkg dir
     - communicate over socket (some tasks may be capable of being done entirely client side)
     - live linting (md, code blocks)
     - eqn rendering
     - fig gen
     - live code blocks
     - see dillinger (joe mccann)
     - markdown to JSDoc comment (e.g., for writing up math implementation details in source code)

321. Similar [concept](https://github.com/rougier/from-python-to-numpy) once ndarrays?

322. See [quantifiedcode](https://www.quantifiedcode.com/) ([software map](https://en.wikipedia.org/wiki/Software_map))

323. US/UK spelling [variations](https://github.com/alexcorvi/spelling-variations)

324. RNN [demo](http://distill.pub/2016/handwriting/), [demo](http://blog.otoro.net/2017/01/01/recurrent-neural-network-artist/), [tutorial](https://github.com/hardmaru/rnn-tutorial)

325. ESLint [plugin](https://github.com/amilajack/eslint-plugin-compat) for browser compat

326. [jot](https://github.com/JoshData/jot)

327. [cars dataset](http://ai.stanford.edu/~jkrause/cars/car_dataset.html)

328. [plain-text-data-to-json](https://github.com/wooorm/plain-text-data-to-json)

329. [package-use](https://github.com/rvagg/package-use)

330. contributor [graphs](https://githubreportcard.reflect.io/)

331. investigate [threads](https://github.com/andywer/threads.js)

332. [glmatrix](https://github.com/toji/gl-matrix)

333. nat lang date/time [parser](https://github.com/olebedev/when)

334. Consider adding Dockerfile(s) (repl, workshop, etc)

335. [itermplot](https://github.com/daleroberts/itermplot)

336. [diacritics-map](https://github.com/jonschlinkert/diacritics-map)

337. problematic [strings](https://github.com/minimaxir/big-list-of-naughty-strings)

338. [xstream](https://github.com/staltz/xstream)

339. fivethirtyeight [data](https://github.com/rudeboybert/fivethirtyeight/tree/master/data-raw)

340. Blog/tutorial [inspiration](http://www.nytimes.com/interactive/2017/01/15/us/politics/you-draw-obama-legacy.html) using gov't data

341. consider using [Stryker](https://github.com/stryker-mutator/stryker) for mutation testing

342. [syncsplit](https://github.com/mcollina/syncsplit) and [syncthrough](https://github.com/mcollina/syncthrough)

343. [iterative solvers](https://github.com/JuliaMath/IterativeSolvers.jl)

344. should blas.dasum use [pairwise summation](https://en.wikipedia.org/wiki/Pairwise_summation)?

345. [array-lru](https://github.com/mafintosh/array-lru)

346. Fortran style guide

     - [CCSM](http://www.cesm.ucar.edu/working_groups/Software/dev_guide/dev_guide/node7.html)
     - Modern Fortran [examples](http://flibs.sourceforge.net/examples_modern_fortran.html)

347. [oec](http://atlas.media.mit.edu/en/resources/data/) data

348. bring Buffer polyfill in-house (will either need to include Object polyfill or be paired with a typed array polyfill to support older environments)

349. consider [prebuildify](https://github.com/mafintosh/prebuildify) and [node-gyp-build](https://github.com/mafintosh/node-gyp-build)

350. determine feature detection strategy (i.e., when do we rely on an existing (optimized) BLAS implementation? when do we compile ourselves?)

351. determine strategy for using existing optimized BLAS

352. Issue rank [dashboard](https://github.com/mapbox/top-issues)

353. Use of `now` to create a microservice [api](https://github.com/aunyks/newton-api)

354. WASM at [autodesk](https://www.autodeskresearch.com/blog/look-web-assembly-and-molecular-analysis)

355. [nlp-corpus](https://github.com/nlp-compromise/nlp-corpus)

356. [data structures](https://github.com/Yomguithereal/mnemonist)

357. command [exists](https://github.com/mathisonian/command-exists/blob/master/lib/command-exists.js)

358. [fmt-obj](https://github.com/queckezz/fmt-obj)

359. [pretty-format](https://www.npmjs.com/package/pretty-format)

360. [memo](https://github.com/feross/memo)

361. REPL chat bot (could, e.g., use AWS lambda)

     - similar to `?` or `help`, could have a chat prefix
     - or could enter chat mode; to exit, user must type keyword (e.g., "bye", "ttyl", etc)
     - translate NL queries to doc searches (e.g., how do I plot in the terminal? how do I set the x-axis label?)
     - could rely entirely on local code, but using sthg like AWS would allow collecting usage statistics (e.g., what types are queries are most common, etc)

362. integrate collection of REPL usage statistics (opt-in)

     - provide disclaimer regarding metrics collected, etc
     - point to source code so people can inspect themselves

363. kill [processes](https://github.com/sindresorhus/fkill)

364. open [datasets](https://medium.com/startup-grind/fueling-the-ai-gold-rush-7ae438505bc2#.is7rq5s3y)

365. ML in other [languages](https://burakkanber.com/blog/machine-learning-in-other-languages-introduction/)

366. Seeing [theory](http://students.brown.edu/seeing-theory/)

367. [random string](https://github.com/klughammer/node-randomstring)

368. Stanford JS [crypto](https://github.com/bitwiseshiftleft/sjcl)

369. [spatial index](https://github.com/mourner/geokdbush)

370. [named-regexp](https://github.com/edvinv/named-js-regexp/blob/master/lib/named-js-regexp.js)

371. [load-test](https://github.com/kgryte/load-test)

372. [100 exercises](https://github.com/rougier/numpy-100)

373. [prngs](https://medium.freecodecamp.com/a-brief-history-of-random-numbers-9498737f5b6c) and [clustering algorithms](https://medium.freecodecamp.com/how-machines-make-sense-of-big-data-an-introduction-to-clustering-algorithms-4bd97d4fbaba)

374. [zlib](https://github.com/nodeca/pako/tree/master/lib/zlib): both JS and native add-on

     - [tar.gz](https://github.com/alanhoff/node-tar.gz)
     - [browserify-zlib](https://github.com/devongovett/browserify-zlib)
     - [node-tar](https://github.com/npm/node-tar)
     - [bzip2](https://en.wikipedia.org/wiki/Bzip2)

375. [is-gzip](https://github.com/kevva/is-gzip/blob/master/index.js)

376. [punycode](https://github.com/bestiejs/punycode.js)

377. an interactive [version](http://ww2.amstat.org/publications/jse/v13n2/vonhippel.html)

378. in-house prez [framework](https://github.com/jdan/cleaver)

379. investigate [pkg](https://github.com/zeit/pkg) for creating a single binary executable


---

## Immediate

1. simple server

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
   - split => tests
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
   - [tap-stream](https://github.com/thlorenz/tap-stream) and [inspect-stream](https://github.com/thlorenz/inspect-stream/blob/master/inspect-stream.js); see also [sculpt#tap](https://github.com/Medium/sculpt#tap)
   - [guide](https://gist.github.com/joyrexus/10026630) to node streams
   - [vstream](https://github.com/joyent/node-vstream) => instrumented streams
   - [through2-concurrent](https://github.com/almost/through2-concurrent)
   - log
   - [ndjson](https://github.com/maxogden/ndjson) and [nldj](https://github.com/mawni/nldj/blob/master/nldj.js)
   - [one-way multiplexing](https://github.com/mafintosh/stream-channels)
   - [xhr-write-stream](https://github.com/substack/xhr-write-stream)
   - [utf8-stream](https://github.com/substack/utf8-stream)

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


---

## Plot

1. plot cli (requires `split`)

2. rects

   - x
   - y
   - orientation: vert, horz
   - width calc'd via `x[i+1]-x[i]`

3. xAxis, yAxis -> true/false; whether to create or not

4. xExtendedTicks?

5. validation; instead of a sep validator folder, when providing an object, just set the props to validate; also allows moving etc files to prop folders

6. line -> area

7. readme 


---

### Tutorials

1. [Image Completion using Neural Networks](http://bamos.github.io/2016/08/09/deep-completion/)


---

## Workshops

#### Numeric Computing

1. [node-markov](https://github.com/substack/node-markov)
2. include links to survey in main README
3. as a REPL exercise, simulation (randn, hist, plot normal pdf)


---

## Pub

1. decomposable software
2. multiple build systems
3. broken math
4. backward compatibility (and countertrends)
5. The REPL (why matters)
6. mining git repos
7. open open source reporting
8. what can be done at standards level to better facilitate math


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

8. workshop Moby Dick corpus

9. remainder (c) and rem

10. equivalents to various low-level [Julia](http://docs.julialang.org/en/release-0.5/stdlib/math/?highlight=maximum#Base.mod2pi) funcs

11. blas routines

12. [fmod](https://github.com/JuliaLang/openlibm/blob/master/src/e_fmod.c)

13. [remquo](https://github.com/JuliaLang/openlibm/blob/master/src/s_remquo.c)

14. [svg2png](https://github.com/domenic/svg2png) without promises and cleaner

    - [svgexport](https://github.com/shakiba/svgexport)

15. [is-class](https://github.com/miguelmota/is-class/blob/master/is-class.js)

16. [ilogb](https://github.com/JuliaLang/openlibm/blob/master/src/s_ilogb.c) and [logb](https://github.com/JuliaLang/openlibm/blob/master/src/s_logb.c), although these may just be `float64-exponent`

17. rem_pio2

18. stream module (e.g., flow-split, flow-join, flow-mean) => /utils /math etc

19. [hdbscan](https://github.com/lmcinnes/hdbscan)

20. number theory fcns (see starred repo)

21. str manip [utils](https://github.com/dleitee/strman)

22. Avogadro's number

23. Add credit card fraud [data](https://github.com/ellisvalentiner/credit-card-fraud)

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
    - integer variant from V8

29. [fma](https://github.com/JuliaLang/openlibm/blob/master/src/s_fma.c)

30. [to-number](https://github.com/lodash/lodash/blob/4.1.1-npm-packages/lodash.curry/index.js#L1160)

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

41. bring `debug` in-house; see also [diagnostics](https://github.com/bigpipe/diagnostics)

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

62. sort methods, both numeric and general

63. [is-symbol](https://github.com/ljharb/is-symbol/blob/master/index.js)

64. [is-callable](https://github.com/ljharb/is-callable/blob/master/index.js)

65. [bithacks](http://graphics.stanford.edu/~seander/bithacks.html) and [twiddle](https://github.com/mikolalysenko/bit-twiddle/blob/master/twiddle.js) and [awesome](https://github.com/keonkim/awesome-bits)

66. [foreach](https://github.com/manuelstofer/foreach/blob/master/index.js), [foreach](https://github.com/sindresorhus/each-async/blob/master/index.js), [foreach](https://github.com/Raynos/for-each)

67. [md5](https://github.com/blueimp/JavaScript-MD5/blob/master/js/md5.js)

68. [murmurhash](https://github.com/garycourt/murmurhash-js)

69. [deque](https://github.com/petkaantonov/deque) and [denque](https://github.com/Salakar/denque)

70. date [fcns](https://github.com/date-fns/date-fns) and [zeitgeist](https://github.com/webpapaya/zeitgeist.js)

71. [ulid](https://github.com/oklog/ulid)

72. [titlecase](https://github.com/rvagg/titlecase)

73. [download](https://github.com/watson/download-to-file)


---

## Other

1. units

   * [unit-parser](https://github.com/antimatter15/unit-parser)
   * [boost](http://www.boost.org/doc/libs/1_61_0/doc/html/boost_units.html)
   * [rust](https://github.com/tiffany352/rink-rs)

2. Interesting mod => [potrace](https://github.com/tooolbox/node-potrace)
   



---

## References

* [Square root without division](http://people.eecs.berkeley.edu/~wkahan/ieee754status/reciprt.pdf)
* [Reciproot Algorithm: correctly rounded?](http://www.eecs.berkeley.edu/Pubs/TechRpts/1994/CSD-94-850.pdf)
* [reciproot implementation](http://ipa.ece.illinois.edu/mif/pubs/web-only/Frank-RawMemo11-1999.html)
* [glibc sqrt](https://sourceware.org/git/?p=glibc.git;a=blob;f=sysdeps/ieee754/dbl-64/e_sqrt.c;h=8304a2bb6324acc6be7a9c20b6521aed84193c64;hb=HEAD)
* [IPython: A System for Interactive Scientific Computing](http://fperez.org/papers/ipython07_pe-gr_cise.pdf)
* [IPython: Sloan Grant](https://ipython.org/_static/sloangrant/sloan-grant.pdf)
* [Why not use core streams](https://r.va.gg/2014/06/why-i-dont-use-nodes-core-stream-module.html)
* [Why JAVA floating-point implementation is bad for everyone](https://people.eecs.berkeley.edu/~wkahan/JAVAhurt.pdf)



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
        <number>
        $ erf 5 19 13 1
        <number>\n<number>\n... (could have option to specify delimiter)
        ```

   * ability to pipe

        ``` bash
        $ cat x.txt | erf
        ...
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

   * [list-broken-requires](https://github.com/Jam3/list-broken-requires/blob/master/index.js)

   * [detect-import-require](https://github.com/Jam3/detect-import-require)

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
|-----assert
|-------is-array-like
|-------is-function
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
|-------fast
|---------special
|-----------cos
|-----------sin
|-------core
|---------add
|---------mult
|---------subtract
|---------sum
|-------dist
|---------norm
|---------poisson
|-------linalg
|-------random
|---------lcg
|-------special
|---------erf
|---------erfc
|-------statistics
|---------mean
|---------stdev
|---------variance
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
|-----string
|-------left-pad
|-------pad
|-------repeat
|-------right-pad
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
|-------merge
|-------pluck
