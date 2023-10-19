export interface Data {
  cachedPages: User[][];
}

export interface User {
  gender: string;
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
  };
  email: string;
  dob: {
    age: number;
  };
  picture: {
    thumbnail: string;
  };
}
