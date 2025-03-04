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

#ifndef STDLIB_STRIDED_BASE_MSKUNARY_H
#define STDLIB_STRIDED_BASE_MSKUNARY_H

#include "mskunary/macros.h"
#include "mskunary/typedefs.h"

/*
* The following is auto-generated. Do not manually edit. See scripts/loops.js.
*/

// BEGIN LOOPS
#include "mskunary/b_b.h"
#include "mskunary/b_b_as_u_u.h"
#include "mskunary/b_c.h"
#include "mskunary/b_c_as_b_c.h"
#include "mskunary/b_c_as_c_c.h"
#include "mskunary/b_c_as_z_z.h"
#include "mskunary/b_d.h"
#include "mskunary/b_d_as_b_d.h"
#include "mskunary/b_d_as_d_d.h"
#include "mskunary/b_f.h"
#include "mskunary/b_f_as_b_f.h"
#include "mskunary/b_f_as_d_d.h"
#include "mskunary/b_f_as_f_f.h"
#include "mskunary/b_i.h"
#include "mskunary/b_i_as_b_i.h"
#include "mskunary/b_i_as_i_i.h"
#include "mskunary/b_k.h"
#include "mskunary/b_k_as_b_k.h"
#include "mskunary/b_k_as_i_i.h"
#include "mskunary/b_k_as_k_k.h"
#include "mskunary/b_t.h"
#include "mskunary/b_t_as_b_t.h"
#include "mskunary/b_t_as_t_t.h"
#include "mskunary/b_t_as_u_u.h"
#include "mskunary/b_u.h"
#include "mskunary/b_u_as_b_u.h"
#include "mskunary/b_u_as_u_u.h"
#include "mskunary/b_z.h"
#include "mskunary/b_z_as_b_z.h"
#include "mskunary/b_z_as_z_z.h"

#include "mskunary/c_c.h"
#include "mskunary/c_c_as_z_z.h"
#include "mskunary/c_f_as_c_f.h"
#include "mskunary/c_z.h"
#include "mskunary/c_z_as_c_z.h"
#include "mskunary/c_z_as_z_z.h"

#include "mskunary/d_d.h"
#include "mskunary/d_i_as_d_i.h"
#include "mskunary/d_z.h"
#include "mskunary/d_z_as_d_z.h"
#include "mskunary/d_z_as_z_z.h"

#include "mskunary/f_c.h"
#include "mskunary/f_c_as_c_c.h"
#include "mskunary/f_c_as_f_c.h"
#include "mskunary/f_c_as_z_z.h"
#include "mskunary/f_d.h"
#include "mskunary/f_d_as_d_d.h"
#include "mskunary/f_d_as_f_d.h"
#include "mskunary/f_f.h"
#include "mskunary/f_f_as_d_d.h"
#include "mskunary/f_i_as_f_i.h"
#include "mskunary/f_z.h"
#include "mskunary/f_z_as_f_z.h"
#include "mskunary/f_z_as_z_z.h"

#include "mskunary/i_d.h"
#include "mskunary/i_d_as_d_d.h"
#include "mskunary/i_d_as_i_d.h"
#include "mskunary/i_i.h"
#include "mskunary/i_u.h"
#include "mskunary/i_z.h"
#include "mskunary/i_z_as_i_z.h"
#include "mskunary/i_z_as_z_z.h"

#include "mskunary/k_c.h"
#include "mskunary/k_c_as_c_c.h"
#include "mskunary/k_c_as_k_c.h"
#include "mskunary/k_c_as_z_z.h"
#include "mskunary/k_d.h"
#include "mskunary/k_d_as_d_d.h"
#include "mskunary/k_d_as_k_d.h"
#include "mskunary/k_f.h"
#include "mskunary/k_f_as_d_d.h"
#include "mskunary/k_f_as_f_f.h"
#include "mskunary/k_f_as_k_f.h"
#include "mskunary/k_i.h"
#include "mskunary/k_i_as_i_i.h"
#include "mskunary/k_i_as_k_i.h"
#include "mskunary/k_k.h"
#include "mskunary/k_k_as_i_i.h"
#include "mskunary/k_t.h"
#include "mskunary/k_t_as_i_i.h"
#include "mskunary/k_u.h"
#include "mskunary/k_u_as_i_i.h"
#include "mskunary/k_z.h"
#include "mskunary/k_z_as_k_z.h"
#include "mskunary/k_z_as_z_z.h"

#include "mskunary/s_b.h"
#include "mskunary/s_c.h"
#include "mskunary/s_c_as_c_c.h"
#include "mskunary/s_c_as_s_c.h"
#include "mskunary/s_c_as_z_z.h"
#include "mskunary/s_d.h"
#include "mskunary/s_d_as_d_d.h"
#include "mskunary/s_d_as_s_d.h"
#include "mskunary/s_f.h"
#include "mskunary/s_f_as_d_d.h"
#include "mskunary/s_f_as_f_f.h"
#include "mskunary/s_f_as_s_f.h"
#include "mskunary/s_i.h"
#include "mskunary/s_i_as_i_i.h"
#include "mskunary/s_i_as_s_i.h"
#include "mskunary/s_k.h"
#include "mskunary/s_k_as_i_i.h"
#include "mskunary/s_k_as_k_k.h"
#include "mskunary/s_k_as_s_k.h"
#include "mskunary/s_s.h"
#include "mskunary/s_s_as_i_i.h"
#include "mskunary/s_t.h"
#include "mskunary/s_t_as_i_i.h"
#include "mskunary/s_u.h"
#include "mskunary/s_u_as_i_i.h"
#include "mskunary/s_z.h"
#include "mskunary/s_z_as_s_z.h"
#include "mskunary/s_z_as_z_z.h"

#include "mskunary/t_c.h"
#include "mskunary/t_c_as_c_c.h"
#include "mskunary/t_c_as_t_c.h"
#include "mskunary/t_c_as_z_z.h"
#include "mskunary/t_d.h"
#include "mskunary/t_d_as_d_d.h"
#include "mskunary/t_d_as_t_d.h"
#include "mskunary/t_f.h"
#include "mskunary/t_f_as_d_d.h"
#include "mskunary/t_f_as_f_f.h"
#include "mskunary/t_f_as_t_f.h"
#include "mskunary/t_i.h"
#include "mskunary/t_i_as_i_i.h"
#include "mskunary/t_i_as_t_i.h"
#include "mskunary/t_t.h"
#include "mskunary/t_t_as_u_u.h"
#include "mskunary/t_u.h"
#include "mskunary/t_u_as_t_u.h"
#include "mskunary/t_u_as_u_u.h"
#include "mskunary/t_z.h"
#include "mskunary/t_z_as_t_z.h"
#include "mskunary/t_z_as_z_z.h"

#include "mskunary/u_d.h"
#include "mskunary/u_d_as_d_d.h"
#include "mskunary/u_d_as_u_d.h"
#include "mskunary/u_u.h"
#include "mskunary/u_z.h"
#include "mskunary/u_z_as_u_z.h"
#include "mskunary/u_z_as_z_z.h"

#include "mskunary/x_x.h"

#include "mskunary/z_d_as_z_d.h"
#include "mskunary/z_z.h"
// END LOOPS

#endif // !STDLIB_STRIDED_BASE_MSKUNARY_H
