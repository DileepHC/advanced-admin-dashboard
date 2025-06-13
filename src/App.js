// src/App.js
import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import AppSidebar from "./scenes/global/Sidebar"; // Changed import name to AppSidebar
import Dashboard from "./scenes/dashboard";
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar'; // Import ProSidebarProvider

// Import other scene components
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import History from "./scenes/history";
import Settings from "./scenes/settings";
import BlockedCases from "./scenes/blockedCases";
import HelpCentre from "./scenes/helpCentre";
import Logout from "./scenes/logout";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider> {/* Wrap your app with ProSidebarProvider */}
          <div className="app">
            <AppSidebar /> {/* Use AppSidebar here */}
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/history" element={<History />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/blocked-cases" element={<BlockedCases />} />
                <Route path="/help-centre" element={<HelpCentre />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;