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
    gen( re, im, name )

Generate fixture data and write to file.

# Arguments

* `re`: domain (real components)
* `im`: domain (imaginary components)
* `name::AbstractString`: output filename

# Examples

``` julia
julia> re = range( -1.0, stop = 1.0, length = 2001 );
julia> im = range( -1.0, stop = 1.0, length = 2001 );
julia> gen( re, im, \"data.json\" );
```
"""
function gen( re, im, y, name )
	len = length( re );
	ans = Array{ComplexF64}( undef, len );
	z = complex.( re, im );
	for i in eachindex(ans)
		ans[ i ] = flipsign( z[ i ], y[ i ] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("re", re),
		("im", im),
		("y", y),
		("expected_re", real( ans )),
		("expected_im", imag( ans ))
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	write( outfile, "\n" );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Generate fixture data:
re = range( -1000.0, stop = 1000.0, length = 2003 );
im = range( -1000.0, stop = 1000.0, length = 2003 );
y = rand( -100.0:100.0, 2003 );
gen( re, im, y, "data.json" );
