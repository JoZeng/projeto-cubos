import { useState, useCallback } from "react";

export default function useRefreshTrigger() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleUpdateData = useCallback(() => {
    setRefreshTrigger((prev) => {
      const next = prev + 1;
      console.log("handleUpdateData foi chamado, novo valor:", next);
      return next;
    });
  }, []);

  return { refreshTrigger, handleUpdateData };
}
