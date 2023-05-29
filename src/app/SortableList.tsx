import React, { FC, useEffect, useState } from 'react';
import { ReactSortable } from "react-sortablejs";

import styles from './page.module.css';

import { ItemType } from './Lists';

type SortableListProps = {
  list: ItemType[],
  updater: any
}

const SortableList: FC<SortableListProps> = ({ list, updater }: SortableListProps) => {
  const [state, setState] = useState<ItemType[]>(list);

  useEffect(() => {
    updater(state);
  }, [state])

  return (
    <ReactSortable
      list={state}
      setList={setState}
      filter={".static"}
    >
      {
        state.map((item: any) => (
          <div key={item.id}
            className={
              `
            ${item.filtered ? styles.sortItemFilter : styles.sortItem}
            `
            }
          >
            {item.name}
          </div>
        ))
      }
    </ReactSortable >
  );
};

export default SortableList;