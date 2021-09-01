export function configurePaginate(
  list,
  page,
  filter,
  setCurrentList,
  setPage,
  range
) {
  if (page && list && list.length) {
    const newPage = page;
    const firstIndex = newPage - 1;
    const lastIndex = firstIndex + range;
    const newPaginatedList = list.slice(firstIndex, lastIndex);

    setCurrentList(newPaginatedList);
    setPage(newPage);
  }
}
