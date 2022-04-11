import { icaoList } from "assets/data/icao";
import { useDataContext } from "contexts/DataContext";
import { useLoadingContext } from "contexts/LoadingContext";
import { useEffect } from "react";

const useFetch = () => {
  // let pass = "Ju2uhd@ZmTyKBvW",
  //   username = "reedwane";

  const { setLoading } = useLoadingContext();
  const { setDataList, setTime } = useDataContext();

  const multipleOfTen = (x) => {
    return Math.ceil(x / 10) * 10; //api only accepts multiple of 5 seconds
  };

  const t = Date.now();
  const e = multipleOfTen(Math.floor(t / 1000) - 45000); // to get the end unix time in seconds
  // const s = e - 3600; // the start period for the data being fetched

  let end = parseInt(e);
  // start = parseInt(s);

  // let start = 1517227200,
  //   end = 1517230800;

  // unable to work with this as the Endpoints were throwing multiple errors
  // and there was no list of country codes provided on the resource,
  // hence the ones i sourced for online were being erratic
  // there was also no specific endpoint to carry out the task and
  // implement it in the requested pattern. So after numerous attempts,
  // I improvised by generating random numbers to depict the number of arrivals and departures
  // and I'm leaving the logic i tried here as a proof of my efforts

  // const getNum = (status, icao) => {
  //   let url = `https://${username}:${pass}@opensky-network.org/api/flights/${status}?airport=${icao}&begin=${start}&end=${end}`;
  //   let num;
  //   try {
  //     axios.get(url).then((res) => {
  //       num = res.data.length; // number of objects denoting the number of arrivals/departures
  //       return num;
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //     return 0;
  //   }
  // };

  const getData = async (list) => {
    let dataArray = [];
    for (let icao of list) {
      try {
        setLoading(true);

        // The Api was giving so many issues while i tried to implement this logic and so many other approaches too

        // const [arriving, departing] = await Promise.all([
        //   getNum("arrival", icao),
        //   getNum("departure", icao),
        // ]);

        // I therefore improvised with this to have something showing up on the UI
        const [arriving, departing] = await Promise.all([
          Math.round(Math.random() * 60), //generating random numbers as placeholder since I'm having issues with the APIs
          Math.round(Math.random() * 60),
        ]);

        const data = {
          icao,
          arriving,
          departing,
        };
        dataArray.push(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    return dataArray;
  };

  useEffect(() => {
    (async () => {
      try {
        let time = Date(end).split(" ")[4].split(":"); // get the hour alone. e.g ['15', '26', '33']
        setTime(`${time[0]}:${time[1]}${time[0] > 12 ? "PM" : "AM"} CST`); //set the time in the context api

        setLoading(true);
        const data = await getData(icaoList);

        setDataList(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useFetch;
