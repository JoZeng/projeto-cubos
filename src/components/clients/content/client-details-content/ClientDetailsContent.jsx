import "./client-details-content.css";
import ClientDetailsData from "./client-details-data/ClientDetailsDatas";
import ClientDetailsCharge from "./client-details-charges/ClientDetailsCharge";

export default function ClientDetailsContent({
  handleModalClientsEdit,
  handleModalAddCharges,
}) {
  return (
    <div className="client-details">
      <ClientDetailsData handleModalClientsEdit={handleModalClientsEdit} />
      <ClientDetailsCharge handleModalAddCharges={handleModalAddCharges} />
    </div>
  );
}
