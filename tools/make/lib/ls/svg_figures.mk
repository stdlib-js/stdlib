#/
# @license Apache-2.0
#
# Copyright (c) 2026 The Stdlib Authors.
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
FIND_SVG_FIGURES_FLAGS ?= \
	-type f \
	-name "$(SVG_FIGURES_PATTERN)" \
	-path "$(ROOT_DIR)/**/$(DOCUMENTATION_FOLDER)/**" \
	-regex "$(SVG_FIGURES_FILTER)" \
	$(FIND_SVG_EQUATIONS_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_SVG_FIGURES_FLAGS := -regextype posix-extended $(FIND_SVG_FIGURES_FLAGS)
endif

# Define a command for listing SVG figure files:
FIND_SVG_FIGURES_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_SVG_FIGURES_FLAGS)

# Define the list of files:
SVG_FIGURE_FILES ?= $(shell $(FIND_SVG_FIGURES_CMD))


# TARGETS #

# List all SVG figure files.
#
# This target prints a list of all SVG figure files.

list-svg-figure-files:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_SVG_FIGURES_FLAGS) $(find_print_list)

.PHONY: list-svg-figure-files
