export const filterData = (searchText, List) => {
  const filteredList = List.filter((res) =>
    res.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredList;
};
