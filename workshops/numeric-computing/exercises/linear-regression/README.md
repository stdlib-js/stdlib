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

  to plot a line over the interval `[0,1]`.

* Using the same model, generate `100` "noisy" `(x,y)` pairs, where `x` is sampled from a [uniform][@stdlib/math/base/random/randu] distribution over the interval `[0,1]` and `y` has [Gaussian][@stdlib/math/base/random/randn] noise with standard deviation `sigma = 2.5`.

  ``` text
  y_noisy[i] = y[i] + randn()*sigma = 5.0*(randu()*1.0) + 3.0 + randn()*sigma 
  ```

  Plot the generated data as a scatter plot on top of the line plot produced above.


### 2) Online Linear Regression

* Incrementally fit a linear model to the noisy data above (see [online regression][@stdlib/ml/online-sgd-regression]). After each update of the linear model, generate a plot which includes

  - a line representing the true (underlying) model
  - a scatterplot representing the noisy data
  - a scatterplot consisting of a single data point representing the datum used to update the fit
  - a line representing the fitted model (if using the [online regression][@stdlib/ml/online-sgd-regression] module, can be obtained via the model coefficients or using the `predict` method)

  Concatenate all plots into a single report and view in a browser window.

* As a bonus, if using the [online regression][@stdlib/ml/online-sgd-regression] module, try using different loss functions and adjusting settings, such as the learning rate and regularization parameters.


## Tips

* Use `123456` to seed [randu][@stdlib/math/base/random/randu], thus allowing comparison with solution results.


## Testing

Assuming that each solution is placed in a separate file,

``` bash
$ node ./path/to/<solution_1>.js
$ node ./path/to/<solution_2>.js
# ...
```

When all your solutions succeed, proceed to the [next exercise][next-exercise].


<section class="links">

[linear-regression]: https://en.wikipedia.org/wiki/Linear_regression
[@stdlib/ml/online-sgd-regression]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ml/online-sgd-regression

[@stdlib/math/base/random/randu]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/random/randu
[@stdlib/math/base/random/randn]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/random/randn

[next-exercise]: https://github.com/stdlib-js/stdlib/blob/develop/workshops/numeric-computing/exercises/

</section>

<!-- /.links -->
