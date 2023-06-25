function generateXML(settings: any) {
  const {
    language,
    timezone,
    dst,
    userActive,
    userRealName,
    userName,
    userHost,
    userOutbound,
    userPass,
    userSRTP,
    userMailbox,
    toneScheme,
    provisioningOrder,
    codecPriorityList,
    adminModePass,
    httpUser,
    httpPass,
    uiTheme,
  } = settings;

  const generateCodecPriorityList = (list: string[] | null) => {
    if (list === null) return "";

    let xml = '\n';
    for (let i = 0; i < list.length; i++) {
      xml += `<codec_priority_list idx="${i + 1}" perm="">${list[i]}</codec_priority_list>\n`
    }

    return xml;
  }

  // provisioning order priority list
  const generatePOPriorityList = (list: string[] | null) => {
    if (list === null) return "";

    let order = "";

    for (let i = 0; i < list.length; i++) {
      if (i !== 0) order += " ";
      order += `${list[i]}`;
    }

    const xml = `\n<provisioning_order perm="RW">${order}</provisioning_order>\n`;

    return xml;
  }

  const generateFKeys = (settings: any) => {
    let fkeyXML = "";

    const keys = Object.keys(settings);

    for (let i = 0; ; i++) {
      const context = `fkey${i}Context`;
      const type = `fkey${i}Type`;
      const value = `fkey${i}Value`;
      const label = `fkey${i}Label`;

      if (
        keys.includes(context) &&
        keys.includes(type) &&
        keys.includes(value) &&
        keys.includes(label)
      ) {
        if (settings[type] === '') continue;

        fkeyXML += `<fkey idx="${i}" context="${settings[context]}" label="${settings[label]}">${settings[type]}${settings[type] === 'line' ? '' : ` ${settings[value]}`}</fkey>`;
        fkeyXML += '\n';
      } else {
        break;
      }
    }

    return fkeyXML;

  };

  const XML: string = `

<?xml version="1.0" encoding="utf-8"?>
<settings>
  <phone-settings>
	<!-- Date et Heure -->
    <language perm="">${language}</language>
    <timezone perm="">${timezone}</timezone>
	<dst perm="">${dst}</dst>
	
	<!-- Utilisateur -->
    <user_active idx="1" perm="RW">${userActive ? 'on' : 'off'}</user_active>
    <user_realname idx="1" perm="RW">${userRealName}</user_realname>
    <user_name idx="1" perm="RW">${userName}</user_name>
    <user_host idx="1" perm="RW">${userHost}</user_host>
	<user_outbound idx="1" perm="">${userOutbound}</user_outbound>
 	<user_pass idx="1" perm="">${userPass}</user_pass>
	<user_srtp idx="1" perm="">${userSRTP ? 'on' : 'off'}</user_srtp>
	<user_mailbox idx="1" perm="">${userMailbox}</user_mailbox>
	
	<!-- Tone -->
	<tone_scheme perm="">${toneScheme}</tone_scheme>
	
  ${generatePOPriorityList(provisioningOrder)}
  	
	<!-- Codec -->

  ${generateCodecPriorityList(codecPriorityList)}
	        
	<!-- Security settings for admin mode and Web User Interface -->
    <admin_mode_password perm="">${adminModePass}</admin_mode_password>
    <http_user perm="">${httpUser}</http_user>
    <http_pass perm="">${httpPass}</http_pass>
	
	<!-- Design et background -->
	<ui_theme perm="RW">${uiTheme}</ui_theme>
	
	
  </phone-settings>
  
  <functionKeys e="2">
    ${generateFKeys(settings)}
  </functionKeys>
  
  <firmware-settings e="2">
    <firmware perm=""></firmware>
    <firmware_uxm perm=""></firmware_uxm>
  </firmware-settings>
  
  <tbook e='2'/>
  
  <dialplan e="2">
  </dialplan>
</settings>  
  `;
  return XML;
}

export { generateXML };