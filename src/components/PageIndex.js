import { PageIndexWrapper } from "styles/styledComponents/pageIndexWrapper";

const PageIndex = ({ number, data, setData }) => {
  let n = number / 20;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1); //page indexes array
  }

  const handleIndex = (n) => {
    let num = n * 20; // the index of the last data entry to be sliced

    setData(data.slice(num - 20, num));
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
