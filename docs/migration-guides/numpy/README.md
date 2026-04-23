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
| Test whether an array contains truthy values | `np.any(x)` | [`any(x)`][@stdlib/ndarray/any] |
| Broadcast an array to a specified shape | `np.broadcast_to(x, shape)` | [`broadcastArray(x, shape)`][@stdlib/ndarray/broadcast-array] |
| Broadcast a scalar to a specified shape | `np.broadcast_to(np.array(scalar), shape)` | [`broadcastScalar(scalar, shape)`][@stdlib/ndarray/broadcast-scalar] |
| Copy an array | `np.copy(x)` | [`copy(x)`][@stdlib/ndarray/copy] |
| Count the number of falsy values in an array | `x.size-np.count_nonzero(x)` | [`countFalsy(x)`][@stdlib/ndarray/count-falsy] |
| Count the number of truthy values in an array | `np.count_nonzero(x)` | [`countTruthy(x)`][@stdlib/ndarray/count-truthy] |
| Test whether an array includes a specific value | `np.any(np.equal(x,v))` | [`includes(x,v)`][@stdlib/ndarray/includes] |
| Reverse the elements along a dimension | `np.flip(x, axis=dim)` | [`reverseDimension(x, dim)`][@stdlib/ndarray/reverse-dimension] |
| Prepend a specified number of singleton dimensions | `np.reshape(x, (1,)*n + x.shape)` | [`prependSingletonDimensions(x, n)`][@stdlib/ndarray/prepend-singleton-dimensions] |
| Test whether an array contains at least `n` truthy values | `np.count_nonzero(x) >= n` | [`some(x, n)`][@stdlib/ndarray/some] |

<!-- lint enable table-pipe-alignment -->

## Function Reference

{{table}}

<section class="links">

[@stdlib/ndarray/any]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/any

[@stdlib/ndarray/broadcast-array]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/broadcast-array

[@stdlib/ndarray/broadcast-scalar]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/broadcast-scalar

[@stdlib/ndarray/copy]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/copy

[@stdlib/ndarray/count-falsy]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/count-falsy

[@stdlib/ndarray/count-truthy]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/count-truthy

[@stdlib/ndarray/includes]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/includes

[@stdlib/ndarray/prepend-singleton-dimensions]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/prepend-singleton-dimensions

[@stdlib/ndarray/reverse-dimension]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/reverse-dimension

[@stdlib/ndarray/some]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/some

</section>

<!-- /.links -->
