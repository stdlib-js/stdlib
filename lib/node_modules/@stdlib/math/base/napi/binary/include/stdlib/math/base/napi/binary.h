/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#ifndef STDLIB_MATH_BASE_NAPI_BINARY_H
#define STDLIB_MATH_BASE_NAPI_BINARY_H

#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <node_api.h>
#include <assert.h>

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting and returning double-precision floating-point numbers.
*
* @param fcn   binary function
*
* @example
* static double add( const double x, const double y ) {
*     return x + y;
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_DD_D( add );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_DD_D( fcn )                               \
	static napi_value stdlib_math_base_napi_dd_d_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_dd_d( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_dd_d_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_dd_d_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_dd_d_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting and returning signed 32-bit integers.
*
* @param fcn   binary function
*
* @example
* #include <stdint.h>
*
* static int_32 add( const int_32 x, const int_32 y ) {
*     return x + y;
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_II_I( add );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_II_I( fcn )                               \
	static napi_value stdlib_math_base_napi_ii_i_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_ii_i( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_ii_i_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_ii_i_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_ii_i_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting signed 32-bit integers and returning a double-precision floating-point number.
*
* @param fcn   binary function
*
* @example
* #include <stdint.h>
*
* static double add( const int_32 x, const int_32 y ) {
*     return x + y;
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_II_D( add );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_II_D( fcn )                               \
	static napi_value stdlib_math_base_napi_ii_d_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_ii_d( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_ii_d_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_ii_d_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_ii_d_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting and returning single-precision floating-point numbers.
*
* @param fcn   binary function
*
* @example
* static float addf( const float x, const float y ) {
*     return x + y;
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_FF_F( addf );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_FF_F( fcn )                               \
	static napi_value stdlib_math_base_napi_ff_f_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_ff_f( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_ff_f_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_ff_f_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_ff_f_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting and returning double-precision complex floating-point numbers.
*
* @param fcn   binary function
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include "stdlib/complex/float64/reim.h"
*
* static stdlib_complex128_t add( const stdlib_complex128_t x, const stdlib_complex128_t y ) {
*     double xre;
*     double xim;
*     double yre;
*     double yim;
*     double re;
*     double im;
*
*     stdlib_complex128_reim( x, &xre, &xim );
*     stdlib_complex128_reim( y, &yre, &yim );
*
*     re = xre + yre;
*     im = xim + yim;
*
*     return stdlib_complex128( re, im );
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_ZZ_Z( add );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_ZZ_Z( fcn )                               \
	static napi_value stdlib_math_base_napi_zz_z_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_zz_z( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_zz_z_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_zz_z_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_zz_z_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting and returning single-precision complex floating-point numbers.
*
* @param fcn   binary function
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float32/reim.h"
*
* static stdlib_complex64_t add( const stdlib_complex64_t x, const stdlib_complex64_t y ) {
*     float xre;
*     float xim;
*     float yre;
*     float yim;
*     float re;
*     float im;
*
*     stdlib_complex64_reim( x, &xre, &xim );
*     stdlib_complex64_reim( y, &yre, &yim );
*
*     re = xre + yre;
*     im = xim + yim;
*
*     return stdlib_complex64( re, im );
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_CC_C( add );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_CC_C( fcn )                               \
	static napi_value stdlib_math_base_napi_cc_c_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_cc_c( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_cc_c_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_cc_c_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_cc_c_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting a double-precision floating-point number and a signed 32-bit integer and returning a double-precision floating-point number.
*
* @param fcn   binary function
*
* @example
* #include <stdint.h>
*
* static double mul( const double x, const int32_t n ) {
*     return x * n;
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_DI_D( mul );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_DI_D( fcn )                               \
	static napi_value stdlib_math_base_napi_di_d_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_di_d( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_di_d_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_di_d_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_di_d_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting a signed 32-bit integer and a double-precision floating-point number and returning a double-precision floating-point number.
*
* @param fcn   binary function
*
* @example
* #include <stdint.h>
*
* static double mul( const int32_t n, const double x ) {
*     return x * n;
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_ID_D( mul );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_ID_D( fcn )                               \
	static napi_value stdlib_math_base_napi_id_d_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_id_d( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_id_d_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_id_d_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_id_d_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting a single-precision floating-point number and a signed 32-bit integer and returning a single-precision floating-point number.
*
* @param fcn   binary function
*
* @example
* #include <stdint.h>
*
* static float mulf( const float x, const int32_t n ) {
*     return x * n;
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_FI_F( mulf );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_FI_F( fcn )                               \
	static napi_value stdlib_math_base_napi_fi_f_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_fi_f( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_fi_f_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_fi_f_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_fi_f_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting a double-precision complex floating-point number and a signed 32-bit and returning a double-precision complex floating-point number.
*
* @param fcn   binary function
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include "stdlib/complex/float64/reim.h"
* #include <stdint.h>
*
* static stdlib_complex128_t mul( const stdlib_complex128_t x, const int32_t n ) {
*     double re;
*     double im;
*
*     stdlib_complex128_reim( x, &re, &im );
*     return stdlib_complex128( re*n, im*n );
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_ZI_Z( mul );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_ZI_Z( fcn )                               \
	static napi_value stdlib_math_base_napi_zi_z_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_zi_z( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_zi_z_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_zi_z_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_zi_z_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting a single-precision complex floating-point number and a signed 32-bit integer and returning a single-precision complex floating-point number.
*
* @param fcn   binary function
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float32/reim.h"
* #include <stdint.h>
*
* static stdlib_complex64_t mul( const stdlib_complex64_t x, const int32_t n ) {
*     float re;
*     float im;
*
*     stdlib_complex64_reim( x, &re, &im );
*     return stdlib_complex64( re*n, im*n );
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_CI_C( mul );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_CI_C( fcn )                               \
	static napi_value stdlib_math_base_napi_ci_c_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_ci_c( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_ci_c_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_ci_c_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_ci_c_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting a double-precision complex floating-point number and a double-precision floating-point number and returning a double-precision complex floating-point number.
*
* @param fcn   binary function
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include "stdlib/complex/float64/reim.h"
*
* static stdlib_complex128_t mul( const stdlib_complex128_t x, const double n ) {
*     double re;
*     double im;
*
*     stdlib_complex128_reim( x, &re, &im );
*     return stdlib_complex128( re*n, im*n );
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_ZD_Z( mul );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_ZD_Z( fcn )                               \
	static napi_value stdlib_math_base_napi_zd_z_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_zd_z( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_zd_z_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_zd_z_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_zd_z_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting a single-precision complex floating-point number and a single-precision floating-point number and returning a single-precision complex floating-point number.
*
* @param fcn   binary function
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float32/reim.h"
*
* static stdlib_complex64_t mul( const stdlib_complex64_t x, const float n ) {
*     float re;
*     float im;
*
*     stdlib_complex64_reim( x, &re, &im );
*     return stdlib_complex64( re*n, im*n );
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_CF_C( mul );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_CF_C( fcn )                               \
	static napi_value stdlib_math_base_napi_cf_c_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_cf_c( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_cf_c_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_cf_c_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_cf_c_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting signed 64-bit integers and returning a double-precision floating-point number.
*
* @param fcn   binary function
*
* @example
* #include <stdint.h>
*
* static double fcn( const int_64 x, const int_64 y ) {
*     // ...
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_LL_D( fcn );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_LL_D( fcn )                               \
	static napi_value stdlib_math_base_napi_ll_d_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_ll_d( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_ll_d_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_ll_d_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_ll_d_init )

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting signed 32-bit integers and returning a single-precision floating-point number.
*
* @param fcn   binary function
*
* @example
* #include <stdint.h>
*
* static float fcn( const int_32 x, const int_32 y ) {
*     // ...
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_II_F( fcn );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_II_F( fcn )                               \
	static napi_value stdlib_math_base_napi_ii_f_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_ii_f( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_ii_f_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value fcn;                                                        \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_ii_f_wrapper,                                \
			NULL,                                                              \
			&fcn                                                               \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return fcn;                                                            \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_ii_f_init )

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Invokes a binary function accepting and returning double-precision floating-point numbers.
*/
napi_value stdlib_math_base_napi_dd_d( napi_env env, napi_callback_info info, double (*fcn)( double, double ) );

/**
* Invokes a binary function accepting and returning single-precision floating-point numbers.
*/
napi_value stdlib_math_base_napi_ff_f( napi_env env, napi_callback_info info, float (*fcn)( float, float ) );

/**
* Invokes a binary function accepting and returning double-precision complex floating-point numbers.
*/
napi_value stdlib_math_base_napi_zz_z( napi_env env, napi_callback_info info, stdlib_complex128_t (*fcn)( stdlib_complex128_t, stdlib_complex128_t ) );

/**
* Invokes a binary function accepting and returning single-precision complex floating-point numbers.
*/
napi_value stdlib_math_base_napi_cc_c( napi_env env, napi_callback_info info, stdlib_complex64_t (*fcn)( stdlib_complex64_t, stdlib_complex64_t ) );

/**
* Invokes a binary function accepting a double-precision floating-point number and a signed 32-bit integer and returning a double-precision floating-point number.
*/
napi_value stdlib_math_base_napi_di_d( napi_env env, napi_callback_info info, double (*fcn)( double, int32_t ) );

/**
* Invokes a binary function accepting a signed 32-bit integer and a double-precision floating-point number and returning a double-precision floating-point number.
*/
napi_value stdlib_math_base_napi_id_d( napi_env env, napi_callback_info info, double (*fcn)( int32_t, double ) );

/**
* Invokes a binary function accepting signed 32-bit integers and returning a double-precision floating-point number.
*/
napi_value stdlib_math_base_napi_ii_d( napi_env env, napi_callback_info info, double (*fcn)( int32_t, int32_t ) );

/**
* Invokes a binary function accepting and returning signed 32-bit integers.
*/
napi_value stdlib_math_base_napi_ii_i( napi_env env, napi_callback_info info, int32_t (*fcn)( int32_t, int32_t ) );

/**
* Invokes a binary function accepting a single-precision floating-point number and a signed 32-bit integer and returning a single-precision floating-point number.
*/
napi_value stdlib_math_base_napi_fi_f( napi_env env, napi_callback_info info, float (*fcn)( float, int32_t ) );

/**
* Invokes a binary function accepting a double-precision complex floating-point number and a signed 32-bit integer and returning a double-precision complex floating-point number.
*/
napi_value stdlib_math_base_napi_zi_z( napi_env env, napi_callback_info info, stdlib_complex128_t (*fcn)( stdlib_complex128_t, int32_t ) );

/**
* Invokes a binary function accepting a single-precision complex floating-point number and a signed 32-bit integer and returning a single-precision complex floating-point number.
*/
napi_value stdlib_math_base_napi_ci_c( napi_env env, napi_callback_info info, stdlib_complex64_t (*fcn)( stdlib_complex64_t, int32_t ) );

/**
* Invokes a binary function accepting a double-precision complex floating-point number and a double-precision floating-point number and returning a double-precision complex floating-point number.
*/
napi_value stdlib_math_base_napi_zd_z( napi_env env, napi_callback_info info, stdlib_complex128_t (*fcn)( stdlib_complex128_t, double ) );

/**
* Invokes a binary function accepting a single-precision complex floating-point number and a single-precision floating-point number and returning a single-precision complex floating-point number.
*/
napi_value stdlib_math_base_napi_cf_c( napi_env env, napi_callback_info info, stdlib_complex64_t (*fcn)( stdlib_complex64_t, float ) );

/**
* Invokes a binary function accepting signed 64-bit integers and returning a double-precision floating-point number.
*/
napi_value stdlib_math_base_napi_ll_d( napi_env env, napi_callback_info info, double (*fcn)( int64_t, int64_t ) );

/**
* Invokes a binary function accepting signed 32-bit integers and returning a single-precision floating-point number.
*/
napi_value stdlib_math_base_napi_ii_f( napi_env env, napi_callback_info info, float (*fcn)( int32_t, int32_t ) );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_MATH_BASE_NAPI_BINARY_H
