import React, { useEffect, useState } from "react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getBookAction } from "../redux/action";
const Dashboard = () => {
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const { bookData, isError, isLoading } = useSelector((state) => state);
  console.log(bookData);

  const options = {
    indexAxis: "x",
  };

  const labels = ["5", "4", "2"];
  const [data, setData] = useState({
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80],
        borderWidth: 1,
      },
    ],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    fetchPart();
  }, [dataToDisplay]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const fetchPart = async () => {
    try {
      const dataset1 = [];
      const dataset2 = [];
      dispatch(getBookAction());

      setDataToDisplay(bookData);
      let c1 = 0;
      let c2 = 0;
      let c3 = 0;
      for (const cal of dataToDisplay) {
        if (cal.range == 4) {
          c2++;
        }
        if (cal.range == 5) {
          c1++;
        }
        if (cal.range == 2) {
          c3++;
        }

        // dataset2.push(cal?.range)
      }
      dataset1.push(c1, c2, c3);
      setData({
        labels: labels,
        datasets: [
          {
            label: "My First Dataset",
            data: dataset1,
            borderWidth: 1,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
          },
          // {
          //   label: "My First Dataset",
          //   data: dataset2,
          //   borderWidth: 1,
          // },
        ],
      });
    } catch (error) {}
  };

  // const data = {
  //   labels: labels,
  //   datasets: [{

  //     label: 'My First Dataset',
  //     data: [65, 59, 80],
  //     borderWidth: 1
  //   }]
  // };

  return (
    <>
      <Box>
        {bookData?.map((ele) => (
          <p key={ele.id}>
            {ele.name} {ele.range}{" "}
          </p>
        ))}
      </Box>
      <Bar data={data} options={options} />
    </>
  );
};

export default Dashboard;
