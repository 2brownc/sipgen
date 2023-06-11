"use client";

import React, {
  useState,
  useRef
} from "react";

import { saveAs } from 'file-saver';

import styles from './page.module.css';

import {
  provisioningOrderItems,
  codecItems,
  getItems
} from './Lists';

import SortableList from './SortableList';

import { Settings } from './Settings';

import { generateXML } from "@/utils/GenerateXML";

export default function Home() {

  const [codecListOrder, setCodecListOrder] = useState<any>([]);
  const [provisioningListOrder, setProvisioningListOrder] = useState<any>([]);

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
  const fk0ContextRef = useRef<any>(null);
  const fk0TypeRef = useRef<any>(null);
  const fk0NumberRef = useRef<any>(null);
  const fk0LabelRef = useRef<any>(null);
  const fk1ContextRef = useRef<any>(null);
  const fk1TypeRef = useRef<any>(null);
  const fk1NumberRef = useRef<any>(null);
  const fk1LabelRef = useRef<any>(null);
  const fk2ContextRef = useRef<any>(null);
  const fk2TypeRef = useRef<any>(null);
  const fk2NumberRef = useRef<any>(null);
  const fk2LabelRef = useRef<any>(null);
  const fk3ContextRef = useRef<any>(null);
  const fk3TypeRef = useRef<any>(null);
  const fk3NumberRef = useRef<any>(null);
  const fk3LabelRef = useRef<any>(null);
  const fk4ContextRef = useRef<any>(null);
  const fk4TypeRef = useRef<any>(null);
  const fk4NumberRef = useRef<any>(null);
  const fk4LabelRef = useRef<any>(null);
  const fk5ContextRef = useRef<any>(null);
  const fk5TypeRef = useRef<any>(null);
  const fk5NumberRef = useRef<any>(null);
  const fk5LabelRef = useRef<any>(null);

  const getFormData = () => {
    const phoneSettings: Settings = {
      phoneSettings: {
        language: langRef.current?.value,
        timezone: timeZoneRef.current.value,
        dst: dstRef.current.value,
        userActive: userActiveOnRef.current.checked || false,
        userRealName: userRealNameRef.current.value,
        userName: userNameRef.current.value,
        userHost: userHostRef.current.value,
        userOutbound: userOutboundRef.current.value,
        userPass: userPassRef.current.value,
        userSRTP: userSRTPOnRef.current.checked || false,
        userMailbox: userMailboxRef.current.value,
        toneScheme: toneSchemeRef.current.value,
        provisioningOrder: getItems(provisioningListOrder),
        codecPriorityList: getItems(codecListOrder),
        adminModePass: adminModePassRef.current.value,
        httpUser: httpUserRef.current.value,
        httpPass: httpPassRef.current.value,
        fk0Context: fk0ContextRef.current.value,
        fk0Label: fk0LabelRef.current.value,
        fk0Number: fk0NumberRef.current.value,
        fk0Type: fk0TypeRef.current.value,
        fk1Context: fk1ContextRef.current.value,
        fk1Label: fk1LabelRef.current.value,
        fk1Number: fk1NumberRef.current.value,
        fk1Type: fk1TypeRef.current.value,
        fk2Context: fk2ContextRef.current.value,
        fk2Label: fk2LabelRef.current.value,
        fk2Number: fk2NumberRef.current.value,
        fk2Type: fk2TypeRef.current.value,
        fk3Context: fk3ContextRef.current.value,
        fk3Label: fk3LabelRef.current.value,
        fk3Number: fk3NumberRef.current.value,
        fk3Type: fk3TypeRef.current.value,
        fk4Context: fk4ContextRef.current.value,
        fk4Label: fk4LabelRef.current.value,
        fk4Number: fk4NumberRef.current.value,
        fk4Type: fk4TypeRef.current.value,
        fk5Context: fk5ContextRef.current.value,
        fk5Label: fk5LabelRef.current.value,
        fk5Number: fk5NumberRef.current.value,
        fk5Type: fk5TypeRef.current.value,
        uiTheme: uiThemeRef.current.value
      }
    };

    let blob = new Blob(
      [generateXML(phoneSettings)],
      { type: "application/xml" }
    );

    saveAs(blob, "snomD735-000413BCD359.htm");
  }

  return (
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
          Click and drag to set codec priority. Codces higher in the list will have higher priority. Codecs below "Ignore Bar" will be ignored.
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

      <div id="functionKeys">
        <div>
          <h2>Function Keys</h2>
        </div>

        <div className={styles.functionKeyBox}>
          <h3>P1 Key</h3>
          <div className={styles.functionKeyGrid}>
            <span>Context</span>
            <span>Type</span>
            <span>
              <input type="text" placeholder="context" ref={fk0ContextRef} />
            </span>
            <span>
              <input type="text" placeholder="type" ref={fk0TypeRef} readonly value="line" />
            </span>

            <span>Number</span>
            <span>Label</span>
            <span>
              <input type="text" placeholder="number" ref={fk0NumberRef} />
            </span>
            <span>
              <input type="text" placeholder="label" ref={fk0LabelRef} />
            </span>
          </div>
        </div>

        <div className={styles.functionKeyBox}>
          <h3>P2 Key</h3>
          <div className={styles.functionKeyGrid}>
            <span>Context</span>
            <span>Type</span>
            <span>
              <input type="text" placeholder="context" ref={fk1ContextRef} />
            </span>
            <span>
              <input type="text" placeholder="type" ref={fk1TypeRef} readonly value="line" />
            </span>

            <span>Number</span>
            <span>Label</span>
            <span>
              <input type="text" placeholder="number" ref={fk1NumberRef} />
            </span>
            <span>
              <input type="text" placeholder="label" ref={fk1LabelRef} />
            </span>
          </div>
        </div>

        <div className={styles.functionKeyBox}>
          <h3>P3 Key</h3>
          <div className={styles.functionKeyGrid}>
            <span>Context</span>
            <span>Type</span>
            <span>
              <input type="text" placeholder="context" ref={fk2ContextRef} />
            </span>
            <span>
              <input type="text" placeholder="type" ref={fk2TypeRef} readonly value="blf" />
            </span>

            <span>Number</span>
            <span>Label</span>
            <span>
              <input type="text" placeholder="number" ref={fk2NumberRef} />
            </span>
            <span>
              <input type="text" placeholder="label" ref={fk2LabelRef} />
            </span>
          </div>
        </div>

        <div className={styles.functionKeyBox}>
          <h3>P4 Key</h3>
          <div className={styles.functionKeyGrid}>
            <span>Context</span>
            <span>Type</span>
            <span>
              <input type="text" placeholder="context" ref={fk3ContextRef} />
            </span>
            <span>
              <input type="text" placeholder="type" ref={fk3TypeRef}  readonly value="blf" />
            </span>

            <span>Number</span>
            <span>Label</span>
            <span>
              <input type="text" placeholder="number" ref={fk3NumberRef} />
            </span>
            <span>
              <input type="text" placeholder="label" ref={fk3LabelRef} />
            </span>
          </div>
        </div>

        <div className={styles.functionKeyBox}>
          <h3>P5 Key</h3>
          <div className={styles.functionKeyGrid}>
            <span>Context</span>
            <span>Type</span>
            <span>
              <input type="text" placeholder="context" ref={fk4ContextRef} />
            </span>
            <span>
              <input type="text" placeholder="type" ref={fk4TypeRef}  readonly value="blf" />
            </span>

            <span>Number</span>
            <span>Label</span>
            <span>
              <input type="text" placeholder="number" ref={fk4NumberRef} />
            </span>
            <span>
              <input type="text" placeholder="label" ref={fk4LabelRef} />
            </span>
          </div>
        </div>

        <div className={styles.functionKeyBox}>
          <h3>P6 Key</h3>
          <div className={styles.functionKeyGrid}>
            <span>Context</span>
            <span>Type</span>
            <span>
              <input type="text" placeholder="context" ref={fk5ContextRef} />
            </span>
            <span>
              <input type="text" placeholder="type" ref={fk5TypeRef}  readonly value="blf" />
            </span>

            <span>Number</span>
            <span>Label</span>
            <span>
              <input type="text" placeholder="number" ref={fk5NumberRef} />
            </span>
            <span>
              <input type="text" placeholder="label" ref={fk5LabelRef} />
            </span>
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
      </div>

    </form>
  );
}
