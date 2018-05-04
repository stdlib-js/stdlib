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

# Open URL

> Open a URL.

<section class="usage">

## Usage

```javascript
var openURL = require( '@stdlib/utils/open-url' );
```

#### openURL( url )

Opens a URL in a user's default browser.

<!-- run-disable -->

```javascript
var proc = openURL( 'https://google.com' );
```

The returned child process is unreferenced, and, thus, the calling process will not wait for the child process to end before exiting. To try and end the child process, send an appropriate `kill` signal.

<!-- run-disable -->

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var proc = openURL( 'https://google.com' );

function close() {
    proc.kill( 'SIGINT' );
}

setTimeout( close, 1000 );
```

### Web Browser

In a web browser, `openURL` defers to the [`window.open()`][window-open] method.

#### openURL( url )

Opens a URL either in a new tab or window (based on the web browser and/or user preferences), returning a reference to a `window` object.

<!-- run-disable -->

```javascript
var win = openURL( 'https://google.com' );
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- run-disable -->

<!-- eslint-disable stdlib/no-redeclare -->

<!-- eslint no-undef: "error" -->

```javascript
var openURL = require( '@stdlib/utils/open-url' );

// Open a URL:
var proc = openURL( 'https://github.com' );

// After some time, kill the spawned process...
function close() {
    proc.kill( 'SIGINT' );
}

setTimeout( close, 5000 );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: open-url [options] <url>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ open-url https://github.com
<pid>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[window-open]: https://developer.mozilla.org/en-US/docs/Web/API/Window/open

</section>

<!-- /.links -->
