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

#ifndef STDLIB_NAPI_H
#define STDLIB_NAPI_H

// Note: keep in alphabetical order...
#include "stdlib/napi/argv.h"
#include "stdlib/napi/argv_bool.h"
#include "stdlib/napi/argv_complex64.h"
#include "stdlib/napi/argv_complex64array.h"
#include "stdlib/napi/argv_complex128.h"
#include "stdlib/napi/argv_complex128array.h"
#include "stdlib/napi/argv_double.h"
#include "stdlib/napi/argv_float.h"
#include "stdlib/napi/argv_float32array.h"
#include "stdlib/napi/argv_float64array.h"
#include "stdlib/napi/argv_int8array.h"
#include "stdlib/napi/argv_int16array.h"
#include "stdlib/napi/argv_int32.h"
#include "stdlib/napi/argv_int32array.h"
#include "stdlib/napi/argv_int64.h"
#include "stdlib/napi/argv_strided_complex64array.h"
#include "stdlib/napi/argv_strided_complex64array2d.h"
#include "stdlib/napi/argv_strided_complex128array.h"
#include "stdlib/napi/argv_strided_complex128array2d.h"
#include "stdlib/napi/argv_strided_float32array.h"
#include "stdlib/napi/argv_strided_float32array2d.h"
#include "stdlib/napi/argv_strided_float64array.h"
#include "stdlib/napi/argv_strided_float64array2d.h"
#include "stdlib/napi/argv_strided_int8array.h"
#include "stdlib/napi/argv_strided_int8array2d.h"
#include "stdlib/napi/argv_strided_int16array.h"
#include "stdlib/napi/argv_strided_int16array2d.h"
#include "stdlib/napi/argv_strided_int32array.h"
#include "stdlib/napi/argv_strided_int32array2d.h"
#include "stdlib/napi/argv_strided_uint8array.h"
#include "stdlib/napi/argv_strided_uint8array2d.h"
#include "stdlib/napi/argv_strided_uint16array.h"
#include "stdlib/napi/argv_strided_uint16array2d.h"
#include "stdlib/napi/argv_strided_uint32array.h"
#include "stdlib/napi/argv_strided_uint32array2d.h"
#include "stdlib/napi/argv_uint8array.h"
#include "stdlib/napi/argv_uint16array.h"
#include "stdlib/napi/argv_uint32.h"
#include "stdlib/napi/argv_uint32array.h"
#include "stdlib/napi/create_complex_like.h"
#include "stdlib/napi/create_double.h"
#include "stdlib/napi/create_int32.h"
#include "stdlib/napi/create_uint32.h"
#include "stdlib/napi/export.h"

#endif // !STDLIB_NAPI_H
