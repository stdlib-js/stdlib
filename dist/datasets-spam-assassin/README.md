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

# Spam Assassin

> The [Spam Assassin][@stdlib/datasets/spam-assassin] public mail corpus.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var corpus = require( '@stdlib/dist-datasets-spam-assassin' ).SPAM_ASSASSIN;
```

#### corpus()

Returns the [Spam Assassin][@stdlib/datasets/spam-assassin] public mail corpus.

```javascript
var data = corpus();
// returns [{...},{...},...]
```

Each `array` element has the following fields:

-   `id`: message id (relative to message `group`)
-   `group`: message group
-   `checksum`: object containing checksum info
-   `text`: message text (including headers)

The message `group` may be one of the following:

-   `easy-ham-1`: easier to detect non-spam e-mails (2500 messages)
-   `easy-ham-2`: easier to detect non-spam e-mails collected at a later date (1400 messages)
-   `hard-ham-1`: harder to detect non-spam e-mails (250 messages)
-   `spam-1`: spam e-mails (500 messages)
-   `spam-2`: spam e-mails collected at a later date (1396 messages)

The `checksum` object contains the following fields:

-   `type`: checksum type (e.g., MD5)
-   `value`: checksum value

</section>

<!-- /.usage -->

* * *

<section class="notes">

## Notes

-   This package contains distributable files for use in browser environments or as shared ("vendored") libraries in server environments. Each distributable file is a standalone [UMD][umd] bundle which, if no recognized module system is present, will expose bundle contents to the global scope.

-   Each minified bundle has a corresponding [gzip][gzip]-compressed bundle. The [gzip][gzip] compression level for each compressed bundle is `9`, which is the highest (and most optimal) compression level. Deciding between uncompressed and compressed bundles depends on the application and whether compression is handled elsewhere in the application stack (e.g., [nginx][nginx], [CDN][cdn], _et cetera_).

-   While you are **strongly** encouraged to **vendor** bundles and host with a [CDN][cdn]/provider which can provide availability **guarantees**, especially for production applications, bundles are available via [unpkg][unpkg] for quick demos, proof-of-concepts, and instructional material. For example,

    ```html
    <script type="text/javascript" src="https://unpkg.com/@stdlib/dist-datasets-spam-assassin"></script>
    ```

    Please be mindful that [unpkg][unpkg] is a free, best-effort service relying on donated infrastructure which does **not** provide **any** availability guarantees. Under **no** circumstances should you **abuse** or **misuse** the service. You have been **warned**.

-   If you intend on embedding a standalone bundle **within** another bundle, you may need to rename `require` calls within the standalone bundle **before** bundling in order to maintain scoped module resolution. For example, if you plan on using [browserify][browserify] to generate a bundle containing embedded bundles, [browserify][browserify] plugins exist to "de-require" those bundles prior to bundling.

-   The bundles in this package expose the following [stdlib][stdlib] packages:

    -   [@stdlib/datasets/spam-assassin][@stdlib/datasets/spam-assassin]

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var corpus = require( '@stdlib/dist-datasets-spam-assassin' ).SPAM_ASSASSIN;

var data;
var i;

data = corpus();
for ( i = 0; i < data.length; i++ ) {
    console.log( 'Character Count: %d', data[ i ].text.length );
}
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="/path/to/@stdlib/dist-datasets-spam-assassin/build/bundle.min.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope.

```html
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var dataset = stdlib_datasets_spam_assassin.SPAM_ASSASSIN;
    console.log( dataset() );
</script>
```

</section>

<!-- /.examples -->

<section class="links">

[stdlib]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/spam-assassin]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/spam-assassin

[umd]: https://github.com/umdjs/umd

[gzip]: https://en.wikipedia.org/wiki/Gzip

[nginx]: http://nginx.org/en/docs/

[cdn]: https://en.wikipedia.org/wiki/Content_delivery_network

[unpkg]: https://unpkg.com/#/

[browserify]: https://github.com/browserify/browserify

</section>

<!-- /.links -->
