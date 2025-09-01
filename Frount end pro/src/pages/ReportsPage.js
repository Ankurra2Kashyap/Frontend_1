// src/pages/ReportsPage.js
import React from "react";
import Header from "../components/User/Header";
import Sidebar from "../components/Sidebar";
import Filters from "../components/User/Filters";
import ReportsTable from "../components/ReportsTable";
import reportsData from "../data/reportsData";

export default function ReportsPage() {
  return (
    <div>
      <Header />

      <div className="d-flex">
        <Sidebar /> 

        <div style={{ flex: 1, padding: "1rem" }}>
          <Filters />

          <div className="mt-3">
            <ReportsTable rows={reportsData} />
          </div>
        </div>
      </div>
    </div>
  );
}