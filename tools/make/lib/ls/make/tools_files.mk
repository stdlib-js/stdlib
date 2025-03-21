#/
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
#/

# VARIABLES #

# Define the command flags:
FIND_TOOLS_MAKEFILES_FLAGS ?= \
	-type f \
	\( \
		-name 'Makefile' \
		-o \
		-name "$(MAKEFILE_PATTERN)" \
	\) \
	-regex "$(MAKEFILE_FILTER)"

ifneq ($(OS), Darwin)
	FIND_TOOLS_MAKEFILES_FLAGS := -regextype posix-extended $(FIND_TOOLS_MAKEFILES_FLAGS)
endif

# Define a command for listing Makefile files:
FIND_TOOLS_MAKEFILES_CMD ?= find $(find_kernel_prefix) $(TOOLS_MAKE_DIR) $(FIND_TOOLS_MAKEFILES_FLAGS)

# Define the list of files:
TOOLS_MAKEFILES_FILES ?= $(shell $(FIND_TOOLS_MAKEFILES_CMD))


# TARGETS #

# List all Makefile files.
#
# This target prints a list of all Makefile files.

list-tools-makefiles-files:
	$(QUIET) find $(find_kernel_prefix) $(TOOLS_MAKE_DIR) $(FIND_TOOLS_MAKEFILES_FLAGS) $(find_print_list)

.PHONY: list-tools-makefiles-files
