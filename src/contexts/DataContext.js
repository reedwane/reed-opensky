import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const useDataContext = () => {
  const context = useContext(DataContext);
  return context;
};

export const DataProvider = ({ children }) => {
  const [name, updateName] = useState("");
  const [dataList, updateList] = useState(null);
  const [pageIndex, updatePageIndex] = useState(1);
  const [time, updateTime] = useState("15:00 PM CST");

  const setName = (name) => {
    updateName(name);
  };

  const setDataList = (list) => {
    updateList(list);
  };

  const setPageIndex = (n) => {
    updatePageIndex(n);
  };

  const setTime = (t) => {
    updateTime(t);
  };

  const contexts = {
    name,
    setName,
    dataList,
    setDataList,
    pageIndex,
    setPageIndex,
    time,
    setTime,
  };

  return (
    <DataContext.Provider value={contexts}>{children}</DataContext.Provider>
  );
};
