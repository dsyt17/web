export type addressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type contactType = {
  id?: string;
  username?: string;
  name: string;
  email: string;
  address: addressType;
};

export type postType = {
  id: string;
  title: string;
  body: string;
};

export type socialsType = [{ id: number; icon: string; path: string }];
