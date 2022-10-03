import React, { useState, useEffect } from "react";
import { BsFilterLeft, BsX } from "react-icons/bs";
import { Chart } from "react-google-charts";


import "./Dashboard.css";
import RevenueCard from "../../components/RevenueCard/RevenueCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();
  const [sales, setSales] = useState([])

  const adminToken = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!adminToken) {
      navigate("/logAdmin", { replace: true })
    }
  })

  const getSales = async () => {
    try {
      const res = await fetch("https://trdzo.herokuapp.com/getSales");

      const sales = await res.json();

      console.log(sales.sales);
      setSales(sales.sales);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSales();
  }, [])

  if (sales.length != 0) {

    const date = sales[0].time.split(" ")[0];
    date.split("").pop();
    const salesDate = date.slice(0, -1);
    // const d = salesDate.split("/").splice(0, 1, salesDate.split("/")[1]);
    const dateError = salesDate.split("/");

    const temp = dateError[0];
    const i2 = dateError.indexOf(dateError[1]);

    var index = dateError.indexOf(dateError[0]);

    if (index !== -1) {
      dateError[index] = dateError[1];
    }

    if (i2 !== -1) {
      dateError[i2] = temp;
    }

    const month = new Date(dateError.join("-"));
    console.log(month.getMonth());

  }

  var totalSales = 0

  for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i].price
  }

  const data = [
    ["Year", "Sales", "Expenses"],
    ["2018", 1000, 400],
    ["2019", 1000, 400],
    ["2020", 1170, 460],
    ["2021", 660, 1120],
    ["2022", 1030, 540],
  ];

  const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
    animation: {
      startup: true,
      easing: "out",
      duration: 550,
    },
  };

  return (
    <>
      <div className="revenue_container">
        <div className="revenue-card-holder">
          <RevenueCard title={"Yearly Sales"} amount="62000" />
          <RevenueCard title={"Monthly Sales"} amount="2000" />
          <RevenueCard title={"Daily Sales"} amount="700" />
          <RevenueCard title={"Total Sales"} amount={totalSales / 100} />
        </div>

        <div className="graph-area">
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>

        <h1 style={{ marginLeft: '5rem' }}>Purchase History</h1>

        <div className="recent_purchase">
          <table>
            <tr>
              <th>Course Name</th>
              <th>Customer Name</th>
              <th>Course Price</th>
            </tr>
            {sales.map((elem, index) => {
              return (
                <>
                  <tr>
                    <td>{elem.title}</td>
                    <td>{elem.userId}</td>
                    <td>{elem.price / 100}</td>
                  </tr>
                </>
              )
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;