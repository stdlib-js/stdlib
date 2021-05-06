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

# Stack

> Stack data structure.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var stack = require( '@stdlib/utils/stack' );
```

#### stack()

Returns a `Stack` instance.

```javascript
var s = stack();
// returns <Stack>
```

##### s.clear()

Clears a stack.

```javascript
var s = stack();
// returns <Stack>

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Peek at the top value:
var v = s.first();
// returns 'bar'

// Examine the stack length:
var len = s.length;
// returns 2

// Clear all stack items:
s.clear();

// Peek at the top value:
v = s.first();
// returns undefined

// Examine the stack length:
len = s.length;
// returns 0
```

##### s.first()

Returns the top stack value (i.e., the value which is "first-out"). If the stack is currently empty, the returned value is `undefined`.

```javascript
var s = stack();
// returns <Stack>

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Peek at the top value:
var v = s.first();
// returns 'bar'
```

##### s.iterator()

Returns an iterator for iterating over a stack. If an environment supports `Symbol.iterator`, the returned iterator is iterable.

```javascript
var s = stack();

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Create an iterator:
var it = s.iterator();

// Iterate over the stack...
var v = it.next().value;
// returns 'bar'

v = it.next().value;
// returns 'foo'

var bool = it.next().done;
// returns true
```

**Note**: in order to prevent confusion arising from stack mutation during iteration, a returned iterator **always** iterates over a stack "snapshot", which is defined as the list of stack elements at the time of `s.iterator()` invocation.

##### s.last()

Returns the bottom stack value (i.e., the value which is "last-out"). If the stack is currently empty, the returned value is `undefined`.

```javascript
var s = stack();
// returns <Stack>

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Peek at the bottom value:
var v = s.last();
// returns 'foo'
```

##### s.length

Stack length.

```javascript
var s = stack();

// Examine the initial stack length:
var len = s.length;
// returns 0

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Retrieve the current stack length:
len = s.length;
// returns 2
```

##### s.pop()

Removes a value from the stack. If the stack is currently empty, the returned value is `undefined`.

```javascript
var s = stack();

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Remove the top value:
var v = s.pop();
// returns 'bar'

// Add a new value to the stack:
s.push( 'beep' );

// Remove the top value:
v = s.pop();
// returns 'beep'
```

##### s.push( value )

Adds a value to the stack.

```javascript
var s = stack();

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Remove the top value:
var v = s.pop();
// returns 'bar'

// Add a new value to the stack:
s.push( 'beep' );

// Remove the top value:
v = s.pop();
// returns 'beep'
```

##### s.toArray()

Returns an array of stack values.

```javascript
var s = stack();

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Get an array of stack values:
var vals = s.toArray();
// returns [ 'bar', 'foo' ]
```

**Note**: the order of the returned array is reverse stack insertion order (i.e., the "newest" stack elements come before the "oldest" stack elements).

##### s.toJSON()

Serializes a stack as JSON.

```javascript
var s = stack();

// Add values to the stack:
s.push( 'foo' ).push( 'bar' );

// Serialize to JSON:
var o = s.toJSON();
// returns { 'type': 'stack', 'data': [ 'bar', 'foo' ] }
```

**Note**: `JSON.stringify()` implicitly calls this method when stringifying a stack instance.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A stack is also known as a Last-In-First-Out (LIFO) queue.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var Stack = require( '@stdlib/utils/stack' );

var stack;
var iter;
var len;
var v;
var i;

// Create a new stack:
stack = new Stack();

// Add some values to the stack:
stack.push( 'foo' );
stack.push( 'bar' );
stack.push( 'beep' );
stack.push( 'boop' );

// Peek at the top and bottom stack values:
v = stack.first();
// returns 'boop'

v = stack.last();
// returns 'foo'

// Inspect the stack length:
len = stack.length;
// returns 4

// Remove the top value:
v = stack.pop();
// returns 'boop'

// Inspect the stack length:
len = stack.length;
// returns 3

// Iterate over the stack:
iter = stack.iterator();
for ( i = 0; i < len; i++ ) {
    console.log( 'Stack value #%d: %s', i+1, iter.next().value );
}

// Clear the stack:
stack.clear();

// Inspect the stack length:
len = stack.length;
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
