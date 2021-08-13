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

# IS_DOCKER

> Check if the process is running in a [Docker][docker] container.

<section class="usage">

## Usage

```javascript
var IS_DOCKER = require( '@stdlib/assert/is-docker' );
```

#### IS_DOCKER

`Boolean` indicating if the process is running in a [Docker][docker] container.

```javascript
var bool = IS_DOCKER;
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var IS_DOCKER = require( '@stdlib/assert/is-docker' );

console.log( IS_DOCKER );
// => <boolean>
```

</section>

<!-- /.examples -->

<section class="links">

[docker]: https://www.docker.com/

</section>

<!-- /.links -->
