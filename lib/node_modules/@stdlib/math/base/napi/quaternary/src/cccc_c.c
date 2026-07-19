/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/math/base/napi/quaternary/cccc_c.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"
#include <node_api.h>
#include <assert.h>

/**
* Invokes a quaternary function accepting and returning single-precision complex floating-point numbers.
*
* ## Notes
*
* -   This function expects that the callback `info` argument provides access to the following JavaScript arguments:
*
*     -   `w`: input value.
*     -   `x`: input value.
*     -   `y`: input value.
*     -   `z`: input value.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @param fcn    quaternary function
* @return       function return value as a Node-API complex-like object
*/
napi_value stdlib_math_base_napi_cccc_c( napi_env env, napi_callback_info info, stdlib_complex64_t (*fcn)( stdlib_complex64_t, stdlib_complex64_t, stdlib_complex64_t, stdlib_complex64_t ) ) {
	napi_status status;

	size_t argc = 4;
	napi_value argv[ 4 ];
	status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
	assert( status == napi_ok );

	if ( argc < 4 ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Must provide four complex numbers." );
		assert( status == napi_ok );
		return NULL;
	}

	bool hprop;
	status = napi_has_named_property( env, argv[ 0 ], "re", &hprop );
	assert( status == napi_ok );
	if ( !hprop ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. First argument must have a real component." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_value wre;
	status = napi_get_named_property( env, argv[ 0 ], "re", &wre );
	assert( status == napi_ok );

	napi_valuetype wretype;
	status = napi_typeof( env, wre, &wretype );
	assert( status == napi_ok );
	if ( wretype != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. First argument must have a real component which is a number." );
		assert( status == napi_ok );
		return NULL;
	}

	status = napi_has_named_property( env, argv[ 0 ], "im", &hprop );
	assert( status == napi_ok );
	if ( !hprop ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. First argument must have an imaginary component." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_value wim;
	status = napi_get_named_property( env, argv[ 0 ], "im", &wim );
	assert( status == napi_ok );

	napi_valuetype wimtype;
	status = napi_typeof( env, wim, &wimtype );
	assert( status == napi_ok );
	if ( wimtype != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. First argument must have an imaginary component which is a number." );
		assert( status == napi_ok );
		return NULL;
	}

	status = napi_has_named_property( env, argv[ 1 ], "re", &hprop );
	assert( status == napi_ok );
	if ( !hprop ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Second argument must have a real component." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_value xre;
	status = napi_get_named_property( env, argv[ 1 ], "re", &xre );
	assert( status == napi_ok );

	napi_valuetype xretype;
	status = napi_typeof( env, xre, &xretype );
	assert( status == napi_ok );
	if ( xretype != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Second argument must have a real component which is a number." );
		assert( status == napi_ok );
		return NULL;
	}

	status = napi_has_named_property( env, argv[ 1 ], "im", &hprop );
	assert( status == napi_ok );
	if ( !hprop ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Second argument must have an imaginary component." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_value xim;
	status = napi_get_named_property( env, argv[ 1 ], "im", &xim );
	assert( status == napi_ok );

	napi_valuetype ximtype;
	status = napi_typeof( env, xim, &ximtype );
	assert( status == napi_ok );
	if ( ximtype != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Second argument must have an imaginary component which is a number." );
		assert( status == napi_ok );
		return NULL;
	}

	status = napi_has_named_property( env, argv[ 2 ], "re", &hprop );
	assert( status == napi_ok );
	if ( !hprop ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Third argument must have a real component." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_value yre;
	status = napi_get_named_property( env, argv[ 2 ], "re", &yre );
	assert( status == napi_ok );

	napi_valuetype yretype;
	status = napi_typeof( env, yre, &yretype );
	assert( status == napi_ok );
	if ( yretype != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Third argument must have a real component which is a number." );
		assert( status == napi_ok );
		return NULL;
	}

	status = napi_has_named_property( env, argv[ 2 ], "im", &hprop );
	assert( status == napi_ok );
	if ( !hprop ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Third argument must have an imaginary component." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_value yim;
	status = napi_get_named_property( env, argv[ 2 ], "im", &yim );
	assert( status == napi_ok );

	napi_valuetype yimtype;
	status = napi_typeof( env, yim, &yimtype );
	assert( status == napi_ok );
	if ( yimtype != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Third argument must have an imaginary component which is a number." );
		assert( status == napi_ok );
		return NULL;
	}

	status = napi_has_named_property( env, argv[ 3 ], "re", &hprop );
	assert( status == napi_ok );
	if ( !hprop ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Fourth argument must have a real component." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_value zre;
	status = napi_get_named_property( env, argv[ 3 ], "re", &zre );
	assert( status == napi_ok );

	napi_valuetype zretype;
	status = napi_typeof( env, zre, &zretype );
	assert( status == napi_ok );
	if ( zretype != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Fourth argument must have a real component which is a number." );
		assert( status == napi_ok );
		return NULL;
	}

	status = napi_has_named_property( env, argv[ 3 ], "im", &hprop );
	assert( status == napi_ok );
	if ( !hprop ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Fourth argument must have an imaginary component." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_value zim;
	status = napi_get_named_property( env, argv[ 3 ], "im", &zim );
	assert( status == napi_ok );

	napi_valuetype zimtype;
	status = napi_typeof( env, zim, &zimtype );
	assert( status == napi_ok );
	if ( zimtype != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Fourth argument must have an imaginary component which is a number." );
		assert( status == napi_ok );
		return NULL;
	}

	double re0;
	status = napi_get_value_double( env, wre, &re0 );
	assert( status == napi_ok );

	double im0;
	status = napi_get_value_double( env, wim, &im0 );
	assert( status == napi_ok );

	double re1;
	status = napi_get_value_double( env, xre, &re1 );
	assert( status == napi_ok );

	double im1;
	status = napi_get_value_double( env, xim, &im1 );
	assert( status == napi_ok );

	double re2;
	status = napi_get_value_double( env, yre, &re2 );
	assert( status == napi_ok );

	double im2;
	status = napi_get_value_double( env, yim, &im2 );
	assert( status == napi_ok );

	double re3;
	status = napi_get_value_double( env, zre, &re3 );
	assert( status == napi_ok );

	double im3;
	status = napi_get_value_double( env, zim, &im3 );
	assert( status == napi_ok );

	stdlib_complex64_t v = fcn( stdlib_complex64( (float)re0, (float)im0 ), stdlib_complex64( (float)re1, (float)im1 ), stdlib_complex64( (float)re2, (float)im2 ), stdlib_complex64( (float)re3, (float)im3 ) );
	float re;
	float im;
	stdlib_complex64_reim( v, &re, &im );

	napi_value obj;
	status = napi_create_object( env, &obj );
	assert( status == napi_ok );

	napi_value vre;
	status = napi_create_double( env, (double)re, &vre );
	assert( status == napi_ok );

	status = napi_set_named_property( env, obj, "re", vre );
	assert( status == napi_ok );

	napi_value vim;
	status = napi_create_double( env, (double)im, &vim );
	assert( status == napi_ok );

	status = napi_set_named_property( env, obj, "im", vim );
	assert( status == napi_ok );

	return obj;
}
