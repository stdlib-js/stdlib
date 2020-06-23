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

# State of the Union Addresses

> [State of the Union][sotu] addresses given by U.S. Presidents.

<section class="intro">

The [State of the Union][sotu] address is an annual speech given by the President of the United States of America to a joint session of the United States Congress.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sotu = require( '@stdlib/dist-datasets-sotu' ).SOTU;
```

#### sotu( \[options] )

Returns [State of the Union][sotu] addresses.

```javascript
var speeches = sotu();
// returns [{...},{...},...]
```

Each [State of the Union][sotu] address is represented by an `object` with the following fields:

-   **year**: speech year.
-   **name**: President name.
-   **party**: the President's political party.
-   **text**: speech text.

The function accepts the following `options`:

-   **name**: a President's name or an `array` of names.
-   **party**: a political party or an `array` of political parties.
-   **year**: a year or an `array` of years.
-   **range**: two-element `array` specifying a year range.

To retrieve speeches by one or more Presidents, set the `name` option.

```javascript
var speeches = sotu({
    'name': 'Barack Obama'
});
// returns [{...},{...},...]

speeches = sotu({
    'name': [
        'Franklin D Roosevelt',
        'Barack Obama'
    ]
});
// returns [{...},{...},...]
```

To retrieve speeches from Presidents belonging to a particular political party, set the `party` option.

```javascript
var speeches = sotu({
    'party': 'Democratic'
});
// returns [{...},{...},...]

speeches = sotu({
    'party': [
        'Federalist',
        'Democratic'
    ]
});
// returns [{...},{...},...]
```

The following parties are recognized:

-   **Democratic**
-   **Republican**
-   **Democratic-Republican**
-   **Federalist**
-   **National Union**
-   **Whig**
-   **Whig & Democratic**
-   **none**

To retrieve speeches from one or more years, set the `year` option.

```javascript
var speeches = sotu({
    'year': 2009
});
// returns [{...}]

speeches = sotu({
    'year': [
        1942,
        2009
    ]
});
// returns [{...},{...}]
```

To specify a range of consecutive years, set the `range` option, where the first element corresponds to the starting year and the second element corresponds to the final year.

```javascript
var speeches = sotu({
    'range': [ 2009, 2016 ]
});
// returns [{...},{...},...]
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
    <script type="text/javascript" src="https://unpkg.com/@stdlib/dist-datasets-sotu"></script>
    ```

    Please be mindful that [unpkg][unpkg] is a free, best-effort service relying on donated infrastructure which does **not** provide **any** availability guarantees. Under **no** circumstances should you **abuse** or **misuse** the service. You have been **warned**.

-   If you intend on embedding a standalone bundle **within** another bundle, you may need to rename `require` calls within the standalone bundle **before** bundling in order to maintain scoped module resolution. For example, if you plan on using [browserify][browserify] to generate a bundle containing embedded bundles, [browserify][browserify] plugins exist to "de-require" those bundles prior to bundling.

-   The bundles in this package expose the following [stdlib][stdlib] packages:

    -   [@stdlib/datasets/sotu][@stdlib/datasets/sotu]

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var sotu = require( '@stdlib/dist-datasets-sotu' ).SOTU;

var speeches;

// Get a range of speeches:
speeches = sotu({
    'range': [ 2009, 2013 ]
});
// returns [...]

// Get speeches by one or more Presidents:
speeches = sotu({
    'name': [
        'Abraham Lincoln',
        'William J Clinton'
    ]
});
console.log( 'Number of addresses by Abraham Lincoln and Bill Clinton: %d', speeches.length );

// Get all addresses by Presidents belonging to the Democratic Party:
speeches = sotu({
    'party': 'Democratic'
});
console.log( 'Number of addresses by Democrats: %d', speeches.length );
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="/path/to/@stdlib/dist-datasets-sotu/build/bundle.min.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope.

```html
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var sotu = stdlib_datasets_sotu.SOTU;
    console.log( sotu() );
</script>
```

</section>

<!-- /.examples -->

<section class="links">

[sotu]: https://en.wikipedia.org/wiki/State_of_the_Union

[stdlib]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/sotu]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/sotu

[umd]: https://github.com/umdjs/umd

[gzip]: https://en.wikipedia.org/wiki/Gzip

[nginx]: http://nginx.org/en/docs/

[cdn]: https://en.wikipedia.org/wiki/Content_delivery_network

[unpkg]: https://unpkg.com/#/

[browserify]: https://github.com/browserify/browserify

</section>

<!-- /.links -->
