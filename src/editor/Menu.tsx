import React from 'react';
import * as Icons from './icons';
import * as styles from './style/Menu';
import cx from 'classnames';
export type ActivePane = 'code' | 'explorer-diagram' | 'diagram' | 'code-diagram';
export interface MenuProps {
  activePane: ActivePane;
  setActivePane: (pane: ActivePane) => void;
}

export const Menu = ({ setActivePane, activePane }: MenuProps) => {
  return (
    <div className={styles.HiderPanel}>
      <div
        className={cx(styles.Hider, {
          active: activePane === 'diagram',
        })}
        onClick={() => setActivePane('diagram')}
        title="Diagram View"
      >
        <Icons.Eye size={16} />
      </div>
      <div
        className={cx(styles.Hider, {
          active: activePane === 'code-diagram',
        })}
        onClick={() => setActivePane('code-diagram')}
        title="Code and Diagram View"
      >
        <Icons.Code size={16} />
      </div>
      <div
        className={cx(styles.Hider, {
          active: activePane === 'code',
        })}
        onClick={() => setActivePane('code')}
        title="Code View"
      >
        <Icons.FullScreen size={16} />
      </div>
      <div
        className={cx(styles.Hider, { active: activePane === 'explorer-diagram' })}
        onClick={() => setActivePane('explorer-diagram')}
        title="Graph Explorer View"
      >
        <Icons.Layers size={16} />
      </div>
    </div>
  );
};
