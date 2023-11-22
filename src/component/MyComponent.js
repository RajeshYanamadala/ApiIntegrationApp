import React, { useState, useEffect } from "react";
import axios from "axios";
import PaginationComponent from "./PaginationComponent";
import BootstrapTable from "react-bootstrap-table-next";

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setData(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getData();
  }, []);

  const mockData = [
    {
      id: 1,
      firstName: "Terry",
      lastName: "Medhurst",
      maidenName: "Smitham",
      age: 50,
    },
  ];

  const columns = [
    {
      dataField: "postId",
      text: "PostID",
    },
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "body",
      text: "Body",
    },
  ];

  return (
    <div>
      <h1>Data from API:</h1>
      <BootstrapTable keyField="id" data={data} columns={columns} />
    </div>
  );
};

export default MyComponent;
