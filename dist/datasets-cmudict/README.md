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

# CMUdict

> The Carnegie Mellon Pronouncing Dictionary.

<section class="intro">

The [Carnegie Mellon University Pronouncing Dictionary (CMUDict)][cmudict], created by the Speech Group in the School of Computer Science at CMU, is "an open-source machine-readable pronunciation dictionary for North American English that contains over 134,000 words".

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cmudict = require( '@stdlib/dist-datasets-cmudict' ).CMUDICT;
```

#### cmudict( \[options] )

Returns datasets from the [Carnegie Mellon Pronouncing Dictionary (CMUdict)][cmudict].

```javascript
var data = cmudict();
/* returns
    {
        'dict': {...},
        'phones': {...},
        'symbols': [...],
        'vp': {...}
    }
*/
```

The function accepts the following `options`:

-   **data**: dataset name. The following names are recognized:

    -   **dict**: the main pronouncing dictionary
    -   **phones**: manners of articulation for each sound
    -   **symbols**: complete list of ARPABET symbols used by the dictionary
    -   **vp**: verbal pronunciations of punctuation marks

To only return the main pronouncing dictionary, set the `data` option to `dict`.

```javascript
var opts = {
    'data': 'dict'
};

var data = cmudict( opts );
/* returns
    {
        'A': 'AH0',
        'A(1)': 'EY1',
        'A\'S': 'EY1 Z',
        // ...
    }
*/
```

To return only sound articulation manners, set the `data` option to `phones`.

```javascript
var opts = {
    'data': 'phones'
};

var data = cmudict( opts );
/* returns
    {
        'AA': 'vowel',
        'AE': 'vowel',
        'AH': 'vowel',
        // ...
    }
*/
```

To return only ARPABET symbols used by the dictionary, set the `data` option to `symbols`.

```javascript
var opts = {
    'data': 'symbols'
};

var data = cmudict( opts );
/* returns
    [
        'AA',
        'AA0',
        'AA1',
        // ...
    ]
*/
```

To return only the verbal pronunciations of punctuation marks, set the `data` option to `vp`.

```javascript
var opts = {
    'data': 'vp'
};

var data = cmudict( opts );
/* returns
    {
        '!exclamation-point': 'EH2 K S K L AH0 M EY1 SH AH0 N P OY2 N T',
        '"close-quote': 'K L OW1 Z K W OW1 T',
        '"double-quote': 'D AH1 B AH0 L K W OW1 T',
        // ...
    }
*/
```

</section>

<!-- /.usage -->

* * *

<section class="notes">

## Notes

-   Vowels carry a lexical stress marker (0: No stress, 1: Primary stress, 2: Secondary stress).

-   The phoneme set is based on the [ARPAbet symbol set][arpabet] developed for speech recognition.

-   This package contains distributable files for use in browser environments or as shared ("vendored") libraries in server environments. Each distributable file is a standalone [UMD][umd] bundle which, if no recognized module system is present, will expose bundle contents to the global scope.

-   Each minified bundle has a corresponding [gzip][gzip]-compressed bundle. The [gzip][gzip] compression level for each compressed bundle is `9`, which is the highest (and most optimal) compression level. Deciding between uncompressed and compressed bundles depends on the application and whether compression is handled elsewhere in the application stack (e.g., [nginx][nginx], [CDN][cdn], _et cetera_).

-   While you are **strongly** encouraged to **vendor** bundles and host with a [CDN][cdn]/provider which can provide availability **guarantees**, especially for production applications, bundles are available via [unpkg][unpkg] for quick demos, proof-of-concepts, and instructional material. For example,

    ```html
    <script type="text/javascript" src="https://unpkg.com/@stdlib/dist-datasets-cmudict"></script>
    ```

    Please be mindful that [unpkg][unpkg] is a free, best-effort service relying on donated infrastructure which does **not** provide **any** availability guarantees. Under **no** circumstances should you **abuse** or **misuse** the service. You have been **warned**.

-   If you intend on embedding a standalone bundle **within** another bundle, you may need to rename `require` calls within the standalone bundle **before** bundling in order to maintain scoped module resolution. For example, if you plan on using [browserify][browserify] to generate a bundle containing embedded bundles, [browserify][browserify] plugins exist to "de-require" those bundles prior to bundling.

-   The bundles in this package expose the following [stdlib][stdlib] packages:

    -   [@stdlib/datasets/cmudict][@stdlib/datasets/cmudict]

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var cmudict = require( '@stdlib/dist-datasets-cmudict' ).CMUDICT;

var opts = {};

opts.data = 'phones';
console.dir( cmudict( opts ) );

opts.data = 'symbols';
console.dir( cmudict( opts ) );

opts.data = 'dict';
console.dir( cmudict( opts ) );
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="/path/to/@stdlib/dist-datasets-cmudict/build/bundle.min.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope.

```html
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var dataset = stdlib_datasets_cmudict.CMUDICT;
    console.log( dataset() );
</script>
```

</section>

<!-- /.examples -->

<section class="links">

[stdlib]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/cmudict]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/cmudict

[cmudict]: http://www.speech.cs.cmu.edu/cgi-bin/cmudict#about

[arpabet]: https://en.wikipedia.org/wiki/ARPABET

[umd]: https://github.com/umdjs/umd

[gzip]: https://en.wikipedia.org/wiki/Gzip

[nginx]: http://nginx.org/en/docs/

[cdn]: https://en.wikipedia.org/wiki/Content_delivery_network

[unpkg]: https://unpkg.com/#/

[browserify]: https://github.com/browserify/browserify

</section>

<!-- /.links -->
