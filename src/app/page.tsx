"use client";

import React, {
  useState,
} from "react";

import { saveAs } from 'file-saver';

import styles from './page.module.css';

import {
  provisioningOrderItems,
  codecItems,
  getItems,
  functionKeyTypes,
} from './Lists';

import SortableList from './SortableList';

import { generateXML } from "@/utils/GenerateXML";


function generateFunctionKeys(limit: number) {
  const fkeys = [];

  for (let i = 0; i < limit; i++) {
    fkeys.push({
      "id": i,
      "context": true,
      "type": null,
      "label": null,
      "value": null,
    });
  };

  return (<>
    {fkeys.map((item) => (
      <div className={styles.functionKeyBox} key={item.id}>
        <h3>{`P${item.id + 1} Key`}</h3>
        <div className={styles.functionKeyGrid}>
          <span>Context</span>
          <span>Type</span>
          <span>
            <select
              name={`fkey${item.id}Context`}
              id={`fkey${item.id}Context`}
            >
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </span>

          <span>
            <select
              name={`fkey${item.id}Type`}
              id={`fkey${item.id}Type`}
            >
              <option value='' key='none'></option>
              {functionKeyTypes.map((fkType, index) => (
                <option value={`${fkType}`} key={index}>{`${fkType}`}</option>
              ))}
            </select>
          </span>

          <span>Value</span>
          <span>Label</span>
          <span>
            <input
              type="text"
              placeholder="number"
              name={`fkey${item.id}Value`}
              id={`fkey${item.id}Value`}
            />
          </span>
          <span>
            <input
              type="text"
              placeholder="label"
              name={`fkey${item.id}Label`}
              id={`fkey${item.id}Label`}
            />
          </span>
        </div>
      </div>
    ))}
  </>);
}

export default function Home() {

  const [codecListOrder, setCodecListOrder] = useState<any>([]);
  const [provisioningListOrder, setProvisioningListOrder] = useState<any>([]);


  const getFormData = event => {
    event.preventDefault();

    const phoneSettings: any = {
      provisioningOrder: getItems(provisioningListOrder),
      codecPriorityList: getItems(codecListOrder),
    };

    for (let i = 0; i < event.target.length; i++) {
      const name = event.target[i].name;
      const value = event.target[i].value;

      phoneSettings[name] = value;
    }

    let blob = new Blob(
      [generateXML(phoneSettings)],
      { type: "application/xml" }
    );

    saveAs(blob, "snomD735-000413BCD359.htm");
  }

  return (
    <form onSubmit={getFormData}>
      <div>
        <h2>Phone Settings</h2>
      </div>
      <div id="date et haure">
        <h3>Date et haure</h3>
        <div>
          <label htmlFor="language">Language:</label>
          <div>
            <select name="language" id="language">
              <option value="Français">Français</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="timezone">Timezone</label>
          <input type="text" id="timezone" name="timezone" />
        </div>

        <div>
          <label htmlFor="dst">DST</label>
          <input type="text" id="dst" name="dst" />
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
            />
            <label htmlFor="user_active_on">On</label>
          </div>
          <div>
            <input
              type="radio"
              id="user_active_off"
              name="user_active"
              value="0"
            />
            <label htmlFor="user_active_off">Off</label>
          </div>
        </div>

        <div>
          <label htmlFor="user_real_name">User Real Name</label>
          <input type="text" id="user_real_name" name="user_real_name" />
        </div>

        <div>
          <label htmlFor="user_name">User Name</label>
          <input type="text" id="user_name" name="user_name" />
        </div>

        <div>
          <label htmlFor="user_host">Server</label>
          <input type="text" id="user_host" name="user_host" />
        </div>

        <div>
          <label htmlFor="user_outbound">Outbound Server</label>
          <input type="text" id="user_outbound" name="user_outbound" />
        </div>

        <div>
          <label htmlFor="user_pass">Password</label>
          <input type="password" id="user_pass" name="user_pass" />
        </div>

        <div>
          <label htmlFor="user_srtp">SRTP</label>
          <div>
            <input
              type="radio"
              id="user_srtp_on"
              name="user_srtp"
              value="1"
            />
            <label htmlFor="user_srtp_on">On</label>
          </div>
          <div>
            <input
              type="radio"
              id="user_srtp_off"
              name="user_srtp"
              value="0"
            />
            <label htmlFor="user_srtp_off">Off</label>
          </div>
        </div>

        <div>
          <label htmlFor="user_mailbox">Mailbox</label>
          <input type="input" id="user_mailbox" name="user_mailbox"
          />
        </div>
      </div>

      <div id="tone">
        <h3>Tone</h3>
        <div>
          <label htmlFor="tone_scheme">Tone Scheme</label>
          <input type="input" id="tone_scheme" name="tone_scheme" />
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
          />
        </div>

        <div>
          <label htmlFor="http_user">HTTP User</label>
          <input type="text" id="http_user" name="http_user"
          />
        </div>

        <div>
          <label htmlFor="http_password">HTTP Password</label>
          <input type="password" id="http_password" name="http_password"
          />
        </div>
      </div>

      <div id="design_et_background">
        <h3>Design et Background</h3>

        <div>
          <div>
            <label htmlFor="ui_theme">UI Theme</label>
            <div>
              <select name="ui_theme" id="ui_theme">
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

        {generateFunctionKeys(24)}
      </div>

      <div>
        <button
          id="generate_xml"
          type="submit"
        >
          Download XML File
        </button>
      </div>

    </form>
  );
}
