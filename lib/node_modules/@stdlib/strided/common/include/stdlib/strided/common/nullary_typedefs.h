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
* Header file containing strided array type definitions for nullary functions.
*/
#ifndef STDLIB_STRIDED_COMMON_NULLARY_TYPEDEFS_H
#define STDLIB_STRIDED_COMMON_NULLARY_TYPEDEFS_H

#include <stdint.h>

/**
* Function interface for single-precision floating-point numbers.
*
* @return single-precision floating-point number
*/
typedef float NullaryFcnFloat32();

/**
* Function interface for double-precision floating-point numbers.
*
* @return double-precision floating-point number
*/
typedef double NullaryFcnFloat64();

/**
* Function interface for signed 64-bit integers.
*
* @return signed 64-bit integer
*/
typedef int64_t NullaryFcnInt64();

/**
* Function interface for unsigned 64-bit integers.
*
* @return unsigned 64-bit integer
*/
typedef uint64_t NullaryFcnUint64();

/**
* Function interface for signed 32-bit integers.
*
* @return signed 32-bit integer
*/
typedef int32_t NullaryFcnInt32();

/**
* Function interface for unsigned 32-bit integers.
*
* @return unsigned 32-bit integer
*/
typedef uint32_t NullaryFcnUint32();

/**
* Function interface for signed 16-bit integers.
*
* @return signed 16-bit integer
*/
typedef int16_t NullaryFcnInt16();

/**
* Function interface for unsigned 16-bit integers.
*
* @return unsigned 16-bit integer
*/
typedef uint16_t NullaryFcnUint16();

/**
* Function interface for signed 8-bit integers.
*
* @return signed 8-bit integer
*/
typedef int8_t NullaryFcnInt8();

/**
* Function interface for unsigned 8-bit integers.
*
* @return unsigned 8-bit integer
*/
typedef uint8_t NullaryFcnUint8();

#endif // !STDLIB_STRIDED_COMMON_NULLARY_TYPEDEFS_H
