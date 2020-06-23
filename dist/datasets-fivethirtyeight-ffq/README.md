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

# FiveThirtyEight Food Frequency Questionnaire

> [_FiveThirtyEight_][fivethirtyeight-nutrition-studies] reader responses to a food frequency questionnaire ([FFQ][ffq]).

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dataset = require( '@stdlib/dist-datasets-fivethirtyeight-ffq' ).FIVETHIRTYEIGHT_FFQ;
```

#### dataset()

Returns [_FiveThirtyEight_][fivethirtyeight-nutrition-studies] reader responses to a food frequency questionnaire ([FFQ][ffq]).

```javascript
var data = dataset();
// returns [ {...}, ... ]
```

</section>

<!-- /.usage -->

* * *

<section class="notes">

## Notes

-   The administered food frequency questionnaire ([FFQ][ffq]) was the proprietary [Block FFQ][block-ffq].

-   This package contains distributable files for use in browser environments or as shared ("vendored") libraries in server environments. Each distributable file is a standalone [UMD][umd] bundle which, if no recognized module system is present, will expose bundle contents to the global scope.

-   Each minified bundle has a corresponding [gzip][gzip]-compressed bundle. The [gzip][gzip] compression level for each compressed bundle is `9`, which is the highest (and most optimal) compression level. Deciding between uncompressed and compressed bundles depends on the application and whether compression is handled elsewhere in the application stack (e.g., [nginx][nginx], [CDN][cdn], _et cetera_).

-   While you are **strongly** encouraged to **vendor** bundles and host with a [CDN][cdn]/provider which can provide availability **guarantees**, especially for production applications, bundles are available via [unpkg][unpkg] for quick demos, proof-of-concepts, and instructional material. For example,

    ```html
    <script type="text/javascript" src="https://unpkg.com/@stdlib/dist-datasets-fivethirtyeight-ffq"></script>
    ```

    Please be mindful that [unpkg][unpkg] is a free, best-effort service relying on donated infrastructure which does **not** provide **any** availability guarantees. Under **no** circumstances should you **abuse** or **misuse** the service. You have been **warned**.

-   If you intend on embedding a standalone bundle **within** another bundle, you may need to rename `require` calls within the standalone bundle **before** bundling in order to maintain scoped module resolution. For example, if you plan on using [browserify][browserify] to generate a bundle containing embedded bundles, [browserify][browserify] plugins exist to "de-require" those bundles prior to bundling.

-   The bundles in this package expose the following [stdlib][stdlib] packages:

    -   [@stdlib/datasets/fivethirtyeight-ffq][@stdlib/datasets/fivethirtyeight-ffq]

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bifurcateBy = require( '@stdlib/utils/bifurcate-by' );
var inmap = require( '@stdlib/utils/inmap' );
var ttest2 = require( '@stdlib/stats/ttest2' );
var dataset = require( '@stdlib/dist-datasets-fivethirtyeight-ffq' ).FIVETHIRTYEIGHT_FFQ;

function predicate( v ) {
    return ( v.diabetes === 1 );
}

function createAccessor( field ) {
    return accessor;

    function accessor( v ) {
        return v[ field ];
    }
}

// Retrieve the data:
var data = dataset();

// Split the data into two groups based on whether a respondent has diabetes:
var groups = bifurcateBy( data, predicate );

// For each group, extract the frequency of green salad consumption:
var mapFcn = createAccessor( 'greensaladfreq' );
var g1 = inmap( groups[ 0 ].slice(), mapFcn );
var g2 = inmap( groups[ 1 ].slice(), mapFcn );

// Perform a two-sample two-sided Student's t-test to determine if green salad consumption is different between the two groups:
var results = ttest2( g1, g2 );
console.log( results.print() );
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="/path/to/@stdlib/dist-datasets-fivethirtyeight-ffq/build/bundle.min.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope.

```html
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var dataset = stdlib_datasets_fivethirtyeight_ffq.FIVETHIRTYEIGHT_FFQ;
    console.log( dataset() );
</script>
```

</section>

<!-- /.examples -->

<section class="links">

[stdlib]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/fivethirtyeight-ffq]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/fivethirtyeight-ffq

[fivethirtyeight-nutrition-studies]: https://fivethirtyeight.com/features/you-cant-trust-what-you-read-about-nutrition/

[block-ffq]: https://nutritionquest.com/assessment/list-of-questionnaires-and-screeners/

[ffq]: https://en.wikipedia.org/wiki/Food_frequency_questionnaire

[umd]: https://github.com/umdjs/umd

[gzip]: https://en.wikipedia.org/wiki/Gzip

[nginx]: http://nginx.org/en/docs/

[cdn]: https://en.wikipedia.org/wiki/Content_delivery_network

[unpkg]: https://unpkg.com/#/

[browserify]: https://github.com/browserify/browserify

</section>

<!-- /.links -->
