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
* Header file containing strided array type definitions for binary functions.
*/
#ifndef STDLIB_STRIDED_BASE_BINARY_TYPEDEFS_H
#define STDLIB_STRIDED_BASE_BINARY_TYPEDEFS_H

#include <stdint.h>

/**
* Function type for a function accepting and returning single-precision floating-point numbers.
*
* @param x  first single-precision floating-point number
* @param y  second single-precision floating-point number
* @return single-precision floating-point number
*/
typedef float BinaryFcnFloat32( const float x, const float y );

/**
* Function type for a function accepting and returning double-precision floating-point numbers.
*
* @param x  first double-precision floating-point number
* @param y  second double-precision floating-point number
* @return   double-precision floating-point number
*/
typedef double BinaryFcnFloat64( const double x, const double y );

/**
* Function type for a function accepting and returning signed 64-bit integers.
*
* @param x  first signed 64-bit integer
* @param y  second signed 64-bit integer
* @return   signed 64-bit integer
*/
typedef int64_t BinaryFcnInt64( const int64_t x, const int64_t y );

/**
* Function type for a function accepting and returning unsigned 64-bit integers.
*
* @param x  first unsigned 64-bit integer
* @param y  second unsigned 64-bit integer
* @return   unsigned 64-bit integer
*/
typedef uint64_t BinaryFcnUint64( const uint64_t x, const uint64_t y );

/**
* Function type for a function accepting and returning signed 32-bit integers.
*
* @param x  first signed 32-bit integer
* @param y  second signed 32-bit integer
* @return   signed 32-bit integer
*/
typedef int32_t BinaryFcnInt32( const int32_t x, const int32_t y );

/**
* Function type for a function accepting and returning unsigned 32-bit integers.
*
* @param x  first unsigned 32-bit integer
* @param y  second unsigned 32-bit integer
* @return   unsigned 32-bit integer
*/
typedef uint32_t BinaryFcnUint32( const uint32_t x, const uint32_t y );

/**
* Function type for a function accepting and returning signed 16-bit integers.
*
* @param x  first signed 16-bit integer
* @param y  second signed 16-bit integer
* @return   signed 16-bit integer
*/
typedef int16_t BinaryFcnInt16( const int16_t x, const int16_t y );

/**
* Function type for a function accepting and returning unsigned 16-bit integers.
*
* @param x  first unsigned 16-bit integer
* @param y  second unsigned 16-bit integer
* @return   unsigned 16-bit integer
*/
typedef uint16_t BinaryFcnUint16( const uint16_t x, const uint16_t y );

/**
* Function type for a function accepting and returning signed 8-bit integers.
*
* @param x  first signed 8-bit integer
* @param y  second signed 8-bit integer
* @return   signed 8-bit integer
*/
typedef int8_t BinaryFcnInt8( const int8_t x, const int8_t y );

/**
* Function type for a function accepting and returning unsigned 8-bit integers.
*
* @param x  first unsigned 8-bit integer
* @param y  second unsigned 8-bit integer
* @return   unsigned 8-bit integer
*/
typedef uint8_t BinaryFcnUint8( const uint8_t x, const uint8_t y );

#endif // !STDLIB_STRIDED_BASE_BINARY_TYPEDEFS_H
