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

#include "stdlib/strided/napi/smskmap.h"

/**
* Evaluates the identity function for a single-precision floating-point number.
*
* @param x   input value
* @return    input value
*/
static float identityf( const float x ) {
	return x;
}

STDLIB_STRIDED_NAPI_MODULE_SMSKMAP( identityf )
