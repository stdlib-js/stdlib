#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import JSON
using SpecialFunctions

"""
    gen( x, filepath )

Generate fixture data and write to file.

# Arguments

* `x`: domain
* `name::AbstractString`: filepath of the output file

# Examples

``` julia
julia> x = range( -0.5, stop = 1.5, length = 2001 );
julia> gen( x, \"./data.json\" );
```
"""
function gen( x, filepath )
	y = Array{Float64}( undef, length(x) );
	for i in eachindex(x)
		y[i] = erfcinv( x[i] );
	end

	data = Dict([
		("x", x),
		("expected", y)
	]);

	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	write( outfile, "\n" );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# 0.5 <= x <= 1.5 (linear regime)
x = range( 0.5, stop = 1.5, length = 3000 );
out = joinpath( dir, "x_0.5_1.5.json" );
gen( x, out );

# 0.25 < 2-x < 0.5
x = range( 1.5, stop = 1.75, length = 500 );
out = joinpath( dir, "x_1.5_1.75.json" );
gen( x, out );

# 0.25 < x < 0.5
x = range( 0.25, stop = 0.5, length = 500 );
out = joinpath( dir, "x_0.25_0.5.json" );
gen( x, out );

# 0.25 < 2-x < 0.00012340980408664937
x = range( 1.75, stop = 1.9998, length = 500 );
out = joinpath( dir, "x_1.75_1.9998.json" );
gen( x, out );

# 0.00012340980408664937 < x < 0.25
x = range( 0.0002, stop = 0.25, length = 500 );
out = joinpath( dir, "x_0.0002_0.25.json" );
gen( x, out );

# 0.00012340980408664937 < 2-x < 2.220446049250313e-16
x = range( 1.9998, stop = 1.9999999999999998, length = 500 );
out = joinpath( dir, "x_1.9998_1.9999..8.json" );
gen( x, out );

# 2.220446049250313e-16 < 2-x < 0
x = range( 1.9999999999999998, stop = 2, length = 500 );
out = joinpath( dir, "x_1.9999..8_2.json" );
gen( x, out );
