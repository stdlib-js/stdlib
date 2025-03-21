/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#ifndef STDLIB_ASSERT_NAPI_HAS_PROPERTY_H
#define STDLIB_ASSERT_NAPI_HAS_PROPERTY_H

#include <node_api.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Asserts that a Node-API value has a specified property.
*/
napi_status stdlib_assert_napi_value_has_property( const napi_env env, const napi_value value, const char *property, const char *message, napi_value *err );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_ASSERT_NAPI_HAS_PROPERTY_H
