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

# Moby Dick

> The text of _Moby Dick_ by Herman Melville.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var text = require( '@stdlib/datasets/moby-dick' );
```

#### text()

Returns the text of _Moby Dick_.

```javascript
var data = text();
// returns [{...},{...},...]
```

Each `array` element has the following fields:

-   **chapter**: chapter number or identifier.
-   **title**: chapter title (if available; otherwise, empty).
-   **text**: chapter text.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example. Possibly with Markov Model text generation. -->

<!-- eslint no-undef: "error" -->

```javascript
var text = require( '@stdlib/datasets/moby-dick' );

var data;
var i;

data = text();
for ( i = 0; i < data.length; i++ ) {
    console.log( 'Character Count: %d', data[ i ].text.length );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: moby-dick [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --format fmt          Output format: 'txt' or 'ndjson'.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   The CLI supports two output formats: plain text (`txt`) and newline-delimited JSON ([NDJSON][ndjson]). The default output format is `txt`.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ moby-dick
CONTENTS


ETYMOLOGY.

EXTRACTS (Supplied by a Sub-Sub-Librarian).


CHAPTER 1. Loomings.

...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- <license> -->

* * *

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[ndjson]: http://specs.frictionlessdata.io/ndjson/

</section>

<!-- /.links -->
