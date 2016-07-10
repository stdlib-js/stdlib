
# VARIABLES #

# Define the command for `node`:
NODE ?= node

# Define the Node environment:
NODE_ENV ?= examples

# Define the Node path:
NODE_PATH ?= $(NODE_PATH_EXAMPLES)


# TARGETS #

# Run examples.
#
# This target runs a list of examples in sequential order. Note that we assume the examples can be run using Node.js.

examples: $(NODE_MODULES)
	for file in $(EXAMPLES); do \
		echo ""; \
		echo "Running example: $$file"; \
		$(NODE) $$file || exit 1; \
	done

.PHONY: examples
