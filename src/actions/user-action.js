export const updateSearchValue = (searchValue) => {
    console.log('Search Action called');
    return {
        type: 'UPDATE_SEARCH_VALUE',
        searchValue: searchValue,
    }
}