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

# timeit

> Time a snippet.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var timeit = require( '@stdlib/utils/timeit' );
```

#### timeit( code, \[options,] clbk )

Times a snippet.

```javascript
var code = 'var x = Math.pow( Math.random(), 3 );';
code += 'if ( x !== x ) {';
code += 'throw new Error( \'Something went wrong.\' );';
code += '}';

timeit( code, done );

function done( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
    /* e.g., =>
        {
            'iterations': 1000000,
            'repeats': 3,
            'min': [0,135734733],       // [seconds,nanoseconds]
            'elapsed': 0.135734733,     // seconds
            'rate': 7367311.062526641,  // iterations/second
            'times': [                  // raw timing results
                [0,145641393],
                [0,135734733],
                [0,140462721]
            ]
        }
    */
}
```

The function supports the following `options`:

-   **before**: setup code. Default: `""`.
-   **after**: cleanup code. Default: `""`.
-   **iterations**: number of iterations. If `null`, the number of iterations is determined by trying successive powers of `10` until the total time is at least `0.1` seconds. Default: `1e6`.
-   **repeats**: number of repeats. Default: `3`.
-   **asynchronous**: `boolean` indicating whether a snippet is asynchronous. Default: `false`.

To perform any setup or initialization, provide setup code.

```javascript
var setup = 'var randu = require( \'@stdlib/random/base/randu\' );';
setup += 'var pow = require( \'@stdlib/math/base/special/pow\' );';

var code = 'var x = pow( randu(), 3 );';
code += 'if ( x !== x ) {';
code += 'throw new Error( \'Something went wrong.\' );';
code += '}';

var opts = {
    'before': setup
};

timeit( code, opts, done );

function done( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```

To perform any cleanup, provide cleanup code.

```javascript
var setup = 'var randu = require( \'@stdlib/random/base/randu\' );';
setup += 'var hypot = require( \'@stdlib/math/base/special/hypot\' );';

var code = 'var h = hypot( randu()*10, randu()*10 );';
code += 'if ( h < 0 || h > 200 ) {';
code += 'throw new Error( \'Something went wrong.\' );';
code += '}';

var cleanup = 'if ( h !== h ) {';
cleanup += 'throw new Error( \'Something went wrong.\' );';
cleanup += '}';

var opts = {
    'before': setup,
    'after': cleanup
};

timeit( code, opts, done );

function done( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```

To time an asynchronous snippet, set the `asynchronous` option to `true`.

```javascript
var code = 'var x = Math.pow( Math.random(), 3 );';
code += 'if ( x !== x ) {';
code += 'var err = new Error( \'Something went wrong.\' );';
code += 'next( err );';
code += '}';
code += 'process.nextTick( next );';

var opts = {
    'iterations': 1e2,
    'asynchronous': true
};

timeit( code, opts, done );

function done( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```

If `asynchronous` is `true`, the implementation assumes that `before`, `after`, and `code` snippets are **all** asynchronous. Accordingly, these snippets should invoke a `next( [error] )` callback once complete. For example, given the following snippet,

<!-- run-disable -->

<!-- eslint-disable -->

```javascript
setTimeout( done, 0 );

function done( error ) {
    if ( error ) {
        return next( error );
    }
    next();
}
```

the implementation wraps the snippet within a function having the following signature

```javascript
function wrapped( state, next ) {
    setTimeout( done, 0 );

    function done( error ) {
        if ( error ) {
            return next( error );
        }
        next();
    }
}
```

The `state` parameter is simply an empty `{}` which allows the `before`, `after`, and `code` snippets to share state.

```javascript
function before( state, next ) {
    state.counter = 0;
}

function code( state, next ) {
    setTimeout( done, 0 );

    function done( error ) {
        if ( error ) {
            return next( error );
        }
        state.counter += 1;
        next();
    }
}

function after( state, next ) {
    var err;
    if ( state.counter !== state.counter ) {
        err = new Error( 'Something went wrong!' );
        return next( err );
    }
    next();
}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Snippets **always** run in [strict mode][strict-mode].
-   **Always** verify results. Doing so prevents the compiler from performing dead code elimination and other optimization techniques, which would render timing results meaningless.
-   Executed code is **not** sandboxed and has access to the global state. You are **strongly** advised **against** timing untrusted code. To time untrusted code, do so in an isolated environment (e.g., a separate process with restricted access to both global state and the host environment).
-   Wrapping asynchronous code **does** add overhead, but, in most cases, the overhead should be negligible compared to the execution cost of the timed snippet.
-   Ensure that, when `asynchronous` is `true`, the main `code` snippet is actually asynchronous. If a snippet releases the [zalgo][zalgo], an error complaining about exceeding the maximum call stack size is highly likely.
-   While many benchmark frameworks calculate various statistics over raw timing results (e.g., mean and standard deviation), do **not** do this. Instead, consider the fastest time an approximate lower bound for how fast an environment can execute a snippet. Slower times are more likely attributable to other processes interfering with timing accuracy rather than attributable to variability in JavaScript's speed. In which case, the minimum time is most likely the only result of interest. When considering all raw timing results, apply common sense rather than statistics.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var timeit = require( '@stdlib/utils/timeit' );

var before;
var code;
var opts;

before = readFileSync( join( __dirname, 'examples', 'before.txt' ), 'utf8' );
code = readFileSync( join( __dirname, 'examples', 'code.txt' ), 'utf8' );

opts = {
    'iterations': 1e6,
    'repeats': 5,
    'before': before
};

timeit( code, opts, done );

function done( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: timeit [options] [<code>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --iterations iter     Number of iterations.
         --repeats repeats     Number of repeats. Default: 3.
         --before setup        Setup code.
         --after cleanup       Cleanup code.
         --async               Time asynchronous code.
         --format fmt          Output format: pretty, csv, json. Default: pretty.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   When the output format is `csv`, the output consists of **only** raw timing results.
-   If not explicitly provided `--iterations`, the implementation tries successive powers of `10` until the total time is at least `0.1` seconds.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ timeit "$(cat ./examples/code.txt)" --before "$(cat ./examples/before.txt)" --iterations 1000000

iterations: 1000000
repeats: 3
iterations/s: 7261975.851461222
elapsed time: 0.13770357 sec
lower bound: 0.13770357 usec/iteration
```

To output results as JSON,

```bash
$ timeit "$(cat ./examples/code.txt)" --before "$(cat ./examples/before.txt)" --iterations 1000000 --format json
{"iterations":1000000,"repeats":3,"min":[0,132431806],"elapsed":0.132431806,"rate":7551056.1261997735,"times":[[0,142115140],[0,132431806],[0,134808376]]}
```

To output results as comma-separated values ([CSV][csv]),

```bash
$ timeit "$(cat ./examples/code.txt)" --before "$(cat ./examples/before.txt)" --iterations 1000000 --format csv
seconds,nanoseconds
0,139365407
0,138033545
0,135175834
```

To use as part of a pipeline,

```bash
$ cat ./examples/code.txt | timeit --before "$(cat ./examples/before.txt)" --iterations 1000000

iterations: 1000000
repeats: 3
iterations/s: 7433536.674260073
elapsed time: 0.134525468 sec
lower bound: 0.134525468 usec/iteration
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="references">

## References

-   Chen, Jiahao, and Jarrett Revels. 2016. "Robust benchmarking in noisy environments." _CoRR_ abs/1608.04295 (August). <http://arxiv.org/abs/1608.04295>.

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[strict-mode]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

[csv]: https://tools.ietf.org/html/rfc4180

[zalgo]: http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony

</section>

<!-- /.links -->
