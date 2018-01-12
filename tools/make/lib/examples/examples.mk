#/
# @license Apache-2.0
#
# Copyright 2017 The Stdlib Authors
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

# RULES #

# Run examples.
#
# This target runs a list of examples in sequential order. Note that we assume the examples can be run using Node.js.

examples: $(NODE_MODULES)
	$(QUIET) $(FIND_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Running example: $$file"; \
		NODE_ENV=$(NODE_ENV_EXAMPLES) \
		NODE_PATH=$(NODE_PATH_EXAMPLES) \
		$(NODE) $$file || exit 1; \
	done

.PHONY: examples


# Run examples.
#
# This target runs a specified list of examples in sequential order. Note that we assume the examples can be run using Node.js.

examples-files: $(NODE_MODULES)
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Running example: $$file"; \
		NODE_ENV=$(NODE_ENV_EXAMPLES) \
		NODE_PATH=$(NODE_PATH_EXAMPLES) \
		$(NODE) $$file || exit 1; \
	done

.PHONY: examples-files
