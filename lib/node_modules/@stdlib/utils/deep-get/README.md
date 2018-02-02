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

# Deep Get

> Get a nested property value.

<section class="usage">

## Usage

```javascript
var deepGet = require( '@stdlib/utils/deep-get' );
```

#### deepGet( obj, path\[, options] )

Returns a nested property value.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var val = deepGet( obj, 'a.b.c' );
// returns 'd'
```

For `paths` including `arrays`, specify the numeric index.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var arr = [
    { 'a': [ {'x': 5} ] },
    { 'a': [ {'x': 10} ] }
];

var val = deepGet( arr, '1.a.0.x' );
// returns 10
```

The key `path` may be specified as either a delimited `string` or a key `array`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var val = deepGet( obj, [ 'a', 'b', 'c' ] );
// returns 'd'
```

The function accepts the following `options`:

-   **sep**: key path separator. Default: `'.'`.

By default, the function assumes `dot` separated key values. To specify an alternative separator, set the `sep` option.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var val = deepGet( obj, 'a/b/c', {
    'sep': '/'
});
// returns 'd'
```

#### deepGet.factory( path\[, options] )

Creates a reusable deep get function. The factory method ensures a `deepGet` function is configured identically by using the same set of provided `options`.

```javascript
var dget = deepGet.factory( 'a/b/c', {
    'sep': '/'
});
```

#### dget( obj )

Returns a nested property value.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var dget = deepGet.factory( 'a.b.c' );

var obj = { 'a': { 'b': { 'c': 'd' } } };

var val = dget( obj );
// returns 'd'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var deepGet = require( '@stdlib/utils/deep-get' );

var data;
var keys;
var val;
var i;

data = new Array( 100 );
for ( i = 0; i < data.length; i++ ) {
    data[ i ] = {
        'x': Date.now(),
        'y': [ randu(), randu(), i ]
    };
}

keys = [ 0, 'y', 2 ];
for ( i = 0; i < data.length; i++ ) {
    keys[ 0 ] = i;
    val = deepGet( data, keys );
    console.log( val );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
