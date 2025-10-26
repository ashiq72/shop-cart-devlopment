export interface IUser {
  userId: string;
  name: string;
  email: string;
  hasShop?: boolean;
  isActive?: boolean;
  role: "uaer" | "admin";
  iat?: number;
  exp?: number;
}
