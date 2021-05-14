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

# Path Delimiter

> POSIX path delimiter.

<section class="usage">

## Usage

```javascript
var PATH_DELIMITER_POSIX = require( '@stdlib/constants/path/delimiter-posix' );
```

#### PATH_DELIMITER_POSIX

POSIX path delimiter.

```javascript
var delimiter = PATH_DELIMITER_POSIX;
// returns ':'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var PATH_DELIMITER_POSIX = require( '@stdlib/constants/path/delimiter-posix' );

var PATH = '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin';
var paths = PATH.split( PATH_DELIMITER_POSIX );
// returns ['/usr/bin','/bin','/usr/sbin','/sbin','/usr/local/bin']
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
