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

    window.scrollTo({
      //scroll to top
      top: 10,
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <PageIndexWrapper>
      <nav>
        {arr.map((num) => (
          <span
            className="page-index"
            key={num}
            onClick={() => handleIndex(num)}
          >
            {num}
          </span>
        ))}
      </nav>
    </PageIndexWrapper>
  );
};

export default PageIndex;
