
# TARGETS #

# Run C benchmarks.
#
# This target runs a list of C benchmarks consecutively.

benchmark-c:
	$(QUIET) $(FIND_C_BENCHMARKS_CMD) | grep '^\/' | while read -r file; do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		cd `dirname $$file` && \
		$(MAKE) clean && \
		$(MAKE) && \
		$(MAKE) run || exit 1; \
	done

.PHONY: benchmark-c
