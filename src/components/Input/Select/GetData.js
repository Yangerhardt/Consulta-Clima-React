import useFetch from "react-fetch-hook";

const GetData = (url) => {
  const { isLoading, error, data } = useFetch(url);
  const dataArr = [];
  
  data && data.map((dat) => dataArr.push(dat.sigla));
  dataArr.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));

  return dataArr;
};

export default GetData;
