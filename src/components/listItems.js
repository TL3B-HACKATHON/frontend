import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PagesIcon from "@mui/icons-material/Pages";

import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <Link to="/dashboard/stats">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to="/dashboard/patients">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Patients" />
      </ListItemButton>
    </Link>
    <Link to="/dashboard/reports">
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      AI tools
    </ListSubheader>
    <Link to="/dashboard/ai">
      <ListItemButton>
        <ListItemIcon>
          <PagesIcon />
        </ListItemIcon>
        <ListItemText primary="Sympthoms Classifier" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
