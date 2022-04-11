import { useDataContext } from "contexts/DataContext";
import { AirportListWrapper } from "styles/styledComponents/airportListWrapper";

const AirportList = ({ dataList }) => {
  const { time } = useDataContext();
  return (
    <AirportListWrapper>
      {dataList.map((data) => (
        <div className="airport" key={data.icao}>
          <span className="icao">{data.icao} | </span>
          <span className="time">{time} | </span>
          <span className="arriving">{data.arriving} | </span>
          <span className="departing">{data.departing}</span>
        </div>
      ))}
    </AirportListWrapper>
  );
};

export default AirportList;
