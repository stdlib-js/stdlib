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

# Shuffle

> Shuffle elements of an array-like object.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var shuffle = require( '@stdlib/random/shuffle' );
```

#### shuffle( arr\[, options] )

Shuffles elements of an array-like object.

```javascript
var arr = [ 1, 2, 3 ];
var out = shuffle( arr );
// e.g., returns [ 3, 1, 2 ]
```

The function accepts the following `options`:

-   **copy**: `string` indicating whether to return a copy (`deep`,`shallow` or `none`). Default: `shallow`.

By default, the function returns a shallow copy. To mutate the input `array` (e.g., when input values can be discarded or when optimizing memory usage), set `copy` to `none`.

```javascript
var arr = [ 1, 2, 3 ];
var out = shuffle( arr, {
    'copy': 'none'
});
var bool = ( arr === out );
// returns true
```

To return a deep copy, set the `copy` option to `deep`.

```javascript
var obj = {
    'beep': 'boop'
};
var arr = [ [ obj ], [ obj ], [ obj ] ];

// Deep copy:
var out = shuffle( arr, {
    'copy': 'deep'
});
var bool = ( arr === out );
// returns false

bool = ( arr[2] === out[2] );
// returns false

// Shallow copy:
out = shuffle( arr, {
    'copy': 'shallow'
});
bool = ( arr === out );
// returns false

bool = ( arr[2] === out[2] );
// returns true
```

#### shuffle.factory( \[options] )

Returns a `function` to shuffle elements of `array`-like objects.

```javascript
var myshuffle = shuffle.factory();
```

The function accepts the following `options`:

-   **copy**: `string` specifying the default copy option (`deep`,`shallow` or `none`). Default: `shallow`.
-   **seed**: pseudorandom number generator seed.

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var myshuffle = shuffle.factory({
    'seed': 239
});

var out = myshuffle( [ 0, 1, 2, 3, 4 ] );
// e.g., returns [ 3, 4, 1, 0, 2 ]
```

By default, the returned functions create shallow copies when shuffling. To override the default `copy` strategy, set the `copy` option.

```javascript
var myshuffle = shuffle.factory({
    'copy': 'none',
    'seed': 867
});

// Created shuffle function mutates input array by default:
var arr = [ 1, 2, 3, 4, 5, 6 ];
var out = myshuffle( arr );
var bool = ( arr === out );
// returns true

// Default option can be overridden:
arr = [ 1, 2, 3, 4 ];
out = myshuffle( arr, {
    'copy': 'shallow'
});
bool = ( arr === out );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var shuffle = require( '@stdlib/random/shuffle' );

var result;
var data;
var i;

data = new Array( 20 );
for ( i = 0; i < data.length; i++ ) {
    data[ i ] = i;
}

for ( i = 0; i < 10; i++ ) {
    result = shuffle( data );
    console.log( result );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
