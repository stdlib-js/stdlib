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

# Deep Set

> Set a nested property value.

<section class="usage">

## Usage

```javascript
var deepSet = require( '@stdlib/utils/deep-set' );
```

#### deepSet( obj, path, value\[, options] )

Sets a nested property value.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepSet( obj, 'a.b.c', 'beep' );
// returns true

console.log( obj );
// => { 'a': { 'b': { 'c': 'beep' } } }
```

If the function is able to deep set a nested property, the function returns `true`; otherwise, the function returns `false`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepSet( obj, 'a.b.c', 'woot' );
// returns true

bool = deepSet( obj, 'a.beep.c', 'boop' );
// returns false

bool = deepSet( null, 'a.beep.c', 'boop' );
// returns false

bool = deepSet( 'bap', 'a.beep.c', 'boop' );
// returns false
```

For `paths` including `arrays`, specify the numeric index.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var arr = [
    { 'a': [ { 'x': 5 } ] },
    { 'a': [ { 'x': 10 } ] }
];

var bool = deepSet( arr, '1.a.0.x', 25 );
// returns true

console.log( arr );
/* =>
    [
        { 'a': [ { 'x': 5 } ] },
        { 'a': [ { 'x': 25 } ] }
    ]
*/
```

The key `path` may be specified as either a delimited `string` or a key `array`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepSet( obj, [ 'a', 'b', 'c' ], 'beep' ); // obj => { 'a': { 'b': { 'c': 'beep' } } }
// returns true
```

If `value` is a `function`, the argument is treated as a `callback` and should return a value to set.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
function set( val ) {
    var ch = val;
    var i;
    for ( i = 0; i < 4; i++ ) {
        val += ch;
    }
    return val;
}
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepSet( obj, 'a.b.c', set ); // obj => { 'a': { 'b': { 'c': 'ddddd' } } }
// returns true
```

The function accepts the following `options`:

-   **sep**: key path separator. Default: `'.'`.
-   **create**: `boolean` indicating whether to create a path if the key path does not already exist. Default: `false`.

By default, the function assumes `dot` separated key values. To specify an alternative separator, set the `sep` option.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepSet( obj, 'a/b/c', 'beep', {
    'sep': '/'
});
// returns true

console.log( obj );
// => { 'a': { 'b': { 'c': 'beep' } } }
```

To create a key path which does not already exist, set the `create` option to `true`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepSet( obj, 'a.e.c', 'boop', {
    'create': true
});
// returns true

console.log( obj );
/* =>
    {
        'a': {
            'b': {
                'c': 'beep'
            },
            'e': {
                'c': 'boop'
            }
        }
    }
*/
```

#### deepSet.factory( path\[, options] )

Creates a reusable deep set function. The factory method ensures a `deepSet` function is configured identically by using the same set of provided `options`.

```javascript
var dset = deepSet.factory( 'a/b/c', {
    'create': true,
    'sep': '/'
});
```

#### dset( obj, value )

Sets a nested property value.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var dset = deepSet.factory( 'a.b.c' );

var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = dset( obj, 'beep' );
// returns true

console.log( obj );
// => { 'a': { 'b': { 'c': 'beep' } } }
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var deepSet = require( '@stdlib/utils/deep-set' );

var data;
var bool;
var keys;
var i;

function set( val ) {
    return val * 10.0;
}

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
    bool = deepSet( data, keys, set );
    if ( !bool ) {
        console.error( 'Unable to deep set value.' );
    }
}
console.log( data );
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
