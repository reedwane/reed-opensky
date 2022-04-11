import { icaoList } from "assets/data/icao";
import AirportList from "components/AirportList";
import Loading from "components/Loading";
import PageIndex from "components/PageIndex";
import { useDataContext } from "contexts/DataContext";
import { useLoadingContext } from "contexts/LoadingContext";
import useAuth from "hooks/useAuth";
import useFetch from "hooks/useFetch";

const Home = () => {
  const array = icaoList;

  useAuth();
  useFetch();

  const { dataList } = useDataContext();
  const { isLoading } = useLoadingContext();

  return (
    <>
      <h2>Flight Details from Airports around the World</h2>
      <p>
        Displayed in the format: <br />
        Airport code | Time | Arriving | Departing
      </p>
      {isLoading && <Loading />}
      {dataList && (
        <>
          <AirportList dataList={dataList} />
        </>
      )}

      <PageIndex number={array.length} />
    </>
  );
};

export default Home;
