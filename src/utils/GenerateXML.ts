import { Settings } from '../app/Settings';

function generateXML(settings: Settings) {
  const {
    phoneSettings: {
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
      fk0Context,
      fk0Type,
      fk0Label,
      fk0Number,
      fk1Context,
      fk1Type,
      fk1Label,
      fk1Number,
      fk2Context,
      fk2Type,
      fk2Label,
      fk2Number,
      fk3Context,
      fk3Type,
      fk3Label,
      fk3Number,
      fk4Context,
      fk4Type,
      fk4Label,
      fk4Number,
      fk5Context,
      fk5Type,
      fk5Label,
      fk5Number,
    }
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
<fkey idx="0" context="${fk0Context}" short_label_mode="icon_text" short_label="" short_default_text="!!$(::)!!$(generate_via_conditional_label_short)" label_mode="icon_text" icon_type="" reg_label_mode="icon_text" label="${fk0Label}" lp="on" default_text="!!$(::)!!$(generate_via_conditional_label_full)" perm="">${fk0Type}</fkey>
<fkey idx="1" context="${fk1Context}" short_label_mode="icon_text" short_label="" short_default_text="!!$(::)!!$(generate_via_conditional_label_short)" label_mode="icon_text" icon_type="" reg_label_mode="icon_text" label="${fk1Label}" lp="on" default_text="!!$(::)!!$(generate_via_conditional_label_full)" perm="">${fk1Type}</fkey>
<fkey idx="2" context="${fk2Context}" short_label_mode="icon_text" short_label="Park 1" short_default_text="!!$(::)!!$(generate_via_conditional_label_short)" label_mode="icon_text" icon_type="" reg_label_mode="icon_text" label="${fk2Label}" lp="on" default_text="!!$(::)!!$(generate_via_conditional_label_full)" perm="">${fk2Number}</fkey>
<fkey idx="3" context="${fk3Context}" short_label_mode="icon_text" short_label="Park 2" short_default_text="!!$(::)!!$(generate_via_conditional_label_short)" label_mode="icon_text" icon_type="" reg_label_mode="icon_text" label="${fk3Label}" lp="on" default_text="!!$(::)!!$(generate_via_conditional_label_full)" perm="">${fk3Number}</fkey>
<fkey idx="4" context="${fk4Context}" short_label_mode="icon_text" short_label="Park 2" short_default_text="!!$(::)!!$(generate_via_conditional_label_short)" label_mode="icon_text" icon_type="" reg_label_mode="icon_text" label="${fk4Label}" lp="on" default_text="!!$(::)!!$(generate_via_conditional_label_full)" perm="">${fk4Number}</fkey>
<fkey idx="5" context="${fk5Context}" short_label_mode="icon_text" short_label="Park 2" short_default_text="!!$(::)!!$(generate_via_conditional_label_short)" label_mode="icon_text" icon_type="" reg_label_mode="icon_text" label="${fk5Label}" lp="on" default_text="!!$(::)!!$(generate_via_conditional_label_full)" perm="">${fk5Number}</fkey>
  </functionKeys>
  <firmware-settings e="2">
<firmware perm=""></firmware>
<firmware_uxm perm=""></firmware_uxm>
</firmware-settings>
<functionKeys e="2">
  </functionKeys>
<tbook e='2'/><dialplan e="2">
</dialplan>
</settings>  
  `;
  return XML;
}

export { generateXML };