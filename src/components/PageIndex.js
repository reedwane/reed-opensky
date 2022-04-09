import { useDataContext } from "contexts/DataContext";

const PageIndex = ({ number }) => {
  const { setPageIndex } = useDataContext();
  let n = number / 20;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }

  const handleIndex = (n) => {
    setPageIndex(n);
  };

  return (
    <>
      {arr.map((num) => (
        <span className="page-index" key={num} onClick={() => handleIndex(num)}>
          {num}
        </span>
      ))}
    </>
  );
};

export default PageIndex;
