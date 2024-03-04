interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
  houseNo: number;
}



export const ObjectLiterals = () => {
  const person: Person = {
    age: 23,
    firstName: "Mauricio",
    lastName: "Maza",
    address: {
      country: "Perú",
      houseNo: 1506,
    },
  };



  
  return (
    <>
      <h3>Object Literales</h3>
      <pre>{JSON.stringify(person, ['age'], 2)}</pre>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <pre>{JSON.stringify(person.address.country)}</pre>
    </>
  );
};
