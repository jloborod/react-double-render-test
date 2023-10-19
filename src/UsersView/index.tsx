import { useCallback, useEffect } from "react";
import useUserData from "./useUserData";
import usePagination from "./Pagination/usePagination";
import Pagination from "./Pagination";
import UserTable from "./UserTable";
import { Data } from "./types";

const UsersView = () => {
  // Data hook
  const [data, pull, isLoading] = useUserData();
  const totalCachedPages = data?.cachedPages.length;

  // Load at start
  useEffect(() => {
    console.log("lol");
    pull();
  }, []);

  // Handlers
  const handleNextPage = useCallback(
    async (currentPage: number) => {
      if (currentPage + 1 >= totalCachedPages) await pull();
    },
    [pull, totalCachedPages]
  );

  // Pagination hook
  const { currentPage, nextPage, previousPage } = usePagination({
    onNext: handleNextPage
  });

  const displayData = data?.cachedPages[currentPage];

  return (
    <>
      <UserTable data={displayData} />
      <p>Displaying page {currentPage + 1}</p>
      <p>{totalCachedPages} downloaded pages</p>
      <Pagination
        isLoading={isLoading}
        currentPage={currentPage}
        onNext={nextPage}
        onPrevious={previousPage}
      />
    </>
  );
};

export default UsersView;
