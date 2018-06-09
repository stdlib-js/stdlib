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

# eval

> Alias for [`eval`][mdn-eval] global.

<section class="usage">

## Usage

```javascript
var evil = require( '@stdlib/utils/eval' );
```

#### evil( str )

Alias for [`eval`][mdn-eval] global.

```javascript
var v = evil( '5*4*3*2*1' );
// returns 120
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A reference to [`eval`][mdn-eval] **is** treated differently by the compiler. For example, when evaluating code containing block-scoped declarations (e.g., `let`, `const`, `function`, `class`), the compiler may throw an `error` complaining that block-scoped declarations are **not** yet supported outside of `strict mode`. One possible workaround is to include `"use strict";` in the evaluated code, as done in the example below.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var evil = require( '@stdlib/utils/eval' );

var ctors;
var fcn;
var i;

function compile( ctor ) {
    var name;
    var str;

    name = ctor.match( /^(\w*)Array$/ )[ 1 ];
    name += 'DataArray';

    str = '';
    str += '(function create(){';
    str += '"use strict";';
    str += 'class '+name+' extends '+ctor+'{';
    str += 'constructor(x){';
    str += 'super(x);';
    str += '}';
    str += '}';
    str += 'return '+name+';';
    str += '})();';
    return str;
}

ctors = [
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array',
    'Array'
];

for ( i = 0; i < ctors.length; i++ ) {
    fcn = evil( compile( ctors[i] ) );
    console.log( fcn.toString() );
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
Usage: js-eval [options] <code>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ js-eval '5*4*3*2*1'
120
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-eval]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

</section>

<!-- /.links -->
