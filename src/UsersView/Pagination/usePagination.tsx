import { useCallback, useState } from "react";

interface Props {
  onNext?: (currentPage: number) => void;
  onPrevious?: (currentPage: number) => void;
  initialPage?: number;
}

interface UsePaginationReturn {
  currentPage: number;
  nextPage: () => void;
  previousPage: () => void;
}

const noop: Function = () => {};
const INITIAL_PAGE = 0;

// Just logic here, this is headless,
// use it with any style you want or use the builtin component.
export default ({
  onNext = () => noop,
  onPrevious = () => noop,
  initialPage = INITIAL_PAGE
}: Props): UsePaginationReturn => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handleNextPage = useCallback(async () => {
    // Internal business (Single responsability)
    await onNext(currentPage);
    setCurrentPage((v) => v + 1);
  }, [onPrevious, currentPage]);

  const handlePreviousPage = useCallback(async () => {
    // Internal business (Single responsability)
    await onPrevious(currentPage);
    setCurrentPage((v) => v - 1);
  }, [onPrevious, currentPage]);

  return {
    currentPage,
    nextPage: handleNextPage,
    previousPage: handlePreviousPage
  };
};
