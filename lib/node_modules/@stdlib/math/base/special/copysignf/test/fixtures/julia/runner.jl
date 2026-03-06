#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2021 The Stdlib Authors.
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
    gen( exp, filepath )

Generate fixture data and write to file.

# Arguments

* `exp`: exponents used to randomly generate numbers of varying magnitudes
* `filepath::AbstractString`: filepath of the output file

# Examples

``` julia
julia> exp = range( 0, stop = 308, length = 5001 );
julia> gen( exp, \"./data.json\" );
```
"""
function gen( exp, filepath )
	len = length( exp );

	x = Array{Float32}( undef, len );
	y = Array{Float32}( undef, len );
	z = Array{Float64}( undef, len );
	for i in eachindex(x)
		x[i] = (rand()-0.5) * 10^exp[i];
		y[i] = rand() - 0.5;
		z[i] = copysign( x[i], y[i] );
	end

	data = Dict([
		("x", x),
		("y", y),
		("expected", z)
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

# Generate fixture data from 0 to 10**38:
exp = range( 0, stop = 38, length = 5001 );
out = joinpath( dir, "data.json" );
gen( exp, out );
