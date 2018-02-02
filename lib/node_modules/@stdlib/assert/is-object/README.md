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

# isObject

> Test if a value is an object.

<section class="usage">

## Usage

```javascript
var isObject = require( '@stdlib/assert/is-object' );
```

#### isObject( value )

Tests if a `value` is an `object`.

```javascript
var bool = isObject( {} );
// returns true

bool = isObject( true );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function returns `false` if provided an `array` or `null`.

    ```javascript
    var bool = isObject( [] );
    // returns false

    bool = isObject( null );
    // returns false
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isObject = require( '@stdlib/assert/is-object' );

var bool = isObject( {} );
// returns true

bool = isObject( new Date() );
// returns true

bool = isObject( /.*/ );
// returns true

bool = isObject( null );
// returns false

bool = isObject( [] );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
