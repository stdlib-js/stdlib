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

# doctest

> A guide for writing documentation tests (a.k.a. **doctests**).

Documentation tests (**doctests**) are comment annotations which indicate expected behavior. In the spirit of "literate testing" or "executable documentation", doctests serve three primary purposes:

-   to allow readers to gain an intuition as to return value types, ranges, and behavior.
-   to facilitate (in-line) unit testing, thus guarding against regressions.
-   to ensure documentation remains current, documenting behavior as it is, not as it was.

In contrast to unit tests which can become complex and involved, doctests are meant to be small (preferably fitting on a single line) and equivalent to a single assertion. For example,

```javascript
var a = 1;
var b = 2;

var c = a + b;
// returns 3
```

contains the doctest comment `// returns 3`. While trivial, the doctest fulfills the three purposes outlined above, guiding readers in a literate fashion as to expected behavior and allowing straightforward conversion to an equivalent unit test asserting that, upon evaluating the preceding expressions, `c` does, in fact, equal `3`.

The following guide sets forth doctest conventions for documenting expected behavior.

## Guide

### Annotations

A doctest annotation is a syntactically valid language comment consisting of a **marker** and an **expected value**.

> **Note**: most of the following examples will be written in JavaScript which uses C-style comment syntax. While invariably biased toward JavaScript, the doctest annotation convention endeavors to be language agnostic and not limited to any particular comment style. 

Doctest annotations begin with one of three keyword markers (with limited exceptions documented below):

-   `returns`: indicates that a preceding expression should **return** a value.
-   `=>`: indicates that a preceding expression should **print** a value (e.g., via `console.log`) or, alternately, when preceded by a variable name, indicates a **mutated** value.
-   `throws`: indicates that a preceding expression should **throw** an error.

For example,

<!-- eslint-disable no-useless-concat, stdlib/doctest-marker, no-unused-expressions -->

```javascript
('Hello ' + 'world');
// returns 'Hello world'
```

contains a JavaScript doctest annotation for the expression `('Hello ' + 'world')` and indicates that the expression should "return" the value `'Hello world'`. Similarly,

```javascript
console.log( 'Hello world' );
// => 'Hello world'
```

annotates that the expression `console.log( 'Hello world' )` should "print" the value `'Hello world'`. And finally,

<!-- run-disable -->

```javascript
function beep() {
    throw new TypeError( 'boop' );
}

beep();
// throws <TypeError>
```

annotates that the expression `beep()` should throw an exception (in this case, a JavaScript `TypeError`).

Markers may be prefixed with `e.g.,` to indicate that an annotation is exemplary/illustrative. This is useful when a return value is indeterminate. For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var arr = foo();
// e.g., returns [ 1, 3, 2 ]
```

indicates that `foo()` returns an `array` containing the values `1`, `2`, and `3`; however, in this case, we cannot be certain that the value order will match the documented order (e.g., due to random shuffling or non-deterministic key enumeration when mapping/extracting object values).

When doctests are evaluated, annotations prefixed with `e.g.,` should be **skipped**. While we could have used a more general annotation

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var arr = foo();
// returns [...]
```

where `returns [...]` indicates a more generic non-empty `array`, this is perhaps less informative than an exemplary return value. Thus, the `e.g.,` prefix affords a comment-style in accordance with doctest convention while allowing author discretion in promoting clarity in the spirit of literate programming and in spite of limitations in the doctest format.

To indicate value mutation, the `=>` annotation marker is preceded by a value reference (variable name). For example,

```javascript
function swap( arr, i, j ) {
    var tmp = arr[ i ];
    arr[ i ] = arr[ j ];
    arr[ j ] = tmp;
    return true;
}

var x = [ 1, 2 ];

swap( x, 0, 1 );
// x => [ 2, 1 ]
```

indicates that the two-element array to which `x` refers has been mutated after evaluation of the preceding expressions. In this case, as `swap()` returns a `boolean`, the `returns` keyword would not allow us to assert the more salient behavior of array mutation. By using the `{var} =>` convention, we can do so.  

The `e.g.,` and `{var} =>` prefixes can be used in combination. For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
foo( x );
// e.g., x => [ 1, 3, 2 ]
```

indicates that `foo()` mutates `x` which, e.g., due to indeterminacy may have the contents `1`, `2`, and `3`, but not necessarily so and not necessarily in the displayed order.

#### Equality

The most basic (and common) doctest asserts equality. For example,

```javascript
var x = 3.141592653589793;

var y = x;
// returns 3.141592653589793
```

asserts that `y` should equal the numeric value `3.141592653589793`.

```javascript
var s1 = 'foo';
var s2 = 'bar';

var s3 = s1 + s2;
// returns 'foobar'
```

asserts that `s3` should equal the string `'foobar'`. Similarly,

```javascript
var x = 3.141592653589793;

console.log( x );
// => 3.141592653589793
```

asserts that the value `3.141592653589793` is printed to an output destination (e.g., `stdout`).

#### Approximate Equality

Often when generating numeric output, one wishes to display approximate values due to, e.g., floating-point rounding error. To indicate approximate equality, expected values are prefixed with `~`. For example,

```javascript
function npi( i ) {
    return i * 3.141592653589793;
}

var x = npi( 2 );
// returns ~6.28
```

indicates that `x` should **approximately equal** `6.28`. Similarly,

```javascript
function npi( i ) {
    return i * 3.141592653589793;
}

console.log( npi( 2 ) );
// => ~6.28
```

asserts that a value approximately equal to `6.28` will be printed to an output destination (e.g., `stdout`).

> **Note**: doctest implementations should use functionality equivalent to [`roundn`][@stdlib/math/base/special/roundn] for deriving actual (approximate) values against which to test.

#### Deep Equality

Equality assertions are extended to more complex natively supported data structures, with annotation syntax remaining the same. For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var o = foo();
// returns { 'a': [ 1, 2, 3 ] }
```

indicates that `foo()` returns a JavaScript `object` with known contents. While single-line comment syntax is preferred, doctests asserting deep equality can be used with multi-line comment syntax. For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var o = foo();
/* returns
  {
    'a': [ 1, 2, 3 ],
    'b': [ 4, 5, 6 ],
    'c': [ 7, 8, 9 ],
    'd': {
      'beep': 'boop'
    }
  }
*/
```

#### Deep Approximate Equality

Asserting approximately equality is extended to complex data structures. For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var o = foo();
// returns { 'a': [ ~1.1, ~2.2, ~3.3 ] }
```

indicates that `foo()` returns a JavaScript `object` containing a nested array with approximate values `1.1`, `2.2`, and `3.3`. Similarly,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var o = foo();

console.log( JSON.stringify( o ) );
// => '{ "a": [ ~1.1, ~2.2, ~3.3 ] }'
```

indicates that a serialized JavaScript `object` containing a nested array with approximate values `1.1`, `2.2`, and `3.3` will be printed to an output destination, e.g., `stdout`.

#### Type Equality

To assert type equality (where types are implementation defined), the expected return value type should immediately follow the annotation marker and be enclosed by angle brackets: `<type>`.

> **Note**: by convention, types should be lowercase.

For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var str = foo();
// returns <string>
```

asserts that `foo()` returns a value having the type `string`. Type annotations are useful when specific return values are unknown and for indicating the generic return value type.

> **Note**: doctest implementors can apply type equality to printed output; however, where applicable (e.g., non-numeric values) and especially for complex data structures, authors should prefer wildcards (documented below).

#### Type Equality (Arrays)

To support the particular use case of homogeneously typed arrays, the array value type should be followed by square brackets `[]`. For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var str = foo();
// returns <string[]>
```

asserts that `foo()` returns an array (list) value whose contents are of type `string`.

#### Instance Equality

Type equality can be extended (in object-oriented environments) to "instance" equality.

> **Note**: by convention, instance types should begin with a capital letter and be camelcase.

For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var re = foo();
// returns <RegExp>
```

indicates that `foo()` returns a value which is an "instance of" `RegExp` (i.e., a JavaScript regular expression).

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var z = new Complex128( 1.0, -1.0 );
// returns <Complex128>
```

indicates that `z` should be an "instance of" `Complex128` (i.e., a custom class for specifying a 128-bit complex number).

<!-- run-disable -->

```javascript
function foo() {
    throw new Error( 'beep' );
}

foo();
// throws <Error>
```

indicates that `foo()` throws an exception which is an "instance of" `Error`.

#### Deep Instance Equality

In _limited_ circumstances, deep equality can be combined with instance equality. The **predominant** use case is for specialized numeric array types. For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/require-globals -->

```javascript
var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
// returns <Float64Array>[ 1.0, 2.0, 3.0 ]
```

indicates that `x` should be an instance of `Float64Array` (i.e., a custom array type for double-precision floating-point numbers) and have values `1.0`, `2.0`, and `3.0`.

In a similar manner, deep approximate equality can be combined with instance equality. Again, the **predominant** use case is for specialized numeric array types. For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var x = foo();
// returns <Float64Array>[ ~1.0, ~2.0, ~3.0 ]
```

indicates that `x` should be an instance of `Float64Array` and have values approximately equal to `1.0`, `2.0`, and `3.0`.

#### Conditional Equality

In special circumstances, authors may want to express two or more possible return values. To support this use case, possible return values should be separated by two vertical bars `||` (indicating `OR`). For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var v = foo();
// returns <number> || null
```

indicates that `foo()` may return either a value of type `number` **or** the value `null`. The conventions of deep, approximate, and type equality, as documented above, can be applied to each possible return value.

Similarly, although expected to be a **rare** use case, conditional equality can be applied to printed output. For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var v = foo();

console.log( v );
// => 'foo' || null
```

indicates that the expression `console.log( v )` prints to an output destination (e.g., `stdout`) either the string `'foo'` or the value `null`.

#### Wildcards

To support abbreviated output, doctest annotations can use ellipsis to indicate "wildcard" values. For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var v = foo();
// returns ...
```

indicates that `foo()` returns a value of undefined/unspecified type (i.e., a value of "any" type).

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var s = foo();
// returns '...'
```

indicates that `foo()` returns a **non-empty** `string` with undefined/unspecified contents.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var arr = foo();
// returns [...]
```

indicates that `foo()` returns a **non-empty** `array` with undefined/unspecified contents.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var arr = foo();
// returns [ 1, ..., 10 ]
```

indicates that `foo()` returns an `array` whose length is at least `2`, whose first element is `1`, and whose last element is `10`.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var arr = foo();
// returns [ ~1.1, ..., ~10.5 ]
```

indicates that `foo()` returns an `array` whose length is at least `2`, whose first element is approximately `1.1`, and whose last element is approximately `10.5`.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var arr = foo();
// returns <Float64Array>[ ~1.1, ..., ~10.5 ]
```

indicates that `foo()` returns a value which is an "instance of" `Float64Array` and whose length is at least `2`, whose first element is approximately `1.1`, and whose last element is approximately `10.5`.

#### Wildcard (continuations)

To indicate continued output, especially for larger data structures such as arrays (lists), doctest annotations can use ellipsis as "wildcard continuations". For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var arr = foo();
// returns [ 1, 2, ... ]
```

indicates that `foo()` returns an `array` whose length is at least `2`, whose first element is `1`, and whose second element is `2`.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var arr = foo();
// returns { 'a': true, 'b': false, ... }
```

indicates that `foo()` returns a JavaScript `object` having the properties `a` and `b` and zero or more **additional** undefined/unspecified properties.

* * *

## Notes

-   Write doctests with care. Avoid the extravagant. Prefer simple test cases.
-   Avoid obscure test cases, as these typically make for bad documentation.
-   Doctests complement, but are **not** a substitute for, unit testing. While both doctests and unit tests aid in regression testing, one of the principle strengths of doctests is the ability to interleave (in a more natural manner) code and explanatory text. Doctests are **not** the place to exhaustively test, especially with little explanation, complex edge cases involving significant preceding code. As a general rule, use doctests to convey essential aspects as simply and concisely as possible in a literate manner. Use unit tests to thoroughly and exhaustively explore and probe API contracts and expected behavior.
-   Writing effective doctests is an _art_ in knowing when, how much, and (precisely) what you want to convey to the reader. The more you write and use doctests, the better your intuition will be in recognizing what is truly essential and how each essential aspect should be conveyed.

* * *

## Command-line Interfaces

Doctest annotations can be extended to command-line interface (CLI) terminal output. Annotations, however, differ as follows:

-   Preceding terminal commands should include a command-line prompt. For example,

    <!-- run-disable -->

    ```bash
    $ echo 'beep'
    beep
    ```

    where `$` is the command-line prompt. Including the command-line prompt allows for straightforward identification of commands and expected output.

-   Expected output does **not** need an annotation marker prefix. For example,

    <!-- run-disable -->

    ```bash
    $ echo 'boop'
    boop
    ```

    does not require `returns` or `=>` to indicate the expected value `boop`. We simply **assume** that whatever is not preceded by a command-line prompt is an expected value.

-   Multiple successive wildcards can be used to indicate repeated output. For example,

    <!-- run-disable -->

    ```bash
    $ foo
    ...
    ...
    ```

    indicates that the `foo` command prints two or more lines of undefined/unspecified output. This convention is particularly useful when indicating that a command will/may continually print (a potentially indefinite amount of) output until its process is stopped.

-   The only prefix which is supported is `e.g.,` in order to indicate exemplary/illustrative output.

    <!-- run-disable -->

    ```bash
    $ foo
    e.g., foobar
    ```

-   Command-line interfaces primarily communicate with one another using text (the universal interface), and, thus, expected output is **always** interpreted as text. Accordingly, language syntax distinguishing value types should be **omitted** (as used, e.g., in `returns` doctest annotations), and neither conditional nor type equality annotations should be supported.

* * *

## stdlib

### Annotations

stdlib extends doctest annotations to accommodate data structures commonly used in numerical and scientific computing and to accommodate specific JavaScript features.

#### matrices

For matrices (and, more generally, ndarrays), stdlib uses a "slice" syntax to indicate matrix contents. For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var mat = foo();
/* returns

  mat[':'] = [ 1.14,   -3.14,
               0.00,    0.50  ]
*/
```

indicates that `foo()` returns a `2x2` matrix whose entire contents, when expressed as a linear array (`':'`), equal `1.14`, `-3.14`, `0.00`, and `0.50`.

Less commonly, one may want to assert a sub-matrix. For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var mat = foo();
/* returns

  mat['1:2,2:3'] = [ 1.14,   -3.14,
                     0.00,    0.50  ]
*/
```

indicates that `foo()` returns an `NxM` matrix containing a `2x2` sub-matrix beginning with the first row and second column whose contents, when expressed as a linear array, equal `1.14`, `-3.14`, `0.00`, and `0.50`.

Additionally, matrices can include wildcards. For example, 

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var mat = foo();
/* returns

  mat[':'] = [ 1.14,   ...,   -3.14,
               0.00,   ...,    0.50,
                ...,   ...,     ...  ]
*/
```

indicates that `foo()` returns a matrix having at least `2` rows and at least `2` columns and whose  contents include the values `1.14`, `-3.14`, `0.00`, and `0.50`.

Lastly, similar to other complex data structures, approximate values are demarcated with a tilde `~`. For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var mat = foo();
/* returns

  mat[':'] = [ ~1.14,   ~-3.14,
                0.00,    ~0.50  ]
*/
```

#### ndarrays

ndarrays extend the conventions for matrices to arbitrary dimensions. For example,

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var x = foo();
/* returns

  x[':,:,0'] = [ 1.14,   -3.14,
                 0.00,    0.50  ]

  x[':,0,:'] = [ 7.89,   -1.22,
                 0.40,    0.26  ]

  x['0,:,:'] = [ 1.98,    2.23,
                 0.45,    0.26  ]
*/
```

indicates that `foo()` returns a 3-dimensional n-dimensional array (ndarray) with `2x2` matrix slices having specified contents.

> **WARNING**: especially for large matrices and ndarrays, avoid complex return values. Prefer instead to test individual elements and/or small, highly-specific slices which provide the minimum amount of essential information required to illustrate expected behavior.

### Command-line Interfaces

Command-line interface doctest annotations should be plain text, with the sole exception of type equality annotations which contain JavaScript **primitive** types. For example,

<!-- run-disable -->

```bash
$ foo
<boolean>
```

indicates that the command `foo` prints a JavaScript `boolean` value. Similarly,

<!-- run-disable -->

```bash
$ foo
<number>
```

indicates that the command `foo` prints a JavaScript `number` value.

> **WARNING**: extending CLI annotation conventions to support JavaScript primitive types is not without risk, as a doctest cannot distinguish between `<type>` indicating a primitive type or the literal character string `<type>`. Accordingly, authors should minimize their use of type equality in command-line interface doctests.

### Notes

-   For JavaScript doctests, printed output (via `console.log()`) **should be** valid JSON and/or a canonical serialized string representation. In general, valid JSON significantly simplifies the de-serialization and comparison of expected values. Because of this constraint, authors should think carefully about how and what is printed as expected output. For example, rather than print a large serialized JSON object, one might choose to print particular properties whose serialized expected values are more readily parsed and compiled.
-   The matrix and ndarray doctest annotations documented above apply **only** to `returns` doctest annotations and **not** to printed output. When printing matrices and ndarrays, either serialize as JSON or to a canonical string.

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/roundn

</section>

<!-- /.links -->
