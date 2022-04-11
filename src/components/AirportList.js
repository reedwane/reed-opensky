import { icaoList } from "assets/data/icao";
import { useState } from "react";
import { AirportListWrapper } from "styles/styledComponents/airportListWrapper";
import PageIndex from "./PageIndex";

const AirportList = ({ dataList, time }) => {
  const [data, setData] = useState(dataList.slice(0, 20));

  const array = icaoList;
  return (
    <>
      <AirportListWrapper>
        {data.map((data) => (
          <div className="airport" key={data.icao}>
            <span className="icao">{data.icao} | </span>
            <span className="time">{time} | </span>
            <span className="arriving">{data.arriving} | </span>
            <span className="departing">{data.departing}</span>
          </div>
        ))}
      </AirportListWrapper>

      <PageIndex number={array.length} data={dataList} setData={setData} />
    </>
  );
};

export default AirportList;
