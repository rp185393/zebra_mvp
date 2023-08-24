import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import CardActions from "@mui/material/CardActions";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import CustomLoader from "./CustomLoader";
function CustomPieChartCmp() {
    const COLORS = ["#AF19FF", "#FFBB28", "#8884d8", "#82ca9d", "#FF8042"];
    const [isDataRetrived, setIsDataRetrived] = useState(false);
    const [total, setTotal] = useState(0);
    const [deviceCounts, setDeviceCounts] = useState({});

    useEffect(() => {


        if (!isDataRetrived) {
            devicesData();
        }

    }, [isDataRetrived]);


    function devicesData() {


        let apiUrl = `https://api.zebra.com/v2/data/devices/batteries/analytics/visibility/level?offset=0&limit=1163`;
        const config = {
            headers: {
                'X-APIKey': 'fzzEAqmVsALrgmYvNQ7brG4G9GCNAtNU',
                'partnerName': 'PARTNER DEMO',
                'companyName': 'DEMO COMPANY 2',
                'startDatetime': '2023-08-03T00:00:00Z',
                'endDatetime': '2023-08-04T00:00:00Z'
            }
        };
        return axios.get(apiUrl, config).then(res => {
            setTotal(res.data.meta.total);
            const counts = {};
            res.data.data.forEach(item => {
                const deviceType = item.deviceType;
                if (counts[deviceType]) {
                    counts[deviceType]++;
                } else {
                    counts[deviceType] = 1;
                }
            });
            const formateedCount = Object.keys(counts).map(deviceType => ({
                name: deviceType,
                value: counts[deviceType]
            }))
            setDeviceCounts(formateedCount);
            setIsDataRetrived(true);



        }).catch(ex => {
            console.log(ex);
        })
    }

    return (
        <>



            <Card container item spacing={3}>
                <CardHeader
                    title={`Total devices ${total}`}
                    style={{
                        backgroundColor: "#4682B4",
                        color: "#FFFFFF",
                    }}
                />
                <CardContent className="Fixed-card-forData">
                    {
                        isDataRetrived ?

                            <PieChart width={300} height={250}>
                                <Pie
                                    data={deviceCounts}
                                    dataKey="value"
                                    nameKey="name"

                                >
                                    {

                                    }
                                    {


                                        deviceCounts.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                            />
                                        ))

                                    }
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                            :
                            <CustomLoader />
                    }



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
        </>
    )
}
export default CustomPieChartCmp;