import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Chip from "@mui/material/Chip";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAuth } from "../hooks/useAuth";
import { v4 } from "uuid";

import { useParams } from "react-router-dom";

const MedicalProfile = () => {
  const { user } = useAuth();

  let { userId } = useParams();

  const allergies = ["dqsdqsd", "gssdfqsd"];
  const antecedents = [
    {
      date: "2022/12/05",
      id: v4(),
      professional: v4(),
    },
    {
      date: "2023/01/12",
      id: v4(),
      professional: v4(),
    },
  ];

  const exposures = [
    {
      doctorId: v4(),
      duration: "4 mois",
      type: "CHIHAJA",
      causes: ["ma3RT"],
    },
  ];

  const prescriptions = [
    {
      doctorId: v4(),
      date: "2021/06/21",
      medications: ["DOPLIPRANE"],
    },
    {
      doctorId: v4(),
      date: "2021/06/21",
      medications: ["DOPLIPRANE V2"],
    },
    {
      doctorId: v4(),
      date: "2021/06/21",
      medications: ["DOPLIPRANE V3", "DOPLIPRANE V1"],
    },
  ];

  const surgeries = [
    {
      doctorId: v4(),
      date: "2021/06/21",
      type: "L9LB",
      name: "3AMALIYA TCHIHAJA",
    },
  ];

  const symptoms = [
    {
      doctorId: v4(),
      date: "2021/06/21",
      symptoms: ["qsdqsd", "dsqdqsd", "qsdqsdqs"],
    },
  ];

  const vaccination = [
    {
      doctorId: v4(),
      dateOfAdministration: "2021/06/21",
      vaccineAdministratorId: v4(),
    },
  ];

  console.log(userId);

  return (
    <div>
      <h1>Profile Medical - </h1>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Allergies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {allergies.map((el) => (
            <Chip key="el" label={el} style={{ margin: "5px" }} />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Antecedents</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {antecedents.map((el) => {
            <Typography>id: {el.id}</Typography>;
            <Typography>date: {el.date}</Typography>;
            <Typography>professional: {el.professional}</Typography>;
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
};

export default MedicalProfile;
