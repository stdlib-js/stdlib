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

#ifndef STDLIB_STRIDED_NAPI_ADDON_ARGUMENTS_H
#define STDLIB_STRIDED_NAPI_ADDON_ARGUMENTS_H

#include <node_api.h>
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Validates, extracts, and transforms (to native C types) function arguments provided to a strided array Node-API add-on interface.
*/
napi_status stdlib_strided_napi_addon_arguments( const napi_env env, const napi_value *argv, const int64_t nargs, const int64_t nin, uint8_t *arrays[], int64_t *shape, int64_t *strides, int32_t *types, napi_value *err );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STRIDED_NAPI_ADDON_ARGUMENTS_H
