export const hasCollectionItem = <T extends { id: number }>(collection: T[], item: T) => {
  return collection.findIndex((_item) => _item.id === item.id) !== -1
}
