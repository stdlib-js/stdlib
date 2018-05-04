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

# dayOfQuarter

> Determine the day of the quarter.

<section class="usage">

## Usage

```javascript
var dayOfQuarter = require( '@stdlib/time/day-of-quarter' );
```

#### dayOfQuarter( \[month\[, day, year]] )

Returns the day of the quarter.

```javascript
var num = dayOfQuarter();
// returns <number>
```

By default, the function returns the day of the quarter for the current date (according to local time). To determine the day of the quarter for a particular day, provide `month`, `day`, and `year` arguments.

```javascript
var num = dayOfQuarter( 12, 31, 2016 );
// returns 92
```

A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).

```javascript
var num = dayOfQuarter( 12, 31, 2016 );
// returns 92

num = dayOfQuarter( 'dec', 31, 2016 );
// returns 92

num = dayOfQuarter( 'december', 31, 2016 );
// returns 92
```

The function also supports providing a [`Date`][date-object] object.

```javascript
var num = dayOfQuarter( new Date() );
// returns <number>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var quarterOfYear = require( '@stdlib/time/quarter-of-year' );
var dayOfQuarter = require( '@stdlib/time/day-of-quarter' );

var months;
var day;
var yr;
var q;
var v;
var i;

months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

yr = 2016;
day = 9;

for ( i = 0; i < months.length; i++ ) {
    q = quarterOfYear( months[ i ] );
    v = dayOfQuarter( months[ i ], day, yr );
    console.log( 'In the year %d, %s %d is day number %d of Q%d.', yr, months[ i ], day, v, q );
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
Usage: day-of-quarter [options] [<month> <day> <year>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ day-of-quarter
<number>
```

For a specific date,

```bash
$ day-of-quarter 12 31 2016
92
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

</section>

<!-- /.links -->
