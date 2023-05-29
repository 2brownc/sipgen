interface Settings {
  phoneSettings: {
    language: string | null,
    timezone: string | null,
    dst: string | null,
    userActive: boolean | null,
    userRealName: string | null,
    userName: string | null,
    userHost: string | null,
    userOutbound: string | null,
    userSRTP: boolean | null,
    userMailbox: string | null,
    toneScheme: string | null,
    provisioningOrder: string[] | null,
    codecPriorityList: string[] | null,
    adminModePassword: string | null,
    httpUser: string | null,
    httpsPass: string | null,
    uiTheme: string | null;
  }
};

export type { Settings };