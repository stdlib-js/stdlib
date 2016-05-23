
# VARIABLES #

# Define the command for `node`:
NODE ?= node


# TARGETS #

# Run examples.
#
# This target runs a list of examples in sequential order. Note that we assume the examples can be run using Node.js.

examples: node_modules
	for file in $(EXAMPLES); do \
		echo ""; \
		echo "Running example: $$file"; \
		$(NODE) $$file || exit 1; \
	done

.PHONY: examples
