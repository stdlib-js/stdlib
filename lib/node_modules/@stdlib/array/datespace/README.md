<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# Datespace

> Generate an array of linearly spaced [dates][mdn-date-object].

<section class="usage">

## Usage

```javascript
var datespace = require( '@stdlib/array/datespace' );
```

#### datespace( start, stop\[, length]\[, opts] )

Generates an `array` of linearly spaced [`Date`][mdn-date-object] objects. If a `length` is not provided, the default output `array` length is `100`.

```javascript
var end = '2014-12-02T07:00:54.973Z';
var start = new Date( end ) - 60000;

var arr = datespace( start, end, 6 );
/* returns [
    'Mon Dec 01 2014 22:59:54 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:06 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:18 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:30 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:42 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:54 GMT-0800 (PST)'
]
*/
```

The `start` and `stop` times may be either [`Date`][mdn-date-object] objects, date strings, Unix timestamps, or JavaScript timestamps.

```javascript
// JavaScript timestamps:
var end = 1417503654973;
var start = new Date( end - 60000 );

var arr = datespace( start, end, 6 );
/* returns [
    'Mon Dec 01 2014 22:59:54 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:06 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:18 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:30 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:42 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:54 GMT-0800 (PST)'
]
*/

// Unix timestamps:
end = 1417503655;
start = end - 60;

arr = datespace( start, end, 6 );
/* returns [
    'Mon Dec 01 2014 22:59:54 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:06 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:18 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:30 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:42 GMT-0800 (PST)',
    'Mon Dec 01 2014 23:00:54 GMT-0800 (PST)'
]
*/
```

The output `array` is guaranteed to include the `start` and `end` times. Beware, however, that values between the `start` and `end` are subject to rounding errors. For example,

```javascript
var arr = datespace( 1417503655000, 1417503655001, 3 );
// returns [ 1417503655000, 1417503655000, 1417503655001 ]
```

where sub-millisecond values are truncated by the [`Date`][mdn-date-object] constructor. Duplicate values should only be a problem when the interval separating consecutive times is less than a millisecond. As the interval separating consecutive dates goes to infinity, the quantization noise introduced by millisecond resolution is negligible.

By default, fractional timestamps are floored. To specify that timestamps always be rounded up or to the nearest millisecond **when converted to [`Date`][mdn-date-object] objects**, set the `round` option (default: `floor`).

```javascript
// Equivalent of Math.ceil():
var arr = datespace( 1417503655000, 1417503655001, 3, {
    'round': 'ceil'
});
// returns [ 1417503655000, 1417503655001, 1417503655001 ]

// Equivalent of Math.round():
arr = datespace( 1417503655000, 1417503655001, 3, {
    'round': 'round'
});
// returns [ 1417503655000, 1417503655001, 1417503655001 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

```javascript
var datespace = require( '@stdlib/array/datespace' );
var start;
var arr;
var end;

end = '2014-12-02T07:00:54.973Z';
start = new Date( end ) - 100000;

// Default behavior:
arr = datespace( start, end );
console.log( arr.join( '\n' ) );

// Specify length:
arr = datespace( start, end, 10 );
console.log( arr.join( '\n' ) );

arr = datespace( start, end, 11 );
console.log( arr.join( '\n' ) );

// Create an array with decremented values:
arr = datespace( end, start, 11 );
console.log( arr.join( '\n' ) );
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

</section>

<!-- /.links -->
