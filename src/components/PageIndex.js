import { useDataContext } from "contexts/DataContext";
import { PageIndexWrapper } from "styles/styledComponents/pageIndexWrapper";

const PageIndex = ({ number }) => {
  const { setPageIndex } = useDataContext();
  let n = number / 20;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1); //page indexes array
  }

  const handleIndex = (n) => {
    setPageIndex(n);
  };

  return (
    <PageIndexWrapper>
      {arr.map((num) => (
        <span className="page-index" key={num} onClick={() => handleIndex(num)}>
          {num}
        </span>
      ))}
    </PageIndexWrapper>
  );
};

export default PageIndex;
