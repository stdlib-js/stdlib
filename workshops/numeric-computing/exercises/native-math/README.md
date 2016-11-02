# Native Math

> This exercise covers built-in JavaScript Math functions.


## Exercises

### 1) Plotting

* Generate a plot of `Math.sin` over the interval `[0,2π]`.
* Generate a plot of `Math.cos` over the interval `[0,2π]`.


### 2) RMSE

A common measure of numerical accuracy is the [root-mean-square error][rmse] (RMSE). The basic idea is to determine the average deviation of computed values from a known standard. The lower the RMSE, the more accurate the algorithm; the higher the RMSE, the less accurate the algorithm.

* Write a function to compute the [root-mean-square error][rmse] (RMSE).


### 3) Comparison to Standard

* Generate a plot showing the sine computed by `Math.sin` and the sine computed from Julia (Julia results can be found in the `./fixtures` directory). The `x` values over which to compute the sin are included in the fixtures.
* Generate a plot showing the deviations (in units of [epsilon][epsilon-difference]) of `Math.sin` from Julia (include the RMSE in the plot title).
* As a bonus, repeat the test for different Node versions.


### 4) Testing Native Math

* Extend the previous solutions to test the following Math functions:

  - `cos`
  - `tan`
  - `sqrt`
  - `pow`
  - `exp`
  - `log`

  The output should be a single web page showing the deviations in units of epsilon for __all__ functions.

* As a bonus, repeat the tests for different browsers, such as Firefox and Internet Explorer.


### 5) Testing Custom Implementations

* Extend the previous solution to test custom implementations of the above functions.

  - `sin`: `@stdlib/math/base/special/sin`
  - `cos`: `@stdlib/math/base/special/cos`
  - `tan`: `@stdlib/math/base/special/tan`
  - `sqrt`: `@stdlib/math/base/special/sqrt`
  - `log`: `@stdlib/math/base/special/ln`
  - `exp`: `@stdlib/math/base/special/exp`
  - `pow`: `@stdlib/math/base/special/pow`


## Tips

* When calculating the [RMSE][rmse], consider using [Welford's method][welfords-method] for robust computation of the mean.
* When generating plots, be sure to specify plot axis labels and the plot title.
* To test against different Node versions, use [nvm][nvm].
* Testing different browsers may be rather involved. One possible solution would be to launch a browser, load a test script which runs the computations, and then stream the results back to an analysis server which collects the results and generates a plot.


## Testing

Assuming that each solution is placed in a separate file,

``` bash
$ node ./path/to/<solution_1>.js
$ node ./path/to/<solution_2>.js
# ...
```

When all your solutions succeed, proceed to the [next exercise][next-exercise].


<section class="links">

[rmse]: https://en.wikipedia.org/wiki/Root-mean-square_deviation
[welfords-method]: https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Online_algorithm
[nvm]: https://github.com/creationix/nvm

[epsilon-difference]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/utils/float64-epsilon-difference

[next-exercise]: https://github.com/stdlib-js/stdlib/blob/develop/workshops/numeric-computing/exercises

</section>

<!-- /.links -->
