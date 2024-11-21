/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

#ifndef STDLIB_NAPI_ARGV_H
#define STDLIB_NAPI_ARGV_H

#include "stdlib/assert/napi/status_ok.h"
#include <node_api.h>

/**
* Macro for retrieving Node-API add-on callback arguments.
*
* @param env      environment under which the function is invoked
* @param info     callback data
* @param argv     variable name for storing argument values
* @param argc     variable name for storing the number of provided arguments
* @param nargs    expected number of arguments
*
* @example
* #include <node_api.h>
*
* // ...
*
* static napi_value addon( napi_env env, napi_callback_info info ) {
*     // Retrieve callback arguments:
*     STDLIB_NAPI_ARGV( env, info, argv, argc, 6 );
*
*     // ...
* }
*/
#define STDLIB_NAPI_ARGV( env, info, argv, argc, nargs )                       \
	size_t argc = nargs;                                                       \
	napi_value argv[ nargs ];                                                  \
	STDLIB_ASSERT_NAPI_STATUS_OK_RET_NULL( env, napi_get_cb_info( env, info, &argc, argv, NULL, NULL ), "" ) \
	if ( argc != nargs ) {                                                     \
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_NULL( env, napi_throw_error( env, NULL, "invalid invocation. Must provide " #nargs " arguments." ), "" ) \
		return NULL;                                                           \
	}

/**
* Macros for ordinal numerals.
*/
#define STDLIB_NAPI_ARGV_ORDINAL_0 "First"
#define STDLIB_NAPI_ARGV_ORDINAL_1 "Second"
#define STDLIB_NAPI_ARGV_ORDINAL_2 "Third"
#define STDLIB_NAPI_ARGV_ORDINAL_3 "Fourth"
#define STDLIB_NAPI_ARGV_ORDINAL_4 "Fifth"
#define STDLIB_NAPI_ARGV_ORDINAL_5 "Sixth"
#define STDLIB_NAPI_ARGV_ORDINAL_6 "Seventh"
#define STDLIB_NAPI_ARGV_ORDINAL_7 "Eighth"
#define STDLIB_NAPI_ARGV_ORDINAL_8 "Ninth"
#define STDLIB_NAPI_ARGV_ORDINAL_9 "Tenth"
#define STDLIB_NAPI_ARGV_ORDINAL_10 "Eleventh"
#define STDLIB_NAPI_ARGV_ORDINAL_11 "Twelfth"
#define STDLIB_NAPI_ARGV_ORDINAL_12 "Thirteenth"
#define STDLIB_NAPI_ARGV_ORDINAL_13 "Fourteenth"
#define STDLIB_NAPI_ARGV_ORDINAL_14 "Fifteenth"
#define STDLIB_NAPI_ARGV_ORDINAL_15 "Sixteenth"
#define STDLIB_NAPI_ARGV_ORDINAL_16 "Seventeenth"
#define STDLIB_NAPI_ARGV_ORDINAL_17 "Eighteenth"
#define STDLIB_NAPI_ARGV_ORDINAL_18 "Nineteenth"
#define STDLIB_NAPI_ARGV_ORDINAL_19 "Twentieth"
#define STDLIB_NAPI_ARGV_ORDINAL_20 "Twenty-first"
#define STDLIB_NAPI_ARGV_ORDINAL_21 "Twenty-second"
#define STDLIB_NAPI_ARGV_ORDINAL_22 "Twenty-third"
#define STDLIB_NAPI_ARGV_ORDINAL_23 "Twenty-fourth"
#define STDLIB_NAPI_ARGV_ORDINAL_24 "Twenty-fifth"
#define STDLIB_NAPI_ARGV_ORDINAL_25 "Twenty-sixth"
#define STDLIB_NAPI_ARGV_ORDINAL_26 "Twenty-seventh"
#define STDLIB_NAPI_ARGV_ORDINAL_27 "Twenty-eighth"
#define STDLIB_NAPI_ARGV_ORDINAL_28 "Twenty-ninth"
#define STDLIB_NAPI_ARGV_ORDINAL_29 "Thirtieth"

/**
* Macro for converting an index to an ordinal numeral.
*
* @param index    index value
*
* @example
* STDLIB_NAPI_ARGV_INDEX2ORDINAL( 2 )
*/
#define STDLIB_NAPI_ARGV_INDEX2ORDINAL( index ) STDLIB_NAPI_ARGV_ORDINAL_##index

#endif // !STDLIB_NAPI_ARGV_H
