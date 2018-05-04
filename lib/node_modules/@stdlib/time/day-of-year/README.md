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

# dayOfYear

> Determine the day of the year.

<section class="usage">

## Usage

```javascript
var dayOfYear = require( '@stdlib/time/day-of-year' );
```

#### dayOfYear( \[month\[, day, year]] )

Returns the day of the year.

```javascript
var num = dayOfYear();
// returns <number>
```

By default, the function returns the day of the year for the current date (according to local time). To determine the day of the year for a particular day, provide `month`, `day`, and `year` arguments.

```javascript
var num = dayOfYear( 12, 31, 2016 );
// returns 366

num = dayOfYear( 12, 31, 2017 );
// returns 365
```

A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).

```javascript
var num = dayOfYear( 12, 31, 2016 );
// returns 366

num = dayOfYear( 'dec', 31, 2016 );
// returns 366

num = dayOfYear( 'december', 31, 2016 );
// returns 366
```

The function also supports providing a [`Date`][date-object] object.

```javascript
var num = dayOfYear( new Date() );
// returns <number>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dayOfYear = require( '@stdlib/time/day-of-year' );

var v;
var i;

for ( i = 0; i < 2021; i++ ) {
    v = dayOfYear( 'Dec', 31, i );
    console.log( 'In the year %d, December 31 is day number %d.', i, v );
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
Usage: day-of-year [options] [<month> <day> <year>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ day-of-year
<number>
```

For a specific date,

```bash
$ day-of-year 12 31 2016
366
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

</section>

<!-- /.links -->
