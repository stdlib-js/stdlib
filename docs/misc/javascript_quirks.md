# JavaScript Quirks

> A list of JavaScript quirks which should be kept in mind when writing implementations.

## Rounding

1.  The JavaScript standard ([ECMA-262][ecma-262-math-round]) defines the behavior of `Math.round` such that "ties" (e.g., `1.5` and `-1.5`) are rounded toward `+infinity`.

    <!-- eslint-disable stdlib/no-builtin-math -->

    ```javascript
    var x = Math.round( 1.5 );
    // returns 2.0

    x = Math.round( -1.5 );
    // returns -1.0
    ```

    This behavior is relatively uncommon among languages implementing a round operation for floating-point numbers and appears to have originated by following [Java][java-math-round].

    When implementing lower-level math functions which may require rounding, exercise caution when considering whether the built-in rounding behavior is appropriate and ensure that bias is not introduced in computed results.

<section class="links">

[ecma-262-math-round]: http://www.ecma-international.org/ecma-262/6.0/#sec-math.round

[java-math-round]: https://docs.oracle.com/javase/7/docs/api/java/lang/Math.html#round%28double%29

</section> 
