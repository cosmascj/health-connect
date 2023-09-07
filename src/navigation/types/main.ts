import { NavigatorScreenParams } from "@react-navigation/native";

export type AppRoutes = {
  TabStack: NavigatorScreenParams<TabRoutes>;

};
export type TabRoutes = {
   
    Home: undefined;
    Calender: undefined
    Notification: undefined
    Shedule: undefined
    Profile: undefined
  
  };