import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import CardActions from "@mui/material/CardActions";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Grid } from "@mui/material";

export default function ReportCard() {
  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
  const pieData = [
    {
      name: "Apple",
      value: 54.85,
    },
    {
      name: "Samsung",
      value: 47.91,
    },
    {
      name: "Redmi",
      value: 16.85,
    },
    {
      name: "One Plus",
      value: 16.14,
    },
    {
      name: "Others",
      value: 10.25,
    },
  ];
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };
  return (
    <Grid container spacing={1}>
      <Box
        spacing={2}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "18px",
        }}
      >
        <Grid>
          <Card container item spacing={3}>
            <CardHeader
              title="Critical Battery Events"
              style={{
                backgroundColor: "#4682B4",
                color: "#FFFFFF",
              }}
            />
            <CardContent>
              <PieChart width={300} height={250}>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  fill="#8884d8"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={CustomTooltip} />
                <Legend />
              </PieChart>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "50px",
                backgroundColor: "#00BFFF",
              }}
            >
              <div>
                <h4>Yesterday</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <h4>View Report</h4>
                <NavigateNextIcon />
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid>
          <Card container item spacing={3}>
            <CardHeader
              title="Critical Battery Events"
              style={{
                backgroundColor: "#4682B4",
                color: "#FFFFFF",
              }}
            />
            <CardContent>
              <PieChart width={300} height={250}>
                <Pie
                  data={pieData}
                  color="#000000"
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  fill="#8884d8"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={CustomTooltip} />
                <Legend />
              </PieChart>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "50px",
                backgroundColor: "#00BFFF",
              }}
            >
              <div>
                <h4>Yesterday</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <h4>View Report</h4>
                <NavigateNextIcon />
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid>
          <Card container item spacing={3}>
            <CardHeader
              title="Critical Battery Events"
              style={{
                backgroundColor: "#4682B4",
                color: "#FFFFFF",
              }}
            />
            <CardContent>
              <PieChart width={300} height={250}>
                <Pie
                  data={pieData}
                  color="#000000"
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  fill="#8884d8"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={CustomTooltip} />
                <Legend />
              </PieChart>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "50px",
                backgroundColor: "#00BFFF",
              }}
            >
              <div>
                <h4>Yesterday</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <h4>View Report</h4>
                <NavigateNextIcon />
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid>
          <Card container item spacing={3}>
            <CardHeader
              title="Critical Battery Events"
              style={{
                backgroundColor: "#4682B4",
                color: "#FFFFFF",
              }}
            />
            <CardContent>
              <PieChart width={300} height={250}>
                <Pie
                  data={pieData}
                  color="#000000"
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  fill="#8884d8"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={CustomTooltip} />
                <Legend />
              </PieChart>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "50px",
                backgroundColor: "#00BFFF",
              }}
            >
              <div>
                <h4>Yesterday</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <h4>View Report</h4>
                <NavigateNextIcon />
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid>
          <Card container item spacing={3}>
            <CardHeader
              title="Critical Battery Events"
              style={{
                backgroundColor: "#4682B4",
                color: "#FFFFFF",
              }}
            />
            <CardContent>
              <PieChart width={300} height={250}>
                <Pie
                  data={pieData}
                  color="#000000"
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  fill="#8884d8"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={CustomTooltip} />
                <Legend />
              </PieChart>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "50px",
                backgroundColor: "#00BFFF",
              }}
            >
              <div>
                <h4>Yesterday</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <h4>View Report</h4>
                <NavigateNextIcon />
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid>
          <Card container item spacing={3}>
            <CardHeader
              title="Critical Battery Events"
              style={{
                backgroundColor: "#4682B4",
                color: "#FFFFFF",
              }}
            />
            <CardContent>
              <PieChart width={300} height={250}>
                <Pie
                  data={pieData}
                  color="#000000"
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  fill="#8884d8"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={CustomTooltip} />
                <Legend />
              </PieChart>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "50px",
                backgroundColor: "#00BFFF",
              }}
            >
              <div>
                <h4>Yesterday</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <h4>View Report</h4>
                <NavigateNextIcon />
              </div>
            </CardActions>
          </Card>
        </Grid>
      </Box>
    </Grid>
  );
}
