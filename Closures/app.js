function countAnimal(animal) {
  let count = 0;
  return () => {
    count++;
    return `count ${count} ${animal}s`;
  };
}
