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

# isoWeeksInYear

> Determine the number of [ISO weeks][iso-week-date] in a year according to the [Gregorian calendar][gregorian-calendar].

<section class="usage">

## Usage

```javascript
var isoWeeksInYear = require( '@stdlib/time/iso-weeks-in-year' );
```

#### isoWeeksInYear( \[value] )

Returns the number of [ISO weeks][iso-week-date] in a year according to the [Gregorian calendar][gregorian-calendar].

```javascript
var num = isoWeeksInYear();
// returns <number>
```

By default, the function returns the number of [ISO weeks][iso-week-date] in the current year (according to local time). To determine the number of [ISO weeks][iso-week-date] for a particular year, provide either a year or a [`Date`][date-object] object.

```javascript
var num = isoWeeksInYear( new Date() );
// returns <number>

num = isoWeeksInYear( 2015 );
// returns 53

num = isoWeeksInYear( 2017 );
// returns 52
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isoWeeksInYear = require( '@stdlib/time/iso-weeks-in-year' );

var v;
var i;

for ( i = 0; i < 2021; i++ ) {
    v = isoWeeksInYear( i );
    console.log( 'The year %d has %d ISO weeks.', i, v );
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
Usage: iso-weeks-in-year [options] [year]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ iso-weeks-in-year
<number>
```

For a specific year,

```bash
$ iso-weeks-in-year 2015
53
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[iso-week-date]: https://en.wikipedia.org/wiki/ISO_week_date

[gregorian-calendar]: https://en.wikipedia.org/wiki/Gregorian_calendar

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

</section>

<!-- /.links -->
