import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import Navbar from "./navbar";
import ReportCard from "./cards";
import { useNavigate } from "react-router-dom";
import CustomPieChartCmp from "./CustomPieChartcmp";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

export default function Dashboard() {
  const navigate = useNavigate();

  const Showreport = () => {
    navigate("/dashboard/countryReport");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Navbar />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#2F4F4F",
          },
        }}
      >
        <Toolbar />
        <Box>
          <List>
            <ListItem
              style={{
                display: "block",
                alignItems: "initial",
              }}
            >
              <Divider />
              <ListItemButton
                style={{
                  "&:hover": {
                    background: "#4682B4",
                  },
                }}
              >
                <ListItemIcon
                  style={{
                    color: "#F5F5F5",
                  }}
                >
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText
                  style={{
                    color: "#F5F5F5",
                  }}
                >
                  Home
                </ListItemText>
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemIcon
                  style={{
                    color: "#F5F5F5",
                  }}
                >
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  style={{
                    color: "#F5F5F5",
                  }}
                >
                  Dashboard
                </ListItemText>
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={Showreport}>
                <ListItemIcon
                  style={{
                    color: "#F5F5F5",
                  }}
                >
                  <AssessmentIcon />
                </ListItemIcon>
                <ListItemText
                  style={{
                    color: "#F5F5F5",
                  }}
                >
                  Report
                </ListItemText>
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemIcon
                  style={{
                    color: "#F5F5F5",
                  }}
                >
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText
                  style={{
                    color: "#F5F5F5",
                  }}
                >
                  Administration
                </ListItemText>
              </ListItemButton>
              <Divider />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, ml: 6, mt: 3, p: 5 }}>
        <Toolbar />
        <Grid container spacing={2}>
          <Grid spacing={2}>
            <CustomPieChartCmp />
          </Grid>
        </Grid>

      </Box>
    </Box>
  );
}
