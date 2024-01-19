import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([
    {
      name: "first contact",
      phoneNumber: "123456789",
      email: "firstcontact@gmail.com",
    },
    {
      name: "second contact",
      phoneNumber: "987654321",
      email: "secondcontact@gmail.com",
    },
  ]);
  const [appointments, setAppointments] = useState([
    {
      name: "first appointment",
      contact: "first contact",
      date: "24-01-01",
      time: "16:00"
    },
    {
      name: "second appointment",
      contact: "second contact",
      date: "27-01-01",
      time: "14:00"
    },
  ]);

  function onContactAdd(name, phoneNumber, email) {
    const newContact = {
      name,
      phoneNumber,
      email,
    };

    setContacts((prev) => {
      return [
        ...prev,
        newContact,
      ];
    });
  };

  function onAppointmentAdd(name, contact, date, time) {
    const newAppointment = {
      name,
      contact,
      date,
      time,
    };

    setAppointments((prev) => {
      return [
        ...prev,
        newAppointment,
      ];
    });
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} onContactAdd={onContactAdd} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} onAppointmentAdd={onAppointmentAdd} /> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
