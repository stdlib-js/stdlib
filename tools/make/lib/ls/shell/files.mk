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
FIND_SHELL_FLAGS ?= \
	-type f \
	\( -name "$(SHELL_PATTERN)" -o ! -name "*.*" \) \
	-regex "$(SHELL_FILTER)" \
	$(FIND_FILES_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_SHELL_FLAGS := -regextype posix-extended $(FIND_SHELL_FLAGS)
endif

# Define a command for listing shell script files:
FIND_SHELL_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_SHELL_FLAGS)

# Define the list of files:
SHELL_FILES ?= $(shell $(FIND_SHELL_CMD) | while read -r file; do head -n1 "$$file" | grep -q '^\#\!/usr/bin/env bash' && echo "$$file"; done)


# RULES #

#/
# Lists all shell script files.
#
# @example
# make list-shell-files
#/
list-shell-files:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_SHELL_FLAGS) $(find_print_list) | while read -r file; do \
		head -n1 "$$file" | \
		grep -q "^#\!/usr/bin/env bash" && \
		echo "$$file" || continue; \
	done

.PHONY: list-shell-files
