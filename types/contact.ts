export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type ContactDocument = ContactPayload & {
  createdAt: Date;
};
