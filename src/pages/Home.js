import AirportList from "components/AirportList";
import Loading from "components/Loading";
import { useDataContext } from "contexts/DataContext";
import { useLoadingContext } from "contexts/LoadingContext";
import useAuth from "hooks/useAuth";
import useFetch from "hooks/useFetch";
import { DashboardWrapper } from "styles/styledComponents/dashboardWrapper";

const Home = () => {
  const { time } = useDataContext();

  useAuth();
  useFetch();

  const { dataList } = useDataContext();
  const { isLoading } = useLoadingContext();

  return (
    <DashboardWrapper>
      <h3>Flight Details from Airports around the World</h3>
      <p>
        Displayed in the format: <br />
        Airport code | Time | Arriving | Departing
      </p>
      {isLoading && <Loading />}
      {dataList && (
        <>
          <AirportList dataList={dataList} time={time} />
        </>
      )}
    </DashboardWrapper>
  );
};

export default Home;
