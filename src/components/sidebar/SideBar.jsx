import { useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";
import Home from "../../assets/home.svg";
import Clients from "../../assets/clients.svg";
import Charges from "../../assets/charges.svg";
import HomeRed from "../../assets/homered.svg";
import ClientsRed from "../../assets/clientsred.svg";
import ChargedRed from "../../assets/chargesred.svg";

const SideBar = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomeActive = location.pathname === "/home";
  const isClientsActive = location.pathname === "/clientes";
  const isChargesActive = location.pathname === "/cobrancas";
  const isClientDetailsActive = /^\/clientes\/\d+$/.test(location.pathname);

  return (
    <div className="sidebar">
      <ul className="list-content">
        <li className={isHomeActive && "isActive"}>
          <button onClick={() => navigate("/home")}>
            <img src={isHomeActive ? HomeRed : Home} alt="home" />
            Home
          </button>
        </li>
        <li
          className={(isClientsActive || isClientDetailsActive) && "isActive"}
        >
          <button onClick={() => navigate("/clientes")}>
            <img
              src={
                isClientsActive || isClientDetailsActive ? ClientsRed : Clients
              }
              alt="clients"
            />
            Clientes
          </button>
        </li>
        <li className={isChargesActive && "isActive"}>
          <button onClick={() => navigate("/cobrancas")}>
            <img src={isChargesActive ? ChargedRed : Charges} alt="charges" />
            Cobranças
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
