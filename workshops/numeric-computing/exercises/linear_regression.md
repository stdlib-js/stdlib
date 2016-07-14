# Linear Regression

> This exercise covers [linear regression][linear-regression].


## Exercises

<!-- TODO: stream version, including random data generation -->
<!-- TODO: various example use cases with real-world datasets; e.g., predicting home prices based on square footage -->

### 1) Simple Linear Model

* Use the following simple linear model

  ``` text
  y = 5.0*x + 3.0
  ```

  to plot a line over the interval `[0,100]`.

* Using the same model, generate `100` "noisy" `(x,y)` pairs, where `x` is sampled from a [uniform][randu] distribution over the interval `[0,100]` and `y` has [Gaussian][randn] noise with standard deviation `sigma = 100.0`.

  ``` text
  y_prime = y + randn()*sigma = 5.0*(randu()*100) + 3.0 + randn()*sigma 
  ```

  Plot the generated data as a scatter plot on top of the line plot produced above.


### 2) Online Linear Regression

* Incrementally fit a linear model to the noisy data above (see [online regression][online-regression]). After each update of the linear model, generate a plot which includes

  - a line representing the true (underlying) model
  - a scatterplot representing the noisy data
  - a line representing the fitted model (can be obtained via the model coefficients or using the `predict` method)

  Concatenate all plots into a single report and view in a browser window.


## Tips

* Use `123456` to seed [randu][randu], thus allowing comparison with solution results.


## Testing

Assuming that each solution is placed in a separate file,

``` bash
$ node ./path/to/<solution_1>.js
$ node ./path/to/<solution_2>.js
# ...
```

When all your solutions succeed, proceed to the [next exercise][next-exercise].


<!-- <links> -->

[linear-regression]: https://en.wikipedia.org/wiki/Linear_regression
[online-regression]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/ml/online-sgd-regression

[randu]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/random/randu
[randn]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/random/randn

[next-exercise]: https://github.com/stdlib-js/stdlib/blob/develop/workshops/numeric-computing/exercises/

<!-- </links> -->
