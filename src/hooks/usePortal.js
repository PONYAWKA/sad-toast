import React, { useEffect, useState } from "react";

const PORTAL_ID = "toast-portal";

export const usePortal = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const div = document.createElement("div");
    div.id = PORTAL_ID;
    const body = document.getElementsByTagName("body");
    body[0].prepend(div);
    setLoaded(true);
    return () => body[0].removeChild(div);
  }, []);

  return { loaded, portalId: PORTAL_ID };
};
