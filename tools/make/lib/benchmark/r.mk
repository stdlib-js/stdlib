
# TARGETS #

# Run R benchmarks.
#
# This target runs a list of R benchmarks in sequential order. Note that we assume the benchmarks can be run using R.

benchmark-r:
	$(QUIET) $(FIND_R_BENCHMARKS_CMD) | grep '^\/' | while read -r file; do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		$(MAKE_EXECUTABLE) $$file && $$file || exit 1; \
	done

.PHONY: benchmark-r


# Run R benchmarks.
#
# This target runs a specified list of R benchmarks in sequential order. Note that we assume the benchmarks can be run using R.

benchmark-r-files:
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		$(MAKE_EXECUTABLE) $$file && $$file || exit 1; \
	done

.PHONY: benchmark-r-files
