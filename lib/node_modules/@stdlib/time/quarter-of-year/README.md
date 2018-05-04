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

# quarterOfYear

> Determine the quarter of the year.

<section class="usage">

## Usage

```javascript
var quarterOfYear = require( '@stdlib/time/quarter-of-year' );
```

#### quarterOfYear( \[month] )

Returns the quarter of the year.

```javascript
var q = quarterOfYear();
// returns <number>
```

By default, the function returns the quarter of the year for the current month in the current year (according to local time). To determine the quarter for a particular month, provide either a month or a [`Date`][date-object] object.

```javascript
var q = quarterOfYear( new Date() );
// returns <number>

q = quarterOfYear( 4 );
// returns 2
```

A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).

```javascript
var q = quarterOfYear( 4 );
// returns 2

q = quarterOfYear( 'April' );
// returns 2

q = quarterOfYear( 'apr' );
// returns 2
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var quarterOfYear = require( '@stdlib/time/quarter-of-year' );

var months;
var q;
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

for ( i = 0; i < months.length; i++ ) {
    q = quarterOfYear( months[ i ] );
    console.log( 'The month of %s is in Q%d.', months[ i ], q );
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
Usage: quarter-of-year [options] [month]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ quarter-of-year
<number>
```

For a specific month,

```bash
$ quarter-of-year 4
2
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

</section>

<!-- /.links -->
