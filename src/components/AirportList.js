import { useDataContext } from "contexts/DataContext";

const AirportList = ({ dataList }) => {
  const { time } = useDataContext();
  return (
    <>
      {dataList.map((data) => (
        <div className="airport" key={data.icao}>
          <span className="icao">{data.icao} | </span>
          <span className="time">{time} | </span>
          <span className="arriving">{data.arriving} | </span>
          <span className="departing">{data.departing}</span>
        </div>
      ))}
    </>
  );
};

export default AirportList;
