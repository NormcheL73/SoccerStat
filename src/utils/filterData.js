const filterData = (query, data) => {
  if (!query) {
    return data
  } else {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.area.name.toLowerCase().includes(query.toLowerCase())
    )
  }
}

export default filterData
