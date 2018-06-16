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

# Iterator Symbol

> Iterator [symbol][mdn-symbol] which specifies the default iterator for an object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var IteratorSymbol = require( '@stdlib/symbol/iterator' );
```

#### IteratorSymbol

Iterator [`symbol`][mdn-symbol] which specifies the default iterator for an object.

```javascript
var s = typeof IteratorSymbol;
// e.g., returns 'symbol'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The [symbol][mdn-symbol] is only supported in environments which support [symbols][mdn-symbol]. In non-supporting environments, the value is `null`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var IteratorSymbol = require( '@stdlib/symbol/iterator' );

var obj;
var v;

function iterator() {
    var iter;
    var i;

    i = -1;

    iter = {};
    iter.next = next;
    iter.return = done;

    if ( IteratorSymbol ) {
        // Allow the iterator to work with `for...of`:
        iter[ IteratorSymbol ] = iterator;
    }
    return iter;

    function next() {
        i += 1;
        return {
            'value': i,
            'done': false
        };
    }

    function done( value ) {
        if ( arguments.length === 0 ) {
            return {
                'done': true
            };
        }
        return {
            'value': value,
            'done': true
        };
    }
}

obj = iterator();
while ( v === void 0 || ( v.value < 10 && v.done === false ) ) {
    v = obj.next();
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

</section>

<!-- /.links -->
