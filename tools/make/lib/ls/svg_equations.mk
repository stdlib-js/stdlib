#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
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
#/

# VARIABLES #

# Define the command flags:
FIND_SVG_EQUATIONS_FLAGS ?= \
	-type f \
	-name "$(SVG_EQUATIONS_PATTERN)" \
	-path "$(ROOT_DIR)/**/$(DOCUMENTATION_FOLDER)/**" \
	-regex "$(SVG_EQUATIONS_FILTER)" \
	$(FIND_SVG_EQUATIONS_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_SVG_EQUATIONS_FLAGS := -regextype posix-extended $(FIND_SVG_EQUATIONS_FLAGS)
endif

# Define a command for listing SVG equation files:
FIND_SVG_EQUATIONS_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_SVG_EQUATIONS_FLAGS)

# Define the list of files:
SVG_EQUATION_FILES ?= $(shell $(FIND_SVG_EQUATIONS_CMD))


# TARGETS #

# List all SVG equation files.
#
# This target prints a list of all SVG equation files.

list-svg-equation-files:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_SVG_EQUATIONS_FLAGS) $(find_print_list)

.PHONY: list-svg-equation-files
