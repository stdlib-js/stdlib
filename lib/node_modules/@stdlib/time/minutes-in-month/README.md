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

# minutesInMonth

> Determine the number of minutes in a month.

<section class="usage">

## Usage

```javascript
var minutesInMonth = require( '@stdlib/time/minutes-in-month' );
```

#### minutesInMonth( \[month\[, year]] )

Returns the number of minutes in a month.

```javascript
var num = minutesInMonth();
// returns <number>
```

By default, the function returns the number of minutes in the current month of the current year (according to local time). To determine the number of minutes for a particular month and year, provide `month` and `year` arguments.

```javascript
var num = minutesInMonth( 2 );
// returns <number>

num = minutesInMonth( 2, 2016 );
// returns 41760

num = minutesInMonth( 2, 2017 );
// returns 40320
```

A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).

```javascript
var num = minutesInMonth( 2, 2016 );
// returns 41760

num = minutesInMonth( 'feb', 2016 );
// returns 41760

num = minutesInMonth( 'february', 2016 );
// returns 41760
```

The function also supports providing a [`Date`][date-object] object.

```javascript
var num = minutesInMonth( new Date() );
// returns <number>
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
var minutesInMonth = require( '@stdlib/time/minutes-in-month' );

var v;
var i;

for ( i = 0; i < 2021; i++ ) {
    v = minutesInMonth( 'feb', i );
    console.log( 'In the year %d, February has %d minutes.', i, v );
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
Usage: minutes-in-month [options] [month] [year]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ minutes-in-month
<number>
```

For a specific month,

```bash
$ minutes-in-month 2
<number>
```

For a specific month and year,

```bash
$ minutes-in-month 2 2016
41760
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

</section>

<!-- /.links -->
