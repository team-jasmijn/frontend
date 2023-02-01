/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Chat from './types/Chat';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  ActiveInScreen: undefined;
  ActiveInScreen_2: undefined;
  LoginStudentScreen: undefined;
  ModalScreen: undefined;
  NotFoundScreen: undefined;
  StudentInform: undefined;
  StudentInform2: undefined;
  TabOneScreen: undefined;
  TabTwoScreen: undefined;
  WelcomeScreen: undefined;
  HomeScreen: undefined;
  SelectSignUpTypeScreen: undefined;
  SignUpScreen: undefined;
  CompanyInform: undefined;
  CompanyInform2: undefined;
  MatchingScreen: undefined;
  ChatIndexScreen: undefined;
  ChatDetailScreen: {
    chat: Chat;
  };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
