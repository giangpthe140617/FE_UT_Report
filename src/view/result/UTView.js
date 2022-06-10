import { Table } from "antd";
import React from "react";
import "antd/dist/antd.css";
import styled from 'styled-components';

const Flexbox = styled.div`
  font-family: san-serif;
  display: flex;
  flex-direction: column;
`;

let source;
async function fetchModule() {
  const data = await fetch("api/log/log/all", {
    method: "get", // or 'PUT'
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return data;
  // waits until the request completes...
}
fetchModule().then((data) => {
  source = data;
});

const UTView = () => {
  const columns = [
    {
      title: "File Name",
      dataIndex: "name",
      key: "name",
      // filters: [
      //   { text: "SP", value: "SP" },
      //   { text: "name", value: "name" },
      //   { text: "Message", value: "Message" },
      // ],
      // onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
      title: "LOC",
      dataIndex: "loc",
      key: "lines",

    },
    {
      title: "Functions and Methods",
      dataIndex: "",
      key: "Functions",
    },
    { 
      title: "Classes and Traits", 
      dataIndex: "Classes", 
      key: "Classes" 
    },
  ];
  console.log(source);
  return (
    <Flexbox>
      <Table size="small" indentSize={0} columns={columns} dataSource={source} />
    </Flexbox>
  );
};

export default UTView;
