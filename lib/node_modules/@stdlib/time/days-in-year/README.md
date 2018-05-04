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

# daysInYear

> Determine the number of days in a year according to the [Gregorian calendar][gregorian-calendar].

<section class="usage">

## Usage

```javascript
var daysInYear = require( '@stdlib/time/days-in-year' );
```

#### daysInYear( \[value] )

Returns the number of days in a year according to the [Gregorian calendar][gregorian-calendar].

```javascript
var num = daysInYear();
// returns <number>
```

By default, the function returns the number of days in the current year (according to local time). To determine the number of days for a particular year, provide either a year or a [`Date`][date-object] object.

```javascript
var num = daysInYear( new Date() );
// returns <number>

num = daysInYear( 2000 );
// returns 366

num = daysInYear( 2017 );
// returns 365
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function's return value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var daysInYear = require( '@stdlib/time/days-in-year' );

var v;
var i;

for ( i = 0; i < 2021; i++ ) {
    v = daysInYear( i );
    console.log( 'The year %d has %d days.', i, v );
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
Usage: days-in-year [options] [year]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ days-in-year
<number>
```

For a specific year,

```bash
$ days-in-year 2016
366
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[gregorian-calendar]: https://en.wikipedia.org/wiki/Gregorian_calendar

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

</section>

<!-- /.links -->
