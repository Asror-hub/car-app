export type NavigatorParamList = {
  ['OnBoardingScreen']: undefined;
  ['auth']: undefined;
  ['tabStack']: undefined;
  ['authStack']: undefined;
  ['rootStack']: undefined;
  ['innerProfileStack']: { screen: string };
};

export type ScreenName = keyof NavigatorParamList;
