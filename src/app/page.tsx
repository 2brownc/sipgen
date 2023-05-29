"use client";

import React, {
  useState,
  useEffect,
  useRef
} from "react";

import axios from 'axios';

import styles from './page.module.css';

import {
  provisioningOrderItems,
  codecItems,
  getItems
} from './Lists';

import SortableList from './SortableList';

import { Settings } from './Settings';

export default function Home() {

  const [status, setStatus] = useState<string>("waiting");
  const [codecListOrder, setCodecListOrder] = useState<any>([]);
  const [provisioningListOrder, setProvisioningListOrder] = useState<any>([]);
  const [sendData, setSendData] = useState<boolean>(false);

  let settings: Settings;

  const langRef = useRef<any>(null);
  const timeZoneRef = useRef<any>(null);
  const dstRef = useRef<any>(null);
  const userActiveOnRef = useRef<any>(null);
  const userActiveOffRef = useRef<any>(null);
  const userRealNameRef = useRef<any>(null);
  const userNameRef = useRef<any>(null);
  const userHostRef = useRef<any>(null);
  const userOutboundRef = useRef<any>(null);
  const userPassRef = useRef<any>(null);
  const userSRTPOnRef = useRef<any>(null);
  const userSRTPOffRef = useRef<any>(null);
  const userMailboxRef = useRef<any>(null);
  const toneSchemeRef = useRef<any>(null);
  const adminModePassRef = useRef<any>(null);
  const httpUserRef = useRef<any>(null);
  const httpPassRef = useRef<any>(null);
  const uiThemeRef = useRef<any>(null);

  const getFormData = () => {
    /*    
        console.log("codecListOrder", codecListOrder);
        console.log("ProvisioningListOrder", provisioningListOrder);
    
        console.log("language", langRef.current.value);
        console.log("Timezone", timeZoneRef.current.value);
        console.log("DST", dstRef.current.value);
        console.log("User Active On", userActiveOnRef.current.checked);
        console.log("User Active Off", userActiveOffRef.current.checked);
        console.log("User Real Name", userRealNameRef.current.value);
        console.log("User Name", userNameRef.current.value);
        console.log("Server", userHostRef.current.value);
        console.log("Outbound Server", userOutboundRef.current.value);
        console.log("User Pass", userPassRef.current.value);
        console.log("User SRTP On", userSRTPOnRef.current.checked);
        console.log("User SRTP Off", userSRTPOffRef.current.checked);
        console.log("User Mailbox", userMailboxRef.current.value);
        console.log("Tone Scheme", toneSchemeRef.current.value);
        console.log("Phone Admin Pass", adminModePassRef.current.value);
        console.log("HTTP User", httpUserRef.current.value);
        console.log("HTTP Pass", httpPassRef.current.value);
        console.log("UI Theme", uiThemeRef.current.value);
    */



    settings = {
      phoneSettings: {
        language: langRef.current?.value,
        timezone: timeZoneRef.current.value,
        dst: dstRef.current.value,
        userActive: userActiveOnRef.current.checked || false,
        userRealName: userRealNameRef.current.value,
        userName: userNameRef.current.value,
        userHost: userHostRef.current.value,
        userOutbound: userOutboundRef.current.value,
        userSRTP: userSRTPOnRef.current.checked || false,
        userMailbox: userMailboxRef.current.value,
        toneScheme: toneSchemeRef.current.value,
        provisioningOrder: getItems(provisioningOrderItems),
        codecPriorityList: getItems(codecItems),
        adminModePassword: adminModePassRef.current.value,
        httpUser: httpUserRef.current.value,
        httpsPass: httpPassRef.current.value,
        uiTheme: uiThemeRef.current.value
      }
    };

    setSendData(true);
  };

  const statusInfoText = (text: string): string => {
    let label = "";
    if (text === "waiting")
      label = "";
    if (text === "failure")
      label = "File generation filed. Click to try again."
    if (text === "success")
      label = "File successfully generated! Chcek your downloads."
    return label;
  };


  useEffect(() => {
    if (sendData) {
      setSendData(false);
      const payload = {
        name: "phone settings",
        message: settings
      };

      axios.post(
        './api/generatesettingsfile',
        payload,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      ).then(() => {
        setStatus('success');
      }).catch(() => {
        setStatus('failure')
      });
    }
  }, [sendData]);



  return (
    <>
      <form>
        <div>
          <h2>Phone Settings</h2>
        </div>
        <div id="date et haure">
          <h3>Date et haure</h3>
          <div>
            <label htmlFor="language">Language:</label>
            <div>
              <select name="language" id="language" ref={langRef}>
                <option value="Français">Français</option>
                <option value="English">English</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="timezone">Timezone</label>
            <input type="text" id="timezone" name="timezone" ref={timeZoneRef} />
          </div>

          <div>
            <label htmlFor="dst">DST</label>
            <input type="text" id="dst" name="dst" ref={dstRef} />
          </div>
        </div>

        <div id="utilisateur">
          <h3>Utilisateur</h3>
          <div>
            <label htmlFor="user_active">User Active:</label>
            <div>
              <input
                type="radio"
                id="user_active_on"
                name="user_active"
                value="1"
                ref={userActiveOnRef}
              />
              <label htmlFor="user_active_on">On</label>
            </div>
            <div>
              <input
                type="radio"
                id="user_active_off"
                name="user_active"
                value="0"
                ref={userActiveOffRef}
              />
              <label htmlFor="user_active_off">Off</label>
            </div>
          </div>

          <div>
            <label htmlFor="user_real_name">User Real Name</label>
            <input type="text" id="user_real_name" name="user_real_name"
              ref={userRealNameRef}
            />
          </div>

          <div>
            <label htmlFor="user_name">User Name</label>
            <input type="text" id="user_name" name="user_name"
              ref={userNameRef}
            />
          </div>

          <div>
            <label htmlFor="user_host">Server</label>
            <input type="text" id="user_host" name="user_host"
              ref={userHostRef}
            />
          </div>

          <div>
            <label htmlFor="user_outbound">Outbound Server</label>
            <input type="text" id="user_outbound" name="user_outbound"
              ref={userOutboundRef}
            />
          </div>

          <div>
            <label htmlFor="user_pass">Password</label>
            <input type="password" id="user_pass" name="user_pass"
              ref={userPassRef}
            />
          </div>

          <div>
            <label htmlFor="user_srtp">SRTP</label>
            <div>
              <input
                type="radio"
                id="user_srtp_on"
                name="user_srtp"
                value="1"
                ref={userSRTPOnRef}
              />
              <label htmlFor="user_srtp_on">On</label>
            </div>
            <div>
              <input
                type="radio"
                id="user_srtp_off"
                name="user_srtp"
                value="0"
                ref={userSRTPOffRef}
              />
              <label htmlFor="user_srtp_off">Off</label>
            </div>
          </div>

          <div>
            <label htmlFor="user_mailbox">Mailbox</label>
            <input type="input" id="user_mailbox" name="user_mailbox"
              ref={userMailboxRef}
            />
          </div>
        </div>

        <div id="tone">
          <h3>Tone</h3>
          <div>
            <label htmlFor="tone_scheme">Tone Scheme</label>
            <input type="input" id="tone_scheme" name="tone_scheme"
              ref={toneSchemeRef}
            />
          </div>

          <div>
            <div style={{
              marginTop: "20px",
            }}>
              Provisioning Order:
            </div>
            <div className={styles.helperText}>
              Click and drag to set priority. Items higher on the list have higher priority.
            </div>
            {/*<label htmlFor="provisioning_order">Provisioning Order</label>
            <input type="input" id="provisioning_order" name="provisioning_order" />*/}
            <div className={styles.sortList}>
              <SortableList
                list={provisioningOrderItems}
                updater={setProvisioningListOrder}
              />
            </div>
          </div>
        </div>

        <div id="codec">
          <h3>Codec Priority</h3>
          <div className={styles.helperText}>
            Click and drag to set codec priority. Codes higher in the list will have higher priority.
          </div>
          <div className={styles.sortList}>
            <SortableList
              list={codecItems}
              updater={setCodecListOrder}
            />
          </div>
        </div>

        <div id="security_settings">
          <div>
            <h3>Security Settings</h3>
            <h4>
              For admin mode and Web User Interface
            </h4>
          </div>

          <div>
            <label htmlFor="admin_mode_password">Phone Admin Password</label>
            <input
              type="password"
              id="admin_mode_password"
              name="admin_mode_password"
              ref={adminModePassRef}
            />
          </div>

          <div>
            <label htmlFor="http_user">HTTP User</label>
            <input type="text" id="http_user" name="http_user"
              ref={httpUserRef}
            />
          </div>

          <div>
            <label htmlFor="http_password">HTTP Password</label>
            <input type="password" id="http_password" name="http_password"
              ref={httpPassRef}
            />
          </div>
        </div>

        <div id="design_et_background">
          <h3>Design et Background</h3>

          <div>
            <div>
              <label htmlFor="ui_theme">UI Theme</label>
              <div>
                <select name="ui_theme" id="ui_theme" ref={uiThemeRef}>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        <div>
          <button
            id="generate_xml"
            type="button"
            onClick={getFormData}
          >
            Download XML File
          </button>

          <div>{statusInfoText(status)}</div>
        </div>

      </form>
    </>
  );
}