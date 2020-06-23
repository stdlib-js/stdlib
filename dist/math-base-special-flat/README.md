<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Special Mathematical Functions

> Special mathematical functions.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var base = require( '@stdlib/dist-math-base-special-flat' ).base;
```

#### base.&lt;name&gt;( \[...args] )

Provides an interface to the function aliased according to `name`. Supported functions may be determined by inspecting the enumerable property list

```javascript
var objectKeys = require( '@stdib/utils/keys' );

var props = objectKeys( base );
// returns [ ... ]
```

For example, to use to the [`erf()`][@stdlib/math/base/special/erf] special function,

```javascript
var y = base.erf( 0.5 );
// returns <number>
```

To discover supported arguments for each exposed API, consult the documentation for the individual [special mathematical function][@stdlib/math/base/special].

</section>

<!-- /.usage -->

* * *

<section class="notes">

## Notes

-   This package contains bundles exposing a `flat` namespace. A `flat` namespace uses the global alias [namespace][@stdlib/namespace], where each package has a unique alias (e.g., `base.erf`).

-   Note that functions elide argument validation and error handling, so use these functions with care. Their use can be beneficial in performance sensitive contexts where argument types and formats are known and tested in advance.

-   This package contains distributable files for use in browser environments or as shared ("vendored") libraries in server environments. Each distributable file is a standalone [UMD][umd] bundle which, if no recognized module system is present, will expose bundle contents to the global scope.

-   Each minified bundle has a corresponding [gzip][gzip]-compressed bundle. The [gzip][gzip] compression level for each compressed bundle is `9`, which is the highest (and most optimal) compression level. Deciding between uncompressed and compressed bundles depends on the application and whether compression is handled elsewhere in the application stack (e.g., [nginx][nginx], [CDN][cdn], _et cetera_).

-   While you are **strongly** encouraged to **vendor** bundles and host with a [CDN][cdn]/provider which can provide availability **guarantees**, especially for production applications, bundles are available via [unpkg][unpkg] for quick demos, proof-of-concepts, and instructional material. For example,

    ```html
    <script type="text/javascript" src="https://unpkg.com/@stdlib/dist-math-base-special-flat"></script>
    ```

    Please be mindful that [unpkg][unpkg] is a free, best-effort service relying on donated infrastructure which does **not** provide **any** availability guarantees. Under **no** circumstances should you **abuse** or **misuse** the service. You have been **warned**.

-   If you intend on embedding a standalone bundle **within** another bundle, you may need to rename `require` calls within the standalone bundle **before** bundling in order to maintain scoped module resolution. For example, if you plan on using [browserify][browserify] to generate a bundle containing embedded bundles, [browserify][browserify] plugins exist to "de-require" those bundles prior to bundling.

-   The bundles in this package contain the following stdlib packages:

    -   [@stdlib/math/base/special/*][@stdlib/math/base/special]

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var base = require( '@stdlib/dist-math-base-special-flat' ).base;

var y = base.erf( 0.5 );
console.log( y );
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="/path/to/@stdlib/dist-math-base-special-flat/build/bundle.min.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope.

```html
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var erf = stdlib_math_base_special_flat.erf;
    console.log( erf( 0.5 ) );
</script>
```

</section>

<!-- /.examples -->

<section class="links">

[stdlib]: https://github.com/stdlib-js/stdlib

[@stdlib/namespace]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/namespace

[@stdlib/math/base/special/erf]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/erf

[@stdlib/math/base/special]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special

[umd]: https://github.com/umdjs/umd

[gzip]: https://en.wikipedia.org/wiki/Gzip

[nginx]: http://nginx.org/en/docs/

[cdn]: https://en.wikipedia.org/wiki/Content_delivery_network

[unpkg]: https://unpkg.com/#/

[browserify]: https://github.com/browserify/browserify

</section>

<!-- /.links -->
