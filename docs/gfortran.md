# gfortran

> GNU Fortran [compiler][gfortran].

## Installation

-   Prebuilt binaries are available through the GNU Fortran [wiki][gfortran-wiki].
-   On MacOS, you may need to update Xcode.

* * *

## Commands

### Compilation

To compile a Fortran file,

```bash
$ gfortran -std=f95 -ffree-form -O3 -Wall -Wextra -Wimplicit-interface -pedantic -c <file>
```

The command options are as follows:

-   `-std`: specify the Fortran standard to which the program is expected to conform.

-   `-ffree-form`: indicate that the layout is free-form source code.

-   `-O3`: aggressive optimization. Note that this option increases compilation time and may lead to larger binaries.

-   `-Wall`: enable commonly used warning options, including:

    -   `-Waliasing`: warn if unnecessary aliasing of dummy arguments.
    -   `-Wampersand`: warn about missing ampersand in continued character constants.
    -   `-Wconversion`: warn about implicit conversions which are likely to change the value of the expression after conversion.
    -   `-Wsurprising`: warn if source code contains "suspicious" code constructs.
    -   `-Wc-binding-type`: warn if variable might not be C compatible.
    -   `-Wintrinsics-std`: warn if a procedure named like an _intrinsic_ is not available in the standard to which the program is expected to conform.
    -   `-Wtabs`: warn if source code contains a `\tab` character.
    -   `-Wintrinsic-shadow`: warn if a user-defined procedure or module procedure has the same name as an _intrinsic_.
    -   `-Wline-truncation`: warn if a source code line will be truncated.
    -   `-Wtarget-lifetime`: warn if the pointer in a pointer assignment might have a longer lifetime than the its target.
    -   `-Winteger-division`: warn if integer division of constants is truncated.
    -   `-Wreal-q-constant`: warn if a real-literal-constant contains a `q` exponent-letter.
    -   `-Wunused`: warn if source code contains unused dummy arguments.
    -   `-Wundefined-do-loop`: warn if a `DO` loop with step equal to either `1` or `-1` underflows or overflows during induction variable iteration.

-   `-Wextra`: warn if source code contains problematic language features. Enables the following options:

    -   `-Wcompare-reals`: warn when comparing real or complex types for equality or inequality.
    -   `-Wunused-parameter`: warn if source code contains unused `PARAMETER` values.

-   `-Wimplicit-interface`: warn if a procedure is called without an explicit interface.

-   `-pedantic`: warn if source code contains Fortran 95 extensions and C-language constructs.

-   `-c`: compile but do not link. Output is an object file.

Other possible options include:

-   `-Wconversion-extra`: warn if source code contains implicit conversion between different types and kinds. Does not imply `-Wconversion`.
-   `-fexternal-blas`: generate calls to BLAS functions for some matrix operations, e.g., `MATMUL`, instead of using internal `gfortran` algorithms, if the size of the matrices involved is larger than a given limit (see `-fblas-matmul-limit`). This may be useful if an optimized BLAS library is available. The BLAS library must be specified at link time.
-   `-fno-underscoring`: do not transform names of entities specified in Fortran source files by appending underscores. Be careful when using this option, as user-defined names may conflict with a name in a system library.
-   `-fcheck=bounds`: enable generation of run-time checks for array subscripts and against the declared minimum and maximum values. Also, check array indices for assumed and deferred shape arrays against the actual allocated bounds and ensure that all string lengths are equal for character array constructors without an explicit typespec. Note that generated checks may have a performance cost.
-   `-o <file>`: save output to a `file`.

### Syntax Errors

To check for syntax errors without compiling, provide a `-fsyntax-only` option.

```bash
$ gfortran [options] -fsyntax-only <file>
```

* * *

## Examples

### Combining C and Fortran

A common scenario in numeric computing is exposing numeric computing libraries written in Fortran as C functions. To illustrate how one might proceed, consider a Fortran function which adds two numbers and returns the sum.

```fortran
!>
! add.f
!<
double precision function add( x, y )
  implicit none
  ! ..
  ! Scalar arguments:
  double precision :: x, y
  ! ..
  add = x + y;
  return
end function add
```

While `add` may be used in conjunction with other Fortran files, we cannot use `add` directly from C because Fortran expects arguments to be passed by reference rather than by value. Furthermore, while not applicable here, Fortran functions can only return scalar values, not arrays. Thus, the general best practice is to wrap `add` as a subroutine (equivalent of a C function returning `(void)`), where we can pass a pointer for storing the output return value. 

```fortran
!>
! addsub.f
!<
subroutine addsub( x, y, sum )
  implicit none
  ! ..
  ! External functions:
  interface
    double precision function add( x, y )
      double precision :: x, y
    end function add
  end interface
  ! ..
  ! Scalar arguments:
  double precision :: sum, x, y
  ! ..
  sum = add( x, y )
  return
end subroutine addsub
```

We can define the prototype for `addsub` in a header file, just like we might for C/C++ functions.

```c
/*
* add_fortran.h
*/
#ifndef ADD_FORTRAN_H
#define ADD_FORTRAN_H

#ifdef __cplusplus
extern "C" {
#endif

void addsub( const double *x, const double *y, double *sum );

#ifdef __cplusplus
}
#endif

#endif
```

where we prevent name mangling using `extern "C"`. Now that our Fortran code is ready, we can wrap the Fortran subroutine in a C function, passing along a reference for storing return value.

```c
/*
* add_f.c
*/
#include "add.h"
#include "add_fortran.h"

double c_add( const double x, const double y ) {
  double sum;
  addsub( &x, &y, &sum );
  return sum; 
}
```

Similar to our Fortran subroutine above, we can create a header file for our C function.

```c
/*
* add.h
*/
#ifndef ADD_H
#define ADD_H

#ifdef __cplusplus
extern "C" {
#endif

double c_add( const double x, const double y );

#ifdef __cplusplus
}
#endif

#endif
```

These five files together comprise a library which may be used by other libraries and executables. For instance,

```c
/*
* main.c
*/
#include <stdio.h>
#include "add.h"

int main( void ) {
  double sum = add( 1, 2 );
  printf( "Result: %.2f\n", sum );
  return 0;
}
```

To run the example, we must first compile our Fortran files.

```bash
$ gfortran -std=f95 -free-form -O3 -fno-underscoring -c -o add.o add.f
$ gfortran -std=f95 -free-form -O3 -fno-underscoring -c -o addsub.o addsub.f
```

Note that `-fno-underscoring` prevents [gfortran][gfortran] from modifying function names. This ensures that the name used in our C code matches the exported symbol. Be careful, however, as non-mangled names may conflict with existing symbols.

Next, we compile our C files.

```bash
$ gcc -std=c99 -O3 -I add_fortran.h -I add.h -c -o add_f.o add_f.c
$ gcc -std=c99 -O3 -I add_fortran.h -I add.h -c -o main.o main.c
```

Finally, we link the object files using [gfortran][gfortran], thus generating an executable.

```bash
$ gfortran -o main add.o addsub.o add_f.o main.o
```

Alternatively, we can compile with `gcc` making sure to link the standard Fortran libraries (`-lgfortran`).

```bash
$ gcc -o main add.o addsub.o add_f.o main.o -lgfortran
```

To run the executable,

```bash
$ ./main
```

* * *

## Resources

-   [Fortran 90 Subprograms][fortran-90-subprograms]
-   [Summary of Fortran][summary-of-fortran]
-   [C with Fortran][c-with-fortran]
-   [Intel: Calling BLAS Functions that Return the Complex Values in C/C++ Code][intel-mkl]

<!-- <definitions> -->

[gfortran]: https://gcc.gnu.org/fortran/

[gfortran-wiki]: https://gcc.gnu.org/wiki/GFortranBinaries

[fortran-90-subprograms]: http://www.cs.mtu.edu/~shene/COURSES/cs201/NOTES/F90-Subprograms.pdf

[summary-of-fortran]: https://www.math.utah.edu/~beebe/software/fortran-documentation/ftnsum.pdf

[c-with-fortran]: https://www.math.utah.edu/software/c-with-fortran.html

[intel-mkl]: https://software.intel.com/en-us/node/528729#IX_COMPLEX_BLAS_LEVEL_1_1

<!-- </definitions> -->
