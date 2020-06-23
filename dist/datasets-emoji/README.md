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

# Emoji

> An emoji database.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var emoji = require( '@stdlib/dist-datasets-emoji' );
```

#### emoji.EMOJI()

Returns an emoji database.

```javascript
var data = emoji.EMOJI();
// returns [ {...}, ... ]
```

Each element in the returned database has the following fields:

-   **group**: emoji group (illustrative); e.g., `'Smileys & Emotion'`.
-   **subgroup**: emoji subgroup (illustrative); e.g., `'face-smiling'`.
-   **codepoints**: list of one or more hex code points, separated by spaces; e.g., `'1F600'`.
-   **hash**: hash value used to match related emoji.
-   **status**: indicates whether an emoji element is missing one or more emoji presentation selectors. Possible values: `'fully-qualified'`, `'minimally-qualified'`, `'unqualified'`.
-   **emoji**: rendered emoji; e.g., `'😀'`.
-   **short_name**: CLDR short name; e.g., `'grinning face'`.
-   **description**: short description (often matching the CLDR short name, but omitting skin tones, hair styles, et cetera).
-   **aliases**: an `array` of emoji aliases (i.e., common names used to refer to an emoji).
-   **keywords**: an `array` of keywords related to an emoji.
-   **codes**: an `array` of emoji codes (i.e., convenient character sequences used within text to refer to an emoji); e.g., `':grinning:'` and `':call_me_hand::skin-tone-5:'`.

In addition, for those emoji supporting skin tones, an element may have the following field:

-   **skin_tones**: an `array` of skin tone modifiers based on the Fitzpatrick scale; e.g., `'skin-tone-2'`.

* * *

#### emoji.EMOJI_CODE_PICTO()

Returns an object mapping emoji codes to pictographs.

```javascript
var t = emoji.EMOJI_CODE_PICTO();
// returns {...}

var p = t[ ':smile:' ];
// returns '😄'

p = t[ ':unicorn:' ];
// returns '🦄'
```

The returned object only contains emoji presentation pictographs.

* * *

#### emoji.EMOJI_PICTO_CODE()

Returns an object mapping emoji pictographs to codes.

```javascript
var t = table();
// returns {...}

var p = t[ '😄' ];
// returns [ ':smile:' ]

p = t[ '🦄' ];
// returns [ ':unicorn:' ]
```

Some emoji pictographs may have **multiple** applicable codes.

</section>

<!-- /.usage -->

* * *

<section class="notes">

## Notes

-   This package contains distributable files for use in browser environments or as shared ("vendored") libraries in server environments. Each distributable file is a standalone [UMD][umd] bundle which, if no recognized module system is present, will expose bundle contents to the global scope.

-   Each minified bundle has a corresponding [gzip][gzip]-compressed bundle. The [gzip][gzip] compression level for each compressed bundle is `9`, which is the highest (and most optimal) compression level. Deciding between uncompressed and compressed bundles depends on the application and whether compression is handled elsewhere in the application stack (e.g., [nginx][nginx], [CDN][cdn], _et cetera_).

-   While you are **strongly** encouraged to **vendor** bundles and host with a [CDN][cdn]/provider which can provide availability **guarantees**, especially for production applications, bundles are available via [unpkg][unpkg] for quick demos, proof-of-concepts, and instructional material. For example,

    ```html
    <script type="text/javascript" src="https://unpkg.com/@stdlib/dist-datasets-emoji"></script>
    ```

    Please be mindful that [unpkg][unpkg] is a free, best-effort service relying on donated infrastructure which does **not** provide **any** availability guarantees. Under **no** circumstances should you **abuse** or **misuse** the service. You have been **warned**.

-   If you intend on embedding a standalone bundle **within** another bundle, you may need to rename `require` calls within the standalone bundle **before** bundling in order to maintain scoped module resolution. For example, if you plan on using [browserify][browserify] to generate a bundle containing embedded bundles, [browserify][browserify] plugins exist to "de-require" those bundles prior to bundling.

-   The bundles in this package expose the following [stdlib][stdlib] packages:

    -   [@stdlib/datasets/emoji][@stdlib/datasets/emoji]
    -   [@stdlib/datasets/emoji-code-picto][@stdlib/datasets/emoji-code-picto]
    -   [@stdlib/datasets/emoji-picto-code][@stdlib/datasets/emoji-picto-code]

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var emoji = require( '@stdlib/dist-datasets-emoji' );

var data;
var len;
var idx;
var d;
var i;

data = emoji.EMOJI();
len = data.length;

// Select random emoji...
for ( i = 0; i < 100; i++ ) {
    idx = discreteUniform( 0, len-1 );
    d = data[ idx ];
    console.log( d.emoji + ' => ' + d.codes[ 0 ] );
}
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="/path/to/@stdlib/dist-datasets-emoji/build/bundle.min.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope.

```html
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var dataset = stdlib_datasets_emoji.EMOJI;
    console.log( dataset() );
</script>
```

</section>

<!-- /.examples -->

<section class="links">

[stdlib]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/emoji]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/emoji

[@stdlib/datasets/emoji-code-picto]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/emoji-code-picto

[@stdlib/datasets/emoji-picto-code]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/emoji-picto-code

[umd]: https://github.com/umdjs/umd

[gzip]: https://en.wikipedia.org/wiki/Gzip

[nginx]: http://nginx.org/en/docs/

[cdn]: https://en.wikipedia.org/wiki/Content_delivery_network

[unpkg]: https://unpkg.com/#/

[browserify]: https://github.com/browserify/browserify

</section>

<!-- /.links -->
