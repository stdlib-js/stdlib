
# VARIABLES #

# Define the command for `node`:
NODE ?= node

# Define the Node environment:
NODE_ENV_EXAMPLES ?= $(NODE_ENV)

# Define the Node path:
NODE_PATH_EXAMPLES ?= $(NODE_PATH)


# TARGETS #

# Run examples.
#
# This target runs a list of examples in sequential order. Note that we assume the examples can be run using Node.js.

examples: $(NODE_MODULES)
	$(QUIET) for file in $(EXAMPLES); do \
		echo ""; \
		echo "Running example: $$file"; \
		NODE_ENV=$(NODE_ENV_EXAMPLES) \
		NODE_PATH=$(NODE_PATH_EXAMPLES) \
		$(NODE) $$file || exit 1; \
	done

.PHONY: examples
