import { icaoList } from "assets/data/icao";
import { useDataContext } from "contexts/DataContext";
import { useLoadingContext } from "contexts/LoadingContext";
import { useEffect } from "react";

const useFetch = () => {
  // let pass = "Ju2uhd@ZmTyKBvW",
  //   username = "reedwane";

  const { setLoading } = useLoadingContext();
  const { pageIndex, setDataList, setTime } = useDataContext();

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

  // unable to work with this as the Endpoints were throwing errors
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

  let time = Date(end).split(" ")[4].split(":"); // get the hour alone. e.g ['15', '26', '33']
  setTime(`${time[0]}:${time[1]}${time[0] > 12 ? "PM" : "AM"} CST`); //set the time in the context api

  const getData = async (list) => {
    let dataArray = [];
    for (let icao of list) {
      try {
        setLoading(true);

        // The Api was giving so many issues while i tried to implement this logic and so many other ones
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
        const index = pageIndex * 20;

        setLoading(true);
        const list = icaoList.slice(index - 20, index);

        const data = await getData(list);

        setDataList(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [pageIndex]);
};

export default useFetch;
