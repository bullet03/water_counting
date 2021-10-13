import React, { FC, useEffect, useState } from "react";

export const Data: FC = () => {
  const [date, setDate] = useState<string>();
  useEffect(() => {
    setInterval(() => {
      const dateNow = new Date().toLocaleString("ru-RU", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      setDate(dateNow);
    }, 1000);
  }, [date]);

  return <div>{date}</div>;
};
