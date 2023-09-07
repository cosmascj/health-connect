import { NavigatorScreenParams } from "@react-navigation/native";

export type AppRoutes = {
  TabStack: NavigatorScreenParams<TabRoutes>;

};
export type TabRoutes = {
   
    Home: undefined;
    Profile: undefined
    Notification: undefined
    Calender: undefined
    Shedule: undefined
  
  };