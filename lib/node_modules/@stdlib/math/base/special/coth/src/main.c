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
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified according to project conventions.
*
* ```text
* Copyright 1985, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

#include "stdlib/math/base/special/coth.h"
#include "stdlib/math/base/special/tanh.h"

/**
* Computes the hyperbolic cotangent of a double-precision floating-point number.
*
* ## Method
*
* ```tex
\begin{align*}
\operatorname{coth}(x) &= \frac{1}{\operatorname{tanh}(x)} \\
&= \frac{1}{\frac{\operatorname{sinh}(x)}{\operatorname{cosh}(x)}} \\
&= \frac{\operatorname{cosh}(x)}{\operatorname{sinh}(x)} \\
&= \frac{e^x + e^{-x}}{e^x - e^{-x}}
\end{align*}

* ```
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain   | # trials | peak    | rms     |
*     |:----------:|:--------:|:--------:|:-------:|:-------:|
*     | DEC        | +- 88    | 50000    | 4.0e-17 | 7.7e-18 |
*     | IEEE       | +-MAXLOG | 30000    | 2.6e-16 | 5.7e-17 |
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_coth( 0.0 );
* // returns +Infinity
*/

double stdlib_base_coth( const double x ) {
	return 1.0 / stdlib_base_tanh(x);
}
