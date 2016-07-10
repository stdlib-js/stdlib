
# VARIABLES #

# Define the command for `node`:
NODE ?= node

# Define the Node environment:
NODE_ENV ?= benchmark

# Define the Node path:
NODE_PATH ?= $(NODE_PATH_BENCHMARK)


# TARGETS #

# Run JavaScript benchmarks.
#
# This target runs a list of JavaScript benchmarks in sequential order. Note that we assume the benchmarks can be run using Node.js.

benchmark-javascript: $(NODE_MODULES)
	for file in $(BENCHMARKS); do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		$(NODE) $$file || exit 1; \
	done

.PHONY: benchmark-javascript
