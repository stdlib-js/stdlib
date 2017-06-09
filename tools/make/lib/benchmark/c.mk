
# TARGETS #

# Run C benchmarks.
#
# This target runs a list of C benchmarks consecutively.

benchmark-c:
	$(QUIET) $(FIND_C_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		cd `dirname $$file` && \
		$(MAKE) clean && \
		$(MAKE) && \
		$(MAKE) run || exit 1; \
	done

.PHONY: benchmark-c


# Run C benchmarks.
#
# This target runs a specified list of C benchmarks consecutively.

benchmark-c-files:
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		cd `dirname $$file` && \
		$(MAKE) clean && \
		$(MAKE) && \
		$(MAKE) run || exit 1; \
	done

.PHONY: benchmark-c-files
