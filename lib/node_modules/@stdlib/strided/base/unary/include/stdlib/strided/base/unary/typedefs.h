/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/**
* Header file containing strided array type definitions for unary functions.
*/
#ifndef STDLIB_STRIDED_BASE_UNARY_TYPEDEFS_H
#define STDLIB_STRIDED_BASE_UNARY_TYPEDEFS_H

#include <stdint.h>

/**
* Function type for a function accepting and returning single-precision floating-point numbers.
*
* @param x  single-precision floating-point number
* @return   single-precision floating-point number
*/
typedef float UnaryFcnFloat32( const float x );

/**
* Function type for a function which accepts a single-precision floating-point number and returns a signed 64-bit integer.
*
* @param x  single-precision floating-point number
* @return   signed 64-bit integer
*/
typedef int64_t UnaryFcnFloat32Int64( const float x );

/**
* Function type for a function which accepts a single-precision floating-point number and returns a signed 32-bit integer.
*
* @param x  single-precision floating-point number
* @return   signed 32-bit integer
*/
typedef int32_t UnaryFcnFloat32Int32( const float x );

/**
* Function type for a function which accepts and returns double-precision floating-point numbers.
*
* @param x  double-precision floating-point number
* @return   double-precision floating-point number
*/
typedef double UnaryFcnFloat64( const double x );

/**
* Function type for a function which accepts a double-precision floating-point number and returns a signed 64-bit integer.
*
* @param x  double-precision floating-point number
* @return   signed 64-bit integer
*/
typedef int64_t UnaryFcnFloat64Int64( const double x );

/**
* Function type for a function which accepts a double-precision floating-point number and returns a signed 32-bit integer.
*
* @param x  double-precision floating-point number
* @return   signed 32-bit integer
*/
typedef int32_t UnaryFcnFloat64Int32( const double x );

/**
* Function type for a function which accepts and returns signed 64-bit integers.
*
* @param x  signed 64-bit integer
* @return   signed 64-bit integer
*/
typedef int64_t UnaryFcnInt64( const int64_t x );

/**
* Function type for a function which accepts and returns unsigned 64-bit integers.
*
* @param x  unsigned 64-bit integer
* @return   unsigned 64-bit integer
*/
typedef uint64_t UnaryFcnUint64( const uint64_t x );

/**
* Function type for a function which accepts and returns signed 32-bit integers.
*
* @param x  signed 32-bit integer
* @return   signed 32-bit integer
*/
typedef int32_t UnaryFcnInt32( const int32_t x );

/**
* Function type for a function which accepts and returns unsigned 32-bit integers.
*
* @param x  unsigned 32-bit integer
* @return   unsigned 32-bit integer
*/
typedef uint32_t UnaryFcnUint32( const uint32_t x );

/**
* Function type for a function which accepts and returns signed 16-bit integers.
*
* @param x  signed 16-bit integer
* @return   signed 16-bit integer
*/
typedef int16_t UnaryFcnInt16( const int16_t x );

/**
* Function type for a function which accepts and returns unsigned 16-bit integers.
*
* @param x  unsigned 16-bit integer
* @return   unsigned 16-bit integer
*/
typedef uint16_t UnaryFcnUint16( const uint16_t x );

/**
* Function type for a function which accepts and returns signed 8-bit integers.
*
* @param x  signed 8-bit integer
* @return   signed 8-bit integer
*/
typedef int8_t UnaryFcnInt8( const int8_t x );

/**
* Function type for a function which accepts and returns unsigned 8-bit integers.
*
* @param x  unsigned 8-bit integer
* @return   unsigned 8-bit integer
*/
typedef uint8_t UnaryFcnUint8( const uint8_t x );

#endif // !STDLIB_STRIDED_BASE_UNARY_TYPEDEFS_H
