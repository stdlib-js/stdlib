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

# Move Property

> Move a property from one object to another object.

<section class="usage">

## Usage

```javascript
var moveProperty = require( '@stdlib/utils/move-property' );
```

#### moveProperty( source, prop, target )

Moves a property from one `object` to another `object`.

```javascript
var obj1 = {
    'a': 'b'
};
var obj2 = {};

var bool = moveProperty( obj1, 'a', obj2 );
// returns true
```

If the operation is successful, the function returns `true`; otherwise, `false`.

```javascript
var obj1 = {
    'a': 'b'
};
var obj2 = {};

var bool = moveProperty( obj1, 'c', obj2 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A transfer is **shallow**.

    ```javascript
    var arr = [ 1, 2, 3 ];

    var obj1 = {
        'a': arr
    };
    var obj2 = {};

    var bool = moveProperty( obj1, 'a', obj2 );
    console.log( obj2.a === arr );
    // => true
    ```

-   The property is **deleted** from the _source_ `object`.

-   The property's descriptor **is** preserved during transfer.

-   If a _source_ property is **not** `configurable`, the function throws an `Error`, as the property **cannot** be deleted from the _source_ `object`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var moveProperty = require( '@stdlib/utils/move-property' );

var obj1 = {
    'beep': 'boop'
};

var obj2 = {
    'foo': 'bar'
};

var bool = moveProperty( obj1, 'beep', obj2 );
if ( bool === false ) {
    console.log( 'failed to move property' );
}
console.dir( obj1 );
/* =>
    {}
*/
console.dir( obj2 );
/* =>
    {
        'foo': 'bar',
        'beep': 'boop'
    }
*/
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
