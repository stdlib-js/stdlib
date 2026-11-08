<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

<!-- lint disable expected-html-sections -->

# NumPy

> Migration guide for NumPy.

## Common Operations

<!-- lint disable table-pipe-alignment -->

| Description | NumPy | stdlib |
| ----------- | ----- | ------ |
| Append a zero-filled array of the same shape along a specified dimension | `np.concat((x, np.zeros_like(x)), axis=dim)` | [`concat([x, zerosLike(x)], {dim: dim})`][@stdlib/ndarray/concat] |
| Broadcast an array to a specified shape | `np.broadcast_to(x, shape)` | [`broadcastArray(x, shape)`][@stdlib/ndarray/broadcast-array] |
| Broadcast a scalar to a specified shape | `np.broadcast_to(np.array(scalar), shape)` | [`broadcastScalar(scalar, shape)`][@stdlib/ndarray/broadcast-scalar] |
| Compute the maximum absolute value | `np.max(np.abs(x))` | [`maxabs(x)`][@stdlib/stats/maxabs] |
| Compute the minimum absolute value | `np.min(np.abs(x))` | [`minabs(x)`][@stdlib/stats/minabs] |
| Concatenate a list of arrays along the second-to-last dimension | `np.concat(arrays, axis=-2)` | [`vconcat(arrays)`][@stdlib/ndarray/vconcat] |
| Concatenate a list of arrays along the last dimension | `np.concat(arrays, axis=-1)` | [`hconcat(arrays)`][@stdlib/ndarray/hconcat] |
| Concatenate a list of one-dimensional arrays as columns | `np.column_stack(arrays)` | [`colcat(arrays)`][@stdlib/ndarray/colcat] |
| Concatenate a list of one-dimensional arrays as rows | `np.vstack(arrays)` | [`rowcat(arrays)`][@stdlib/ndarray/rowcat] |
| Copy an array | `np.copy(x)` | [`copy(x)`][@stdlib/ndarray/copy] |
| Count the number of falsy values in an array | `x.size-np.count_nonzero(x)` | [`countFalsy(x)`][@stdlib/ndarray/count-falsy] |
| Count the number of truthy values in an array | `np.count_nonzero(x)` | [`countTruthy(x)`][@stdlib/ndarray/count-truthy] |
| Create a sorted copy of an array | `np.sort(x)` | [`toSorted(x)`][@stdlib/blas/ext/to-sorted] |
| Create an array containing evenly spaced numbers over a specified interval and having a desired shape | `np.reshape(np.linspace(start, stop), shape)` | [`linspace(shape, start, stop)`][@stdlib/blas/ext/linspace] |
| Create an array of uniformly distributed pseudorandom numbers | `np.random.default_rng().uniform(low,high,shape)` | [`uniform(shape,low,high)`][@stdlib/random/uniform] |
| Filter an array according to a predicate function | `x[np.vectorize(predicate)(x)]` | [`filter(x, predicate)`][@stdlib/ndarray/filter] |
| Find the index of the first element which equals a specified value | `np.argmax(x == v, axis=dim)` | [`indexOf(x, v, {dim: dim})`][@stdlib/blas/ext/index-of] |
| Find the index of the last element which equals a specified value | `x.shape[dim]-1-np.argmax(np.flip(x, axis=dim) == v, axis=dim)` | [`lastIndexOf(x, v, {dim: dim})`][@stdlib/blas/ext/last-index-of] |
| Flatten an array to a desired depth | `np.reshape(x, newshape)` | [`flatten(x, {depth: depth})`][@stdlib/ndarray/flatten] |
| Flatten an array starting from a specific dimension | `np.reshape(x, x.shape[:dim] + (-1,))` | [`flattenFrom(x, dim)`][@stdlib/ndarray/flatten-from] |
| Prepend a specified number of singleton dimensions | `np.reshape(x, (1,)*n + x.shape)` | [`prependSingletonDimensions(x, n)`][@stdlib/ndarray/prepend-singleton-dimensions] |
| Prepend a zero-filled array of the same shape along a specified dimension | `np.concat((np.zeros_like(x), x), axis=dim)` | [`concat([zerosLike(x), x], {dim: dim})`][@stdlib/ndarray/concat] |
| Remove singleton dimensions | `np.squeeze(x)` | [`removeSingletonDimensions(x)`][@stdlib/ndarray/remove-singleton-dimensions] |
| Reverse the elements along a dimension | `np.flip(x, axis=dim)` | [`reverseDimension(x, dim)`][@stdlib/ndarray/reverse-dimension] |
| Rotate an array by 90 degrees in a specified plane | `np.rot90(x, axes=dims)` | [`rot90(x, {dims: dims})`][@stdlib/ndarray/rot90] |
| Rotate an array by 180 degrees in a specified plane | `np.rot90(x, k=2, axes=dims)` | [`rot180(x, {dims: dims})`][@stdlib/ndarray/rot180] |
| Sort an array in-place | `x[:] = np.sort(x)` | [`sort(x)`][@stdlib/blas/ext/sort] |
| Test whether an array contains at least `n` truthy values | `np.count_nonzero(x) >= n` | [`some(x, n)`][@stdlib/ndarray/some] |
| Test whether an array contains truthy values | `np.any(x)` | [`any(x)`][@stdlib/ndarray/any] |
| Test whether an array includes a specific value | `np.any(x == v)` | [`includes(x,v)`][@stdlib/ndarray/includes] |

<!-- lint enable table-pipe-alignment -->

## Function Reference

<!-- table -->

{{table}}

<!-- /.table -->

<section class="links">

[@stdlib/blas/ext/index-of]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/index-of

[@stdlib/blas/ext/last-index-of]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/last-index-of

[@stdlib/blas/ext/linspace]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/linspace

[@stdlib/blas/ext/sort]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/sort

[@stdlib/blas/ext/to-sorted]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/blas/ext/to-sorted

[@stdlib/ndarray/any]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/any

[@stdlib/ndarray/broadcast-array]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/broadcast-array

[@stdlib/ndarray/broadcast-scalar]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/broadcast-scalar

[@stdlib/ndarray/colcat]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/colcat

[@stdlib/ndarray/concat]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/concat

[@stdlib/ndarray/copy]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/copy

[@stdlib/ndarray/count-falsy]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/count-falsy

[@stdlib/ndarray/count-truthy]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/count-truthy

[@stdlib/ndarray/filter]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/filter

[@stdlib/ndarray/flatten]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/flatten

[@stdlib/ndarray/flatten-from]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/flatten-from

[@stdlib/ndarray/hconcat]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/hconcat

[@stdlib/ndarray/includes]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/includes

[@stdlib/ndarray/prepend-singleton-dimensions]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/prepend-singleton-dimensions

[@stdlib/ndarray/remove-singleton-dimensions]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/remove-singleton-dimensions

[@stdlib/ndarray/reverse-dimension]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/reverse-dimension

[@stdlib/ndarray/rot90]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/rot90

[@stdlib/ndarray/rot180]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/rot180

[@stdlib/ndarray/rowcat]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/rowcat

[@stdlib/ndarray/some]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/some

[@stdlib/ndarray/vconcat]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/vconcat

[@stdlib/random/uniform]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/uniform

[@stdlib/stats/maxabs]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/stats/maxabs

[@stdlib/stats/minabs]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/stats/minabs

</section>

<!-- /.links -->
