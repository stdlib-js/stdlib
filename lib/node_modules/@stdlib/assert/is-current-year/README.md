<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# isCurrentYear

> Test if a value is the current year.

<section class="usage">

## Usage

```javascript
var isCurrentYear = require( '@stdlib/assert/is-current-year' );
```

#### isCurrentYear( value )

Tests if a `value` is either an integer equal to the current year or a `Date` object representing the current year.

```javascript
var currentYear = require( '@stdlib/time/current-year' );
var bool = isCurrentYear( currentYear() );
// returns true

bool = isCurrentYear( 2021 );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isCurrentYear = require( '@stdlib/assert/is-current-year' );

var bool = isCurrentYear( new Date() );
// returns true

bool = isCurrentYear( new Date().getFullYear() );
// returns true

bool = isCurrentYear( 2021 );
// returns false

bool = isCurrentYear( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
