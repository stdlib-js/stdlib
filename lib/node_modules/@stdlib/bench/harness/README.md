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

# Benchmark

> Benchmark harness.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var bench = require( '@stdlib/bench/harness' );
```

<a name="bench"></a>

#### bench( name\[, options]\[, benchmark] )

Queues a `benchmark` to be run during a subsequent turn of the event loop. After running the `benchmark`, the function outputs benchmark results as Test Anything Protocol ([TAP][tap]) output.

<!-- eslint-disable no-restricted-syntax, stdlib/no-builtin-math -->

```javascript
bench( 'Math.sin', function benchmark( b ) {
    var x;
    var i;
    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        x = Math.sin( Math.random() );
        if ( x !== x ) {
            b.fail( 'should not return NaN' );
        }
    }
    b.toc();
    if ( x !== x ) {
        b.fail( 'should not return NaN' );
    }
    b.pass( 'benchmark finished' );
    b.end();
});
```

A `benchmark` function has the following signature:

```javascript
function benchmark( b ) {
    // Benchmark code...
}
```

where `b` is a `Benchmark` instance. Synchronous benchmarks should, at minimum, have the following structure:

```javascript
function benchmark( b ) {
    var x;
    var i;

    // [1] Start timing:
    b.tic();

    // [2] Loop containing code to time...
    for ( i = 0; i < b.iterations; i++ ) {
        // [3] Code to time...

        // [4] A conditional verifying results to prevent certain compiler optimizations:
        if ( x !== x ) {
            b.fail( 'something went wrong!' );
        }
    }
    // [5] Stop timing:
    b.toc();

    // [6] Another conditional verifying results to prevent certain compiler optimizations:
    if ( x !== x ) {
        b.fail( 'something went wrong!' );
    }
    // [7] End the benchmark:
    b.end();
}
```

Asynchronous benchmarks should have a structure similar to the following:

```javascript
function benchmark( b ) {
    var i = 0;

    // [1] Start timing:
    b.tic();

    // [2] Asynchronous code to time:
    return next();

    function next( error ) {
        if ( error ) {
            return b.fail( error.message );
        }
        i += 1;

        // [3] Exit condition:
        if ( i <= b.iterations ) {
            // Asynchronous task...
            return;
        }
        // [4] Stop timing:
        b.toc();

        // [5] End the benchmark:
        b.end();
    }
}
```

For both synchronous and asynchronous benchmarks, calling `b.end()` is **mandatory**, as failing to do so will cause the harness to hang. For example, the following benchmark will **never** complete.

```javascript
function benchmark( b ) {
    var i;
    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        // Synchronous task...
    }
    b.toc();
}
```

**Avoid** making assertions within timed code, as doing so will **significantly** affect raw performance numbers. For example, **avoid** the following:

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
function benchmark( b ) {
    var x;
    var i;
    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        x = Math.sin( Math.random() );
        b.equal( x, x, 'does not return NaN' ); // Avoid doing this!
    }
    b.toc();
    b.equal( x, x, 'does not return NaN' );     // This is fine.
    b.end();
}
```

Additionally, ensure that all setup code executes **before** calling `b.tic()` and that all cleanup code executes **after** calling `b.toc()`. For example, **avoid** the following:

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
function benchmark( b ) {
    var x;
    var y;
    var i;

    // Start timing:
    b.tic();

    // Setup code:
    x = new Array( b.iterations );                  // Should be before b.tic()!
    for ( i = 0; i < b.iterations; i++ ) {
        x[ i ] = Math.random();
    }
    // Code to be timed...
    for ( i = 0; i < b.iterations; i++ ) {
        y = Math.sin( x[ i ] );
        if ( y !== y ) {
            b.fail( 'should not return NaN' );
        }
    }
    // Verify results:
    b.equal( x, x, 'does not return NaN' );         // Should be after b.toc()!

    // Stop timing:
    b.toc();

    b.end();
}
```

The function accepts the following `options`:

-   **iterations**: number of iterations. If `null`, the number of iterations is determined by trying successive powers of `10` until the total time is at least `0.1` seconds. Default: `null`.
-   **repeats**: number of repeats. Default: `3`.
-   **timeout**: number of milliseconds before a benchmark is considered failed. Exceeding a timeout does **not**, however, end the benchmark. Ending a long running benchmark requires manual intervention. Default: `300000` (5 minutes).
-   **skip**: `boolean` indicating whether to skip a benchmark.

By default, the harness will automatically determine an iteration number for each benchmark such that a benchmark runs for a length of time sufficient to accurately compute benchmark results. To require a specific number of iterations, set the `iterations` option.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var opts = {
    'iterations': 1e6
};

bench( 'require a specific number of iterations', opts, function benchmark( b ) {
    var i;
    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        // Code to be benchmarked...
    }
    b.toc();
    b.end();
});
```

To ensure that benchmark results are reproducible, the harness runs each benchmark function multiple times. To specify a repetition number, set the `repeats` option.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var opts = {
    'repeats': 5
};

bench( 'repeat a benchmark multiple times', opts, function benchmark( b ) {
    var i;
    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        // Code to be benchmarked...
    }
    b.toc();
    b.end();
});
```

To skip a benchmark, set the `skip` option.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var opts = {
    'skip': true
};

bench( 'skipped benchmark', opts, function benchmark( b ) {
    var i;
    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        // Code to be benchmarked...
    }
    b.toc();
    b.end();
});
```

To fail benchmarks which take longer than a specified amount of time to complete, set a `timeout` option (in milliseconds).

<!-- eslint-disable no-restricted-syntax -->

```javascript
var opts = {
    'timeout': 5000    // 5 seconds
};

bench( 'async benchmark', opts, function benchmark( b ) {
    var i = 0;
    b.tic();
    return next();

    function next( error ) {
        if ( error ) {
            return b.fail( error.message );
        }
        i += 1;
        if ( i <= b.iterations ) {
            // Asynchronous task...
            return;
        }
        b.toc();
        b.end();
    }
});
```

<a name="bench-onfinish"></a>

#### bench.onFinish( clbk )

Sets a listener which is invoked once the harness **finishes** running all benchmarks.

```javascript
function onFinish() {
    console.log( 'Done!' );
}

bench.onFinish( onFinish );
```

<a name="bench-createstream"></a>

#### bench.createStream( \[options] )

Returns a results [stream][nodejs-stream].

<!-- eslint-disable no-restricted-syntax -->

```javascript
var stdout = require( '@stdlib/streams/node/stdout' );

var stream = bench.createStream();

// Direct all results to `stdout`:
stream.pipe( stdout );

var opts = {
    'iterations': 1,
    'repeats': 1
};

bench( 'beep', opts, function benchmark( b ) {
    var i;
    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        b.equal( 3.14, 3.14, 'should be equal' );
    }
    b.toc();
    b.end();
});
```

```text
TAP version 13
# beep
ok 1 should be equal
  ---
  iterations: 1
  elapsed: 0.002985193
  rate: 334.98671610177297
  ...
#
1..1
# total 1
# pass  1
#
# ok
```

The results stream can be combined with any [`Writable`][nodejs-writable-stream] stream (e.g., network connection, file, `stdout`, etc).

The function accepts the same `options` as [@stdlib/streams/node/transform][@stdlib/streams/node/transform]. For example, by default, the method returns a stream which produces [TAP][tap] output as text. To return an object stream,

<!-- eslint-disable no-restricted-syntax -->

```javascript
var opts = {
    'objectMode': true
};

var stream = bench.createStream( opts );
stream.on( 'data', onRow );

function onRow( row ) {
    console.log( JSON.stringify( row ) );
}

opts = {
    'iterations': 1,
    'repeats': 1
};

bench( 'beep', opts, function benchmark( b ) {
    var i;
    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        b.equal( 3.14, 3.14, 'should be equal' );
    }
    b.toc();
    b.end();
});
```

```text
{"type":"benchmark","name":"beep","id":0}
{"id":0,"ok":true,"name":"should be equal","operator":"equal","actual":3.14,"expected":3.14,"benchmark":0,"type":"assert"}
{"ok":true,"operator":"result","iterations":1,"elapsed":0.00283753,"rate":352.41918147120913,"benchmark":0,"type":"result"}
{"benchmark":0,"type":"end"}
```

<a name="bench-createharness"></a>

#### bench.createHarness( \[options]\[, clbk] )

Creates a benchmark harness with a new pending stack and state.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var harness = bench.createHarness();

harness( 'beep', function benchmark( b ) {
    var i;
    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        // Synchronous task...
    }
    b.toc();
    b.end();
});
```

To trigger an action when a harness finishes running all benchmarks, provide a callback `function`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var harness = bench.createHarness( onFinish );

function onFinish() {
    harness.close();
}

harness( 'beep', function benchmark( b ) {
    var i;
    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        // Synchronous task...
    }
    b.toc();
    b.end();
});
```

The method accepts the following `options`:

-   **autoclose**: `boolean` indicating whether to automatically close a harness after running all benchmarks.

By default, a `harness` does **not** automatically close. To automatically close a harness once a harness finishes running all benchmarks, set the `autoclose` option to `true`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var harness = bench.createHarness({
    'autoclose': true
});

harness( 'beep', function benchmark( b ) {
    var i;
    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        // Synchronous task...
    }
    b.toc();
    b.end();
});
```

* * *

### Harness

A `harness` has the following properties and methods...

<a name="harness-createstream"></a>

#### harness.createStream( \[options] )

Returns a results [stream][nodejs-stream].

<!-- eslint-disable no-restricted-syntax -->

```javascript
var stdout = require( '@stdlib/streams/node/stdout' );

var harness = bench.createHarness();
var stream = harness.createStream();

// Direct all results to `stdout`:
stream.pipe( stdout );

var opts = {
    'iterations': 1,
    'repeats': 1
};

harness( 'beep', opts, function benchmark( b ) {
    var i;
    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        b.equal( 'beep', 'beep', 'should be equal' );
    }
    b.toc();
    b.end();
});
```

```text
TAP version 13
# beep
ok 1 should be equal
  ---
  iterations: 1
  elapsed: 0.00166768
  rate: 599.6354216636286
  ...
#
1..1
# total 1
# pass  1
#
# ok
```

The method accepts the same `options` as [@stdlib/streams/node/transform][@stdlib/streams/node/transform].

**Note**: benchmarks will **not** run until a destination stream has been created.

<a name="harness-close"></a>

#### harness.close()

Closes a benchmark harness. Any pending benchmarks are cleared from the harness stack.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var stdout = require( '@stdlib/streams/node/stdout' );

var harness = bench.createHarness();

var stream = harness.createStream();
stream.pipe( stdout );

var opts = {
    'iterations': 5,
    'repeats': 5
};

harness( 'early close', opts, function benchmark( b ) {
    var i = 0;
    b.tic();
    setTimeout( next, 0 );
    function next() {
        i += 1;
        if ( i <= b.iterations ) {
            b.ok( true, 'should be truthy' );
            return setTimeout( next, 10 );
        }
        b.toc();
        b.end();
    }
});

// Early close:
setTimeout( onTimeout, 50 );

function onTimeout() {
    harness.close();
}
```

```text
TAP version 13
# early close
ok 1 should be truthy
ok 2 should be truthy
# WARNING: harness closed before completion.
ok 3 should be truthy
ok 4 should be truthy
ok 5 should be truthy
  ---
  iterations: 5
  elapsed: 0.05940291
  rate: 84.17096064822414
  ...
```

**Warning**: a running benchmark may finish **after** closing a harness.

<a name="harness-exit"></a>

#### harness.exit()

Forcefully exits a benchmark harness. All pending benchmarks will generate **failing** assertions.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var stdout = require( '@stdlib/streams/node/stdout' );

var harness = bench.createHarness();

var stream = harness.createStream();
stream.pipe( stdout );

var opts = {
    'iterations': 5
};

harness( 'force exit', opts, function benchmark( b ) {
    var i = 0;
    b.tic();
    return next();
    function next() {
        i += 1;
        if ( i <= b.iterations ) {
            b.ok( true, 'should be truthy' );
            return setTimeout( next, 10 );
        }
        b.toc();
        b.end();
    }
});

// Forcefully exit:
setTimeout( onTimeout, 20 );

function onTimeout() {
    harness.exit();
}
```

```text
TAP version 13
# force exit
ok 1 should be truthy
not ok 2 benchmark exited without ending
  ---
  operator: fail
  TODO: include stack
  ...
not ok 3 benchmark exited without ending
  ---
  operator: fail
  TODO: include stack
  ...
ok 4 should be truthy
ok 5 should be truthy
ok 6 should be truthy
ok 7 should be truthy
  ---
  iterations: 5
  elapsed: 0.061504862
  rate: 81.29438612511642
  ...
```

**Warning**: a running benchmark may finish **after** exiting a harness.

<a name="harness-exitcode"></a>

#### harness.exitCode

**Read-only** property whose value is the harness exit code. If all benchmarks run successfully (i.e., no failing assertions), the exit code is `0`; otherwise, the exit code is `1`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var harness = bench.createHarness();

// Benchmarks only start running when results have a destination:
var stream = harness.createStream();

function onFinish() {
    console.log( harness.exitCode );
    // => 1
}

var opts = {
    'iterations': 1,
    'repeats': 1
};

harness( 'exit code', opts, function benchmark( b ) {
    var i;
    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        b.fail( 'failing assertion' );
    }
    b.toc();
    b.end();
});
```

* * *

### Benchmark

A `Benchmark` instance has the following properties and methods...

<a name="benchmark-name"></a>

#### b.name

**Read-only** property whose value is the benchmark `name`.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var str = b.name;
// returns <string>
```

<a name="benchmark-iterations"></a>

#### b.iterations

**Read-only** property whose value is the number of iterations.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var iter = b.iterations;
// returns <number>
```

<a name="benchmark-tic"></a>

#### b.tic()

Starts a benchmark timer. In order to benchmark code, this method **must always** be called within a `benchmark` function.

<!-- run-disable -->

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
function benchmark( b ) {
    var x;
    var i;

    // Start a timer:
    b.tic();

    for ( i = 0; i < b.iterations; i++ ) {
        x = Math.sin( Math.random() );
        if ( x !== x ) {
            b.fail( 'should not return NaN' );
        }
    }
    b.toc();
    if ( x !== x ) {
        b.fail( 'should not return NaN' );
    }
    b.end();
}
```

<a name="benchmark-toc"></a>

#### b.toc()

Stops a benchmark timer. In order to benchmark code, this method **must always** be called within a `benchmark` function.

<!-- run-disable -->

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
function benchmark( b ) {
    var x;
    var i;

    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        x = Math.sin( Math.random() );
        if ( x !== x ) {
            b.fail( 'should not return NaN' );
        }
    }
    // Stop a timer:
    b.toc();

    if ( x !== x ) {
        b.fail( 'should not return NaN' );
    }
    b.end();
}
```

<a name="benchmark-end"></a>

#### b.end()

Explicitly ends a benchmark. In order to benchmark code, this method **must always** be called within a `benchmark` function.

<!-- run-disable -->

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
function benchmark( b ) {
    var x;
    var i;

    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        x = Math.sin( Math.random() );
        if ( x !== x ) {
            b.fail( 'should not return NaN' );
        }
    }
    b.toc();

    if ( x !== x ) {
        b.fail( 'should not return NaN' );
    }

    // Explicitly end the benchmark:
    b.end();
}
```

**Warning**: no assertions should follow a call to `b.end()`. Including assertions after `b.end()` may result in interleaved [TAP][tap] output or an output stream closing before a benchmark executes pending assertions.

<a name="benchmark-comment"></a>

#### b.comment( msg )

Writes a message without breaking [TAP][tap] output.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
b.comment( 'This is a comment.' );
```

```text
# This is a comment.
```

To prevent confusing results parsers, **avoid** using comments. Comments are frequently used for demarcating the beginning of a new benchmark run and/or providing diagnostic information. Both of the aforementioned use cases typically fall under the domain of the harness, not the user.

<a name="benchmark-skip"></a>

#### b.skip( value, msg )

Generates an assertion which will be skipped.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
b.skip( false, 'This is skipped.' );
b.skip( true, 'This is skipped.' );
```

```text
ok 1 This is skipped. # SKIP
ok 2 This is skipped. # SKIP
```

<a name="benchmark-todo"></a>

#### b.todo( value, msg )

Generates an assertion which should be implemented.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
b.todo( false, 'This is a todo.' );
b.todo( true, 'This is a todo.' );
```

```text
not ok 3 This is a todo. # TODO
  ---
  operator: todo
  TODO: include stack
  ...
ok 4 This is a todo. # TODO
```

While `b.todo()` assertions typically fail, they do **not** contribute to the failed assertion count. If a benchmark includes `b.todo()` assertions and no other failing assertions, the benchmark is considered successful.

<a name="benchmark-fail"></a>

#### b.fail( msg )

Generates a failing assertion.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
b.fail( 'This is a failing assertion.' );
```

```text
not ok 5 This is a failing assertion.
  ---
  operator: fail
  TODO: include stack
  ... 
```

<a name="benchmark-pass"></a>

#### b.pass( msg )

Generates a passing assertion.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
b.pass( 'This is a passing assertion.' );
```

```text
ok 6 This is a passing assertion.
```

<a name="benchmark-ok"></a>

#### b.ok( value\[, msg] )

Asserts that a `value` is truthy.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
b.ok( [] );
```

```text
ok 7 should be truthy
```

To override the default message, provide a `msg` argument.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
b.ok( true, 'This asserts a value is truthy.' );
b.ok( false, 'This asserts a value is truthy.' );
```

```text
ok 8 This asserts a value is truthy.
not ok 9 This asserts a value is truthy.
  ---
  operator: ok
  TODO: include stack
  ...
```

<a name="benchmark-notok"></a>

#### b.notOk( value\[, msg] )

Asserts that a `value` is falsy.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
b.notOk( null );
```

```text
ok 10 should be falsy
```

To override the default message, provide a `msg` argument.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
b.notOk( false, 'This asserts a value is falsy.' );
b.notOk( true, 'This asserts a value is falsy.' );
```

```text
ok 11 This asserts a value is falsy.
not ok 12 This asserts a value is falsy.
  ---
  operator: notOk
  TODO: include stack
  ...
```

<a name="benchmark-equal"></a>

#### b.equal( actual, expected\[, msg] )

Asserts that `actual` is **strictly** equal to `expected`.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var expected = [];
var actual = expected;

b.equal( actual, expected );
```

```text
ok 13 should be equal
```

To override the default message, provide a `msg` argument.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var expected = [];
var actual = expected;

b.equal( actual, expected, 'This asserts two values are strictly equal.' );
b.equal( 1.0, 2.0, 'This asserts two values are strictly equal.' );
```

```text
ok 14 This asserts two values are strictly equal.
not ok 15 This asserts two values are strictly equal.
  ---
  operator: equal
  TODO: include stack
  ...
```

<a name="benchmark-notequal"></a>

#### b.notEqual( actual, expected\[, msg] )

Asserts that `actual` is not **strictly** equal to `expected`.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var expected = [];
var actual = [];

b.notEqual( actual, expected );
```

```text
ok 16 should not be equal
```

To override the default message, provide a `msg` argument.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var expected = [];
var actual = [];

b.notEqual( 1.0, 2.0, 'This asserts two values are not equal.' );
b.notEqual( actual, expected, 'This asserts two values are not equal.' );
```

```text
ok 17 This asserts two values are not equal.
not ok 18 This asserts two values are not equal.
  ---
  operator: notEqual
  TODO: include stack
  ...
```

<a name="benchmark-deepequal"></a>

#### b.deepEqual( actual, expected\[, msg] )

Asserts that `actual` is **deeply** equal to `expected`.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var expected = {
    'a': 'b'
};
var actual = {
    'a': 'b'
};

b.deepEqual( actual, expected );
```

```text
ok 19 should be deeply equal
```

To override the default message, provide a `msg` argument.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var expected = {
    'a': 'b'
};
var actual = {
    'a': 'b'
};

b.deepEqual( actual, expected, 'This asserts two values are deeply equal.' );

actual.a = 'c';
b.deepEqual( actual, expected, 'This asserts two values are deeply equal.' );
```

```text
TODO
```

<a name="benchmark-notdeepequal"></a>

#### b.notDeepEqual( actual, expected\[, msg] )

Asserts that `actual` is not **deeply** equal to `expected`.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var expected = {
    'a': 'b'
};
var actual = {
    'a': 'c'
};

b.notDeepEqual( actual, expected );
```

```text
ok 22 should not be deeply equal
```

To override the default message, provide a `msg` argument.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var expected = {
    'a': 'b'
};
var actual = {
    'a': 'c'
};

b.notDeepEqual( actual, expected, 'This asserts two values are not deeply equal.' );

actual.a = 'b';
b.notDeepEqual( actual, expected, 'This asserts two values are not deeply equal.' );
```

```text
TODO
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="notes">

## Notes

-   All benchmark functions execute **serially** in separate turns of the event loop.
-   All benchmark functions should be added during the **same** turn of the event loop. Otherwise, you will likely encounter race conditions where a benchmark executes and finishes causing a harness to close **before** subsequent benchmarks register.
-   Similarly, create results streams **before** adding benchmarks to the harness. Otherwise, you will likely miss benchmark results.
-   If a harness is invoked without providing a `benchmark` function, the benchmark is considered a `todo` and `opts.repeat` is ignored.
-   All benchmarks are pretested. If a benchmark generates failing assertions or fails to call `b.tic()` and/or `b.toc()` during pretests (even if due to an intermittent failure), a benchmark is **only** run once (i.e., `options.repeats` is ignored). Similarly, if `options.iterations` is `null` and a benchmark fails during iteration number determination, a benchmark is **only** run once and for one iteration. Accordingly, if a benchmark does not run an expected number of repetitions and/or iterations, this behavior is likely attributable to a benchmark failure during pretesting.
-   All benchmarks must have a `name`. If a `name` is not provided, the harness will throw an `Error`.
-   While not required, all benchmarks should have a **unique** `name`. Unique names ensure easier identification and assignment of benchmark results.
-   Uncaught exceptions in benchmark functions are **not** intercepted and will cause the harness to error.
-   If any one of `b.tic()`, `b.toc()`, or `b.end()` is called more than once within a benchmark, the benchmark will **fail**.
-   **Always** verify results. Doing so prevents the compiler from performing dead code elimination and other optimization techniques, which would render timing results meaningless.
-   While many benchmark frameworks calculate various statistics over raw timing results (e.g., mean and standard deviation), do **not** do this. Instead, consider the fastest time an approximate lower bound for how fast an environment can execute benchmark code. Slower times are more likely attributable to other processes interfering with timing accuracy rather than attributable to variability in JavaScript's speed. In which case, the minimum time is most likely the only result of interest. When considering all raw timing results, apply common sense rather than statistics.

### TAP

-   Results are output in accordance with the Test Anything Protocol ([TAP][tap]) version [13][tap]. 

-   Example [TAP][tap] output:

    ```text
    TAP version 13
    # Math.hypot
      ---
      iterations: 1000000
      elapsed: 0.457849215
      rate: 2184125.181911691
      ...
    ok 1 benchmark finished
    # Math.hypot
      ---
      iterations: 1000000
      elapsed: 0.454676639
      rate: 2199365.250432407
      ...
    ok 2 benchmark finished
    # Math.hypot
      ---
      iterations: 1000000
      elapsed: 0.472378014
      rate: 2116948.652059831
      ...
    ok 3 benchmark finished
    # hypot
      ---
      iterations: 1000000
      elapsed: 0.13120811
      rate: 7621480.105155086
      ...
    ok 4 benchmark finished
    # hypot
      ---
      iterations: 1000000
      elapsed: 0.129308984
      rate: 7733414.717727579
      ...
    ok 5 benchmark finished
    # hypot
      ---
      iterations: 1000000
      elapsed: 0.12404053
      rate: 8061881.064197323
      ...
    ok 6 benchmark finished
    #
    1..6
    # total 6
    # pass  6
    #
    # ok
    ```

-   For each failing assertion, the harness outputs diagnostic information as [YAML][yaml] blocks.

    ```text
    TODO
    ```

-   Timing results are output as [YAML][yaml] blocks. The fields are as follows:

    -   **iterations**: number of iterations.
    -   **elapsed**: total elapsed time beginning with `b.tic()` and ending with `b.toc()` (in seconds).
    -   **rate**: number of operations per second.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, stdlib/no-builtin-math -->

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var sin = require( '@stdlib/math/base/special/sin' );
var bench = require( '@stdlib/bench/harness' );

var opts = {
    'iterations': 1e6,
    'repeats': 3
};

bench( 'Math.sin', opts, function benchmark( b ) {
    var x;
    var y;
    var i;

    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        x = (randu()*100.0) - 50.0;
        y = Math.sin( x );
        if ( y < -1.0 || y > 1.0 ) {
            b.fail( 'something went wrong!' );
        }
    }
    b.toc();

    if ( isnan( y ) ) {
        b.fail( 'something went wrong!' );
    }
    b.pass( 'benchmark finished' );
    b.end();
});

bench( 'sin', opts, function benchmark( b ) {
    var x;
    var y;
    var i;

    b.tic();
    for ( i = 0; i < b.iterations; i++ ) {
        x = (randu()*100.0) - 50.0;
        y = sin( x );
        if ( y < -1.0 || y > 1.0 ) {
            b.fail( 'something went wrong!' );
        }
    }
    b.toc();

    if ( isnan( y ) ) {
        b.fail( 'something went wrong!' );
    }
    b.pass( 'benchmark finished' );
    b.end();
});
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
Usage: bench [options] <glob> ...

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  -r,    --require module      Load module before running benchmarks.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   Running benchmark files does **not** require using the command-line interface. For example, to run a single file containing benchmarks,

    ```bash
    $ node /path/to/benchmark.js
    ```

-   To load one or more modules **before** running benchmarks, set the `-r` flag one or more times. For example,

    ```bash
    $ bench -r foo -r bar 'benchmark/*.js'
    ```

    the modules `foo` and `bar` will both be loaded **before** any benchmarks matching the glob `benchmark/*.js`. The `-r` flag behaves exactly like `require`, and modules are resolved relative to the current working directory. To load local modules, use relative paths.

    ```bash
    $ bench -r ./foo/bar.js -r ./beep/boop/bap 'benchmark/*.js'
    ```

    Note that `-r` modules are loaded **before** running benchmarks regardless of order. Hence,

    ```bash
    $ bench -r foo -r bar 'benchmark/*.js'
    ```

    and

    ```bash
    $ bench -r foo 'benchmark/*.js' -r bar
    ```

    behave the same.

    Depending on the preloaded module, a module may support parameterization via environment variables, command-line options, and/or configuration files.

-   To perform shell expansion on systems supporting globbing, do not quote provided globs. 

    ```bash
    $ bench benchmark/*.js
    ```

    Beware, however, that globbing via shell expansion may result in shell argument lists which exceed length limits. To prevent shell expansion, wrap globs in quotes.

    ```bash
    $ bench 'benchmark/*.js'
    $ bench "benchmark/*.js"
    ```

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ bench ./examples/index.js
```

will generate [TAP][tap] output similar to the following

```text
TAP version 13
# Math.sin
  ---
  iterations: 1000000
  elapsed: 0.107631765
  rate: 9290937.484858675
  ...
ok 1 benchmark finished
# Math.sin
  ---
  iterations: 1000000
  elapsed: 0.100319363
  rate: 9968165.368035682
  ...
ok 2 benchmark finished
# Math.sin
  ---
  iterations: 1000000
  elapsed: 0.095116262
  rate: 10513449.31952856
  ...
ok 3 benchmark finished
# sin
  ---
  iterations: 1000000
  elapsed: 0.173696195
  rate: 5757178.503536016
  ...
ok 4 benchmark finished
# sin
  ---
  iterations: 1000000
  elapsed: 0.158544701
  rate: 6307369.42762912
  ...
ok 5 benchmark finished
# sin
  ---
  iterations: 1000000
  elapsed: 0.157709895
  rate: 6340756.234730865
  ...
ok 6 benchmark finished
#
1..6
# total 6
# pass  6
#
# ok
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

[tap]: http://testanything.org/tap-version-13-specification.html

[yaml]: http://www.yaml.org/

[nodejs-stream]: https://nodejs.org/api/stream.html

[nodejs-writable-stream]: https://nodejs.org/api/stream.html#stream_writable_streams

[@stdlib/streams/node/transform]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/streams/utils/transform

</section>

<!-- /.links -->
