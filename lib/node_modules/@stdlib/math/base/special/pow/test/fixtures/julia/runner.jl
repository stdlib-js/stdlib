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

"""
    gen( x, y, name )

Generate fixture data and write to file.

# Arguments

* `x`: base domain
* `y`: exponent domain
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( -1000, stop = 1000, length = 2001 );
julia> y = range( 0, stop = 1000, length = 1001 );
julia> gen( x, y, \"data.json\" );
```
"""
function gen( x, y, name )
	z = Array{Float64}( undef, length(x) );
	for i in eachindex(x)
		z[ i ] = x[i]^y[i];
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("y", y),
		("expected", z)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Squares (x small):
x = range( -1000, stop = 1000, length = 2001 );
y = zeros( 2001 );
y[:] .= 2.0;
gen( x, y, "squared_small.json" );

# Squares (x large):
x = range( 3.14e100, stop = 3.14e110, length = 2001 );
y = zeros( 2001 );
y[:] .= 2.0;
gen( x, y, "squared_large.json" );

# Cubes (x small):
x = range( -1000, stop = 1000, length = 2001 );
y = zeros( 2001 );
y[:] .= 3.0;
gen( x, y, "cubed_small.json" );

# Cubes (x large):
x = range( -9.99e99, stop = -4.641588833612779e102, length = 2001 );
y = zeros( 2001 );
y[:] .= 3.0;
gen( x, y, "cubed_large.json" );

# To the 4th power (x small):
x = range( -1000, stop = 1000, length = 2001 );
y = zeros( 2001 );
y[:] .= 4.0;
gen( x, y, "to_the_fourth_small.json" );

# To the 4th power (x large):
x = range( 1.234e61, stop = 3.14e69, length = 2001 );
y = zeros( 2001 );
y[:] .= 4.0;
gen( x, y, "to_the_fourth_large.json" );

# Base near unity (y small):
x = range( 0.9999990463256836, stop = 1.0000009536743164, length = 500 );
y = range( -10, stop = 10, length = 500 );
gen( x, y, "base_near_unity_small.json" );

# Base near unity (y large):
x = range( 0.9999990463256836, stop = 1.0000009536743164, length = 500 );
y = range( 100, stop = 709, length = 500 );
gen( x, y, "base_near_unity_large.json" );

# Base near unity (y huge):
x = range( 0.9999999999990463256836, stop = 1.0000000000009536743164, length = 500 );
y = range( 1.8446744073709552e13, stop = 4.294967296e14, length = 500 );
gen( x, y, "base_near_unity_huge.json" );

# Subnormal results:
z = range( 3.14e-309, stop = 3.14e-312, length = 2001 );
x = range( 3.14e-52, stop = 3.14e-54, length = 2001 );
y = log.(z) ./ log.(x);
gen( x, y, "subnormal_results.json" );

# Negative exponents (x small, y small):
x = range( 0, stop = 10, length = 5001 );
y = rand( 5001 ) .* -100;
gen( x, y, "negative_exp_small_small.json" );

# Negative exponents (x large, y small):
x = range( 3.14e10, stop = 1e15, length = 5001 );
y = rand( 5001 ) .* -100;
gen( x, y, "negative_exp_large_small.json" );

# Negative exponents (x small, y large):
x = range( 0, stop = 10, length = 5001 );
y = rand( 5001 ) .* -(2.0^31);
gen( x, y, "negative_exp_small_large.json" );

# Negative exponents (x large, y large):
x = range( 3.14e20, stop = 1e22, length = 5001 );
y = rand( 5001 ) .* -(2.0^31);
gen( x, y, "negative_exp_large_large.json" );

# x small, y small:
x = rand( 5001 ) .* 100;
y = rand( 5001 ) .* 100;
gen( x, y, "small_small.json" );

# x small, y large:
x = rand( 5001 ) .* 1.9988548118735103;
y = rand( 5001 ) .* 2.0^10;
gen( x, y, "small_large.json" );

# x large, y small:
x = rand( 5001 ) .* 5e20;
y = rand( 5001 ) .* 10;
gen( x, y, "large_small.json" );

# Random (x decimal, y decimal):
x = rand( 5001 ) .* 500;
y = rand( 5001 ) .* 100;
gen( x, y, "decimal_decimal.json" );

# Random (x decimal, y integer):
x = rand( 5001 ) .* 500;
y = round.( rand(5001) .* 100 );
gen( x, y, "decimal_integer.json" );

# Random (x integer, y decimal):
x = round.( rand(5001) .* 500 );
y = rand( 5001 ) .* 100;
gen( x, y, "integer_decimal.json" );

# Random (x integer, y integer):
x = round.( rand(5001) .* 500 );
y = round.( rand(5001) .* 100 );
gen( x, y, "integer_integer.json" );
