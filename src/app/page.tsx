"use client";

import styles from './page.module.css';
import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";


interface ItemType {
  id: number;
  name: string;
}

// sortable codec list

const CodecList: FC = (props) => {
  const [state, setState] = useState<ItemType[]>([
    { id: 1, name: "G722" },
    { id: 2, name: "pcmu" },
    { id: 3, name: "pcma" },
    { id: 4, name: "gsm" },
    { id: 5, name: "g723" },
    { id: 6, name: "g726-32" },
    { id: 7, name: "aal2-g726-32" },
    { id: 8, name: "g729" },
    { id: 9, name: "telephone-event" },
  ]);

  return (
    <ReactSortable
      list={state}
      setList={setState}
    >
      {state.map((item) => (
        <div className={styles.sortItem} key={item.id}>{item.name}</div>
      ))}
    </ReactSortable>
  );
};

export default function Home() {
  return (
    <>
      <form>
        <div>
          <h2>Phone Settings</h2>
        </div>
        <div id="date et haure">
          <h3>Date et haure</h3>
          <div>
            <label htmlFor="language">Language</label>
            <input type="text" id="language" name="language" />
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
                checked
              />
              <label htmlFor="user_active_on">On</label>
            </div>
            <div>
              <input type="radio" id="user_active_off" name="user_active" value="0" />
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
                checked
              />
              <label htmlFor="user_srtp_on">On</label>
            </div>
            <div>
              <input type="radio" id="user_srtp_off" name="user_srtp" value="0" />
              <label htmlFor="user_srtp_off">Off</label>
            </div>
          </div>

          <div>
            <label htmlFor="user_mailbox">Mailbox</label>
            <input type="input" id="user_mailbox" name="user_mailbox" />
          </div>
        </div>

        <div id="tone">
          <h3>Tone</h3>
          <div>
            <label htmlFor="tone_scheme">Tone Scheme</label>
            <input type="input" id="tone_scheme" name="tone_scheme" />
          </div>

          <div>
            <label htmlFor="provisioning_order">Provisioning Order</label>
            <input type="input" id="provisioning_order" name="provisioning_order" />
          </div>
        </div>

        <div id="codec">
          <h3>Codec Priority</h3>
          <div>
            <span>
              Drag and drop to set codec priority. Codes higher in the list will have higher priority.
            </span>
          </div>
          <div className={styles.sortList}>
            {<CodecList />}
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
            <input type="text" id="http_user" name="http_user" />
          </div>

          <div>
            <label htmlFor="http_password">HTTP Password</label>
            <input type="password" id="http_password" name="http_password" />
          </div>

        </div>

        <div>
          <button
            id="generate_xml"
            type="button"
          >
            Download XML File
          </button>
        </div>

      </form>
    </>
  );
}