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

#include "stdlib/blas/base/xerbla.h"
#include "stdlib/blas/base/shared.h"
#include <stdlib.h>
#include <string.h>
#include <stdarg.h>
#include <stdio.h>

/**
* Prints an error message and exits a program.
*
* @param info    argument index
* @param rout    routine name (e.g., "gemm")
* @param form    format string
*/
void API_SUFFIX(c_xerbla)( CBLAS_INT info, const char *rout, const char *form, ... ) {
	extern int RowMajorStrg; // global flag
	va_list argptr;

	va_start( argptr, form );
	if ( RowMajorStrg ) {
		if ( strstr( rout, "gemm" ) != 0 ) {
			if ( info == 5 ) {
				info =  4;
			} else if ( info == 4 ) {
				info =  5;
			} else if ( info == 11 ) {
				info =  9;
			} else if ( info == 9 ) {
				info = 11;
			}
		} else if ( strstr( rout, "symm" ) != 0 || strstr( rout, "hemm" ) != 0 ) {
			if ( info == 5 ) {
				info =  4;
			} else if ( info == 4 ) {
				info =  5;
			}
		} else if ( strstr( rout, "trmm" ) != 0 || strstr( rout, "trsm" ) != 0 ) {
			if ( info == 7 ) {
				info =  6;
			} else if ( info == 6 ) {
				info =  7;
			}
		} else if ( strstr( rout, "gemv" ) != 0 ) {
			if ( info == 4 ) {
				info = 3;
			} else if ( info == 3 ) {
				info = 4;
			}
		} else if ( strstr( rout, "gbmv" ) != 0 ) {
			if ( info == 4 ) {
				info = 3;
			} else if ( info == 3 ) {
				info = 4;
			} else if ( info == 6 ) {
				info = 5;
			} else if ( info == 5 ) {
				info = 6;
			}
		} else if ( strstr( rout, "ger" ) != 0 ) {
			if ( info == 3 ) {
				info = 2;
			} else if ( info == 2 ) {
				info = 3;
			} else if ( info == 8 ) {
				info = 6;
			} else if ( info == 6 ) {
				info = 8;
			}
		} else if ( ( strstr( rout, "her2" ) != 0 || strstr( rout, "hpr2" ) != 0 ) && strstr( rout, "her2k" ) == 0 ) {
			if ( info == 8 ) {
				info = 6;
			} else if ( info == 6 ) {
				info = 8;
			}
		}
	}
	if ( info ) {
		fprintf( stderr, "Error: invalid argument. Must provide a valid argument to routine `%s`. Argument: %" CBLAS_IFMT ".\n", rout, info );
	}
	vfprintf( stderr, form, argptr );
	va_end( argptr );

	exit( EXIT_FAILURE );
}
