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

# IS_ELECTRON_RENDERER

> Check if the runtime is the [Electron][electron] renderer process.

<section class="usage">

## Usage

```javascript
var IS_ELECTRON_RENDERER = require( '@stdlib/assert/is-electron-renderer' );
```

#### IS_ELECTRON_RENDERER

`Boolean` indicating if the runtime is the [Electron][electron] renderer process.

```javascript
var bool = IS_ELECTRON_RENDERER;
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var IS_ELECTRON_RENDERER = require( '@stdlib/assert/is-electron-renderer' );

console.log( IS_ELECTRON_RENDERER );
// => <boolean>
```

</section>

<!-- /.examples -->

<section class="links">

[electron]: http://electron.atom.io/

</section>

<!-- /.links -->
