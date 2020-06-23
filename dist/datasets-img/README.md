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

# Images

> A collection of images.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var images = require( '@stdlib/dist-datasets-img' );
```

#### images.IMG_ACANTHUS_MOLLIS()

Returns a [buffer][@stdlib/buffer/ctor] containing image data.

```javascript
var img = images.IMG_ACANTHUS_MOLLIS();
// returns <Buffer>
```

#### images.IMG_AIRPLANE_FROM_ABOVE()

Returns a [buffer][@stdlib/buffer/ctor] containing image data.

```javascript
var img = images.IMG_AIRPLANE_FROM_ABOVE();
// returns <Buffer>
```

#### images.IMG_ALLIUM_OREOPHILUM()

Returns a [buffer][@stdlib/buffer/ctor] containing image data.

```javascript
var img = images.IMG_ALLIUM_OREOPHILUM();
// returns <Buffer>
```

#### images.IMG_BLACK_CANYON()

Returns a [buffer][@stdlib/buffer/ctor] containing image data.

```javascript
var img = images.IMG_BLACK_CANYON();
// returns <Buffer>
```

#### images.IMG_DUST_BOWL_HOME()

Returns a [buffer][@stdlib/buffer/ctor] containing image data.

```javascript
var img = images.IMG_DUST_BOWL_HOME();
// returns <Buffer>
```

#### images.IMG_FRENCH_ALPINE_LANDSCAPE()

Returns a [buffer][@stdlib/buffer/ctor] containing image data.

```javascript
var img = images.IMG_FRENCH_ALPINE_LANDSCAPE();
// returns <Buffer>
```

#### images.IMG_LOCOMOTION_HOUSE_CAT()

Returns a [buffer][@stdlib/buffer/ctor] containing image data.

```javascript
var img = images.IMG_LOCOMOTION_HOUSE_CAT();
// returns <Buffer>
```

#### images.IMG_LOCOMOTION_NUDE_MALE()

Returns a [buffer][@stdlib/buffer/ctor] containing image data.

```javascript
var img = images.IMG_LOCOMOTION_NUDE_MALE();
// returns <Buffer>
```

#### images.IMG_MARCH_PASTORAL()

Returns a [buffer][@stdlib/buffer/ctor] containing image data.

```javascript
var img = images.IMG_MARCH_PASTORAL();
// returns <Buffer>
```

#### images.IMG_NAGASAKI_BOATS()

Returns a [buffer][@stdlib/buffer/ctor] containing image data.

```javascript
var img = images.IMG_NAGASAKI_BOATS();
// returns <Buffer>
```

</section>

<!-- /.usage -->

* * *

<section class="notes">

## Notes

-   This package contains distributable files for use in browser environments or as shared ("vendored") libraries in server environments. Each distributable file is a standalone [UMD][umd] bundle which, if no recognized module system is present, will expose bundle contents to the global scope.

-   Each minified bundle has a corresponding [gzip][gzip]-compressed bundle. The [gzip][gzip] compression level for each compressed bundle is `9`, which is the highest (and most optimal) compression level. Deciding between uncompressed and compressed bundles depends on the application and whether compression is handled elsewhere in the application stack (e.g., [nginx][nginx], [CDN][cdn], _et cetera_).

-   While you are **strongly** encouraged to **vendor** bundles and host with a [CDN][cdn]/provider which can provide availability **guarantees**, especially for production applications, bundles are available via [unpkg][unpkg] for quick demos, proof-of-concepts, and instructional material. For example,

    ```html
    <script type="text/javascript" src="https://unpkg.com/@stdlib/dist-datasets-img"></script>
    ```

    Please be mindful that [unpkg][unpkg] is a free, best-effort service relying on donated infrastructure which does **not** provide **any** availability guarantees. Under **no** circumstances should you **abuse** or **misuse** the service. You have been **warned**.

-   If you intend on embedding a standalone bundle **within** another bundle, you may need to rename `require` calls within the standalone bundle **before** bundling in order to maintain scoped module resolution. For example, if you plan on using [browserify][browserify] to generate a bundle containing embedded bundles, [browserify][browserify] plugins exist to "de-require" those bundles prior to bundling.

-   The bundles in this package expose the following [stdlib][stdlib] packages:

    -   [@stdlib/datasets/img-acanthus-mollis][@stdlib/datasets/img-acanthus-mollis]
    -   [@stdlib/datasets/img-airplane-from-above][@stdlib/datasets/img-airplane-from-above]
    -   [@stdlib/datasets/img-allium-oreophilum][@stdlib/datasets/img-allium-oreophilum]
    -   [@stdlib/datasets/img-black-canyon][@stdlib/datasets/img-black-canyon]
    -   [@stdlib/datasets/img-dust-bowl-home][@stdlib/datasets/img-dust-bowl-home]
    -   [@stdlib/datasets/img-french-alpine-landscape][@stdlib/datasets/img-french-alpine-landscape]
    -   [@stdlib/datasets/img-locomotion-house-cat][@stdlib/datasets/img-locomotion-house-cat]
    -   [@stdlib/datasets/img-locomotion-nude-male][@stdlib/datasets/img-locomotion-nude-male]
    -   [@stdlib/datasets/img-march-pastoral][@stdlib/datasets/img-march-pastoral]
    -   [@stdlib/datasets/img-nagasaki-boats][@stdlib/datasets/img-nagasaki-boats]

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var image = require( '@stdlib/dist-datasets-img' ).IMG_ACANTHUS_MOLLIS;

var img = image();
console.log( img );
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="/path/to/@stdlib/dist-datasets-img/build/bundle.min.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope.

```html
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var image = stdlib_datasets_img.IMG_ACANTHUS_MOLLIS;
    console.log( image() );
</script>
```

</section>

<!-- /.examples -->

<section class="links">

[stdlib]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/img-acanthus-mollis]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/img-acanthus-mollis

[@stdlib/datasets/img-airplane-from-above]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/img-airplane-from-above

[@stdlib/datasets/img-allium-oreophilum]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/img-allium-oreophilum

[@stdlib/datasets/img-black-canyon]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/img-black-canyon

[@stdlib/datasets/img-dust-bowl-home]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/img-dust-bowl-home

[@stdlib/datasets/img-french-alpine-landscape]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/img-french-alpine-landscape

[@stdlib/datasets/img-locomotion-house-cat]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/img-locomotion-house-cat

[@stdlib/datasets/img-locomotion-nude-male]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/img-locomotion-nude-male

[@stdlib/datasets/img-march-pastoral]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/img-march-pastoral

[@stdlib/datasets/img-nagasaki-boats]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/img-nagasaki-boats

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/buffer/ctor

[umd]: https://github.com/umdjs/umd

[gzip]: https://en.wikipedia.org/wiki/Gzip

[nginx]: http://nginx.org/en/docs/

[cdn]: https://en.wikipedia.org/wiki/Content_delivery_network

[unpkg]: https://unpkg.com/#/

[browserify]: https://github.com/browserify/browserify

</section>

<!-- /.links -->
