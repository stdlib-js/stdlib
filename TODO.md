TODO
====

1. Replace `jshint` with `eslint`
2. add tap consumer to only show test failures
3. 


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
