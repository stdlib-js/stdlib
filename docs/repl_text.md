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

# REPL Text

> A guide for writing REPL texts.

Read-eval-print-loop (REPL) texts are plain text documents which provide help information in a REPL context. A typical use case is when a user is performing various actions within a REPL and would like to know how to use a particular function interface. For example,

```bash
> help( lowercase )

lowercase( str )
    Converts a string to lowercase.

    Parameters
    ----------
    str: string
        Input string.

    Returns
    -------
    out: string
        Lowercase string.

    Examples
    --------
    > var out = lowercase( 'bEEp' )
    'beep'

    See Also
    --------
    uppercase
```

The above REPL text displays the function interface `lowercase( str )`, as well as provides more detailed information, including input parameter types, return value types, and examples.

## Guide

### Format

The general format of a REPL text is as follows:

```text
{{alias}}( param1, param2, ... )
    A short description.

    A longer description, including notes explaining special cases and use
    cases.

    Parameters
    ----------
    param1: <type>
        Parameter description.

    param2: <type>
        Parameter description.

    Returns
    -------
    out: <type>
        Return value description.

    Examples
    --------
    > var out = {{alias}}()
    <output>

    References
    ----------
    - Nadler, Boaz. 2006. "Design Flaws in the Implementation of the Ziggurat
      and Monty Python methods (and some remarks on MATLAB randn)." *arXiv*
      abs/math/0603058 (March).

    See Also
    --------
```

### Spacing

REPL texts should use `4` space indentation. Do **not** use tab indentation, as tabs are rendered inconsistently across terminals.

### Wrapping

REPL texts should **never** exceed `80` characters in width. Be sure to wrap all text longer than `80` characters.

### Interface

An interface may be a primitive constant (e.g., `number`, `string`, `boolean`), an `Object` (e.g., a regular expression), or a `Function`. If an interface is a function, the interface should display all required and optional parameters. If an interface has associated properties and/or methods, document each method and property separately.

```text
foo( bar )
    A short description.

    ...

    Examples
    --------
    ...

foo.beep( boop )
    A short description.

    ...

    Examples
    --------
    ...

foo.boop( beep )
    A short description.

    ...

    Examples
    ________
    ...

    References
    ----------
    ...

    See Also
    --------
```

A few notes:

-   In a function interface, each parameter should be surrounded by `1` space to the left and `1` space to the right.

    ```text
    foo( beep, boop, bop )
        A short description.

        ...
    ```

-   If a function parameter is **optional**, enclose the parameter in square brackets.

    ```text
    foo( beep[, boop[, bop]] )
        A short description.

        ...
    ```

### Description

#### Short Description

The short description should be a single sentence written in the simple present tense. For example,

```text
lowercase( str )
    Converts a string to lowercase.

    ...
```

Do **not** write the description in the imperative mood. For example, avoid

```text
lowercase( str )
    Convert a string to lowercase.

    ...
```

An empty line should **always** follow the short description.

#### Extended Description

An extended description should include auxiliary information which helps a user understand expected behavior. For example,

```text
dcopy( N, x, strideX, y, strideY )
    Copies values from `x` into `y`.

    The `N` and `stride` parameters determine how values from `x` are copied
    into `y`.

    Indexing is relative to the first index. To introduce an offset, use typed
    array views.

    If `N` is less than or equal to 0, the function returns `y` unchanged.

    Parameters
    ----------
    ...
```

Each separate _note_ within an extended description should be followed by an empty line.

##### Lists

To include a list in an extended description, use the following style

```text
    ...

    This is a list:

    - item 1
    - item 2

    ...
```

### Parameters

The `Parameters` section states the parameter name, the parameter type, and a short description. An empty line should follow each parameter declaration.

```text
pad( str, len[, options] )
    Short description.

    Parameters
    ----------
    str: string
        Input string.

    len: integer
        Output string length.

    options: Object (optional)
        Options.

    options.lpad: string (optional)
        String used to left pad.

    options.rpad: string (optional)
        String used to right pad.

    options.centerRight: boolean (optional)
        Boolean indicating whether to center right in the event of a tie.
        Default: `false` (i.e., center left).

    ...
```

To document a variadic interface,

```text
foo( ...args )
    A short description.

    Parameters
    ----------
    args: ...string
        String arguments.

    ...
```

The following parameter types are supported:

-   `any`: if a parameter can be any type.
-   `null`: if a parameter must be `null`.
-   `undefined`: if a parameter must be `undefined`.
-   `string`: if a parameter must be a `string` primitive.
-   `number`: if a parameter must be a `number` primitive.
-   `integer`: if a parameter must be a `number` primitive having an integer value.
-   `boolean`: if a parameter must be a `boolean` primitive.
-   `Function`: if a parameter must be a `function`.
-   `Object`: if a parameter must be an `object`.
-   `Array`: if a parameter must be an `array`.
-   `Array<type>`: if a parameter must be an `array` containing only values of a particular type.
-   `ArrayLike`: if a parameter must be array-like.
-   `ArrayLike<type>`: if a parameter must be array-like containing only values of a particular type.
-   `ArrayLikeObject`: if a parameter must be an array-like `object`.
-   `ArrayLikeObject<type>`: if a parameter must be an array-like `object` containing only values of a particular type.
-   `RegExp`: if a parameter must be a regular expression.
-   `Date`: if a parameter must be a `Date` object.
-   `Buffer`: if a parameter must be a Node.js `Buffer` object.
-   `Error`: if a parameter must be an `Error` object.
-   `TypeError`: if a parameter must be a `TypeError` object.
-   `SyntaxError`: if a parameter must be a `SyntaxError` object.
-   `RangeError`: if a parameter must be a `RangeError` object.
-   `ReferenceError`: if a parameter must be a `ReferenceError` object.
-   `EvalError`: if a parameter must be an `EvalError` object.
-   `URIError`: if a parameter must be a `URIError` object.
-   `TypedArray`: if a parameter must be a typed array.
-   `Float64Array`: if a parameter must be a `Float64Array`.
-   `Float32Array`: if a parameter must be a `Float32Array`.
-   `Int32Array`: if a parameter must be an `Int32Array`.
-   `Uint32Array`: if a parameter must be a `Uint32Array`.
-   `Int16Array`: if a parameter must be an `Int16Array`.
-   `Uint16Array`: if a parameter must be a `Uint16Array`.
-   `Int8Array`: if a parameter must be an `Int8Array`.
-   `Uint8Array`: if a parameter must be a `Uint8Array`.
-   `Uint8ClampedArray`: if a parameter must be a `Uint8ClampedArray`.
-   `ArrayBuffer`: if a parameter must be an `ArrayBuffer`.
-   `SharedArrayBuffer`: if a parameter must be a `SharedArrayBuffer`.
-   `ndarray`: if a parameter must be an `ndarray`.

For parameters which may be more than one type, use a `|` separator.

```text
foo( value )
    A short description.

    Parameters
    ----------
    value: string|number|boolean
        A parameter description.

    ...
```

In general, avoid specialized and/or uncommon value types (e.g., `NonNegativeInteger`, `Probability`, etc). Users are unable to discern the meaning of specialized types without access to external (possibly out-of-band) documentation.

A few notes:

-   Parameter names should **match** the parameter names in function and method signatures.
-   If a parameter is **optional**, explicitly state that the parameter is optional **after** the type declaration.
-   For `Object` parameters, list each required and/or optional `Object` property as a separate parameter.
-   All parameter descriptions should end with a period.
-   If a `function` does not have parameter values, **omit** this section.

### Returns

The `Returns` section states the return value name, the return value type, and a short description. An empty line should follow each return value declaration.

```text
    ...

    Returns
    -------
    out: <type>
        A short description.

    ...
```

Conventional names for output values include

-   `bool`: for `boolean` return values.
-   `fcn`: for `Function` return values.
-   `out`: for generic return values.
-   `y`: for `number` return values mathematical functions satisfying the form `y = f(x)`.

For return values which can be more than one type, use a `|` separator.

```text
    ...

    Returns
    -------
    out: Buffer|Error
        A short description.

    ...
```

For constructors returning class instances, the class name may be used as the return type.

```text
Foo()
    Returns a new instance.

    Returns
    -------
    out: Foo
        A new instance.

    ...
```

A few notes:

-   For `Object` return values having a defined structure (e.g., mathematical models), list each `Object` property as a separate return value and separate each property with an empty line.
-   Return value types are the same as for parameters.
-   All return value descriptions should end with a period.
-   If a `function` does not have return values, **omit** this section.

### Examples

Examples should demonstrate essential behavior.

```text
foo( str )
    A short description.

    Parameters
    ----------
    str: string
        An input value.

    Returns
    -------
    out: string
        An output value.

    Examples
    --------
    > var out = foo( 'beep' )
    'boop'

    ...
```

To delineate examples demonstrating conceptually distinct behavior, use comment headings and separate each example with an empty line.

```text
foo( str )
    A short description.

    Parameters
    ----------
    str: string|number
        An input value.

    Returns
    -------
    out: string
        An output value.

    Examples
    --------
    // String inputs:
    > var out = foo( 'beep' )
    'boop'

    // Number inputs:
    > var x = 3.14;
    > out = foo( x )
    10.0

    ...
```

While single line user input is preferred, multi-line user input is sometimes required. For each line of multi-line input, indicate that a line is a continuation of the previous line by prefixing the line with three periods and a space.

```text
foo( clbk )
    A short description.

    Parameters
    ----------
    clbk: Function
        A callback.

    Examples
    --------
    > function clbk( error, results ) {
    ...     if ( error ) {
    ...         throw error;
    ...     }
    ...     console.log( results );
    ... };
    > foo( clbk );

    ...
```

A few notes:

-   Begin each line of user input with a `>` symbol.
-   Place expected output on the line immediately following a line of user input.
-   To indicate silenced output (i.e., a line of user input whose output is suppressed), end a user input line with a semicolon. Note that this includes `Function` declarations.
-   Only declare a variable the first time a variable is used.
-   Where possible, **prefer** single line user input over multi-line input. The latter is harder for users to copy and paste within a REPL context.
-   A REPL text should **always** include an `Examples` section.

### References

Only include references **if** usage requires citations. If not required, **remove** the `References` section. To include citations, place each on a separate line without line separation. For example,

```text
    ...

    References
    ----------
    - Nadler, Boaz. 2006. "Design Flaws in the Implementation of the Ziggurat
      and Monty Python methods (and some remarks on MATLAB randn)." *arXiv*
      abs/math/0603058 (March).
    - McFarland, Christopher D. 2016. "A modified ziggurat algorithm for
      generating exponentially and normally distributed pseudorandom numbers."
      *Journal of Statistical Computation and Simulation* 86 (7): 1281–94.
      doi:10.1080/00949655.2015.1060234.

    ...
```

A few notes:

-   Each citation should be a properly formatted citation.
-   Citations are not required to include URLs.
-   Include only **one** `References` section per REPL text.

### See Also

The `See Also` section should include related functionality available in a REPL context. Each entry in the section should have a corresponding REPL text and thus be available to a user in a manner similar to the source REPL text.

```text
    ...

    See Also
    --------
    beep, boop, bar
```

A few notes:

-   Separate each entry with a comma followed by a space.
-   Insert an empty line following the last line containing entries.
-   If a `See Also` section does **not** contain entries, insert two empty lines following the section header.
-   Include only **one** `See Also` section per REPL text.

* * *

## stdlib

-   All `stdlib` REPL texts should use an alias placeholder.

    ```text
    {{alias}}( str )
        A short description.

        ...
        
        Examples
        --------
        > var out = {{alias}}( 'beep' )
        'boop'

        ...
    ```

    The alias is injected via a separate build process which manages the REPL namespace.

-   Do **not** manually add entries to the `See Also` section. Entries are injected via a separate build process which manages the REPL namespace.

-   To reference other REPL functionality, use an alias placeholder which references the package name.

    ```text
    {{alias}}( x )
        A short description.

        ...
        
        Examples
        --------
        > var out = {{alias}}( {{alias:@stdlib/constants/math/float64-pi}} )
        10.0

        ...
    ```

    External aliases are resolved during a separate build process which manages the REPL namespace. Where possible, limit the use of external aliases unless absolutely necessary.

-   All references should originate from the `stdlib` bibliographic database. Generate reference citations using `make citation` to ensure a consistent bibliographic style.
