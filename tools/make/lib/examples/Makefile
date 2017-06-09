
# TARGETS #

# Run examples.
#
# This target runs a list of examples in sequential order. Note that we assume the examples can be run using Node.js.

examples: $(NODE_MODULES)
	$(QUIET) $(FIND_EXAMPLES_CMD) | grep '^\/' | while read -r file; do \
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
