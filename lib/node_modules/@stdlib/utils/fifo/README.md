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

# FIFO

> First-in-first-out (FIFO) queue.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var fifo = require( '@stdlib/utils/fifo' );
```

#### fifo()

Returns a new first-in-first-out (FIFO) queue instance.

```javascript
var queue = fifo();
// returns <FIFO>
```

##### queue.clear()

Clears a queue.

```javascript
var queue = fifo();
// returns <FIFO>

// Add values to the queue:
queue.push( 'foo' ).push( 'bar' );

// Peek at the first value:
var v = queue.first();
// returns 'foo'

// Examine the queue length:
var len = queue.length;
// returns 2

// Clear all queue items:
queue.clear();

// Peek at the first value:
v = queue.first();
// returns undefined

// Examine the queue length:
len = queue.length;
// returns 0
```

##### queue.first()

Returns the "oldest" queue value (i.e., the value which is "first-out"). If the queue is currently empty, the returned value is `undefined`.

```javascript
var queue = fifo();
// returns <FIFO>

// Add values to the queue:
queue.push( 'foo' ).push( 'bar' );

// Peek at the first value:
var v = queue.first();
// returns 'foo'
```

##### queue.iterator()

Returns an iterator for iterating over a queue. If an environment supports `Symbol.iterator`, the returned iterator is iterable.

```javascript
var queue = fifo();

// Add values to the queue:
queue.push( 'foo' ).push( 'bar' );

// Create an iterator:
var it = queue.iterator();

// Iterate over the queue...
var v = it.next().value;
// returns 'foo'

v = it.next().value;
// returns 'bar'

var bool = it.next().done;
// returns true
```

**Note**: in order to prevent confusion arising from queue mutation during iteration, a returned iterator **always** iterates over a queue "snapshot", which is defined as the list of queue elements at the time of `queue.iterator()` invocation.

##### queue.last()

Returns the "newest" queue value (i.e., the value which is "last-out"). If the queue is currently empty, the returned value is `undefined`.

```javascript
var queue = fifo();
// returns <FIFO>

// Add values to the queue:
queue.push( 'foo' ).push( 'bar' );

// Peek at the last value:
var v = queue.last();
// returns 'bar'
```

##### queue.length

Queue length.

```javascript
var queue = fifo();

// Examine the initial queue length:
var len = queue.length;
// returns 0

// Add values to the queue:
queue.push( 'foo' ).push( 'bar' );

// Retrieve the current queue length:
len = queue.length;
// returns 2
```

##### queue.pop()

Removes a value from the queue. If the queue is currently empty, the returned value is `undefined`.

```javascript
var queue = fifo();

// Add values to the queue:
queue.push( 'foo' ).push( 'bar' );

// Remove the first value:
var v = queue.pop();
// returns 'foo'

// Add a new value to the queue:
queue.push( 'beep' );

// Remove the "oldest" queue value:
v = queue.pop();
// returns 'bar'
```

##### queue.push( value )

Adds a value to the queue.

```javascript
var queue = fifo();

// Add values to the queue:
queue.push( 'foo' ).push( 'bar' );

// Remove the first value:
var v = queue.pop();
// returns 'foo'

// Add a new value to the queue:
queue.push( 'beep' );

// Remove the "oldest" queue value:
v = queue.pop();
// returns 'bar'
```

##### queue.toArray()

Returns an array of queue values.

```javascript
var queue = fifo();

// Add values to the queue:
queue.push( 'foo' ).push( 'bar' );

// Get an array of queue values:
var vals = queue.toArray();
// returns [ 'foo', 'bar' ]
```

##### queue.toJSON()

Serializes a queue as JSON.

```javascript
var queue = fifo();

// Add values to the queue:
queue.push( 'foo' ).push( 'bar' );

// Serialize to JSON:
var o = queue.toJSON();
// returns { 'type': 'fifo', 'data': [ 'foo', 'bar' ] }
```

**Note**: `JSON.stringify()` implicitly calls this method when stringifying a queue instance.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var fifo = require( '@stdlib/utils/fifo' );

var queue;
var iter;
var len;
var v;
var i;

// Create a new FIFO queue:
queue = fifo();

// Add some values to the queue:
queue.push( 'foo' );
queue.push( 'bar' );
queue.push( 'beep' );
queue.push( 'boop' );

// Peek at the first and last queue values:
v = queue.first();
// returns 'foo'

v = queue.last();
// returns 'boop'

// Inspect the queue length:
len = queue.length;
// returns 4

// Remove the "oldest" queue value:
v = queue.pop();
// returns 'foo'

// Inspect the queue length:
len = queue.length;
// returns 3

// Iterate over the queue:
iter = queue.iterator();
for ( i = 0; i < len; i++ ) {
    console.log( 'Queue value #%d: %s', i+1, iter.next().value );
}

// Clear the queue:
queue.clear();

// Inspect the queue length:
len = queue.length;
// returns 0
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
