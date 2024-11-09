/*-----------Problem-6-----------*/
interface Profile {
  age: number;
  name: string;
  email: string;
}

const myProfile: Profile = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

function updateProfile<T>(obj: T, keys: Partial<T>): T {
  return {
    ...obj,
    ...keys,
  };
}

// console.log(myProfile);
// console.log(updateProfile(myProfile, { age: 26 }));
