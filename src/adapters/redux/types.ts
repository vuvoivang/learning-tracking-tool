import { ILoginResponseData, ISessionData } from "../../domain/auth";

export interface StoreState {
  auth: ILoginResponseData;
  user: ISessionData;
}
