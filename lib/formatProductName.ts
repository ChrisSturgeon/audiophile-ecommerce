export default function formatProductName(name: string) {
  const noMark = name.replace('Mark', 'MK');

  const noCategory = ['Headphones', 'Earpones', 'Speaker'].reduce(
    (result, word) => result.replace(word, ''),
    noMark
  );

  return noCategory;
}
