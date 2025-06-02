// COdigo fonte da Data e Hora em tempo real!

import React, { useState, useEffect } from "react";

export default function DateTime() {
  const [time, setTime] = useState(new Date());

  // Atualiza o horário em tempo real
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getMonthName = (monthIndex) => {
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return months[monthIndex];
  };

  const getDayName = (dayIndex) => {
    const days = ["Dm", "Sg", "Tr", "Qa", "Qi", "Sx", "Sb"];
    return days[dayIndex];
  };

  const renderCalendar = () => {
    const currentMonth = time.getMonth();
    const currentYear = time.getFullYear();
    const currentDate = time.getDate();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const calendarDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(null); // Dias vazios antes do primeiro dia do mês
    }
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i); // Dias do mês
    }

    return (
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {["Dm", "Sg", "Tr", "Qa", "Qi", "Sx", "Sb"].map((day, index) => (
          <div key={index} className="font-bold">
            {day}
          </div>
        ))}
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`p-2 ${
              day === currentDate
                ? "text-red-500"
                : "text-gray-700"
            }`}
          >
            {day || ""}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6 bg-gray-900 text-white">
      {/* Relógio */}
      <div className="mb-6 p-4 bg-primary rounded-lg text-xl font-mono">
        {time.toLocaleTimeString("pt-BR")}
      </div>

      {/* Calendário */}
      <div className="p-4 bg-gray-200 text-black rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <button className="text-gray-600">{"<"}</button>
          <h2 className="text-lg font-semibold">
            {getMonthName(time.getMonth())}, {time.getFullYear()}
          </h2>
          <button className="text-gray-600">{">"}</button>
        </div>
        {renderCalendar()}
      </div>
    </div>
  );
}
