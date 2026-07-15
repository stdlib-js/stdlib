/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#ifndef STDLIB_NAPI_ARGV_DATAVIEW_CAST_H
#define STDLIB_NAPI_ARGV_DATAVIEW_CAST_H

#include "stdlib/napi/argv.h"
#include "stdlib/napi/argv_dataview.h"
#include "stdlib/assert/napi/status_ok.h"
#include <node_api.h>
#include <stddef.h>
#include <stdint.h>

/**
* Macro for converting an add-on callback argument corresponding to a DataView to a pointer having a specified data type.
*
* @param env      environment under which the function is invoked
* @param X        output variable name
* @param type     desired pointer type
* @param argv     name of the variable containing add-on callback arguments
* @param index    argument index
*
* @example
* #include "stdlib/napi/argv_dataview_cast.h"
* #include "stdlib/napi/argv.h"
* #include <node_api.h>
* #include <stdint.h>
*
* struct complex128 {
*     double re;
*     double im;
* };
*
* static void fcn( const struct complex128 *X, struct complex128 *Y ) {
*     Y->re = X->re + Y->re;
*     Y->im = X->im + Y->im;
* }
*
* // ...
*
* static napi_value addon( napi_env env, napi_callback_info info ) {
*     // Retrieve add-on callback arguments:
*     STDLIB_NAPI_ARGV( env, info, argv, argc, 2 );
*
*     // Convert the first argument to a C type:
*     STDLIB_NAPI_ARGV_DATAVIEW_CAST( env, X, struct complex128, argv, 0 );
*
*     // Convert the second argument to a C type:
*     STDLIB_NAPI_ARGV_DATAVIEW_CAST( env, Y, struct complex128, argv, 1 );
*
*     // ...
*
*     fcn( X, Y );
* }
*/
#define STDLIB_NAPI_ARGV_DATAVIEW_CAST( env, X, type, argv, index )            \
	napi_value __STDLIB_NAPI_ARGV_DATAVIEW_CAST_ERR_ ## X;                     \
	int64_t __STDLIB_NAPI_ARGV_DATAVIEW_CAST_LEN_ ## X;                        \
	type *X;                                                                   \
	stdlib_napi_argv_dataview( env, argv[ index ], (uint8_t **)&X, &__STDLIB_NAPI_ARGV_DATAVIEW_CAST_LEN_ ## X, "invalid argument. " STDLIB_NAPI_ARGV_INDEX2ORDINAL( index ) " argument must be a DataView.", &__STDLIB_NAPI_ARGV_DATAVIEW_CAST_ERR_ ## X ); \
	if ( __STDLIB_NAPI_ARGV_DATAVIEW_CAST_ERR_ ## X != NULL ) {                \
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_NULL( env, napi_throw( env, __STDLIB_NAPI_ARGV_DATAVIEW_CAST_ERR_ ## X ), "" ) \
		return NULL;                                                           \
	}                                                                          \
	if ( (int64_t)sizeof(type) > __STDLIB_NAPI_ARGV_DATAVIEW_CAST_LEN_ ## X ) { \
		napi_value __STDLIB_NAPI_ARGV_DATAVIEW_CAST_ERR_MSG_ ## X;             \
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_NULL( env, napi_create_string_utf8( env, "invalid argument. " STDLIB_NAPI_ARGV_INDEX2ORDINAL( index ) " argument has insufficient memory for the specified data type.", NAPI_AUTO_LENGTH, &__STDLIB_NAPI_ARGV_DATAVIEW_CAST_ERR_MSG_ ## X ), "" ) \
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_NULL( env, napi_create_range_error( env, NULL, __STDLIB_NAPI_ARGV_DATAVIEW_CAST_ERR_MSG_ ## X, &__STDLIB_NAPI_ARGV_DATAVIEW_CAST_ERR_ ## X ), "" ) \
		STDLIB_ASSERT_NAPI_STATUS_OK_RET_NULL( env, napi_throw( env, __STDLIB_NAPI_ARGV_DATAVIEW_CAST_ERR_ ## X ), "" ) \
		return NULL;                                                           \
	}

#endif // !STDLIB_NAPI_ARGV_DATAVIEW_CAST_H
