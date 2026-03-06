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
    gen( x, filepath )

Generate fixture data and write to file.

# Arguments

* `x`: domain
* `filepath::AbstractString`: filepath of the output file

# Examples

``` julia
julia> x = range( 0, stop = 1000, length = 2001 );
julia> gen( x, \"./data.json\" );
```
"""
function gen( x, filepath )
	y = Array{Float64}( undef, length(x) );
	for i in eachindex(x)
		y[i] = log2( x[i] );
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

# Subnormal values:
x = range( 1.0e-314, stop = 1.0e-315, length = 503 );
out = joinpath( dir, "subnormal.json" );
gen( x, out );

# Positive tiny values:
x = range( 1e-300, stop = 1e-308, length = 500 );
out = joinpath( dir, "tiny_positive.json" );
gen( x, out );

# Small(er) values:
x = range( 1e-16, stop = 0.8, length = 500 );
out = joinpath( dir, "smaller.json" );
gen( x, out );

# Positive small values:
x = range( 0.8, stop = 3.0, length = 500 );
out = joinpath( dir, "small_positive.json" );
gen( x, out );

# Positive medium values:
x = range( 3.0, stop = 20.0, length = 500 );
out = joinpath( dir, "medium_positive.json" );
gen( x, out );

# Large positive values:
x = range( 20.0, stop = 50.0, length = 500 );
out = joinpath( dir, "large_positive.json" );
gen( x, out );

# Very large positive values:
x = range( 50.0, stop = 500.0, length = 500 );
out = joinpath( dir, "very_large_positive.json" );
gen( x, out );
