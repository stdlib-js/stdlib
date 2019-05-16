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

# porterStemmer

> Extract the stem of a given word.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var porterStemmer = require( '@stdlib/nlp/porter-stemmer' );
```

#### porterStemmer( word )

Extracts the stem of a given word using the Porter stemming algorithm.

```javascript
var out = porterStemmer( 'worldwide' );
// returns 'worldwid'

out = porterStemmer( 'fighting' );
// returns 'fight'
```

</section>

<!-- /.usage -->

* * *

<section class="references">

## References

-   Porter, Michael F. 1980. "An algorithm for suffix stripping." _Program_ 13 (3): 130–37. doi:[10.1108/eb046814][@porter:1980].

</section>

<!-- /.references -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var porterStemmer = require( '@stdlib/nlp/porter-stemmer' );

var out = porterStemmer( 'walking' );
// returns 'walk'

out = porterStemmer( 'walked' );
// returns 'walk'

out = porterStemmer( 'walks' );
// returns 'walk'

out = porterStemmer( '' );
// returns ''
```

</section>

<!-- /.examples -->

<section class="links">

[@porter:1980]: https://doi.org/10.1108/eb046814

</section>

<!-- /.links -->
