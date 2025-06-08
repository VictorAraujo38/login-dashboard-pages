import React, { useState } from "react";
import {
  Calendar,
  Users,
  FileText,
  Settings,
  LogOut,
  Plus,
  Search,
  MoreHorizontal,
  MoreVertical,
  LayoutGrid,
  CalendarDays,
  Power,
  User,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import logo from "../assets/images/logo.png";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [currentPage, setCurrentPage] = useState("eventos");
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    {
      id: 1,
      name: "Clube do Laço Coração Pantaneiro",
      participants: 10,
      status: "Ativo",
      date: "09 a 11 de Junho",
    },
    {
      id: 2,
      name: "Clube do Laço Coração Pantaneiro",
      participants: 10,
      status: "Ativo",
      date: "09 a 11 de Junho",
    },
  ];

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutGrid },
    { id: "eventos", label: "Eventos", icon: CalendarDays },
    { id: "equipes", label: "Equipes", icon: Users },
    { id: "inscricoes", label: "Inscrições", icon: FileText },
  ];

  const Sidebar = () => (
    <div className="w-64 bg-white border-r border-gray-100 h-full flex flex-col shadow-sm">
      <div className="flex items-center space-x-2 px-6 pt-6">
        <img src={logo} alt="logo" className="h-14 w-auto" />
      </div>

      {/* Menu */}
      <div className="flex-1 py-6">
        <div className="px-6 mb-4">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            MENU
          </span>
        </div>
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  currentPage === item.id
                    ? "text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                style={
                  currentPage === item.id ? { backgroundColor: "#CC6237" } : {}
                }
              >
                <Icon size={20} className="mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center mb-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mr-3"
            style={{ backgroundColor: "#CC6237" }}
          >
            <span className="text-white font-semibold text-lg">K</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">
              Kaique Steck
            </p>
            <p className="text-xs text-gray-500">Administrador</p>
          </div>
        </div>
        <div className="space-y-1">
          <button className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <User size={16} className="mr-2" />
            Alterar dados
          </button>
          <button
            onClick={logout}
            className="w-full flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Power size={16} className="mr-2" />
            Sair
          </button>
        </div>
      </div>
    </div>
  );

  const EventsContent = () => (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Bem vindo de volta,{" "}
              <strong className="text-gray-800">Kaique Steck</strong>
            </p>
            <h1 className="text-3xl font-bold" style={{ color: "#CC6237" }}>
              Todos eventos
            </h1>
          </div>
        </div>
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="flex items-center justify-end space-x-4 p-6 border-b border-gray-100" >
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Buscar eventos"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:border-transparent outline-none w-72 bg-gray-50"
              style={{ focusRingColor: "#CC6237" }}
            />
          </div>
          <button
            className="text-white px-6 py-3 rounded-full flex items-center transition-colors font-medium shadow-lg hover:opacity-90"
            style={{ backgroundColor: "#CC6237" }}
          >
            <Plus size={20} className="mr-2" />
            Inserir novo
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-100">
              <tr>
                <th className="px-8 py-5 text-left text-xs font-semibold text-orange-400 tracking-wider">
                  Nome do evento
                </th>
                <th className="px-8 py-5 text-left text-xs font-semibold text-orange-400 tracking-wider">
                  Total de equipes
                </th>
                <th className="px-8 py-5 text-left text-xs font-semibold text-orange-400 tracking-wider">
                  Status
                </th>
                <th className="px-8 py-5 text-left text-xs font-semibold text-orange-400 tracking-wider">
                  Data
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-50">
              {events.map((event) => (
                <tr
                  key={event.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">
                      {event.name}
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="text-sm text-gray-700 font-medium">
                      {event.participants}
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {event.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm text-gray-700 font-medium">
                    {event.date}
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-orange-700   p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-8 py-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 font-medium">
              Mostrando 1 a 2 de 2 resultados
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 font-medium rounded-full"
                style={{ backgroundColor: "#F5F5F5" }}
              >
                Anterior
              </button>
              <button
                className="px-4 py-2 text-sm text-white rounded-full font-medium"
                style={{ backgroundColor: "#CC6237" }}
              >
                1
              </button>
              <button
                className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 font-medium rounded-full"
                style={{ backgroundColor: "#F5F5F5" }}
              >
                2
              </button>
              <button
                className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 font-medium rounded-full"
                style={{ backgroundColor: "#F5F5F5" }}
              >
                3
              </button>
              <button
                className="px-4 py-2 text-sm text-white rounded-full font-medium transition-colors hover:opacity-90"
                style={{ backgroundColor: "#CC6237" }}
              >
                Próxima
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen flex bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <EventsContent />
      </div>
    </div>
  );
};

export default Dashboard;
