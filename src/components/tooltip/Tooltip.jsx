import React, { useState, useEffect } from "react";

import {useSelector} from 'react-redux';
import styles from './ToolTip.scss';
let tooltipTime;

function ToolTip() {
  const [showtip, setShowtip] = useState(false);
  const details = useSelector(state => state.tooltip);
  const text = details.text;
  const time = details.timeout;
  

  if (time && !showtip && !tooltipTime) {
    tooltipTime = setTimeout(() => {
      setShowtip(false);
      tooltipTime = null;
    }, parseInt(time, 10));
    setShowtip(true);
  }

  useEffect(() => {
    return () => (function() {
      if (tooltipTime) {
        clearTimeout(tooltipTime);
      }
    });
  });

  return showtip ? (
    <div className={styles["tooltip"]}>
      <div className={styles["text"]}>{text}</div>
    </div>
  ) : (
    ""
  );
}

export default ToolTip;
