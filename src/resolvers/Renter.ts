export const rentals = (parent) => {
  return [
    {
      id: 2,
      renterId: 763,
    },
    {
      id: 3,
      renterId: 976,
    },
  ].filter((rental) => rental.renterId == parent.id);
};

export const Renter = {
  rentals,
};
