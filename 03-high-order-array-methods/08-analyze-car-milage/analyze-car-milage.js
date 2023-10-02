function analyzeCarMileage(cars) {
  const mileages = cars.map((car) => car.mileage);

  const totalMileage = mileages.reduce((total, m) => total + m, 0);
  const averageMileage = totalMileage / cars.length;

  const highestMileage = Math.max(...mileages);
  const highestMileageCar = cars.filter(
    (car) => car.mileage === highestMileage
  );

  const lowestMileage = Math.min(...mileages);
  const lowestMileageCar = cars.filter((car) => car.mileage === lowestMileage);

  return {
    averageMileage,
    highestMileageCar: highestMileageCar[0],
    lowestMileageCar: lowestMileageCar[0],
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
