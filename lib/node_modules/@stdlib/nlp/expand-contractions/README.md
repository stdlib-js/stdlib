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

# Expand Contractions

> Expand all contractions to their formal equivalents.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var expandContractions = require( '@stdlib/nlp/expand-contractions' );
```

#### expandContractions( str )

Expands all contractions to their formal equivalents.

```javascript
var str = 'I won\'t be able to get y\'all out of this one.';
var out = expandContractions( str );
// returns 'I will not be able to get you all out of this one.'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This expansion is done via a simple table look-up. Hence, it will not correctly replace contractions for which there are multiple possible expansions such as `"She'd"`, which can be expanded to both `"She would"` or `"She had"`. In such cases, the package expands to a chosen default, in the given example `"She would"`. Should you desire higher accuracy, consider using a fully-fledged NLP disambiguation algorithm for English contractions.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var expandContractions = require( '@stdlib/nlp/expand-contractions' );

var str = 'I won\'t be able to, sorry.';
var out = expandContractions( str );
// returns 'I will not be able to, sorry.'

str = 'She\'ll be coming around the mountain...';
out = expandContractions( str );
// returns 'She will be coming around the mountain...'

str = 'Y\'all\'d be surprised if you know what I\'ll do.';
out = expandContractions( str );
// returns 'You all would be surprised if you know what I will do.'

str = 'Y\'all\'d\'ve come to the park if y\'all could\'ve, right?';
out = expandContractions( str );
// returns 'You all would have come to the park if you all could have, right?'

str = 'If Parker hadn\'t been sent off for a foul, they\'d\'ve won.';
out = expandContractions( str );
// returns 'If Parker had not been sent off for a foul, they would have won.'
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
