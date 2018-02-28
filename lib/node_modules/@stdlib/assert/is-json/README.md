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

# isJSON

> Test if a value is a parseable JSON string.

<section class="usage">

## Usage

```javascript
var isJSON = require( '@stdlib/assert/is-json' );
```

#### isJSON( value )

Tests if a `value` is a parseable JSON `string`.

```javascript
var value = '{"a":5}';

var bool = isJSON( value );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The implementation validates that the input `value` is a `string` literal. For all other inputs, the method returns `false`.

-   The implementation validates that a `string` begins with either `[` or `{` and ends with a corresponding `]` or `}`, respectively. Hence, the method will return `false` for the following `strings`, despite `JSON.parse` accepting their input:

    -   `'<number>'` (e.g., `'5'`)
    -   `'<boolean>'` (e.g., `'true'`)
    -   `'null'`

-   The implementation wraps `JSON.parse` inside a `try/catch`. Hence, this function cannot be optimized by the compiler during runtime. Nevertheless, using this function is better than embedding a `try/catch` within a larger `function` which could be optimized in the absence of a `try/catch`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isJSON = require( '@stdlib/assert/is-json' );

var bool = isJSON( '{"a":5}' );
// returns true

bool = isJSON( '{a":5}' );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
