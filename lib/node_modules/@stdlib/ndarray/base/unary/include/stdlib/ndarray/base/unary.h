/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Header file containing function declarations for ndarray functions which apply a unary callback.
*/
#ifndef STDLIB_NDARRAY_BASE_UNARY_H
#define STDLIB_NDARRAY_BASE_UNARY_H

#include "unary/macros.h"
#include "unary/typedefs.h"
#include "unary/dispatch_object.h"
#include "unary/dispatch.h"

// Note: keep in alphabetical order...
#include "unary/b_b.h"
#include "unary/b_d.h"
#include "unary/b_d_as_d_d.h"
#include "unary/b_f.h"
#include "unary/b_f_as_d_d.h"
#include "unary/b_f_as_f_f.h"
#include "unary/b_i.h"
#include "unary/b_i_as_i_i.h"
#include "unary/b_k.h"
#include "unary/b_k_as_k_k.h"
#include "unary/b_t.h"
#include "unary/b_t_as_t_t.h"
#include "unary/b_u.h"
#include "unary/b_u_as_u_u.h"

#include "unary/c_c.h"
#include "unary/c_c_as_z_z.h"
#include "unary/c_z.h"
#include "unary/c_z_as_z_z.h"

#include "unary/d_d.h"
#include "unary/d_i.h"
#include "unary/d_l.h"
#include "unary/d_z.h"
#include "unary/d_z_as_z_z.h"

#include "unary/f_c.h"
#include "unary/f_c_as_c_c.h"
#include "unary/f_c_as_z_z.h"
#include "unary/f_d.h"
#include "unary/f_d_as_d_d.h"
#include "unary/f_f.h"
#include "unary/f_f_as_d_d.h"
#include "unary/f_i.h"
#include "unary/f_l.h"
#include "unary/f_z.h"
#include "unary/f_z_as_z_z.h"

#include "unary/i_d.h"
#include "unary/i_d_as_d_d.h"
#include "unary/i_i.h"
#include "unary/i_u.h"

#include "unary/k_d.h"
#include "unary/k_d_as_d_d.h"
#include "unary/k_f.h"
#include "unary/k_f_as_d_d.h"
#include "unary/k_f_as_f_f.h"
#include "unary/k_i.h"
#include "unary/k_i_as_i_i.h"
#include "unary/k_k.h"
#include "unary/k_t.h"
#include "unary/k_u.h"

#include "unary/l_l.h"
#include "unary/l_v.h"

#include "unary/s_b.h"
#include "unary/s_d.h"
#include "unary/s_d_as_d_d.h"
#include "unary/s_f.h"
#include "unary/s_f_as_d_d.h"
#include "unary/s_f_as_f_f.h"
#include "unary/s_i.h"
#include "unary/s_i_as_i_i.h"
#include "unary/s_k.h"
#include "unary/s_k_as_k_k.h"
#include "unary/s_s.h"
#include "unary/s_t.h"
#include "unary/s_u.h"

#include "unary/t_d.h"
#include "unary/t_d_as_d_d.h"
#include "unary/t_f.h"
#include "unary/t_f_as_d_d.h"
#include "unary/t_f_as_f_f.h"
#include "unary/t_i.h"
#include "unary/t_i_as_i_i.h"
#include "unary/t_t.h"
#include "unary/t_u.h"
#include "unary/t_u_as_u_u.h"

#include "unary/u_d.h"
#include "unary/u_d_as_d_d.h"
#include "unary/u_u.h"

#include "unary/v_v.h"

#include "unary/x_x.h"

#include "unary/z_z.h"

#endif // !STDLIB_NDARRAY_BASE_UNARY_H
