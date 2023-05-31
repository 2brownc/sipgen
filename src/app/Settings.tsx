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
    userPass: string | null,
    userSRTP: boolean | null,
    userMailbox: string | null,
    toneScheme: string | null,
    provisioningOrder: string[] | null,
    codecPriorityList: string[] | null,
    adminModePass: string | null,
    httpUser: string | null,
    httpPass: string | null,
    uiTheme: string | null,
    fkey0: string | null,
    fkey1: string | null,
    fkey2: string | null,
    fkey3: string | null,
    fkey4: string | null,
    fkey5: string | null,
  }
};

export type { Settings };