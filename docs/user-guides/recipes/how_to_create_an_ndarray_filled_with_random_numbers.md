<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# How to create an ndarray filled with random numbers

> Create an ndarray of uniformly-distributed pseudorandom numbers and then regenerate the exact same ndarray using a seed or saved PRNG state.

## Introduction

stdlib provides APIs and packages to help you create [ndarrays][@stdlib/ndarray/ctor] (a.k.a., multi-dimensional arrays) containing pseudorandom numbers drawn from statistical distributions. These APIs allow you to specify seeds in order to generate reproducible sequences and to specify the output array shape and precision.

In this recipe, we'll use [`@stdlib/random/uniform`][@stdlib/random/uniform] to create ndarrays containing pseudorandom numbers drawn from a uniform distribution.

## Setup

Before we begin, we need to install `@stdlib/stdlib`, if it isn't already available.

```bash
$ npm install @stdlib/stdlib
```

## Steps

1.  Import all necessary packages for generating pseudorandom numbers.
2.  Generate an ndarray.
3.  \[Optional] Regenerate a sequence by using a seed.

### 1. Import required packages

For this recipe, we'll use `@stdlib/stdlib` and its package [`@stdlib/random/uniform`][@stdlib/random/uniform]. We'll also use the package [`@stdlib/ndarray/to-array`][@stdlib/ndarray/to-array] to convert an ndarray to a conventional array-of-arrays format.

```javascript
const uniform = require( '@stdlib/random/uniform' );
const ndarray2array = require( '@stdlib/ndarray/to-array' );
```

### 2. Generate an ndarray

Every stdlib interface for creating ndarrays of pseudorandom numbers drawn from a statistical distribution has two requirements. The first is defining the desired output shape. The second is defining the distribution parameters which control the shape of the sampled distribution.

For this recipe, the uniform distribution has two parameters:

-   **a**: minimum support (inclusive).
-   **b**: maximum support (exclusive).

In the following code snippet, we generate a 3×3 matrix of pseudorandom numbers sampled from a uniform distribution with minimum support `-10` and maximum support `+10`.

```javascript
const shape = [ 3, 3 ]; // 3×3
const a = -10.0;        // minimum support
const b = 10.0;         // maximum support

const x = uniform( shape, a, b );
// returns <ndarray>
```

ndarrays are multi-dimensional views atop linear memory. While boosting performance and improving memory efficiency, especially when compared to nested arrays, this makes ndarrays somewhat opaque data structures. Accordingly, to convert an ndarray to a conventional array-of-arrays format, we can use [`@stdlib/ndarray/to-array`][@stdlib/ndarray/to-array], as done in the following code snippet.

```javascript
const xa = ndarray2array( x );
// e.g., returns [ [ ~-2.41, ~3.08, ~5.09 ], [ ~5.73, ~-8.12, ~-8.99 ], [ ~0.11, ~-6.69, ~4.79 ] ]
```

The output displayed in the above example is representative, and your values are likely to differ. However, notice that the values always reside on the half-open interval `[-10,10)`.

> 💡 Tip
>
> By default, `uniform` returns an ndarray having a `float64` data type (i.e., an ndarray of double-precision floating-point numbers). To return an ndarray having either a `float32` or `generic` data type, you can provide a `dtype` option when calling `uniform`, as displayed in the following code snippet.
>
> ```javascript
> const x32 = uniform( shape, a, b, {
>     'dtype': 'float32'
> });
> ```

At this point, we've finished creating an ndarray of pseudorandom numbers, and now we'll reproduce the same sequence of numbers by using a seed.

### 3. \[Optional] Regenerate a sequence by using a seed

A **seed** is a value which initializes a pseudorandom number generator, and a pseudorandom number generator's sequence is completely determined by that seed. Accordingly, if another pseudorandom number generator instance is initialized with the same seed, that instance will produce the same sequence of numbers.

In the following code snippet, we pass the seed from the `uniform` pseudorandom number generator used above to a function which returns a new `uniform` instance. When calling that instance with the same distribution parameters `a` and `b` that we used above, we generate an ndarray containing the same set of pseudorandomly generated numbers.

```javascript
const r1 = uniform.factory({
    'seed': uniform.seed
});

const y = r1( shape, a, b );
// returns <ndarray>

const ya = ndarray2array( y );
// e.g., returns [ [ ~-2.41, ~3.08, ~5.09 ], [ ~5.73, ~-8.12, ~-8.99 ], [ ~0.11, ~-6.69, ~4.79 ] ]
```

Need to configure a `uniform` instance to continue from the current generator state, instead of starting over? Pass a state when creating a new `uniform` instance, as done in the following code snippet.

```javascript
const r2 = uniform.factory({
    'state': uniform.state,
    'copy': true              // set to `false` to share state
});

// Generate the same sequence of values as if calling `uniform` a second time:
const z = r2( shape, a, b );
// returns <ndarray>
```

Congratulations! You have successfully used stdlib to generate (and re-generate) an ndarray of pseudorandom numbers.

## Learn More

Check out our other [recipes][stdlib-user-guides-recipes] to continue your learning!

Sampling other distributions? See [`@stdlib/random`][@stdlib/random] for all of what stdlib has to offer.

<!-- links -->

<section class="links">

[@stdlib/random]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random

[@stdlib/random/uniform]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/uniform

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/ctor

[@stdlib/ndarray/to-array]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/to-array

[stdlib-user-guides-recipes]: https://github.com/stdlib-js/stdlib/tree/develop/docs/user-guides/recipes

</section>

<!-- /.links -->
