import React, { useEffect, useState } from "react";
import { Api } from "./ApiData";
import Spinner from "./spinner";

export default function List(props) {
  const [loader, setloader] = useState(true);
  const lists = props.list;
  const setlist = props.setlist;
  useEffect(() => {
    setTimeout(async () => {
      await fetch(Api)
        .then((res) => res.json())
        .then((json) => {
          setlist(json);
          setloader(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000 / 2);
  }, []);
  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <table className="container-fluid">
          <tbody className="text-light">
            <tr className="row bg-primary fs-4">
              <th className="col-8">Email</th>
              <th className="col-4">UserName</th>
            </tr>
            {lists?.map((list, index) => {
              return (
                <tr className="row fs-4 text-start  " key={index}>
                  <td className=" container-fluid col-8 bg-info	 border px-3 example ">
                    <strong>{list.EmailAdd}</strong>
                  </td>
                  <td className=" container-fluid col-4 bg-info border">
                    <strong>{list.UserName}</strong>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
