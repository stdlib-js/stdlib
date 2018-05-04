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

# daysInMonth

> Determine the number of days in a month.

<section class="usage">

## Usage

```javascript
var daysInMonth = require( '@stdlib/time/days-in-month' );
```

#### daysInMonth( \[month\[, year]] )

Returns the number of days in a month.

```javascript
var num = daysInMonth();
// returns <number>
```

By default, the function returns the number of days in the current month of the current year (according to local time). To determine the number of days for a particular month and year, provide `month` and `year` arguments.

```javascript
var num = daysInMonth( 2 );
// returns <number>

num = daysInMonth( 2, 2016 );
// returns 29

num = daysInMonth( 2, 2017 );
// returns 28
```

A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).

```javascript
var num = daysInMonth( 2, 2016 );
// returns 29

num = daysInMonth( 'feb', 2016 );
// returns 29

num = daysInMonth( 'february', 2016 );
// returns 29
```

The function also supports providing a [`Date`][date-object] object.

```javascript
var num = daysInMonth( new Date() );
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
var daysInMonth = require( '@stdlib/time/days-in-month' );

var v;
var i;

for ( i = 0; i < 2021; i++ ) {
    v = daysInMonth( 'feb', i );
    console.log( 'In the year %d, February has %d days.', i, v );
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
Usage: days-in-month [options] [month] [year]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ days-in-month
<number>
```

For a specific month,

```bash
$ days-in-month 2
<number>
```

For a specific month and year,

```bash
$ days-in-month 2 2016
29
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

</section>

<!-- /.links -->
