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

# Linked List

> Singly linked list.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var linkedList = require( '@stdlib/utils/linked-list' );
```

#### linkedList()

Returns a new linked list instance.

```javascript
var list = linkedList();
// returns <LinkedList>
```

##### list.clear()

Clears a list.

```javascript
var list = linkedList();
// returns <LinkedList>

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Peek at the first value:
var v = list.first().value;
// returns 'foo'

// Examine the list length:
var len = list.length;
// returns 2

// Clear all list items:
list.clear();

// Peek at the first value:
v = list.first();
// returns undefined

// Examine the list length:
len = list.length;
// returns 0
```

##### list.first()

Returns the first `node`. If the list is currently empty, the returned value is `undefined`.

```javascript
var list = linkedList();
// returns <LinkedList>

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Peek at the first value:
var v = list.first().value;
// returns 'foo'
```

##### list.insert( node, value )

Inserts a `value` into the list **after** a provided list `node`.

```javascript
var list = linkedList();
// returns <LinkedList>

// Add values to the list:
list.push( 'foo' ).push( 'bar' ).push( 'beep' );

// Determine the list length:
var len = list.length;
// returns 3

// Get the second node:
var node = list.first().next;

// Insert a value after the second node:
list.insert( node, 'boop' );

// Determine the list length:
len = list.length;
// returns 4
```

##### list.iterator()

Returns an iterator for iterating over a list. If an environment supports `Symbol.iterator`, the returned iterator is iterable.

```javascript
var list = linkedList();

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Create an iterator:
var it = list.iterator();

// Iterate over the list...
var v = it.next().value;
// returns 'foo'

v = it.next().value;
// returns 'bar'

var bool = it.next().done;
// returns true
```

**Note**: in order to prevent confusion arising from list mutation during iteration, a returned iterator **always** iterates over a list "snapshot", which is defined as the list of list elements at the time of `list.iterator()` invocation.

##### list.last()

Returns the last `node`. If the list is currently empty, the returned value is `undefined`.

```javascript
var list = linkedList();
// returns <LinkedList>

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Peek at the last value:
var v = list.last().value;
// returns 'bar'
```

##### list.length

List length.

```javascript
var list = linkedList();

// Examine the initial list length:
var len = list.length;
// returns 0

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Retrieve the current list length:
len = list.length;
// returns 2
```

##### list.pop()

Removes a value from the end of the list. If the list is currently empty, the returned value is `undefined`.

```javascript
var list = linkedList();

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Remove the last value:
var v = list.pop();
// returns 'bar'

// Add a new value to the list:
list.push( 'beep' );

// Remove the last value:
v = list.pop();
// returns 'beep'
```

##### list.push( value )

Adds a value to the end of the list.

```javascript
var list = linkedList();

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Remove the last value:
var v = list.pop();
// returns 'bar'

// Add a new value to the list:
list.push( 'beep' );

// Remove the last value:
v = list.pop();
// returns 'beep'
```

##### list.remove( node )

Removes a `node` from the list.

```javascript
var list = linkedList();

// Add values to the list:
list.push( 'foo' ).push( 'bar' ).push( 'beep' );

// Determine the list length:
var len = list.length;
// returns 3

// Get the second node:
var node = list.first().next;

// Remove the second node:
var v = list.remove( node );
// returns 'bar'

// Determine the list length:
len = list.length;
// returns 2
```

##### list.shift()

Removes a value from the beginning of the list. If the list is currently empty, the returned value is `undefined`.

```javascript
var list = linkedList();

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Remove the first value:
var v = list.shift();
// returns 'foo'

// Add a new value to the list:
list.push( 'beep' );

// Remove the first value:
v = list.shift();
// returns 'bar'
```

##### list.toArray()

Returns an array of list values.

```javascript
var list = linkedList();

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Get an array of list values:
var vals = list.toArray();
// returns [ 'foo', 'bar' ]
```

##### list.toJSON()

Serializes a list as JSON.

```javascript
var list = linkedList();

// Add values to the list:
list.push( 'foo' ).push( 'bar' );

// Serialize to JSON:
var o = list.toJSON();
// returns { 'type': 'linked-list', 'data': [ 'foo', 'bar' ] }
```

**Note**: `JSON.stringify()` implicitly calls this method when stringifying a list instance.

##### list.unshift( value )

Adds a value to the beginning of the list.

```javascript
var list = linkedList();

// Add values to the list:
list.unshift( 'foo' ).unshift( 'bar' );

// Remove the last value:
var v = list.pop();
// returns 'foo'

// Add a new value to the list:
list.unshift( 'beep' );

// Remove the last value:
v = list.pop();
// returns 'bar'
```

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
var linkedList = require( '@stdlib/utils/linked-list' );

var list;
var iter;
var len;
var v;
var i;

// Create a new linked list:
list = linkedList();

// Add some values to the list:
list.push( 'foo' );
list.push( 'bar' );
list.push( 'beep' );
list.push( 'boop' );

// Peek at the first and last list values:
v = list.first().value;
// returns 'foo'

v = list.last().value;
// returns 'boop'

// Inspect the list length:
len = list.length;
// returns 4

// Remove the last list value:
v = list.pop();
// returns 'boop'

// Inspect the list length:
len = list.length;
// returns 3

// Iterate over the list:
iter = list.iterator();
for ( i = 0; i < len; i++ ) {
    console.log( 'List value #%d: %s', i+1, iter.next().value );
}

// Clear the list:
list.clear();

// Inspect the list length:
len = list.length;
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
