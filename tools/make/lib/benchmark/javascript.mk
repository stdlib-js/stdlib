
# TARGETS #

# Run JavaScript benchmarks.
#
# This target runs a list of JavaScript benchmarks in sequential order. Note that we assume the benchmarks can be run using Node.js.

benchmark-javascript: $(NODE_MODULES)
	$(QUIET) $(FIND_BENCHMARKS_CMD) | grep '^\/' | while read -r file; do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		NODE_ENV=$(NODE_ENV_BENCHMARK) \
		NODE_PATH=$(NODE_PATH_BENCHMARK) \
		$(NODE) $$file || exit 1; \
	done

.PHONY: benchmark-javascript


# Run JavaScript benchmarks.
#
# This target runs a specified list of JavaScript benchmarks in sequential order. Note that we assume the benchmarks can be run using Node.js.

benchmark-javascript-files: $(NODE_MODULES)
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		NODE_ENV=$(NODE_ENV_BENCHMARK) \
		NODE_PATH=$(NODE_PATH_BENCHMARK) \
		$(NODE) $$file || exit 1; \
	done

.PHONY: benchmark-javascript-files
