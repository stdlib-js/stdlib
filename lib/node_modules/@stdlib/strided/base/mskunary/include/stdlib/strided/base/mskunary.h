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

/**
* Header file containing function declarations for strided array functions which apply a unary callback.
*/
#ifndef STDLIB_STRIDED_BASE_MSKUNARY_H
#define STDLIB_STRIDED_BASE_MSKUNARY_H

#include "mskunary/macros.h"
#include "mskunary/typedefs.h"

// Note: keep in alphabetical order...
#include "mskunary/b_b.h"
#include "mskunary/b_d.h"
#include "mskunary/b_d_as_d_d.h"
#include "mskunary/b_f.h"
#include "mskunary/b_f_as_d_d.h"
#include "mskunary/b_f_as_f_f.h"
#include "mskunary/b_i.h"
#include "mskunary/b_i_as_i_i.h"
#include "mskunary/b_k.h"
#include "mskunary/b_k_as_k_k.h"
#include "mskunary/b_t.h"
#include "mskunary/b_t_as_t_t.h"
#include "mskunary/b_u.h"
#include "mskunary/b_u_as_u_u.h"

#include "mskunary/d_d.h"
#include "mskunary/d_i.h"
#include "mskunary/d_l.h"

#include "mskunary/f_d.h"
#include "mskunary/f_d_as_d_d.h"
#include "mskunary/f_f.h"
#include "mskunary/f_f_as_d_d.h"
#include "mskunary/f_i.h"
#include "mskunary/f_l.h"

#include "mskunary/i_d.h"
#include "mskunary/i_d_as_d_d.h"
#include "mskunary/i_i.h"
#include "mskunary/i_u.h"

#include "mskunary/k_d.h"
#include "mskunary/k_d_as_d_d.h"
#include "mskunary/k_f.h"
#include "mskunary/k_f_as_d_d.h"
#include "mskunary/k_f_as_f_f.h"
#include "mskunary/k_i.h"
#include "mskunary/k_i_as_i_i.h"
#include "mskunary/k_k.h"
#include "mskunary/k_t.h"
#include "mskunary/k_u.h"

#include "mskunary/l_l.h"
#include "mskunary/l_v.h"

#include "mskunary/s_b.h"
#include "mskunary/s_d.h"
#include "mskunary/s_d_as_d_d.h"
#include "mskunary/s_f.h"
#include "mskunary/s_f_as_d_d.h"
#include "mskunary/s_f_as_f_f.h"
#include "mskunary/s_i.h"
#include "mskunary/s_i_as_i_i.h"
#include "mskunary/s_k.h"
#include "mskunary/s_k_as_k_k.h"
#include "mskunary/s_s.h"
#include "mskunary/s_t.h"
#include "mskunary/s_u.h"

#include "mskunary/t_d.h"
#include "mskunary/t_d_as_d_d.h"
#include "mskunary/t_f.h"
#include "mskunary/t_f_as_d_d.h"
#include "mskunary/t_f_as_f_f.h"
#include "mskunary/t_i.h"
#include "mskunary/t_i_as_i_i.h"
#include "mskunary/t_t.h"
#include "mskunary/t_u.h"
#include "mskunary/t_u_as_u_u.h"

#include "mskunary/u_d.h"
#include "mskunary/u_d_as_d_d.h"
#include "mskunary/u_u.h"

#include "mskunary/v_v.h"

#endif // !STDLIB_STRIDED_BASE_MSKUNARY_H
