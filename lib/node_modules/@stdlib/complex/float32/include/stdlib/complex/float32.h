/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#ifndef STDLIB_COMPLEX_FLOAT32_H
#define STDLIB_COMPLEX_FLOAT32_H

#include <complex.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

// Check for C11 support where we can precisely define a complex number and thus avoid issues concerning infinities and NaNs as real and/or imaginary components... (TODO: revisit the following check; similar to NumPy, we may want to check for a compile time variable (e.g., STDLIB_USE_C99_COMPLEX), rather than checking for C11 support, especially if we are not using C11 functionality)
#if defined(_Imaginary_I) && defined(CMPLXF)

/**
* An opaque type definition for a single-precision complex floating-point number.
*/
typedef float complex stdlib_complex64_t;

// If we aren't going to use the native complex number type, we need to define a complex number as an "opaque" struct (here, "opaque" meaning type consumers should **not** be accessing the components directly, but only through dedicated functions) for storing the real and imaginary components...
#else

/**
* An opaque type definition for a single-precision complex floating-point number.
*
* @example
* stdlib_complex64_t z;
*
* // Set the real component:
* z.re = 5.0f;
*
* // Set the imaginary component:
* z.im = 2.0f;
*/
typedef struct {
	/**
	* Real component.
	*/
	float re;

	/**
	* Imaginary component.
	*/
	float im;
} stdlib_complex64_t;

#endif

/**
* An opaque type definition for a union for accessing the real and imaginary parts of a single-precision complex floating-point number.
*
* @example
* float realf( const stdlib_complex64_t z ) {
*     stdlib_complex64_parts_t v;
*
*     // Assign a single-precision complex floating-point number:
*     v.value = z;
*
*     // Extract the real component:
*     float re = v.parts[ 0 ];
*
*     return re;
* }
*
* // ...
*
* // Create a complex number:
* stdlib_complex64_t z = stdlib_complex64( 5.0f, 2.0f );
*
* // ...
*
* // Access the real component:
* float re = realf( z );
* // returns 5.0f
*/
typedef union {
	// An opaque type for the output value (e.g., could be a `struct` or a C99 complex number):
	stdlib_complex64_t value;

	// Leverage the fact that C99 specifies that complex numbers have the same representation and alignment as a two-element array (see <https://en.cppreference.com/w/c/language/arithmetic_types#Complex_floating_types>), where the first element is the real component and the second element is the imaginary component, thus allowing us to create a complex number irrespective of its native data type (e.g., `struct` vs `float complex`):
	float parts[ 2 ];
} stdlib_complex64_parts_t;

/**
* Returns a single-precision complex floating-point number.
*/
stdlib_complex64_t stdlib_complex64( const float real, const float imag );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_COMPLEX_FLOAT32_H
