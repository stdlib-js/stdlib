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

# Extended Length Path

> [Regular expression][regexp] to detect an [extended-length path][extended-length-path].

<section class="usage">

## Usage

```javascript
var reExtendedLengthPath = require( '@stdlib/regexp/extended-length-path' );
```

#### reExtendedLengthPath()

Returns a [regular expression][regexp] to detect an [extended-length path][extended-length-path] (i.e., a Windows path which begins with the characters `\\?\`). 

```javascript
var RE = reExtendedLengthPath();
var bool = RE.test( '\\\\?\\C:\\foo\\bar' );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reExtendedLengthPath = require( '@stdlib/regexp/extended-length-path' );

var RE_EXTENDED_LENGTH_PATH = reExtendedLengthPath();
var bool;
var path;

path = '\\\\?\\C:\\foo\\bar';
bool = RE_EXTENDED_LENGTH_PATH.test( path );
// returns true

path = '\\\\?\\UNC\\server\\share';
bool = RE_EXTENDED_LENGTH_PATH.test( path );
// returns true

path = 'C:\\foo\\bar';
bool = RE_EXTENDED_LENGTH_PATH.test( path );
// returns false

path = '/c/foo/bar';
bool = RE_EXTENDED_LENGTH_PATH.test( path );
// returns false

path = '/foo/bar';
bool = RE_EXTENDED_LENGTH_PATH.test( path );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[extended-length-path]: https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247(v=vs.85).aspx

</section>

<!-- /.links -->
