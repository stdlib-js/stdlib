<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Global

> Return the global object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var getGlobal = require( '@stdlib/utils/global' );
```

#### getGlobal( \[codegen] )

Returns the global object.

```javascript
var g = getGlobal();
// returns {...}
```

By default, the function does **not** use code generation when resolving the global object. While code generation is the **most** reliable means for resolving the global object, its use may violate [content security policies][mdn-csp] (CSPs). To use code generation, provide a `codegen` argument equal to `true`.

```javascript
var g = getGlobal( true );
// returns {...}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var getGlobal = require( '@stdlib/utils/global' );

// Resolve the global object:
var g = getGlobal();

// Display the object's contents:
console.log( g );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

</section>

<!-- /.links -->
