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

# isNodeREPL

> Check if running in a [Node.js][node-js] REPL environment.

<section class="usage">

## Usage

```javascript
var isNodeREPL = require( '@stdlib/assert/is-node-repl' );
```

#### isNodeREPL()

Returns a `boolean` indicating if running in a [Node.js][node-js] REPL environment.

```javascript
var bool = isNodeREPL();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isNodeREPL = require( '@stdlib/assert/is-node-repl' );

console.log( isNodeREPL() );
// => <boolean>
```

</section>

<!-- /.examples -->

<section class="links">

[node-js]: https://nodejs.org/en/

</section>

<!-- /.links -->
