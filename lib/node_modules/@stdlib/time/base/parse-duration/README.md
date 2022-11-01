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

# parseDuration

> Parse a duration string into an object.

<section class="usage">

## Usage

```javascript
var parseDuration = require( '@stdlib/time/base/parse-duration' );
```

#### parseDuration

Parses a duration string into an object.

```javascript
var obj = parseDuration( '1m3s10ms' );
// returns { 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 10 }

obj = parseDuration( '1m3s' );
// returns { 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 0 }
```

The returned object has the following properties:

-   **days**: number of days.
-   **hours**: number of hours.
-   **minutes**: number of minutes.
-   **seconds**: number of seconds.
-   **milliseconds**: number of milliseconds.

</section>

<!-- /.usage -->

<!-- Package notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A duration string is a string containing a sequence of time units. A time unit is a nonnegative integer followed by a unit identifier. The following unit identifiers are supported:

    -   `d`: days
    -   `h`: hours
    -   `m`: minutes
    -   `s`: seconds
    -   `ms`: milliseconds

    For example, the string `1m3s10ms` is a duration string containing three time units: `1m` (1 minute), `3s` (3 seconds), and `10ms` (10 milliseconds). The string `60m` is a duration string containing a single time unit: `60m` (60 minutes).

-   Duration strings are case insensitive. For example, the string `1M3S10MS` is equivalent to `1m3s10ms`.

-   If a duration string does not contain a time unit, the respective property is set to `0`.

-   An empty string is considered a valid duration string and is parsed as `0d0h0m0s0ms`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var parseDuration = require( '@stdlib/time/base/parse-duration' );

var obj = parseDuration( '1m3s10ms' );
// returns { 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 10 }

obj = parseDuration( '60m' );
// returns { 'days': 0, 'hours': 0, 'minutes': 60, 'seconds': 0, 'milliseconds': 0 }

obj = parseDuration( '2d3h' );
// returns { 'days': 2, 'hours': 3, 'minutes': 0, 'seconds': 0, 'milliseconds': 0 }

obj = parseDuration( '1M3S' );
// returns { 'days': 0, 'hours': 0, 'minutes': 1, 'seconds': 3, 'milliseconds': 0 }

obj = parseDuration( '' );
// returns { 'days': 0, 'hours': 0, 'minutes': 0, 'seconds': 0, 'milliseconds': 0 }
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
