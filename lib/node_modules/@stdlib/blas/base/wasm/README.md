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

# BLAS

> Basic linear algebra subprograms (BLAS) compiled to WebAssembly.

<section class="usage">

## Usage

```javascript
var blas = require( '@stdlib/blas/base/wasm' );
```

#### blas

Namespace for basic linear algebra subprograms (BLAS) compiled to WebAssembly.

```javascript
var o = blas;
// returns {...}
```

### BLAS Level 1

<!-- <toc pattern="+(*amax|*asum|*axpy|*copy|*dot*|*imax1|*nrm2|*rot*|*scal|*sum1|*swap)"> -->

<div class="namespace-toc">

</div>

<!-- </toc> -->

### BLAS Level 2

<!-- <toc pattern="+(*gemv|*ger|*hemv|*symv|*her*|*syr*|*trmv|*trsv|*pmv|*hpmv|*spmv|*hpr*|*spr*|*tmpv|*tpsv|*gbmv|*hbmv|*sbmv|*tbmv|*tbsv)"> -->

<div class="namespace-toc">

</div>

<!-- </toc> -->

### BLAS Level 3

<!-- <toc pattern="+(*gemm|*hemm|*symm|*herk|*syrk|*her2k|*syr2k|*trmm|*trsm)"> -->

<div class="namespace-toc">

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var blas = require( '@stdlib/blas/base/wasm' );

console.log( objectKeys( blas ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

<!-- </toc-links> -->

</section>

<!-- /.links -->
