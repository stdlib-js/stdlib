<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# Standard 52-Card Deck

> A list of two or three letter abbreviations for each card in a standard 52-card deck.

<section class="usage">

## Usage

```javascript
var cards = require( '@stdlib/datasets/standard-card-deck' );
```

#### cards()

Returns a list of two or three letter abbreviations for each card in a standard 52-card deck.

```javascript
var list = cards();
// returns [ 'AC', '2C', '3C', ... ]
```

Abbreviation format:

```text
<card><suit>
```

Cards: **A**, **2**, **3**, **4**, **5**, **6**, **7**, **8**, **9**, **10**, **J**, **Q**, **K**, 
where

-   `A`: ace
-   `J`: jack
-   `Q`: queen
-   `K`: king

Suit abbreviations:

-   `C`: clubs
-   `D`: diamonds
-   `H`: hearts
-   `S`: spades

</section>

<!-- /.usage -->

<section class="examples">

<!-- TODO: more creative example. -->

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var cards = require( '@stdlib/datasets/standard-card-deck' );

var list;
var len;
var idx;
var i;

list = cards();
len = list.length;

// Select random cards from the list...
for ( i = 0; i < 100; i++ ) {
    idx = discreteUniform( 0, len-1 );
    console.log( list[ idx ] );
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
Usage: standard-card-deck [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ standard-card-deck
AC
2C
3C
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- <license> -->

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

</section>

<!-- /.links -->
