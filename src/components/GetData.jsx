import useFetch from "react-fetch-hook";

const GetData = (url) => {
  const { isLoading, error, data } = useFetch(url);
/*   const { isLoading, error, data } = useFetch(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  ); */

  const dataArr = [];
  data && data.map((dat) => dataArr.push(dat.sigla));
  dataArr.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));

  return (dataArr)
}

export default GetData