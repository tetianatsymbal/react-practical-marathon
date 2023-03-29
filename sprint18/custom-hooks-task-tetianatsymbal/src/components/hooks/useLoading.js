import { useState, useEffect } from "react";

export const useLoading = (fetchMethod) => {
  const [entities, setEntities] = useState(null);

  useEffect(() => {
    setEntities(null);
    fetchMethod().then((res) => {
      setEntities(res);
      console.log("Users: ", res);
    });
  }, [fetchMethod]);
  return entities;
};
