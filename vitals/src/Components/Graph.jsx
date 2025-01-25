import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import axios from "axios";

const Graph = ({ metric, device }) => {
  const [data, setData] = useState([]); // State for API data
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Replace this with your API URL that provides the department data
        const response = await axios.get(
          `https://apex.oracle.com/pls/apex/tusharapex1/dept_id/seq/`
        );
        
        if (response.data && response.data.items) {
          const apiData = response.data.items;
          const xData = apiData.map((item) => item.dname);  // Department names
          const yData = apiData.map((item) => item.deptno);  // Department numbers

          setData({ xData, yData });
        } else {
          setError("Invalid data format from API");
        }
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [metric, device]);

  const options = {
    title: {
      text: "Department Numbers by Name",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: data.xData, // Use department names from the fetched data
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data.yData, // Use department numbers from the fetched data
        type: "line",
        smooth: true,
        areaStyle: {}, // Adds area below the line
        lineStyle: {
          width: 2,
        },
      },
    ],
    grid: {
      left: "10%",
      right: "10%",
      bottom: "10%",
      containLabel: true,
    },
  };

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <ReactECharts
          option={options}
          style={{ height: "400px", width: "100%" }}
          notMerge={true}
          lazyUpdate={true}
        />
      )}
    </div>
  );
};

export default Graph;
